import logo from "@/assets/img/logo/vazcode_black.png"

export const Header = () => {
    return <header className="flex justify-between items-center py-6 px-10">
        <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-44 h-10" />
        </div>
        <nav className="flex gap-8 text-sm font-medium">
            <a href="#services">Serviços</a>
            <a href="#about">Sobre</a>
            <a href="#benefits">Benefícios</a>
            <a href="#contact">Contato</a>
        </nav>
    </header>
}