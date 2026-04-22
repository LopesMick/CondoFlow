import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import {
  NotificationActionButtons,
  NotificationModalCard,
} from "../components/common/NotificationModalCard";

interface NotificationNewNoticeScreenProps {
  onConfirm?: () => void;
  onCancel?: () => void;
  onDismiss?: () => void;
}

export function NotificationNewNoticeScreen({
  onConfirm,
  onCancel,
  onDismiss,
}: NotificationNewNoticeScreenProps) {
  const [date, setDate] = useState("13/03/2026");
  const [hour, setHour] = useState("");
  const [description, setDescription] = useState("");

  return (
    <NotificationModalCard title="Criar Novo Comunicado..." onDismiss={onDismiss}>
      <Text style={styles.label}>Data:</Text>
      <View style={styles.selectField}>
        <TextInput
          value={date}
          onChangeText={setDate}
          style={styles.selectInput}
          placeholder="DD/MM/AAAA"
          placeholderTextColor={BRAND_COLORS.mutedText}
        />
        <View style={styles.calendarIconWrap}>
          <Text style={styles.calendarIcon}>C</Text>
        </View>
      </View>

      <Text style={styles.label}>Horário:</Text>
      <View style={styles.selectField}>
        <TextInput
          value={hour}
          onChangeText={setHour}
          style={styles.selectInput}
          placeholder="Selecionar área"
          placeholderTextColor={BRAND_COLORS.mutedText}
        />
        <Text style={styles.selectArrow}>v</Text>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionTitle}>Descrição:</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={styles.descriptionInput}
          placeholder="Escreva aqui..."
          placeholderTextColor={BRAND_COLORS.mutedText}
          multiline
          textAlignVertical="top"
        />
      </View>

      <View style={styles.divider} />
      <Text style={styles.question}>Tem certeza que deseja publicar?</Text>

      <NotificationActionButtons
        primaryText="Sim, Confirmar!"
        secondaryText="Não Confirmar"
        onPrimary={onConfirm ?? onDismiss}
        onSecondary={onCancel ?? onDismiss}
      />
    </NotificationModalCard>
  );
}

const styles = StyleSheet.create({
  label: {
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    marginLeft: 4,
  },
  selectField: {
    height: 44,
    borderRadius: 18,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingHorizontal: 14,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  selectInput: {
    flex: 1,
    color: BRAND_COLORS.text,
    fontSize: 15,
  },
  selectArrow: {
    color: BRAND_COLORS.primaryLight,
    fontSize: 20,
    lineHeight: 20,
  },
  calendarIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
  },
  calendarIcon: {
    color: BRAND_COLORS.white,
    fontSize: 12,
    fontWeight: "700",
  },
  descriptionBox: {
    marginTop: 6,
    borderRadius: 24,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    minHeight: 124,
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  descriptionTitle: {
    color: BRAND_COLORS.info,
    fontSize: 18,
    fontWeight: "500",
  },
  descriptionInput: {
    marginTop: 8,
    color: BRAND_COLORS.textSubtle,
    fontSize: 16,
    minHeight: 72,
  },
  divider: {
    marginTop: 18,
    width: "76%",
    height: 1,
    backgroundColor: BRAND_COLORS.info,
  },
  question: {
    marginTop: 10,
    color: BRAND_COLORS.text,
    fontSize: 17,
  },
});
