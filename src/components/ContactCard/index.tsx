import { useState } from "react";

const ContactCard: React.FC = () => {
  // Estados para controlar os campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica dos campos
    if (!nome || !email || !assunto || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Corpo do e-mail formatado
    const corpoEmail = `
Nome: ${nome}
E-mail de Contato: ${email}

Mensagem:
${mensagem}
    `;

    // Codificar o corpo do e-mail e o assunto para URL
    const corpoEmailCodificado = encodeURIComponent(corpoEmail);
    const assuntoCodificado = encodeURIComponent(assunto);

    // Abre o cliente de e-mail padrão
    window.location.href = `mailto:evertonfran@hotmail.com?subject=${assuntoCodificado}&body=${corpoEmailCodificado}`;

    // Limpar o formulário após o envio
    setNome("");
    setEmail("");
    setAssunto("");
    setMensagem("");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Entre em Contato</h2>
      <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 mb-6">
        <div className="flex items-center mb-4">
          {/* Ícone do telefone (Font Awesome) */}
          <svg
            className="mr-4 mt-1 w-4 h-4 text-gray-500 dark:text-orange-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 19 18"
          >
            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
          </svg>
          <a
            href="tel:+5511995417589"
            className="text-blue-600 hover:underline"
          >
            +55 11 995417589
          </a>
        </div>

        <div className="flex items-center mb-4">
          {/* Ícone do WhatsApp */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1 h-6 w-6 text-green-500 mr-3"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 2.09.54 4.1 1.58 5.88L0 24l6.3-1.66A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm0 22c-2.07 0-4.1-.54-5.88-1.58l-.35-.2-3.75.99.99-3.75-.2-.35A10.01 10.01 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.2-6.4c-.27-.13-1.58-.77-1.83-.86-.25-.1-.43-.13-.61.14-.18.27-.7.85-.86 1.02-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.16-1.34-.8-.71-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.33.4-.5.13-.16.18-.27.27-.45.1-.18.05-.33-.02-.46-.07-.13-.61-1.46-.84-2-.22-.52-.44-.45-.61-.45-.16 0-.34-.02-.52-.02-.18 0-.46.07-.7.33-.23.27-.92.9-.92 2.2s.94 2.53 1.08 2.7c.13.18 1.85 2.85 4.5 3.99.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.58-.64 1.8-1.26.23-.63.23-1.18.16-1.26-.06-.1-.22-.15-.45-.27z" />
          </svg>
          <a
            href={`https://wa.me/5511995417589?text=${encodeURIComponent(
              "Olá! Acabei de verificar no site que vocês trabalham com sistemas de software. Gostaria de mais informações!"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">
            Nome Completo
          </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Seu nome"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="seuemail@exemplo.com"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="assunto"
            className="block text-gray-700 font-bold mb-2"
          >
            Assunto
          </label>
          <input
            type="text"
            id="assunto"
            value={assunto}
            onChange={e => setAssunto(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Assunto do e-mail"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="mensagem"
            className="block text-gray-700 font-bold mb-2"
          >
            Mensagem
          </label>
          <textarea
            id="mensagem"
            value={mensagem}
            onChange={e => setMensagem(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escreva sua mensagem aqui..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Enviar E-mail
        </button>
      </form>
    </div>
  );
};

export default ContactCard;
