import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
            >
              <View style={styles.actionIcon}>
                <Text style={styles.actionIconText}>{action.icon}</Text>
              </View>
              <Text style={styles.actionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

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
  avatarWrap: {
    alignItems: "center",
    marginTop: -58,
  },
  avatarCircle: {
    width: 116,
    height: 116,
    borderRadius: 58,
    backgroundColor: BRAND_COLORS.surfaceSoft,
    borderWidth: 2,
    borderColor: BRAND_COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: BRAND_COLORS.primaryDark,
    fontSize: 30,
    fontWeight: "700",
  },
  identityBlock: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 22,
  },
  name: {
    color: BRAND_COLORS.text,
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
  },
  idText: {
    marginTop: 6,
    color: BRAND_COLORS.text,
    fontSize: 22,
    fontWeight: "500",
  },
  idPrefix: {
    fontWeight: "700",
  },
  actionsList: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 8,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: BRAND_COLORS.info,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  actionIconText: {
    color: BRAND_COLORS.white,
    fontSize: 21,
    fontWeight: "700",
  },
  actionLabel: {
    color: BRAND_COLORS.text,
    fontSize: 28,
    fontWeight: "500",
  },
});
