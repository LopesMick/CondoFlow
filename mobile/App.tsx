import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { MaintenanceProvider } from "./src/context/MaintenanceContext";
import { DashboardScreen } from "./src/screens/DashboardScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { MaintenanceListScreen } from "./src/screens/MaintenanceListScreen";
import { ResidentScreen } from "./src/screens/ResidentScreen";
import { ResetPasswordScreen } from "./src/screens/ResetPasswordScreen";
import { SplashScreen } from "./src/screens/SplashScreen";

type AppScreen =
  | "splash"
  | "login"
  | "resetPassword"
  | "resident"
  | "dashboard"
  | "list";

export default function App() {
  const [screen, setScreen] = useState<AppScreen>("splash");
  const isAuthScreen =
    screen === "splash" || screen === "login" || screen === "resetPassword";
  const statusBarStyle = isAuthScreen ? "light" : "dark";

  const renderScreen = () => {
    if (screen === "splash") {
      return <SplashScreen onEnter={() => setScreen("login")} />;
    }

    if (screen === "login") {
      return (
        <LoginScreen
          onLogin={() => setScreen("resident")}
          onForgotPassword={() => setScreen("resetPassword")}
        />
      );
    }

    if (screen === "resetPassword") {
      return <ResetPasswordScreen onBack={() => setScreen("login")} />;
    }

    if (screen === "resident") {
      return <ResidentScreen onOpenRequests={() => setScreen("list")} />;
    }

    if (screen === "list") {
      return <MaintenanceListScreen onGoBack={() => setScreen("resident")} />;
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
    backgroundColor: "#f4f6f8",
  },
  authArea: {
    backgroundColor: "#0f7ead",
  },
});
