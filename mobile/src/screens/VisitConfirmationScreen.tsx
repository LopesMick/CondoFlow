import { CondoConfirmationCard } from "../components/common/CondoConfirmationCard";

interface VisitConfirmationScreenProps {
  onExit: () => void;
}

export function VisitConfirmationScreen({ onExit }: VisitConfirmationScreenProps) {
  return (
    <CondoConfirmationCard
      title={"Confirmacao De\nVisitantes"}
      message={"Sua visita recebera nosso\nQR de acesso ao seu\ncondominio!"}
      buttonText="OK, Sair!"
      onConfirm={onExit}
    />
  );
}
