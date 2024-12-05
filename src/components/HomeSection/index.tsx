const HomeSection: React.FC = () => {
  // const parceiros = [
  //   "https://via.placeholder.com/150?text=Parceiro+1",
  //   "https://via.placeholder.com/150?text=Parceiro+2",
  //   "https://via.placeholder.com/150?text=Parceiro+3",
  //   "https://via.placeholder.com/150?text=Parceiro+4",
  //   "https://via.placeholder.com/150?text=Parceiro+5",
  // ];

  return (
    <div className="text-start">
      <h1 className="text-4xl font-bold mb-4">Soluções em Tecnologia</h1>
      <p className="text-xl mb-8 text-gray-500">
        Na EW TECH, acreditamos no poder da tecnologia como alicerce para
        transformar desafios em oportunidades reais de crescimento. Com nossa
        expertise em desenvolvimento de software, estratégias digitais e suporte
        técnico especializado, ajudamos empresas a alcançar novos patamares de
        inovação e eficiência. Nosso compromisso vai além de entregar soluções.
        Trabalhamos lado a lado com nossos clientes para compreender suas
        necessidades, personalizar estratégias e implementar tecnologias que não
        apenas atendam às demandas atuais, mas também impulsionem o futuro de
        seus negócios. Seja otimizando processos, conectando pessoas ou criando
        experiências digitais únicas, transformamos ideias em resultados e
        oportunidades em vantagens competitivas. Na EW TECH, sua visão se torna
        realidade tecnológica.
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
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-center shadow-md"
            >
              <h3 className="lg:text-xl font-semibold mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="text-center">
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
      </section> */}
    </div>
  );
};
export default HomeSection;
