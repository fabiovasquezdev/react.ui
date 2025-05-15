import logo from "@/assets/img/logo/vazcode_black.png"
interface FooterProps {
  companyName: string;
}

export const Footer = ({ companyName }: FooterProps) => {
    return <footer className="flex flex-col md:flex-row justify-between items-center px-10 py-6 border-t text-sm text-gray-500 bg-white">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
            <span className="font-bold text-base"><img src={logo} alt="logo" className="w-20 h-5" /></span>
            <span>© 2025 {companyName}. Todos os direitos reservados.</span>
        </div>
        <nav className="flex gap-6">
            <a href="#services">Serviços</a>
            <a href="#about">Sobre</a>
            <a href="#benefits">Benefícios</a>
            <a href="#contact">Contato</a>
        </nav>
    </footer>
}