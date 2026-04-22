import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

interface PackagesScreenProps {
  onGoBack: () => void;
  onOpenPackageConfirmation: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

interface PackageItem {
  id: string;
  status: string;
  statusTone: "success" | "pending";
  value: string;
  isAction?: boolean;
}

const marchItems: PackageItem[] = [
  {
    id: "mar-1",
    status: "A Retirar",
    statusTone: "pending",
    value: "Pendente Retirada",
    isAction: true,
  },
  {
    id: "mar-2",
    status: "Retirada!",
    statusTone: "success",
    value: "19/03/2026",
  },
  {
    id: "mar-3",
    status: "Retirada!",
    statusTone: "success",
    value: "02/03/2026",
  },
];

const februaryItems: PackageItem[] = [
  {
    id: "fev-1",
    status: "Retirada!",
    statusTone: "success",
    value: "27/02/2026",
  },
  {
    id: "fev-2",
    status: "Retirada!",
    statusTone: "success",
    value: "14/02/2026",
  },
  {
    id: "fev-3",
    status: "Retirada!",
    statusTone: "success",
    value: "02/02/2026",
  },
];

export function PackagesScreen({
  onGoBack,
  onOpenPackageConfirmation,
  onPressTab,
}: PackagesScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Minhas Encomendas" onBack={onGoBack} />
      </View>

      <View style={styles.panel}>
        <TouchableOpacity style={styles.calendarButton}>
          <Text style={styles.calendarIcon}>C</Text>
        </TouchableOpacity>

        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.monthTitle}>Março</Text>
          {marchItems.map((item) => (
            <PackageRow
              key={item.id}
              item={item}
              onPress={item.isAction ? onOpenPackageConfirmation : undefined}
            />
          ))}

          <Text style={styles.monthTitleSecondary}>Fevereiro</Text>
          {februaryItems.map((item) => (
            <PackageRow key={item.id} item={item} />
          ))}
        </ScrollView>

        <CondoBottomNav active="center" onPressTab={onPressTab} />
      </View>
    </View>
  );
}

function PackageRow({
  item,
  onPress,
}: {
  item: PackageItem;
  onPress?: () => void;
}) {
  const statusColor = item.statusTone === "success" ? BRAND_COLORS.success : BRAND_COLORS.pending;

  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.84} onPress={onPress}>
      <View style={styles.packageIcon}>
        <Text style={styles.packageIconText}>P</Text>
      </View>

      <Text style={[styles.packageStatus, { color: statusColor }]}>{item.status}</Text>

      <View style={styles.divider} />

      <Text style={[styles.packageValue, item.isAction && styles.packageValueLink]}>
        {item.value}
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
    paddingBottom: 10,
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
    top: 40,
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
    paddingTop: 40,
    paddingBottom: 10,
  },
  monthTitle: {
    color: BRAND_COLORS.text,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  monthTitleSecondary: {
    color: BRAND_COLORS.text,
    fontSize: 20,
    fontWeight: "600",
    marginTop: 22,
    marginBottom: 10,
  },
  row: {
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  packageIcon: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  packageIconText: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
  packageStatus: {
    width: 88,
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    width: 1,
    height: 48,
    backgroundColor: BRAND_COLORS.info,
    marginHorizontal: 14,
  },
  packageValue: {
    flex: 1,
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "600",
  },
  packageValueLink: {
    textDecorationLine: "underline",
  },
});
