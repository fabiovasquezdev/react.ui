import { Header } from "@/presentation/components/header";
import { Hero } from "./hero";
import { Services } from "./services";
import { About } from "./about";
import { Beneficies } from "./beneficies";
import { ContactUs } from "./contact-us";
import { Footer } from "@/presentation/components/footer";
import { useSelector, useDispatch } from "react-redux";
import { openCaseModal, closeCaseModal } from "@/store/reducers/caseModal";
import { Modal } from "antd";

export const HomePage = () => {
  const caseModalOpen = useSelector((state: any) => state.caseModal.open);
  const dispatch = useDispatch();

  const cases = [
    {
      title: "Sistema de Gestão Empresarial",
      description: "Plataforma web completa para gestão de processos, vendas e estoque.",
    },
    {
      title: "App Delivery",
      description: "Aplicativo mobile para pedidos e entregas integrado a múltiplos restaurantes.",
    },
    {
      title: "Dashboard Analytics",
      description: "Painel de BI com gráficos interativos e relatórios em tempo real.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Header />
      <Hero
        title="Transforme sua ideia em software de sucesso"
        subtitle="Somos especialistas em soluções digitais sob medida: Web, Mobile, Desktop, UX/UI Design, APIs, Manutenção e Suporte. Potencialize seu negócio com tecnologia de ponta, equipe experiente e atendimento próximo."
        ctaText="Solicite um orçamento"
        secondaryCtaText="Veja nossos cases"
        partners={[""]}
        secondaryCtaOnClick={() => dispatch(openCaseModal())}
      />
      <Services
        services={[
          {
            title: "Desenvolvimento Web",
            description: "Sites, sistemas e plataformas robustas, seguras e escaláveis para sua empresa se destacar no digital.",
          },
          {
            title: "UX/UI Design",
            description: "Experiências digitais intuitivas, bonitas e focadas no usuário para aumentar conversão e engajamento.",
          },
          {
            title: "Apps Mobile (Android & iOS)",
            description: "Aplicativos nativos e híbridos de alta performance para alcançar seus clientes em qualquer lugar.",
          },
          {
            title: "Soluções Desktop",
            description: "Softwares desktop personalizados para Windows, Mac e Linux, integrados ao seu negócio.",
          },
          {
            title: "APIs e Integrações",
            description: "APIs RESTful, integrações entre sistemas e automações para conectar e escalar seu negócio.",
          },
          {
            title: "Manutenção & Suporte",
            description: "Evolução contínua, correções rápidas e suporte dedicado para garantir o sucesso do seu projeto.",
          },
        ]}
      />
      <About
        title="A VazCode é o parceiro ideal para o seu projeto digital"
        description="Combinamos tecnologia, criatividade e proximidade para entregar soluções que geram resultados reais. Nossa equipe é apaixonada por inovação e comprometida com o sucesso dos nossos clientes."
        highlights={["+10 anos de experiência", "Projetos em todo o Brasil", "Equipe multidisciplinar", "Atendimento consultivo", "Qualidade e agilidade"]}
      />
      <Beneficies
        benefits={[
          {
            title: "Aumente sua receita",
            description: "Soluções digitais que impulsionam vendas, otimizam processos e ampliam seu alcance.",
          },
          {
            title: "Atraia mais clientes",
            description: "Design e tecnologia para encantar e fidelizar seu público.",
          },
          {
            title: "Escale com profissionais",
            description: "Conte com um time experiente, atualizado e pronto para novos desafios.",
          },
        ]}
      />
      <ContactUs
        title="Vamos conversar sobre seu projeto?"
        description="Preencha o formulário e receba uma proposta personalizada para sua necessidade."
        ctaText="Quero ser cliente"
      />
      <Footer companyName="VazCode" />

      <Modal
        open={caseModalOpen}
        onCancel={() => dispatch(closeCaseModal())}
        footer={null}
        title={<span className="text-2xl font-bold text-primary">Nossos Cases</span>}
        centered
      >
        <ul className="space-y-4">
          {cases.map((c, idx) => (
            <li key={idx} className="border-b pb-2">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-gray-600">{c.description}</p>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};
