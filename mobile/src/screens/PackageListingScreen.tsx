import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { DirectoryListRow } from "../components/common/DirectoryListRow";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

interface PackageListingScreenProps {
  onGoBack: () => void;
  onRegisterPackage: () => void;
  onOpenPackageDetails?: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

const packageEntries = [
  { name: "Roberta Alves", unit: "Apto 305 - Bloco C", amount: "3 Encomendas", avatar: "R" },
  { name: "Brenno Lacerda", unit: "Apto 211 - Bloco A", amount: "1 Encomendas", avatar: "B" },
  { name: "Milena Gomes", unit: "Apto 502 - Bloco D", amount: "5 Encomendas", avatar: "M" },
  { name: "Marcio Silva", unit: "Apto 308 - Bloco A", amount: "7 Encomendas", avatar: "M" },
  { name: "Larissa Santos", unit: "Apto 603 - Bloco B", amount: "2 Encomendas", avatar: "L" },
] as const;

export function PackageListingScreen({
  onGoBack,
  onRegisterPackage,
  onOpenPackageDetails,
  onPressTab,
}: PackageListingScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Encomendas" onBack={onGoBack} />
      </View>

      <View style={styles.panel}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.filterLabel}>Buscar Morador:</Text>
          <TouchableOpacity style={styles.selectField}>
            <Text style={styles.selectPlaceholder}>Selecionar morador</Text>
            <Text style={styles.selectArrow}>v</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton} onPress={onRegisterPackage}>
            <Text style={styles.primaryButtonText}>Registrar Nova Encomenda</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Encomendas Pendentes:</Text>
          <View style={styles.sectionDivider} />

          {packageEntries.map((entry) => (
            <DirectoryListRow
              key={`${entry.name}-${entry.unit}`}
              avatarLetter={entry.avatar}
              name={entry.name}
              unit={entry.unit}
              middleText={entry.amount}
              detailsLabel="Ver Detalhes"
              onPress={onOpenPackageDetails}
            />
          ))}
        </ScrollView>

        <CondoBottomNav active="home" onPressTab={onPressTab} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BRAND_COLORS.primaryLight,
  },
  headerArea: {
    paddingBottom: 10,
  },
  panel: {
    flex: 1,
    backgroundColor: BRAND_COLORS.backgroundMuted,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    overflow: "hidden",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 10,
  },
  filterLabel: {
    marginBottom: 8,
    marginLeft: 4,
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
  },
  selectField: {
    height: 44,
    borderRadius: 18,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingHorizontal: 16,
    marginBottom: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectPlaceholder: {
    color: BRAND_COLORS.mutedText,
    fontSize: 15,
  },
  selectArrow: {
    color: BRAND_COLORS.primaryLight,
    fontSize: 18,
  },
  primaryButton: {
    alignSelf: "center",
    minWidth: 228,
    height: 46,
    borderRadius: 23,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  primaryButtonText: {
    color: BRAND_COLORS.white,
    fontSize: 17,
    fontWeight: "600",
  },
  sectionTitle: {
    color: BRAND_COLORS.pending,
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 4,
  },
  sectionDivider: {
    width: "75%",
    height: 1,
    backgroundColor: BRAND_COLORS.info,
    marginBottom: 10,
  },
});
