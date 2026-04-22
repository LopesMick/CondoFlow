import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

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
  avatarColor: string;
}

const doneCalls: CallEntry[] = [
  {
    name: "Roberta Alves",
    unit: "Apto 305 - Bloco C",
    status: "Concluídas",
    statusTone: "success",
    avatarLetter: "R",
    avatarColor: BRAND_COLORS.surfaceSoft,
  },
  {
    name: "Brenno Lacerda",
    unit: "Apto 211 - Bloco A",
    status: "Concluídas",
    statusTone: "success",
    avatarLetter: "B",
    avatarColor: BRAND_COLORS.surfaceSoft,
  },
];

const pendingCalls: CallEntry[] = [
  {
    name: "Milena Gomes",
    unit: "Apto 502 - Bloco D",
    status: "1 Chamada",
    statusTone: "danger",
    avatarLetter: "M",
    avatarColor: BRAND_COLORS.accentSoft,
  },
  {
    name: "Marcio Silva",
    unit: "Apto 308 - Bloco A",
    status: "3 Chamadas",
    statusTone: "danger",
    avatarLetter: "M",
    avatarColor: BRAND_COLORS.accentSoft,
  },
  {
    name: "Larissa Santos",
    unit: "Apto 603 - Bloco B",
    status: "5 Chamadas",
    statusTone: "danger",
    avatarLetter: "L",
    avatarColor: BRAND_COLORS.accentSoft,
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
            <Text style={styles.selectPlaceholder}>Filtrar opções</Text>
            <Text style={styles.selectArrow}>v</Text>
          </TouchableOpacity>

          <Text style={[styles.sectionTitle, styles.sectionTitleDone]}>Chamadas Concluídas:</Text>
          <View style={styles.sectionDivider} />
          {doneCalls.map((call) => (
            <CallRow
              key={`${call.name}-${call.unit}`}
              call={call}
              onPress={onOpenCallDetails}
            />
          ))}

          <Text style={[styles.sectionTitle, styles.sectionTitlePending]}>
            Chamadas Pendentes:
          </Text>
          <View style={styles.sectionDivider} />
          {pendingCalls.map((call) => (
            <CallRow
              key={`${call.name}-${call.unit}`}
              call={call}
              onPress={onOpenCallDetails}
            />
          ))}
        </ScrollView>

        <CondoBottomNav active="home" onPressTab={onPressTab} />
      </View>
    </View>
  );
}

function CallRow({ call, onPress }: { call: CallEntry; onPress?: () => void }) {
  const statusColor = call.statusTone === "success" ? BRAND_COLORS.success : BRAND_COLORS.danger;

  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.86} onPress={onPress}>
      <View style={[styles.avatar, { backgroundColor: call.avatarColor }]}>
        <Text style={styles.avatarText}>{call.avatarLetter}</Text>
      </View>

      <View style={styles.personBlock}>
        <Text style={styles.personName}>{call.name}</Text>
        <Text style={styles.personMeta}>{call.unit}</Text>
      </View>

      <View style={styles.divider} />

      <Text style={[styles.status, { color: statusColor }]}>{call.status}</Text>

      <View style={styles.divider} />

      <Text style={styles.details}>Ver Detalhes {">"}</Text>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 68,
    marginBottom: 6,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarText: {
    color: BRAND_COLORS.primary,
    fontSize: 18,
    fontWeight: "700",
  },
  personBlock: {
    width: 122,
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
    width: 78,
    fontSize: 14,
    fontWeight: "700",
  },
  details: {
    flex: 1,
    color: BRAND_COLORS.info,
    fontSize: 13,
    textAlign: "right",
  },
});
