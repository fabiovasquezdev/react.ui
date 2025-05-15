import notFoundImg from "@/assets/img/not-found.png"; // Save your image here

const NotFoundPage = () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
        <img src={notFoundImg} alt="Página não encontrada" className="max-w-xs mb-8" />
        <h2 className="text-slate-800 mb-4 text-2xl font-semibold">Página não encontrada</h2>
        <p className="text-slate-500 text-sm text-center max-w-md">
            O endereço que você tentou acessar não existe ou foi removido.<br />
            Verifique se digitou corretamente.
        </p>
    </div>
);

export default NotFoundPage;