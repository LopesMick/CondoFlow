import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { DirectoryListRow } from "../components/common/DirectoryListRow";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

interface ResidentListingScreenProps {
  onGoBack: () => void;
  onOpenResidentDetails?: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

const residents = [
  { name: "Roberta Alves", unit: "Apto 305 - Bloco C", avatar: "R" },
  { name: "Brenno Lacerda", unit: "Apto 211 - Bloco A", avatar: "B" },
  { name: "Milena Gomes", unit: "Apto 502 - Bloco D", avatar: "M" },
  { name: "Marcio Silva", unit: "Apto 308 - Bloco A", avatar: "M" },
  { name: "Larissa Santos", unit: "Apto 603 - Bloco B", avatar: "L" },
] as const;

export function ResidentListingScreen({
  onGoBack,
  onOpenResidentDetails,
  onPressTab,
}: ResidentListingScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Moradores" onBack={onGoBack} />
      </View>

      <View style={styles.panel}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.filterLabel}>Buscar Morador:</Text>
          <TouchableOpacity style={styles.selectField}>
            <Text style={styles.selectPlaceholder}>Selecionar morador</Text>
            <Text style={styles.selectArrow}>v</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Moradores Cadastrados:</Text>
          <View style={styles.sectionDivider} />

          {residents.map((resident) => (
            <DirectoryListRow
              key={`${resident.name}-${resident.unit}`}
              avatarLetter={resident.avatar}
              name={resident.name}
              unit={resident.unit}
              detailsLabel="Ver Detalhes"
              onPress={onOpenResidentDetails}
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
  sectionTitle: {
    color: BRAND_COLORS.text,
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
