import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

interface FinanceSyndicScreenProps {
  onGoBack: () => void;
  onOpenDefaultResidentDetails?: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

interface ResidentStatusItem {
  name: string;
  unit: string;
  status: string;
  tone: "success" | "danger";
  avatarLetter: string;
}

const compliantResidents: ResidentStatusItem[] = [
  {
    name: "Roberta Alves",
    unit: "Apto 305 - Bloco C",
    status: "Sem Pendências",
    tone: "success",
    avatarLetter: "R",
  },
  {
    name: "Brenno Lacerda",
    unit: "Apto 211 - Bloco A",
    status: "Sem Pendências",
    tone: "success",
    avatarLetter: "B",
  },
];

const defaultResidents: ResidentStatusItem[] = [
  {
    name: "Milena Gomes",
    unit: "Apto 502 - Bloco D",
    status: "1 Pendência",
    tone: "danger",
    avatarLetter: "M",
  },
  {
    name: "Marcio Silva",
    unit: "Apto 308 - Bloco A",
    status: "3 Pendências",
    tone: "danger",
    avatarLetter: "M",
  },
  {
    name: "Larissa Santos",
    unit: "Apto 603 - Bloco B",
    status: "5 Pendências",
    tone: "danger",
    avatarLetter: "L",
  },
];

export function FinanceSyndicScreen({
  onGoBack,
  onOpenDefaultResidentDetails,
  onPressTab,
}: FinanceSyndicScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Financeiro - Síndico" onBack={onGoBack} />
      </View>

      <View style={styles.panel}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.filterLabel}>Filtrar:</Text>
          <TouchableOpacity style={styles.selectField}>
            <Text style={styles.selectPlaceholder}>Filtrar opções</Text>
            <Text style={styles.selectArrow}>v</Text>
          </TouchableOpacity>

          <Text style={[styles.sectionTitle, styles.sectionTitleOk]}>Moradores Adimplentes:</Text>
          <View style={styles.sectionDivider} />
          {compliantResidents.map((item) => (
            <FinanceResidentRow key={`${item.name}-${item.unit}`} item={item} />
          ))}

          <Text style={[styles.sectionTitle, styles.sectionTitleLate]}>
            Moradores Inadimplentes:
          </Text>
          <View style={styles.sectionDivider} />
          {defaultResidents.map((item) => (
            <FinanceResidentRow
              key={`${item.name}-${item.unit}`}
              item={item}
              showDetails
              onPress={onOpenDefaultResidentDetails}
            />
          ))}
        </ScrollView>

        <CondoBottomNav active="home" onPressTab={onPressTab} />
      </View>
    </View>
  );
}

function FinanceResidentRow({
  item,
  showDetails = false,
  onPress,
}: {
  item: ResidentStatusItem;
  showDetails?: boolean;
  onPress?: () => void;
}) {
  const toneColor = item.tone === "success" ? BRAND_COLORS.success : BRAND_COLORS.danger;

  return (
    <TouchableOpacity
      style={styles.row}
      activeOpacity={0.86}
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole={onPress ? "button" : undefined}
      accessibilityLabel={`${item.name}, ${item.unit}, ${item.status}`}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.avatarLetter}</Text>
      </View>

      <View style={styles.personBlock}>
        <Text style={styles.personName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.personMeta} numberOfLines={1}>
          {item.unit}
        </Text>
      </View>

      <View style={styles.divider} />
      <Text style={[styles.status, { color: toneColor }]} numberOfLines={2}>
        {item.status}
      </Text>

      {showDetails ? (
        <>
          <View style={styles.divider} />
          <Text style={styles.details} numberOfLines={2}>
            Ver Detalhes {">"}
          </Text>
        </>
      ) : null}
    </TouchableOpacity>
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
    fontSize: 15,
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
    fontSize: 18,
    marginBottom: 4,
    fontWeight: "500",
  },
  sectionTitleOk: {
    color: BRAND_COLORS.success,
  },
  sectionTitleLate: {
    color: BRAND_COLORS.pending,
    marginTop: 24,
  },
  sectionDivider: {
    width: "75%",
    height: 1,
    backgroundColor: BRAND_COLORS.info,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 68,
    marginBottom: 6,
    paddingVertical: 4,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: BRAND_COLORS.surfaceSoft,
  },
  avatarText: {
    color: BRAND_COLORS.primary,
    fontSize: 18,
    fontWeight: "700",
  },
  personBlock: {
    flex: 1.2,
    minWidth: 0,
    marginRight: 8,
  },
  personName: {
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
  },
  personMeta: {
    marginTop: 2,
    color: BRAND_COLORS.info,
    fontSize: 14,
    fontWeight: "600",
  },
  divider: {
    width: 1,
    height: 46,
    backgroundColor: BRAND_COLORS.info,
    marginHorizontal: 8,
  },
  status: {
    flex: 0.9,
    minWidth: 80,
    fontSize: 14,
    fontWeight: "700",
  },
  details: {
    flex: 0.95,
    minWidth: 86,
    color: BRAND_COLORS.info,
    fontSize: 13,
    lineHeight: 17,
    textAlign: "right",
  },
});
