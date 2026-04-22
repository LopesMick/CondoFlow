import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { BRAND_COLORS } from "./src/assets/branding";
import { CondoBottomTab } from "./src/components/common/CondoBottomNav";
import { MaintenanceProvider } from "./src/context/MaintenanceContext";
import { CallsScreen } from "./src/screens/CallsScreen";
import { CallsSyndicScreen } from "./src/screens/CallsSyndicScreen";
import { ContactScreen } from "./src/screens/ContactScreen";
import { DashboardScreen } from "./src/screens/DashboardScreen";
import { FinanceResidentScreen } from "./src/screens/FinanceResidentScreen";
import { FinanceSyndicScreen } from "./src/screens/FinanceSyndicScreen";
import { HelpSupportScreen } from "./src/screens/HelpSupportScreen";
import { HomeMoradorScreen } from "./src/screens/HomeMoradorScreen";
import { HomePorteiroScreen } from "./src/screens/HomePorteiroScreen";
import { HomeSindicoScreen } from "./src/screens/HomeSindicoScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { MaintenanceListScreen } from "./src/screens/MaintenanceListScreen";
import { PackageConfirmationScreen } from "./src/screens/PackageConfirmationScreen";
import { PackagesScreen } from "./src/screens/PackagesScreen";
import { RegisterVisitorScreen } from "./src/screens/RegisterVisitorScreen";
import { ResetPasswordScreen } from "./src/screens/ResetPasswordScreen";
import { SplashScreen } from "./src/screens/SplashScreen";
import { VisitConfirmationScreen } from "./src/screens/VisitConfirmationScreen";

type HomeScreen = "homeMorador" | "homePorteiro" | "homeSindico";

type AppScreen =
  | "splash"
  | "login"
  | "resetPassword"
  | HomeScreen
  | "dashboard"
  | "list"
  | "helpSupport"
  | "contact"
  | "registerVisitor"
  | "visitConfirmation"
  | "packages"
  | "packageConfirmation"
  | "financeResident"
  | "financeSyndic"
  | "callsSyndic"
  | "calls";

export default function App() {
  const [homeScreen, setHomeScreen] = useState<HomeScreen>("homeMorador");
  const [screen, setScreen] = useState<AppScreen>("splash");
  const isAuthScreen =
    screen === "splash" || screen === "login" || screen === "resetPassword";
  const statusBarStyle = isAuthScreen ? "light" : "dark";

  const goHome = () => setScreen(homeScreen);

  const handleBottomTabNavigation = (tab: CondoBottomTab) => {
    if (tab === "home") {
      goHome();
      return;
    }

    if (tab === "search") {
      setScreen("calls");
      return;
    }

    if (tab === "center") {
      setScreen("registerVisitor");
      return;
    }

    if (tab === "notifications") {
      setScreen("callsSyndic");
      return;
    }

    setScreen("helpSupport");
  };

  const renderScreen = () => {
    if (screen === "splash") {
      return <SplashScreen onEnter={() => setScreen("login")} />;
    }

    if (screen === "login") {
      return (
        <LoginScreen
          onLogin={(role) => {
            const nextHome: HomeScreen =
              role === "porteiro"
                ? "homePorteiro"
                : role === "sindico"
                  ? "homeSindico"
                  : "homeMorador";

            setHomeScreen(nextHome);
            setScreen(nextHome);
          }}
          onForgotPassword={() => setScreen("resetPassword")}
        />
      );
    }

    if (screen === "resetPassword") {
      return <ResetPasswordScreen onBack={() => setScreen("login")} />;
    }

    if (screen === "homeMorador") {
      return (
        <HomeMoradorScreen
          onOpenCalls={() => setScreen("calls")}
          onOpenVisitorRegistration={() => setScreen("registerVisitor")}
          onOpenPackages={() => setScreen("packages")}
          onOpenFinance={() => setScreen("financeResident")}
          onOpenNotifications={() => setScreen("callsSyndic")}
          onOpenSyndicHome={() => {
            setHomeScreen("homeSindico");
            setScreen("homeSindico");
          }}
          onPressTab={handleBottomTabNavigation}
        />
      );
    }

    if (screen === "homePorteiro") {
      return (
        <HomePorteiroScreen
          onOpenCalls={() => setScreen("calls")}
          onOpenVisitorRegistration={() => setScreen("registerVisitor")}
          onOpenPackages={() => setScreen("packages")}
          onOpenNotifications={() => setScreen("callsSyndic")}
          onOpenMoradorHome={() => {
            setHomeScreen("homeMorador");
            setScreen("homeMorador");
          }}
          onOpenSyndicHome={() => {
            setHomeScreen("homeSindico");
            setScreen("homeSindico");
          }}
          onPressTab={handleBottomTabNavigation}
        />
      );
    }

    if (screen === "homeSindico") {
      return (
        <HomeSindicoScreen
          onOpenCalls={() => setScreen("callsSyndic")}
          onOpenVisitorRegistration={() => setScreen("registerVisitor")}
          onOpenPackages={() => setScreen("packages")}
          onOpenFinance={() => setScreen("financeSyndic")}
          onOpenNotifications={() => setScreen("callsSyndic")}
          onOpenPorteiroHome={() => {
            setHomeScreen("homePorteiro");
            setScreen("homePorteiro");
          }}
          onOpenMoradorHome={() => {
            setHomeScreen("homeMorador");
            setScreen("homeMorador");
          }}
          onPressTab={handleBottomTabNavigation}
        />
      );
    }

    if (screen === "list") {
      return <MaintenanceListScreen onGoBack={goHome} />;
    }

    if (screen === "helpSupport") {
      return (
        <HelpSupportScreen
          onGoBack={goHome}
          onOpenContact={() => setScreen("contact")}
          onPressTab={handleBottomTabNavigation}
        />
      );
    }

    if (screen === "contact") {
      return (
        <ContactScreen
          onGoBack={goHome}
          onOpenFaq={() => setScreen("helpSupport")}
          onPressTab={handleBottomTabNavigation}
        />
      );
    }

    if (screen === "registerVisitor") {
      return (
        <RegisterVisitorScreen
          onGoBack={goHome}
          onConfirmVisit={() => setScreen("visitConfirmation")}
          onPressTab={handleBottomTabNavigation}
        />
      );
    }

    if (screen === "visitConfirmation") {
      return <VisitConfirmationScreen onExit={goHome} />;
    }

    if (screen === "packages") {
      return (
        <PackagesScreen
          onGoBack={goHome}
          onOpenPackageConfirmation={() => setScreen("packageConfirmation")}
          onPressTab={handleBottomTabNavigation}
        />
      );
    }

    if (screen === "packageConfirmation") {
      return <PackageConfirmationScreen onExit={() => setScreen("packages")} />;
    }

    if (screen === "financeResident") {
      return (
        <FinanceResidentScreen
          onGoBack={goHome}
          onPressTab={handleBottomTabNavigation}
        />
      );
    }

    if (screen === "financeSyndic") {
      return (
        <FinanceSyndicScreen
          onGoBack={goHome}
          onPressTab={handleBottomTabNavigation}
        />
      );
    }

    if (screen === "callsSyndic") {
      return (
        <CallsSyndicScreen
          onGoBack={goHome}
          onPressTab={handleBottomTabNavigation}
        />
      );
    }

    if (screen === "calls") {
      return (
        <CallsScreen
          onGoBack={goHome}
          onPressTab={handleBottomTabNavigation}
        />
      );
    }

    return <DashboardScreen onOpenList={() => setScreen("list")} />;
  };

  return (
    <MaintenanceProvider>
      <SafeAreaView style={[styles.safeArea, isAuthScreen && styles.authArea]}>
        <StatusBar style={statusBarStyle} />
        {renderScreen()}
      </SafeAreaView>
    </MaintenanceProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BRAND_COLORS.background,
  },
  authArea: {
    backgroundColor: BRAND_COLORS.primaryLight,
  },
});
