import { CondoConfirmationCard } from "../components/common/CondoConfirmationCard";

interface PackageConfirmationScreenProps {
  onExit: () => void;
}

export function PackageConfirmationScreen({ onExit }: PackageConfirmationScreenProps) {
  return (
    <CondoConfirmationCard
      title={"Confirmacao De\nEncomenda"}
      message="A encomenda foi\nregistrada com sucesso!"
      buttonText="OK, Sair!"
      onConfirm={onExit}
    />
  );
}
