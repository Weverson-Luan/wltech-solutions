const Services: React.FC = () => {
  const services = [
    {
      title: "Desenvolvimento de Software",
      description:
        "Criação de aplicações personalizadas para atender suas necessidades específicas.",
      icon: "💻",
    },
    {
      title: "Migração de Sistemas",
      description:
        "Transição segura e eficiente entre plataformas tecnológicas.",
      icon: "🔄",
    },
    {
      title: "Segurança Digital",
      description: "Proteção e análise de vulnerabilidades em sistemas.",
      icon: "🔒",
    },
  ];

  const projetos = [
    {
      title: "Sistema de Gestão Empresarial",
      description: "Desenvolvimento de ERP para empresa de médio porte",
      imagem: "https://placehold.co/300x400/EEE/31343C",
      tecnologias: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Aplicativo de Delivery",
      description: "Solução completa para restaurantes e clientes",
      imagem: "https://placehold.co/300x400/EEE/31343C",
      tecnologias: ["React Native", "Firebase", "GraphQL"],
    },
    {
      title: "Dashboard de Analytics",
      description: "Painel de monitoramento de métricas em tempo real",
      imagem: "https://placehold.co/300x400/EEE/31343C",
      tecnologias: ["Next.js", "TypeScript", "Chart.js"],
    },
  ];

  return (
    <div>
      <section>
        <h1 className="text-3xl font-bold mb-8 text-center">Nossos Serviços</h1>

        <div className="w-full text-start">
          <p className="text-lg mb-4 text-gray-500">
            No desenvolvimento de interfaces de usuário para aplicativos móveis
            e web, o foco está em criar experiências intuitivas, funcionais e
            esteticamente agradáveis. Isso envolve o uso de código reutilizável
            e bibliotecas bem estruturadas, promovendo eficiência e consistência
            em futuros projetos. A tradução das necessidades dos usuários e do
            negócio em soluções tecnológicas exige atenção ao detalhe e
            capacidade analítica. O processo inclui projetar e implementar o
            frontend com base nos requisitos levantados, garantindo que o
            produto final atenda aos objetivos propostos. Além disso, o trabalho
            inclui o desenvolvimento de documentação robusta, utilizando
            ferramentas como Storybook para documentar componentes visuais e
            Swagger para APIs, facilitando a colaboração entre equipes e o
            entendimento técnico. Manter um padrão rigoroso de versionamento e
            estilo de código é essencial para assegurar a qualidade do produto e
            facilitar sua manutenção. Cada etapa, desde o levantamento de
            requisitos até o teste e entrega, é conduzida com um compromisso de
            excelência e foco no cliente.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={projeto.imagem}
                alt={projeto.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{projeto.title}</h3>
                <p className="text-gray-600 mb-4">{projeto.description}</p>
                <div className="flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Services;
