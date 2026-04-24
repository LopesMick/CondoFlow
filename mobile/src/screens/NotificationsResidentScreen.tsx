import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

interface NotificationsResidentScreenProps {
  onGoBack: () => void;
  onOpenNewNotice: () => void;
  onOpenReservationConfirm: () => void;
  onOpenDebtDetail: () => void;
  onOpenCallSyndic: () => void;
  onOpenCallDetail: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

interface NotificationItem {
  key: string;
  title: string;
  description: string;
  timeLabel: string;
  icon: string;
  onPress: () => void;
}

export function NotificationsResidentScreen({
  onGoBack,
  onOpenNewNotice,
  onOpenReservationConfirm,
  onOpenDebtDetail,
  onOpenCallSyndic,
  onOpenCallDetail,
  onPressTab,
}: NotificationsResidentScreenProps) {
  const todayItems: NotificationItem[] = [
    {
      key: "newNotice",
      title: "Novo Comunicado!",
      description: "A administração publicou um novo aviso no mural.",
      timeLabel: "17:00 - 13 de Março",
      icon: "B",
      onPress: onOpenNewNotice,
    },
    {
      key: "reservation",
      title: "Reserva Confirmada!",
      description: "Sua reserva do salão de festas foi confirmada.",
      timeLabel: "15:00 - 13 de Março",
      icon: "R",
      onPress: onOpenReservationConfirm,
    },
  ];

  const yesterdayItems: NotificationItem[] = [
    {
      key: "debt",
      title: "Boleto Disponível!",
      description: "A taxa de condomínio de março já está disponível.",
      timeLabel: "17:00 - 12 de Março",
      icon: "$",
      onPress: onOpenDebtDetail,
    },
    {
      key: "maintenance",
      title: "Manutenção Programada!",
      description: "Haverá manutenção no elevador amanhã das 09h às 12h.",
      timeLabel: "17:00 - 12 de Março",
      icon: "!",
      onPress: onOpenCallSyndic,
    },
  ];

  const weekItems: NotificationItem[] = [
    {
      key: "openCall",
      title: "Chamado Aberto!",
      description: "Seu pedido de manutenção foi registrado.",
      timeLabel: "17:00 - 08 de Março",
      icon: ">",
      onPress: onOpenCallDetail,
    },
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Notificações" onBack={onGoBack} />
      </View>

      <View style={styles.panel}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionHeader}>Hoje</Text>
          {todayItems.map((item) => (
            <NotificationRow key={item.key} item={item} />
          ))}

          <Text style={[styles.sectionHeader, styles.sectionSpacing]}>Ontem</Text>
          {yesterdayItems.map((item) => (
            <NotificationRow key={item.key} item={item} />
          ))}

          <Text style={[styles.sectionHeader, styles.sectionSpacing]}>Essa semana</Text>
          {weekItems.map((item) => (
            <NotificationRow key={item.key} item={item} />
          ))}
        </ScrollView>

        <CondoBottomNav active="notifications" onPressTab={onPressTab} />
      </View>
    </View>
  );
}

function NotificationRow({ item }: { item: NotificationItem }) {
  return (
    <TouchableOpacity
      style={styles.row}
      activeOpacity={0.86}
      onPress={item.onPress}
      accessibilityRole="button"
      accessibilityLabel={`${item.title}. ${item.description}`}
    >
      <View style={styles.rowIcon}>
        <Text style={styles.rowIconText}>{item.icon}</Text>
      </View>

      <View style={styles.rowContent}>
        <Text style={styles.rowTitle}>{item.title}</Text>
        <Text style={styles.rowDescription}>{item.description}</Text>
        <Text style={styles.rowTime}>{item.timeLabel}</Text>
      </View>

      <View style={styles.rowDivider} />
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
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 10,
  },
  sectionHeader: {
    color: BRAND_COLORS.text,
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 4,
    marginBottom: 8,
  },
  sectionSpacing: {
    marginTop: 14,
  },
  row: {
    minHeight: 92,
    marginBottom: 10,
  },
  rowIcon: {
    position: "absolute",
    left: 0,
    top: 10,
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
  },
  rowIconText: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
  rowContent: {
    marginLeft: 48,
    paddingRight: 4,
  },
  rowTitle: {
    color: BRAND_COLORS.text,
    fontSize: 18,
    fontWeight: "700",
  },
  rowDescription: {
    marginTop: 2,
    color: BRAND_COLORS.text,
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 290,
  },
  rowTime: {
    marginTop: 8,
    alignSelf: "flex-end",
    color: BRAND_COLORS.info,
    fontSize: 14,
  },
  rowDivider: {
    marginTop: 8,
    height: 1,
    backgroundColor: BRAND_COLORS.info,
  },
});
