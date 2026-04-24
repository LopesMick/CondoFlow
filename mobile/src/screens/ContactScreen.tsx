import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

interface ContactScreenProps {
  onGoBack: () => void;
  onOpenFaq: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

const contactItems = [
  { label: "E-mail", icon: "@" },
  { label: "Site", icon: "W" },
  { label: "Facebook", icon: "f" },
  { label: "WhatsApp", icon: "w" },
  { label: "Instagram", icon: "i" },
] as const;

export function ContactScreen({ onGoBack, onOpenFaq, onPressTab }: ContactScreenProps) {
  const [search, setSearch] = useState("");

  const filteredContactItems = useMemo(() => {
    const normalized = search.trim().toLowerCase();

    if (!normalized) {
      return contactItems;
    }

    return contactItems.filter((item) => item.label.toLowerCase().includes(normalized));
  }, [search]);

  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Ajuda e FAQs" onBack={onGoBack} />
      </View>

      <View style={styles.panel}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.mainTitle}>Como podemos ajudar?</Text>

          <View style={styles.segmentWrap}>
            <TouchableOpacity style={styles.segmentButton} onPress={onOpenFaq}>
              <Text style={styles.segmentLabel}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.segmentButton, styles.segmentButtonActive]}>
              <Text style={[styles.segmentLabel, styles.segmentLabelActive]}>Contato</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.searchField}
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar"
            placeholderTextColor={BRAND_COLORS.mutedText}
          />

          <View style={styles.contactsWrap}>
            {filteredContactItems.length === 0 ? (
              <Text style={styles.emptyText}>Nenhum contato encontrado.</Text>
            ) : (
              filteredContactItems.map((item) => (
                <TouchableOpacity key={item.label} style={styles.contactRow} activeOpacity={0.8}>
                  <View style={styles.contactIcon}>
                    <Text style={styles.contactIconText}>{item.icon}</Text>
                  </View>

                  <Text style={styles.contactLabel}>{item.label}</Text>
                  <Text style={styles.contactChevron}>{">"}</Text>
                </TouchableOpacity>
              ))
            )}
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
    paddingHorizontal: 16,
    marginBottom: 26,
    color: BRAND_COLORS.text,
  },
  contactsWrap: {
    gap: 14,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 44,
  },
  contactIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  contactIconText: {
    color: BRAND_COLORS.white,
    fontSize: 15,
    fontWeight: "700",
  },
  contactLabel: {
    flex: 1,
    color: BRAND_COLORS.text,
    fontSize: 18,
    fontWeight: "600",
  },
  contactChevron: {
    color: BRAND_COLORS.text,
    fontSize: 20,
    lineHeight: 22,
  },
  emptyText: {
    color: BRAND_COLORS.mutedText,
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 16,
  },
});
