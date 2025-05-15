import { ButtonV } from "@/presentation/components/custom/button"
import contact from "@/assets/img/contact_us.png"

interface ContactUsProps {
  title: string;
  description: string;
  ctaText: string;
}

export const ContactUs = ({ title, description, ctaText }: ContactUsProps) => {
  return (
    <section id="contact" className="px-4 md:px-10 py-16 ">
      <h2 className="text-2xl font-bold mb-2 text-center md:text-left">{title}</h2>
      <p className="mb-8 text-center md:text-left text-gray-600">{description}</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <form className="flex-1 max-w-xl w-full flex flex-col gap-4 p-8 border-none order-2 md:order-1">
          <input className="border p-3 rounded-3xl" placeholder="Seu nome*" required />
          <input className="border p-3 rounded-3xl" placeholder="Seu e-mail*" type="email" required />
          <input className="border p-3 rounded-3xl" placeholder="Nome da empresa*" required />
          <textarea className="border p-3 rounded-3xl" placeholder="Detalhes do projeto*" rows={4} required />
          <ButtonV>{ctaText}</ButtonV>
        </form>
        <div className="flex-1 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="w-60 h-60 md:w-72 md:h-72 bg-gray-100 rounded-2xl flex items-center justify-center">
            <img src={contact} alt="contact" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};