const About: React.FC = () => {
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

export default About;
