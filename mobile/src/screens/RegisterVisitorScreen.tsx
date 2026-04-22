import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

interface RegisterVisitorScreenProps {
  onGoBack: () => void;
  onConfirmVisit: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

export function RegisterVisitorScreen({
  onGoBack,
  onConfirmVisit,
  onPressTab,
}: RegisterVisitorScreenProps) {
  const [name, setName] = useState("Luccas Bentim");
  const [date, setDate] = useState("13/03/2026");
  const [time, setTime] = useState("18:00");
  const [notes, setNotes] = useState("");

  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Cadastrar Visitantes" onBack={onGoBack} />
      </View>

      <View style={styles.panel}>
        <View style={styles.formArea}>
          <Text style={styles.label}>Apelido Do Visitante:</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.field}
            placeholder="Nome do visitante"
            placeholderTextColor={BRAND_COLORS.mutedText}
          />

          <Text style={styles.label}>Data:</Text>
          <View style={styles.fieldWithIcon}>
            <TextInput
              value={date}
              onChangeText={setDate}
              style={styles.fieldInput}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={BRAND_COLORS.mutedText}
            />
            <View style={styles.fieldIconWrap}>
              <Text style={styles.fieldIconText}>C</Text>
            </View>
          </View>

          <Text style={styles.label}>Horario:</Text>
          <View style={styles.fieldWithIcon}>
            <TextInput
              value={time}
              onChangeText={setTime}
              style={styles.fieldInput}
              placeholder="00:00"
              placeholderTextColor={BRAND_COLORS.mutedText}
            />
            <Text style={styles.arrowIcon}>v</Text>
          </View>

          <TextInput
            value={notes}
            onChangeText={setNotes}
            style={styles.notes}
            multiline
            textAlignVertical="top"
            placeholder="Observacoes"
            placeholderTextColor={BRAND_COLORS.info}
          />

          <TouchableOpacity style={styles.confirmButton} onPress={onConfirmVisit}>
            <Text style={styles.confirmButtonText}>Confirmar Visita!</Text>
          </TouchableOpacity>
        </View>

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
  formArea: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 24,
  },
  label: {
    color: BRAND_COLORS.text,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 8,
    marginLeft: 6,
  },
  field: {
    height: 50,
    borderRadius: 20,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingHorizontal: 14,
    color: BRAND_COLORS.mutedText,
    fontSize: 15,
    marginBottom: 18,
  },
  fieldWithIcon: {
    height: 50,
    borderRadius: 20,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingLeft: 14,
    paddingRight: 12,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  fieldInput: {
    flex: 1,
    color: BRAND_COLORS.mutedText,
    fontSize: 15,
  },
  fieldIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
  },
  fieldIconText: {
    color: BRAND_COLORS.white,
    fontSize: 12,
    fontWeight: "700",
  },
  arrowIcon: {
    color: BRAND_COLORS.primaryLight,
    fontSize: 20,
    lineHeight: 20,
  },
  notes: {
    height: 166,
    borderRadius: 20,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingHorizontal: 14,
    paddingTop: 14,
    color: BRAND_COLORS.text,
    fontSize: 15,
    marginTop: 22,
    marginBottom: 26,
  },
  confirmButton: {
    alignSelf: "center",
    minWidth: 220,
    height: 52,
    borderRadius: 26,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButtonText: {
    color: BRAND_COLORS.white,
    fontSize: 17,
    fontWeight: "700",
  },
});
