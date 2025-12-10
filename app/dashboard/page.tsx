import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Server, Cpu, AlertCircle } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Monitoramento</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Servidores Ativos
            </CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12/12</div>
            <p className="text-xs text-muted-foreground">
              100% de disponibilidade
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Uso Médio de CPU
            </CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42%</div>
            <p className="text-xs text-muted-foreground">
              -4% desde a última hora
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Latência Média
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24ms</div>
            <p className="text-xs text-muted-foreground">
              Estável nas últimas 24h
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Anomalias Detectadas
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">2</div>
            <p className="text-xs text-muted-foreground">
              Requer atenção imediata
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Carga do Sistema (Prometheus)</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] flex items-center justify-center rounded border border-dashed bg-muted/50 text-muted-foreground">
              Visualização Gráfica de Métricas
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Últimos Alertas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 md:space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-9 w-9 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center border shrink-0">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <div className="ml-4 space-y-1 flex-1 min-w-0">
                  <p className="text-sm font-medium leading-none truncate">High Memory Usage</p>
                  <p className="text-sm text-muted-foreground truncate">
                    Server-04 (Production)
                  </p>
                </div>
                <div className="ml-auto font-medium text-red-600 text-xs sm:text-sm shrink-0">Crítico</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-9 w-9 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center border shrink-0">
                  <Activity className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="ml-4 space-y-1 flex-1 min-w-0">
                  <p className="text-sm font-medium leading-none truncate">Latency Spike</p>
                  <p className="text-sm text-muted-foreground truncate">
                    API Gateway
                  </p>
                </div>
                <div className="ml-auto font-medium text-yellow-600 text-xs sm:text-sm shrink-0">Aviso</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-9 w-9 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center border shrink-0">
                  <Server className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4 space-y-1 flex-1 min-w-0">
                  <p className="text-sm font-medium leading-none truncate">New Node Added</p>
                  <p className="text-sm text-muted-foreground truncate">
                    Cluster-Alpha
                  </p>
                </div>
                <div className="ml-auto font-medium text-blue-600 text-xs sm:text-sm shrink-0">Info</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}