import { StyleSheet, Text, View } from "react-native";
import {
  MaintenancePriority,
  MaintenanceRequest,
  MaintenanceStatus,
} from "../../types/maintenance";
import { SectionCard } from "../common/SectionCard";

interface MaintenanceRequestCardProps {
  request: MaintenanceRequest;
}

const statusLabel: Record<MaintenanceStatus, string> = {
  ABERTA: "Aberta",
  EM_ANALISE: "Em analise",
  EM_ANDAMENTO: "Em andamento",
  CONCLUIDA: "Concluida",
};

const statusColor: Record<MaintenanceStatus, string> = {
  ABERTA: "#1d4ed8",
  EM_ANALISE: "#7c3aed",
  EM_ANDAMENTO: "#b45309",
  CONCLUIDA: "#067647",
};

const priorityLabel: Record<MaintenancePriority, string> = {
  BAIXA: "Baixa",
  MEDIA: "Media",
  ALTA: "Alta",
  CRITICA: "Critica",
};

export function MaintenanceRequestCard({ request }: MaintenanceRequestCardProps) {
  const createdDate = new Date(request.criadoEm).toLocaleDateString("pt-BR");

  return (
    <SectionCard>
      <View style={styles.rowBetween}>
        <Text style={styles.title}>{request.titulo}</Text>
        <Text style={[styles.status, { color: statusColor[request.status] }]}>
          {statusLabel[request.status]}
        </Text>
      </View>

      <Text style={styles.description}>{request.descricao}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.metaText}>
          {request.bloco} | {request.unidade}
        </Text>
        <Text style={styles.metaText}>Prioridade: {priorityLabel[request.prioridade]}</Text>
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.metaText}>Solicitante: {request.solicitante}</Text>
        <Text style={styles.metaText}>Criado em: {createdDate}</Text>
      </View>
    </SectionCard>
  );
}

const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: "#101828",
  },
  status: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  description: {
    marginTop: 8,
    color: "#475467",
    fontSize: 14,
    lineHeight: 20,
  },
  metaRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  metaText: {
    flex: 1,
    color: "#667085",
    fontSize: 12,
  },
});
