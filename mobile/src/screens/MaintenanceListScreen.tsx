import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BRAND_COLORS, BRANDING } from "../assets/branding";
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
          <ActivityIndicator size="large" color={BRAND_COLORS.info} />
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
    borderBottomColor: BRAND_COLORS.border,
    backgroundColor: BRAND_COLORS.surface,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: BRAND_COLORS.textStrong,
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
    color: BRAND_COLORS.info,
    fontSize: 14,
    fontWeight: "600",
  },
  refreshText: {
    color: BRAND_COLORS.info,
    fontSize: 14,
    fontWeight: "600",
  },
  errorText: {
    color: BRAND_COLORS.danger,
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
    color: BRAND_COLORS.textSubtle,
  },
});
