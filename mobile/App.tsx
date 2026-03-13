import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { MaintenanceProvider } from "./src/context/MaintenanceContext";
import { DashboardScreen } from "./src/screens/DashboardScreen";
import { MaintenanceListScreen } from "./src/screens/MaintenanceListScreen";
import { SplashScreen } from "./src/screens/SplashScreen";

type AppScreen = "splash" | "dashboard" | "list";

export default function App() {
  const [screen, setScreen] = useState<AppScreen>("splash");
  const isSplash = screen === "splash";

  const renderScreen = () => {
    if (screen === "splash") {
      return <SplashScreen onEnter={() => setScreen("dashboard")} />;
    }

    if (screen === "list") {
      return <MaintenanceListScreen onGoBack={() => setScreen("dashboard")} />;
    }

    return <DashboardScreen onOpenList={() => setScreen("list")} />;
  };

  return (
    <MaintenanceProvider>
      <SafeAreaView style={[styles.safeArea, isSplash && styles.splashArea]}>
        <StatusBar style="dark" />
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
  splashArea: {
    backgroundColor: "#0f7ead",
  },
});
