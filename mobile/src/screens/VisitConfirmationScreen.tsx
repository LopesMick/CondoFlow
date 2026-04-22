import { CondoConfirmationCard } from "../components/common/CondoConfirmationCard";

interface VisitConfirmationScreenProps {
  onExit: () => void;
}

export function VisitConfirmationScreen({ onExit }: VisitConfirmationScreenProps) {
  return (
    <CondoConfirmationCard
      title={"Confirmação de\nVisitantes"}
      message={"Sua visita receberá nosso\nQR de acesso ao seu\ncondomínio!"}
      buttonText="OK, Sair!"
      onConfirm={onExit}
    />
  );
}
