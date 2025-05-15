import { ButtonV } from "@/presentation/components/custom/button"
import about from "@/assets/img/about.png"

interface AboutProps {
  title: string;
  description: string;
  highlights: string[];
}

export const About = ({ title, description, highlights }: AboutProps) => {
    return <section id="about" className="flex flex-col md:flex-row items-center justify-between px-10 py-16 gap-10 bg-white">
        <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400"><img src={about} alt="about" className="w-full h-full" /></span>
            </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <ul className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-700">
                {highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <ButtonV className="mt-4 w-max">Saiba mais</ButtonV>
        </div>
    </section>
}