import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BRANDING } from "../assets/branding";
import { KpiCard } from "../components/maintenance/KpiCard";
import { MaintenanceRequestCard } from "../components/maintenance/MaintenanceRequestCard";
import { useMaintenance } from "../context/MaintenanceContext";

interface DashboardScreenProps {
  onOpenList: () => void;
}

export function DashboardScreen({ onOpenList }: DashboardScreenProps) {
  const { requests, summary, isLoading, error } = useMaintenance();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Image source={BRANDING.wordmark} style={styles.brand} resizeMode="contain" />
      <Text style={styles.subtitle}>Gestao de manutencao condominial</Text>

      <View style={styles.kpiGrid}>
        <KpiCard label="Total" value={summary.total} tone="neutral" />
        <KpiCard label="Abertas" value={summary.abertas} tone="info" />
        <KpiCard label="Em andamento" value={summary.emAndamento} tone="warning" />
        <KpiCard label="Concluidas" value={summary.concluidas} tone="success" />
      </View>

      <TouchableOpacity style={styles.mainButton} onPress={onOpenList}>
        <Text style={styles.mainButtonText}>Ver todas as ordens</Text>
      </TouchableOpacity>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Chamados recentes</Text>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {isLoading ? (
        <ActivityIndicator size="large" color="#1d4ed8" />
      ) : (
        requests
          .slice(0, 3)
          .map((item) => <MaintenanceRequestCard key={item.id} request={item} />)
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 30,
  },
  brand: {
    width: 166,
    height: 52,
  },
  subtitle: {
    marginTop: 4,
    marginBottom: 16,
    fontSize: 14,
    color: "#475467",
  },
  kpiGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  mainButton: {
    backgroundColor: "#1d4ed8",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    marginVertical: 12,
  },
  mainButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 14,
  },
  sectionHeader: {
    marginTop: 4,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#101828",
  },
  errorText: {
    color: "#b42318",
    marginBottom: 8,
  },
});
