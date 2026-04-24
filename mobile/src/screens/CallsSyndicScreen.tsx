import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";
import { DirectoryListRow } from "../components/common/DirectoryListRow";

interface CallsSyndicScreenProps {
  onGoBack: () => void;
  onOpenCallDetails?: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

interface CallEntry {
  name: string;
  unit: string;
  status: string;
  statusTone: "success" | "danger";
  avatarLetter: string;
  avatarTone: "soft" | "accent";
}

const doneCalls: CallEntry[] = [
  {
    name: "Roberta Alves",
    unit: "Apto 305 - Bloco C",
    status: "Concluidas",
    statusTone: "success",
    avatarLetter: "R",
    avatarTone: "soft",
  },
  {
    name: "Brenno Lacerda",
    unit: "Apto 211 - Bloco A",
    status: "Concluidas",
    statusTone: "success",
    avatarLetter: "B",
    avatarTone: "soft",
  },
];

const pendingCalls: CallEntry[] = [
  {
    name: "Milena Gomes",
    unit: "Apto 502 - Bloco D",
    status: "1 Chamada",
    statusTone: "danger",
    avatarLetter: "M",
    avatarTone: "accent",
  },
  {
    name: "Marcio Silva",
    unit: "Apto 308 - Bloco A",
    status: "3 Chamadas",
    statusTone: "danger",
    avatarLetter: "M",
    avatarTone: "accent",
  },
  {
    name: "Larissa Santos",
    unit: "Apto 603 - Bloco B",
    status: "5 Chamadas",
    statusTone: "danger",
    avatarLetter: "L",
    avatarTone: "accent",
  },
];

export function CallsSyndicScreen({
  onGoBack,
  onOpenCallDetails,
  onPressTab,
}: CallsSyndicScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Chamadas" onBack={onGoBack} />
      </View>

      <View style={styles.panel}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.filterLabel}>Filtrar:</Text>

          <TouchableOpacity style={styles.selectField}>
            <Text style={styles.selectPlaceholder}>Filtrar opcoes</Text>
            <Text style={styles.selectArrow}>v</Text>
          </TouchableOpacity>

          <Text style={[styles.sectionTitle, styles.sectionTitleDone]}>Chamadas concluidas:</Text>
          <View style={styles.sectionDivider} />
          {doneCalls.map((call) => (
            <DirectoryListRow
              key={`${call.name}-${call.unit}`}
              avatarLetter={call.avatarLetter}
              avatarTone={call.avatarTone}
              name={call.name}
              unit={call.unit}
              middleText={call.status}
              middleTone={call.statusTone}
              detailsLabel="Ver Detalhes"
              onPress={onOpenCallDetails}
            />
          ))}

          <Text style={[styles.sectionTitle, styles.sectionTitlePending]}>
            Chamadas pendentes:
          </Text>
          <View style={styles.sectionDivider} />
          {pendingCalls.map((call) => (
            <DirectoryListRow
              key={`${call.name}-${call.unit}`}
              avatarLetter={call.avatarLetter}
              avatarTone={call.avatarTone}
              name={call.name}
              unit={call.unit}
              middleText={call.status}
              middleTone={call.statusTone}
              detailsLabel="Ver Detalhes"
              onPress={onOpenCallDetails}
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
  sectionTitleDone: {
    color: BRAND_COLORS.success,
  },
  sectionTitlePending: {
    color: BRAND_COLORS.pending,
    marginTop: 24,
  },
  sectionDivider: {
    width: "75%",
    height: 1,
    backgroundColor: BRAND_COLORS.info,
    marginBottom: 10,
  },
});
