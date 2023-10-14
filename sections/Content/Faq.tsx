import Header from "deco-sites/web/components/ui/SectionHeader.tsx";

export interface Question {
  question: string;
  /** @format html */
  answer: string;
}

export interface Contact {
  title?: string;
  /** @format html */
  description?: string;
  link?: {
    text: string;
    href: string;
  };
}

export interface Props {
  title?: string;
  description?: string;
  questions?: Question[];
  contact?: Contact;
  layout?: {
    variation?: "Compact" | "Full" | "Side to side";
    headerAlignment?: "center" | "left";
  };
}

const DEFAULT_PROPS = {
  title: "",
  description: "",
  questions: [
    {
      question: "Como faço para acompanhar o meu pedido?",
      answer:
        "Acompanhar o seu pedido é fácil! Assim que o seu pedido for enviado, enviaremos um e-mail de confirmação com um número de rastreamento. Basta clicar no número de rastreamento ou visitar o nosso site e inserir o número de rastreamento na seção designada para obter atualizações em tempo real sobre a localização e o status de entrega do seu pedido.",
    },
    {
      question: "Qual é a política de devolução?",
      answer:
        "Oferecemos uma política de devolução sem complicações. Se você não estiver completamente satisfeito(a) com a sua compra, pode devolver o item em até 30 dias após a entrega para obter um reembolso total ou troca. Certifique-se de que o item esteja sem uso, na embalagem original e acompanhado do recibo. Entre em contato com a nossa equipe de atendimento ao cliente e eles o(a) orientarão pelo processo de devolução.",
    },
  ],
  contact: {
    title: "",
    description: "",
    button: {
      text: "",
      link: "",
    },
  },
};

function Question({ question, answer }: Question) {
  return (
    <details class="border-base-200 border-t collapse collapse-arrow join-item">
      <summary class="collapse-title font-medium text-lg">
        {question}
      </summary>
      <div
        class="collapse-content"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </details>
  );
}

function Contact({ title, description, link }: Contact) {
  return (
    <div class="flex flex-col gap-6 items-center text-center">
      <div class="flex flex-col gap-2">
        {title && <h2 class="lg:text-3xl text-xl">{title}</h2>}
        {description && (
          <div
            class="lg:text-xl text-lg"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
      {link &&
        <a href={link.href} class="btn">{link.text}</a>}
    </div>
  );
}

export default function FAQ(props: Props) {
  const {
    questions = [],
    title,
    description,
    contact,
    layout,
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <>
      {(!layout?.variation || layout?.variation === "Compact") && (
        <div class="container flex flex-col gap-4 lg:gap-8 lg:px-40 lg:py-10 px-4 py-8 w-full">
          <div class="flex flex-col gap-8 lg:gap-10">
            <Header
              title={title || ""}
              description={description || ""}
              alignment={layout?.headerAlignment || "center"}
            />
            <div class="join join-vertical w-full">
              {questions.map((question) => <Question {...question} />)}
            </div>
          </div>

          <Contact {...contact} />
        </div>
      )}

      {layout?.variation === "Full" && (
        <div class="container flex flex-col gap-4 lg:gap-8 lg:px-0 lg:py-10 px-4 py-8 w-full">
          <div class="flex flex-col gap-8 lg:gap-10">
            <Header
              title={title || ""}
              description={description || ""}
              alignment={layout?.headerAlignment || "center"}
            />
            <div class="join join-vertical w-full">
              {questions.map((question) => <Question {...question} />)}
            </div>
          </div>

          <Contact {...contact} />
        </div>
      )}

      {layout?.variation === "Side to side" && (
        <div class="container gap-8 grid grid-cols-1 grid-flow-row lg:grid-cols-2 lg:grid-flow-col lg:grid-rows-2 lg:px-0 lg:py-10 px-4 py-8 w-full">
          <div class="lg:order-1 order-1">
            <Header
              title={title || ""}
              description={description || ""}
              alignment={layout?.headerAlignment || "center"}
            />
          </div>
          <div class="lg:order-3 lg:row-span-2 order-2">
            <div class="join join-vertical">
              {questions.map((question) => <Question {...question} />)}
            </div>
          </div>
          <div class="lg:order-2 order-3">
            <Contact {...contact} />
          </div>
        </div>
      )}
    </>
  );
}
