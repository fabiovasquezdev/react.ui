import { ButtonV } from "@/presentation/components/custom/button"
import hero from "@/assets/img/hero.png"

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  secondaryCtaText?: string;
  partners?: string[];
  secondaryCtaOnClick?: () => void;
}

export const Hero = ({ title, subtitle, ctaText, secondaryCtaText, partners, secondaryCtaOnClick }: HeroProps) => {
  return <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-32 py-16 gap-10 ">
    <div className="flex-1 flex flex-col gap-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
      <p className="text-lg text-gray-600">{subtitle}</p>
      <div className="flex gap-4 items-center mt-2">
        <ButtonV className="w-52">{ctaText}</ButtonV>
        {secondaryCtaText && <a href="#works" className="text-primary underline font-medium" onClick={secondaryCtaOnClick}>{secondaryCtaText}</a>}
      </div>
      {partners && (
        <div className="flex gap-6 mt-6 opacity-70">
          {partners.map((partner, idx) => (
            <span key={idx}>{partner}</span>
          ))}
        </div>
      )}
    </div>
    <div className="flex-1 flex justify-center">
      <div className="w-80 h-80  rounded-2xl flex items-center justify-center">
        <span className="text-gray-400">   <img src={hero} alt="hero" className="w-full h-full" /></span>
      </div>
    </div>
  </section>
}