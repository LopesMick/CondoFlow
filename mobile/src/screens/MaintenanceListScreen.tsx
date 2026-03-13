import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BRANDING } from "../assets/branding";
import { MaintenanceRequestCard } from "../components/maintenance/MaintenanceRequestCard";
import { useMaintenance } from "../context/MaintenanceContext";
import { MaintenanceRequest } from "../types/maintenance";

interface MaintenanceListScreenProps {
  onGoBack: () => void;
}

export function MaintenanceListScreen({ onGoBack }: MaintenanceListScreenProps) {
  const { requests, isLoading, refresh, error } = useMaintenance();

  const renderItem = ({ item }: { item: MaintenanceRequest }) => {
    return <MaintenanceRequestCard request={item} />;
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onGoBack}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <View style={styles.titleRow}>
          <Image source={BRANDING.shield} style={styles.headerLogo} resizeMode="contain" />
          <Text style={styles.title}>Ordens de manutencao</Text>
        </View>
        <TouchableOpacity onPress={refresh}>
          <Text style={styles.refreshText}>Atualizar</Text>
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {isLoading && requests.length === 0 ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#1d4ed8" />
        </View>
      ) : (
        <FlatList
          data={requests}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          refreshing={isLoading}
          onRefresh={refresh}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhuma ordem encontrada.</Text>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#d9dde3",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#101828",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  headerLogo: {
    width: 20,
    height: 22,
  },
  backText: {
    color: "#1d4ed8",
    fontSize: 14,
    fontWeight: "600",
  },
  refreshText: {
    color: "#1d4ed8",
    fontSize: 14,
    fontWeight: "600",
  },
  errorText: {
    color: "#b42318",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 30,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 24,
    color: "#667085",
  },
});
