import { StyleSheet, Text, View } from "react-native";
import { BRAND_COLORS } from "../../assets/branding";

const weekdays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"] as const;
const days = Array.from({ length: 31 }, (_, index) => index + 1);

interface ReservationCalendarProps {
  monthLabel?: string;
  yearLabel?: string;
  selectedDay?: number;
}

export function ReservationCalendar({
  monthLabel = "Abril",
  yearLabel = "2026",
  selectedDay = 17,
}: ReservationCalendarProps) {
  return (
    <View style={styles.calendarWrap}>
      <View style={styles.calendarHeader}>
        <Text style={styles.calendarHeaderText}>
          {monthLabel} <Text style={styles.chevron}>v</Text>
        </Text>
        <Text style={styles.calendarHeaderText}>
          {yearLabel} <Text style={styles.chevron}>v</Text>
        </Text>
      </View>

      <View style={styles.weekdaysRow}>
        {weekdays.map((weekday) => (
          <Text key={weekday} style={styles.weekdayText}>
            {weekday}
          </Text>
        ))}
      </View>

      <View style={styles.daysGrid}>
        {days.map((day) => {
          const isSelected = day === selectedDay;

          return (
            <View key={day} style={styles.dayCell}>
              <View style={[styles.dayBubble, isSelected && styles.dayBubbleSelected]}>
                <Text style={[styles.dayText, isSelected && styles.dayTextSelected]}>
                  {day}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarWrap: {
    marginTop: 4,
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  calendarHeaderText: {
    color: BRAND_COLORS.info,
    fontSize: 17,
    fontWeight: "600",
  },
  chevron: {
    fontSize: 14,
    fontWeight: "700",
  },
  weekdaysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  weekdayText: {
    width: "13%",
    textAlign: "center",
    color: BRAND_COLORS.info,
    fontSize: 13,
    fontWeight: "500",
  },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 8,
    paddingHorizontal: 6,
  },
  dayCell: {
    width: "14.28%",
    alignItems: "center",
    justifyContent: "center",
  },
  dayBubble: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  dayBubbleSelected: {
    borderWidth: 1,
    borderColor: BRAND_COLORS.danger,
    backgroundColor: BRAND_COLORS.backgroundMuted,
  },
  dayText: {
    color: BRAND_COLORS.text,
    fontSize: 15,
  },
  dayTextSelected: {
    color: BRAND_COLORS.danger,
    fontWeight: "600",
  },
});
