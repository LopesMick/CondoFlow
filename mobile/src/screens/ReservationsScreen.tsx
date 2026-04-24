import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";
import { ReservationCalendar } from "../components/common/ReservationCalendar";
import { ReservationEntryRow } from "../components/common/ReservationEntryRow";

interface ReservationsScreenProps {
  onGoBack: () => void;
  onOpenRequestReservation: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

export function ReservationsScreen({
  onGoBack,
  onOpenRequestReservation,
  onPressTab,
}: ReservationsScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Reservas" onBack={onGoBack} />
      </View>

      <View style={styles.panel}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.filterLabel}>Área:</Text>
          <TouchableOpacity style={styles.selectField}>
            <Text style={styles.selectPlaceholder}>Selecionar área</Text>
            <Text style={styles.selectArrow}>v</Text>
          </TouchableOpacity>

          <ReservationCalendar />

          <TouchableOpacity style={styles.primaryButton} onPress={onOpenRequestReservation}>
            <Text style={styles.primaryButtonText}>Solicitar Reserva</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Minhas Reservas</Text>
          <View style={styles.sectionDivider} />

          <ReservationEntryRow
            title="Play"
            time="17:00 - 19:00"
            status="Confirmada"
            statusTone="success"
            date="20/03/2026"
          />
          <ReservationEntryRow
            title="Churrasqueira"
            time="14:00 - 19:00"
            status="Concluída"
            statusTone="info"
            date="15/2/2026"
          />
        </ScrollView>

        <CondoBottomNav active="center" onPressTab={onPressTab} />
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
    marginBottom: 16,
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
    width: "100%",
    maxWidth: 320,
    height: 48,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    marginBottom: 20,
  },
  primaryButtonText: {
    color: BRAND_COLORS.white,
    fontSize: 17,
    fontWeight: "600",
  },
  sectionTitle: {
    color: BRAND_COLORS.text,
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 4,
  },
  sectionDivider: {
    width: "63%",
    height: 1,
    backgroundColor: BRAND_COLORS.info,
    marginBottom: 10,
  },
});
