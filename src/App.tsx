import React, { useState } from "react";

const TechServicesWebsite: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "home" | "services" | "about" | "contact"
  >("home");

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "services":
        return <ServicesPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">WLTECH SOLUTIONS</div>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setCurrentPage("home")}
                className={`hover:text-blue-200 ${
                  currentPage === "home" ? "text-blue-200" : ""
                }`}
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("services")}
                className={`hover:text-blue-200 ${
                  currentPage === "services" ? "text-blue-200" : ""
                }`}
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("about")}
                className={`hover:text-blue-200 ${
                  currentPage === "about" ? "text-blue-200" : ""
                }`}
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("contact")}
                className={`hover:text-blue-200 ${
                  currentPage === "contact" ? "text-blue-200" : ""
                }`}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 WLTECH SOLUTIONS. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

const HomePage: React.FC = () => {
  const parceiros = [
    "https://via.placeholder.com/150?text=Parceiro+1",
    "https://via.placeholder.com/150?text=Parceiro+2",
    "https://via.placeholder.com/150?text=Parceiro+3",
    "https://via.placeholder.com/150?text=Parceiro+4",
    "https://via.placeholder.com/150?text=Parceiro+5",
  ];

  return (
    <div className="text-start">
      <h1 className="text-4xl font-bold mb-4">Soluções em Tecnologia</h1>
      <p className="text-xl mb-8 text-gray-500">
        Na WLTECH SOLUTIONS, acreditamos no poder da tecnologia como alicerce
        para transformar desafios em oportunidades reais de crescimento. Com
        nossa expertise em desenvolvimento de software, estratégias digitais e
        suporte técnico especializado, ajudamos empresas a alcançar novos
        patamares de inovação e eficiência. Nosso compromisso vai além de
        entregar soluções. Trabalhamos lado a lado com nossos clientes para
        compreender suas necessidades, personalizar estratégias e implementar
        tecnologias que não apenas atendam às demandas atuais, mas também
        impulsionem o futuro de seus negócios. Seja otimizando processos,
        conectando pessoas ou criando experiências digitais únicas,
        transformamos ideias em resultados e oportunidades em vantagens
        competitivas. Na WLTECH, sua visão se torna realidade tecnológica.
      </p>

      {/* Banner Section */}
      <section className="bg-blue-600 text-white p-8 rounded-lg mb-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">
            Entre em contato com a gente
          </h2>
          <p className="text-lg mb-4">
            Nosso especialista está à disposição para tirar suas dúvidas e
            encontrar o melhor caminho para seu sucesso.
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            Entre em contato
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://ribasjr.com.br/wp-content/uploads/2024/06/O-Que-Voce-Precisa-para-Ser-um-Empreendedor-Digital.jpeg.webp"
            alt="Contato"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-6 ">Quem Somos</h2>
        <div className="w-full text-start">
          <p className="text-lg mb-4 text-gray-500">
            Na WLTECH, somos movidos pelo compromisso de criar soluções
            tecnológicas sob medida, atendendo às necessidades específicas de
            empresas de todos os tamanhos. Nosso foco está na inovação, na
            entrega de qualidade e na obtenção de resultados tangíveis para
            nossos clientes.
          </p>
          <p className="text-lg text-gray-500">
            Contamos com uma equipe altamente qualificada, formada por
            especialistas em diversas áreas, que colaboram para garantir que
            cada projeto seja único, eficiente e estrategicamente alinhado aos
            objetivos de negócio de nossos parceiros.
          </p>
        </div>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-6">O Que Fazemos</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Estratégia",
              description: "Planejamento estratégico para soluções escaláveis.",
            },
            {
              title: "Desenvolvimento",
              description: "Software robusto e seguro.",
            },
            {
              title: "Design",
              description: "Foco em experiência do usuário (UX/UI).",
            },
            {
              title: "Suporte",
              description: "Manutenção contínua e suporte técnico.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Nossos Parceiros</h2>
        <div className="justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {parceiros.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-gray-100 rounded-lg shadow-md w-48 h-48 flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Parceiro ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ServicesPage: React.FC = () => {
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

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Sobre a WLTECH SOLUTIONS
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="mb-4">
          Somos uma empresa especializada em soluções tecnológicas, comprometida
          em transformar desafios digitais em oportunidades de crescimento para
          nossos clientes.
        </p>
        <p className="mb-4">
          Com mais de 5 anos no mercado, nossa equipe de profissionais altamente
          qualificados oferece serviços personalizados de desenvolvimento de
          software, consultoria e suporte técnico.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Nossos Valores</h2>
          <ul className="list-disc list-inside">
            <li>Inovação</li>
            <li>Qualidade</li>
            <li>Comprometimento</li>
            <li>Transparência</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulário enviado! (Implementação real de envio seria necessária)");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Entre em Contato</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default TechServicesWebsite;
