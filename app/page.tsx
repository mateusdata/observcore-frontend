import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Activity, Server, ShieldAlert, Zap } from "lucide-react"
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-lg sm:text-xl">
            <Activity className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>ObservCore</span>
          </div>
          <nav className="flex items-center gap-2 sm:gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">Entrar</Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="text-xs sm:text-sm">Criar Conta</Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Detecção de Anomalias em Tempo Real
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Monitore seus servidores com a precisão do Prometheus. O ObservCore antecipa falhas e garante a estabilidade da sua infraestrutura.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/register">
                  <Button size="lg" className="h-11 px-6 sm:px-8 w-full sm:w-auto">
                    Iniciar Monitoramento
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" className="h-11 px-6 sm:px-8 w-full sm:w-auto">
                    Acessar Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border">
                <div className="p-2 bg-primary rounded-full text-primary-foreground">
                  <Zap className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">Integração Prometheus</h2>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Conexão nativa com seus exporters para coleta métrica de alta performance e baixa latência.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border">
                <div className="p-2 bg-primary rounded-full text-primary-foreground">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">Alertas Inteligentes</h2>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Algoritmos avançados que filtram ruído e notificam apenas anomalias críticas no sistema.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border">
                <div className="p-2 bg-primary rounded-full text-primary-foreground">
                  <Server className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">Saúde dos Servidores</h2>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Painéis visuais detalhados de CPU, Memória e I/O para gestão proativa de recursos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          © 2024 ObservCore. Monitoramento e Observabilidade.
        </p>
      </footer>
    </div>
  )
}