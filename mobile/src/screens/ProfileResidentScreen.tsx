import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BRAND_COLORS } from "../assets/branding";
import { CondoBottomNav, CondoBottomTab } from "../components/common/CondoBottomNav";
import { CondoTopHeader } from "../components/common/CondoTopHeader";

interface ProfileResidentScreenProps {
  onGoBack: () => void;
  onEditProfile?: () => void;
  onOpenChangePassword: () => void;
  onOpenReports?: () => void;
  onOpenSupport: () => void;
  onOpenLogout: () => void;
  onPressTab?: (tab: CondoBottomTab) => void;
}

type ProfileActionKey = "edit" | "password" | "reports" | "support" | "logout";

const profileActions: Array<{ key: ProfileActionKey; label: string; icon: string }> = [
  { key: "edit", label: "Editar Perfil", icon: "E" },
  { key: "password", label: "Alterar Senha", icon: "S" },
  { key: "reports", label: "Relatórios", icon: "R" },
  { key: "support", label: "Ajuda e Suporte", icon: "A" },
  { key: "logout", label: "Sair", icon: "X" },
];

export function ProfileResidentScreen({
  onGoBack,
  onEditProfile,
  onOpenChangePassword,
  onOpenReports,
  onOpenSupport,
  onOpenLogout,
  onPressTab,
}: ProfileResidentScreenProps) {
  const handleActionPress = (key: ProfileActionKey) => {
    if (key === "edit") {
      onEditProfile?.();
      return;
    }

    if (key === "password") {
      onOpenChangePassword();
      return;
    }

    if (key === "reports") {
      onOpenReports?.();
      return;
    }

    if (key === "support") {
      onOpenSupport();
      return;
    }

    onOpenLogout();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headerArea}>
        <CondoTopHeader title="Perfil" onBack={onGoBack} />
      </View>

      <View style={styles.panel}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.avatarWrap}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>MP</Text>
            </View>
          </View>

          <View style={styles.identityBlock}>
            <Text style={styles.name}>Matheus Pessoa</Text>
            <Text style={styles.idText}>
              <Text style={styles.idPrefix}>ID:</Text> CNLA-302A
            </Text>
          </View>

          <View style={styles.actionsList}>
            {profileActions.map((action) => (
              <TouchableOpacity
                key={action.key}
                style={styles.actionRow}
                activeOpacity={0.86}
                onPress={() => handleActionPress(action.key)}
                accessibilityRole="button"
                accessibilityLabel={action.label}
              >
                <View style={styles.actionIcon}>
                  <Text style={styles.actionIconText}>{action.icon}</Text>
                </View>
                <Text style={styles.actionLabel} numberOfLines={1}>
                  {action.label}
                </Text>
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
    paddingBottom: 8,
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
    paddingBottom: 12,
  },
  avatarWrap: {
    alignItems: "center",
    marginTop: -52,
  },
  avatarCircle: {
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    borderWidth: 2,
    borderColor: BRAND_COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: BRAND_COLORS.primaryDark,
    fontSize: 28,
    fontWeight: "700",
  },
  identityBlock: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 18,
    paddingHorizontal: 20,
  },
  name: {
    color: BRAND_COLORS.text,
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
  },
  idText: {
    marginTop: 6,
    color: BRAND_COLORS.text,
    fontSize: 16,
    fontWeight: "500",
  },
  idPrefix: {
    fontWeight: "700",
  },
  actionsList: {
    paddingHorizontal: 28,
    paddingTop: 8,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    minHeight: 64,
    borderRadius: 20,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    paddingHorizontal: 14,
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  actionIconText: {
    color: BRAND_COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
  actionLabel: {
    flex: 1,
    color: BRAND_COLORS.text,
    fontSize: 20,
    fontWeight: "600",
  },
});
