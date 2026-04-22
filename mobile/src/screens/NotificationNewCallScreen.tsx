import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import {
  NotificationActionButtons,
  NotificationModalCard,
} from "../components/common/NotificationModalCard";

interface NotificationNewCallScreenProps {
  onConfirm?: () => void;
  onCancel?: () => void;
  onDismiss?: () => void;
}

export function NotificationNewCallScreen({
  onConfirm,
  onCancel,
  onDismiss,
}: NotificationNewCallScreenProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  return (
    <NotificationModalCard title="Criar Nova Chamada!" onDismiss={onDismiss}>
      <Text style={styles.label}>Título:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        placeholder="Escreva aqui..."
        placeholderTextColor={BRAND_COLORS.mutedText}
      />

      <Text style={styles.label}>Categoria:</Text>
      <View style={styles.selectField}>
        <TextInput
          value={category}
          onChangeText={setCategory}
          style={styles.selectInput}
          placeholder="Selecionar categoria"
          placeholderTextColor={BRAND_COLORS.mutedText}
        />
        <Text style={styles.selectArrow}>v</Text>
      </View>

      <Text style={styles.label}>Prioridade:</Text>
      <View style={styles.selectField}>
        <TextInput
          value={priority}
          onChangeText={setPriority}
          style={styles.selectInput}
          placeholder="Selecionar prioridade"
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
      <Text style={styles.question}>Tem certeza que deseja confirmar a chamada?</Text>

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
  input: {
    height: 44,
    borderRadius: 18,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingHorizontal: 14,
    marginBottom: 14,
    color: BRAND_COLORS.text,
    fontSize: 15,
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
