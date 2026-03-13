export type MaintenanceStatus =
  | "ABERTA"
  | "EM_ANALISE"
  | "EM_ANDAMENTO"
  | "CONCLUIDA";

export type MaintenancePriority = "BAIXA" | "MEDIA" | "ALTA" | "CRITICA";

export interface MaintenanceRequest {
  id: string;
  titulo: string;
  descricao: string;
  bloco: string;
  unidade: string;
  solicitante: string;
  prioridade: MaintenancePriority;
  status: MaintenanceStatus;
  criadoEm: string;
  previsaoConclusao?: string;
}

export interface MaintenanceSummary {
  total: number;
  abertas: number;
  emAndamento: number;
  concluidas: number;
  criticas: number;
}
