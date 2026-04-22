import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

interface FinanceResidentScreenProps {
  onGoBack: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

interface BillItem {
  id: string;
  month: string;
  date: string;
  status: string;
  statusTone: "pending" | "danger" | "success";
  amount: string;
  withArrow?: boolean;
}

const billItems: BillItem[] = [
  {
    id: "mar",
    month: "Marco",
    date: "Pendente",
    status: "A Vencer",
    statusTone: "pending",
    amount: "R$250,00",
    withArrow: true,
  },
  {
    id: "fev",
    month: "Fevereiro",
    date: "12/02/2026",
    status: "Vencida",
    statusTone: "danger",
    amount: "R$250,00",
  },
  {
    id: "jan",
    month: "Janeiro",
    date: "09/01/2026",
    status: "Paga",
    statusTone: "success",
    amount: "R$250,00",
  },
  {
    id: "dez",
    month: "Dezembro /25",
    date: "04/12/2025",
    status: "Paga",
    statusTone: "success",
    amount: "R$250,00",
  },
];

export function FinanceResidentScreen({ onGoBack, onPressTab }: FinanceResidentScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Financeiro" onBack={onGoBack} />

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryIcon}>{"^"}</Text>
            <Text style={styles.summaryLabelPositive}>Pagas</Text>
            <Text style={styles.summaryValuePositive}>R$500,00</Text>
          </View>

          <View style={styles.summaryDivider} />

          <View style={styles.summaryCard}>
            <Text style={styles.summaryIcon}>{"v"}</Text>
            <Text style={styles.summaryLabelNegative}>Vencidas</Text>
            <Text style={styles.summaryValueNegative}>R$250,00</Text>
          </View>
        </View>
      </View>

      <View style={styles.panel}>
        <TouchableOpacity style={styles.calendarButton}>
          <Text style={styles.calendarIcon}>C</Text>
        </TouchableOpacity>

        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          {billItems.map((item) => (
            <View key={item.id}>
              <Text style={styles.monthLabel}>{item.month}</Text>
              <BillRow item={item} />
            </View>
          ))}
        </ScrollView>

        <CondoBottomNav active="center" onPressTab={onPressTab} />
      </View>
    </View>
  );
}

function BillRow({ item }: { item: BillItem }) {
  const statusColor =
    item.statusTone === "pending"
      ? BRAND_COLORS.pending
      : item.statusTone === "danger"
        ? BRAND_COLORS.danger
        : BRAND_COLORS.success;

  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.86}>
      <View style={styles.billIcon}>
        <Text style={styles.billIconText}>$</Text>
      </View>

      <View style={styles.billMain}>
        <Text style={styles.billTitle}>Condominio</Text>
        <Text style={styles.billDate}>{item.date}</Text>
      </View>

      <View style={styles.divider} />
      <Text style={[styles.billStatus, { color: statusColor }]}>{item.status}</Text>
      <View style={styles.divider} />

      <Text style={styles.billAmount}>
        {item.amount} {item.withArrow ? ">" : ""}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BRAND_COLORS.primaryLight,
  },
  headerArea: {
    paddingBottom: 14,
  },
  summaryRow: {
    marginTop: 6,
    marginHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  summaryCard: {
    flex: 1,
    backgroundColor: BRAND_COLORS.info,
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 12,
  },
  summaryDivider: {
    width: 1,
    height: 70,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    marginHorizontal: 14,
  },
  summaryIcon: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    lineHeight: 18,
  },
  summaryLabelPositive: {
    marginTop: 6,
    color: BRAND_COLORS.successBright,
    fontSize: 16,
    fontWeight: "600",
  },
  summaryValuePositive: {
    marginTop: 2,
    color: BRAND_COLORS.successBright,
    fontSize: 19,
    fontWeight: "700",
  },
  summaryLabelNegative: {
    marginTop: 6,
    color: BRAND_COLORS.danger,
    fontSize: 16,
    fontWeight: "600",
  },
  summaryValueNegative: {
    marginTop: 2,
    color: BRAND_COLORS.danger,
    fontSize: 19,
    fontWeight: "700",
  },
  panel: {
    flex: 1,
    backgroundColor: BRAND_COLORS.backgroundMuted,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    overflow: "hidden",
  },
  calendarButton: {
    position: "absolute",
    top: 42,
    right: 26,
    zIndex: 2,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    borderWidth: 1,
    borderColor: BRAND_COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },
  calendarIcon: {
    color: BRAND_COLORS.primaryDark,
    fontSize: 14,
    fontWeight: "700",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 38,
    paddingBottom: 10,
  },
  monthLabel: {
    color: BRAND_COLORS.text,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  row: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  billIcon: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  billIconText: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
  billMain: {
    width: 112,
  },
  billTitle: {
    color: BRAND_COLORS.text,
    fontSize: 17,
    fontWeight: "600",
  },
  billDate: {
    marginTop: 2,
    color: BRAND_COLORS.info,
    fontSize: 14,
    fontWeight: "600",
  },
  divider: {
    width: 1,
    height: 46,
    backgroundColor: BRAND_COLORS.info,
    marginHorizontal: 14,
  },
  billStatus: {
    width: 74,
    fontSize: 14,
    fontWeight: "500",
  },
  billAmount: {
    flex: 1,
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "600",
  },
});
