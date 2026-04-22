import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

interface HelpSupportScreenProps {
  onGoBack: () => void;
  onOpenContact: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

const faqItems = [
  "Como autorizar a entrada de um visitante?",
  "Como cadastrar um veículo?",
  "Como abrir um chamado de manutenção?",
  "Onde encontro meu boleto do condomínio?",
  "Como reservar áreas comuns?",
  "Como cadastrar um visitante antecipadamente?",
  "Como retirar uma encomenda na portaria?",
  "O que fazer se encontrar um problema nas áreas comuns?",
  "Como reportar um problema no aplicativo?",
] as const;

export function HelpSupportScreen({
  onGoBack,
  onOpenContact,
  onPressTab,
}: HelpSupportScreenProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Ajuda e FAQs" onBack={onGoBack} />
      </View>

      <View style={styles.panel}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.mainTitle}>Como podemos ajudar?</Text>

          <View style={styles.segmentWrap}>
            <TouchableOpacity style={[styles.segmentButton, styles.segmentButtonActive]}>
              <Text style={[styles.segmentLabel, styles.segmentLabelActive]}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.segmentButton} onPress={onOpenContact}>
              <Text style={styles.segmentLabel}>Contato</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchField}>
            <Text style={styles.searchPlaceholder}>Buscar</Text>
          </View>

          <View style={styles.faqList}>
            {faqItems.map((item) => (
              <TouchableOpacity key={item} style={styles.faqRow} activeOpacity={0.8}>
                <Text style={styles.faqText}>{item}</Text>
                <Text style={styles.faqChevron}>v</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <CondoBottomNav active="profile" onPressTab={onPressTab} />
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
    paddingTop: 22,
    paddingHorizontal: 22,
    paddingBottom: 10,
  },
  mainTitle: {
    textAlign: "center",
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 16,
  },
  segmentWrap: {
    flexDirection: "row",
    backgroundColor: BRAND_COLORS.surfaceSoft,
    borderRadius: 18,
    padding: 6,
    marginBottom: 22,
  },
  segmentButton: {
    flex: 1,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  segmentButtonActive: {
    backgroundColor: BRAND_COLORS.primaryLight,
  },
  segmentLabel: {
    color: BRAND_COLORS.text,
    fontSize: 14,
    fontWeight: "500",
  },
  segmentLabelActive: {
    color: BRAND_COLORS.white,
    fontWeight: "600",
  },
  searchField: {
    height: 42,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BRAND_COLORS.info,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchPlaceholder: {
    color: BRAND_COLORS.mutedText,
    fontSize: 14,
  },
  faqList: {
    gap: 8,
  },
  faqRow: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: BRAND_COLORS.borderSoft,
    paddingVertical: 6,
  },
  faqText: {
    flex: 1,
    color: BRAND_COLORS.text,
    fontSize: 14,
    lineHeight: 20,
    paddingRight: 8,
  },
  faqChevron: {
    color: BRAND_COLORS.text,
    fontSize: 20,
    lineHeight: 20,
    marginTop: -2,
  },
});
