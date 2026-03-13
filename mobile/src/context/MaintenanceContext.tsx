import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  buildMaintenanceSummary,
  listMaintenanceRequests,
} from "../services/maintenanceService";
import { MaintenanceRequest, MaintenanceSummary } from "../types/maintenance";

interface MaintenanceContextValue {
  requests: MaintenanceRequest[];
  summary: MaintenanceSummary;
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

const MaintenanceContext = createContext<MaintenanceContextValue | undefined>(
  undefined,
);

export function MaintenanceProvider({ children }: PropsWithChildren) {
  const [requests, setRequests] = useState<MaintenanceRequest[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await listMaintenanceRequests();
      setRequests(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Falha ao carregar manutencoes.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const value = useMemo<MaintenanceContextValue>(() => {
    return {
      requests,
      summary: buildMaintenanceSummary(requests),
      isLoading,
      error,
      refresh,
    };
  }, [requests, isLoading, error, refresh]);

  return (
    <MaintenanceContext.Provider value={value}>
      {children}
    </MaintenanceContext.Provider>
  );
}

export function useMaintenance(): MaintenanceContextValue {
  const context = useContext(MaintenanceContext);

  if (!context) {
    throw new Error("useMaintenance deve ser usado dentro de MaintenanceProvider");
  }

  return context;
}
