# Auditoria CondoFlow (React Native)

Data: 2026-04-22

## 1) Inventário real do app

### Módulos/telas ativos por fluxo

- Boas-vindas/Login/Cadastro:
  - `SplashScreen`
  - `LoginScreen`
  - `ForgotPasswordScreen`
- Morador:
  - `HomeMoradorScreen`
  - `ReservationsScreen`
  - `RequestReservationScreen`
  - `RegisterVisitorScreen`
  - `VisitConfirmationScreen`
  - `CallsScreen`
  - `FinanceResidentScreen`
  - `PackagesScreen`
  - `PackageListingScreen`
  - `RegisterPackageScreen`
  - `PackageConfirmationScreen`
  - `NotificationsResidentScreen`
  - detalhes/notificações modais (chamada, reserva, inadimplência, encomenda, visitas, etc.)
- Síndico/Administrador:
  - `HomeSindicoScreen`
  - `CondoReservationsScreen`
  - `FinanceSyndicScreen`
  - `ResidentListingSyndicScreen`
  - `RegisterResidentScreen`
  - `CallsSyndicScreen`
  - notificações de comunicado/chamadas/reservas
- Porteiro:
  - `HomePorteiroScreen`
  - `VisitorListingScreen`
  - `ResidentListingScreen`
  - `PackageListingScreen`
- Perfil/Configurações:
  - `ProfileResidentScreen`
  - `ChangePasswordScreen`
  - `HelpSupportScreen`
  - `ContactScreen`
  - `LogoutScreen`

### Componentes reutilizáveis principais

- `CondoTopHeader`
- `CondoBottomNav`
- `DirectoryListRow`
- `ReservationCalendar`
- `ReservationEntryRow`
- `CondoConfirmationCard`
- `NotificationModalCard` (base comum para modais de notificação)

### Roteamento

- Roteamento por estado centralizado em `App.tsx` (tipo união `AppScreen`).
- Navegação secundária por callbacks passados para telas.

## 2) Diagnóstico (antes das correções)

- Existiam telas/módulos fora do escopo do wireframe CondoFlow:
  - `DashboardScreen`
  - `MaintenanceListScreen`
  - contexto e serviços de manutenção legados
- Existia tela duplicada/redundante:
  - `NotificationResidentDetailAltScreen` duplicando `NotificationResidentDetailScreen`
- Existia tela sem uso real no fluxo:
  - `ResidentScreen`
  - `ResetPasswordScreen` (duplicava fluxo de recuperação)
- Fluxos com retorno inconsistente:
  - `helpSupport` sempre voltava para home
- `changePassword` voltava para home (na prática, vinha de perfil)
  - `registerVisitor` não preservava origem em alguns cenários
- Ação de `ForgotPasswordScreen` (botão Enviar) sem efeito
- Texto com encoding corrompido em `ChangePasswordScreen`
- Botão direito de `CondoTopHeader` podia parecer clicável mesmo sem callback

## 3) Correções aplicadas

- Consolidação/limpeza arquitetural:
  - removidos módulos legados de manutenção e telas não planejadas no Figma.
  - removida tela duplicada de detalhe de morador.
  - removida tela legada sem uso (`ResidentScreen`) e tela redundante (`ResetPasswordScreen`).
- Navegação e fluxo:
  - criado controle de retorno para `HelpSupport` e `RegisterVisitor`.
  - `ChangePassword` agora retorna para `ProfileResident`.
  - `VisitConfirmation` retorna para a origem correta do cadastro de visita.
  - `HomeMorador` abre `RegisterVisitor` diretamente (coerente com fluxo de morador).
- Recuperação de senha:
  - `ForgotPasswordScreen` recebeu callback de submit e botão `Enviar` funcional.
- UI/UX:
  - `CondoTopHeader` desabilita botão direito quando não há ação.
  - corrigidos textos com encoding quebrado em `ChangePasswordScreen`.
  - padronizado texto de título "Detalhamento" em telas de notificação.

## 4) Comparação com wireframe

Convergências:
- Estrutura de módulos por perfil (Morador, Síndico/Administrador, Porteiro, Perfil).
- Presença das principais telas mapeadas no board: home por perfil, reservas, chamadas, visitantes, encomendas, financeiro, notificações e perfil.
- Padrão visual (header azul, painel claro, blocos arredondados, nav inferior) preservado.

Divergências residuais:
- App ainda usa roteamento manual por estado em `App.tsx` (não usa React Navigation).
- Algumas telas usam dados mockados estáticos (não há integração com backend/estado global de domínio).
- Iconografia ainda baseada em placeholders de texto em várias telas (não pacote de ícones final do Figma).

## 5) Validação executada

- `npx tsc --noEmit` em `mobile/` (sucesso, sem erros de tipagem).
- Revisão estrutural de imports/rotas e checagem de telas sem referência direta.

## 6) Pendências recomendadas

- Adotar `@react-navigation` para histórico real de navegação e deep links.
- Substituir placeholders de ícone por biblioteca (ex.: `@expo/vector-icons`).
- Introduzir testes automatizados:
  - testes de fumaça de rotas principais
  - testes de interação de formulários críticos
  - snapshot/regressão visual básica para componentes comuns.
