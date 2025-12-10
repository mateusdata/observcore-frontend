"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { api } from "@/lib/api"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    loadUser()
  }, [])

  async function loadUser() {
    try {
      const token = Cookies.get("access_token")
      
      if (!token) {
        setLoading(false)
        return
      }

      const response = await api.get("/users/me")
      setUser(response.data)
    } catch (error: any) {
      console.error("Erro ao carregar usuário:", error)
      if (error.response?.status === 401) {
        Cookies.remove("access_token")
        Cookies.remove("refresh_token")
        setUser(null)
      }
    } finally {
      setLoading(false)
    }
  }

  async function login(email: string, password: string) {
    try {
      const response = await api.post("/auth/login", { email, password })
      const data = response.data
      
      const token = data.token
      const expiresIn = data.expiresIn

      const expiresInDays = (expiresIn * 1000 - Date.now()) / (1000 * 60 * 60 * 24)

      Cookies.set("access_token", token, { expires: expiresInDays })
      Cookies.set("refresh_token", token, { expires: expiresInDays })

      const userResponse = await api.get("/users/me")
      setUser(userResponse.data)

      router.push("/dashboard")
    } catch (error: any) {
      console.error("Erro ao fazer login:", error)
      if (error.response?.status === 401) {
        Cookies.remove("access_token")
        Cookies.remove("refresh_token")
        setUser(null)
      }
      throw error
    }
  }

  async function register(name: string, email: string, password: string) {
    try {
      await api.post("/users", { name, email, password })
      await login(email, password)
    } catch (error) {
      console.error("Erro ao criar conta:", error)
      throw error
    }
  }

  async function logout() {
    Cookies.remove("access_token")
    Cookies.remove("refresh_token")
    setUser(null)
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  }
  return context
}
