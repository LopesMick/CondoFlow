import { MaintenanceRequest, MaintenanceSummary } from "../types/maintenance";
import { apiGet } from "./api";

const MOCK_MAINTENANCE_REQUESTS: MaintenanceRequest[] = [
  {
    id: "1",
    titulo: "Vazamento no corredor",
    descricao: "Infiltracao no teto do 2o andar, bloco A.",
    bloco: "A",
    unidade: "Corredor",
    solicitante: "Zeladoria",
    prioridade: "CRITICA",
    status: "EM_ANDAMENTO",
    criadoEm: "2026-03-11T09:30:00.000Z",
    previsaoConclusao: "2026-03-14T18:00:00.000Z",
  },
  {
    id: "2",
    titulo: "Elevador com ruido",
    descricao: "Barulho intermitente ao subir para o 8o andar.",
    bloco: "B",
    unidade: "Elevador 2",
    solicitante: "Sindico",
    prioridade: "ALTA",
    status: "EM_ANALISE",
    criadoEm: "2026-03-10T14:10:00.000Z",
  },
  {
    id: "3",
    titulo: "Iluminacao da garagem",
    descricao: "Tres lampadas queimadas na vaga de visitantes.",
    bloco: "Garagem",
    unidade: "Setor Visitantes",
    solicitante: "Morador 404",
    prioridade: "MEDIA",
    status: "ABERTA",
    criadoEm: "2026-03-09T19:20:00.000Z",
  },
  {
    id: "4",
    titulo: "Pintura finalizada da portaria",
    descricao: "Repintura concluida e liberada para uso.",
    bloco: "Portaria",
    unidade: "Entrada principal",
    solicitante: "Administracao",
    prioridade: "BAIXA",
    status: "CONCLUIDA",
    criadoEm: "2026-03-06T08:00:00.000Z",
  },
];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function listMaintenanceRequests(): Promise<MaintenanceRequest[]> {
  try {
    const response = await apiGet<MaintenanceRequest[]>("/manutencoes");
    return response;
  } catch {
    await sleep(350);
    return MOCK_MAINTENANCE_REQUESTS;
  }
}

export function buildMaintenanceSummary(
  requests: MaintenanceRequest[],
): MaintenanceSummary {
  const abertas = requests.filter((item) => item.status === "ABERTA").length;
  const emAndamento = requests.filter(
    (item) => item.status === "EM_ANDAMENTO" || item.status === "EM_ANALISE",
  ).length;
  const concluidas = requests.filter(
    (item) => item.status === "CONCLUIDA",
  ).length;
  const criticas = requests.filter(
    (item) => item.prioridade === "CRITICA",
  ).length;

  return {
    total: requests.length,
    abertas,
    emAndamento,
    concluidas,
    criticas,
  };
}
