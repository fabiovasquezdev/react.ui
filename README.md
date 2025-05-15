# VazCode

Este projeto que está em fase de desenvolvimento, mas o objetivo é oferecer uma base robusta, escalável e de fácil manutenção.

---

## 🚀 Tecnologias Utilizadas

- **[React](https://reactjs.org/)** (com Vite): Framework principal para construção da interface.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build e desenvolvimento ultrarrápida para projetos React modernos.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior robustez e produtividade.
- **[TailwindCSS](https://tailwindcss.com/)**: Framework utilitário para estilização rápida e responsiva.
- **[Redux](https://redux.js.org/)**: Gerenciamento de estado global, com estrutura modular de reducers.
- **[Ant Design (antd)](https://ant.design/)**: Biblioteca de componentes UI profissionais e acessíveis.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para requisições assíncronas e integração com APIs.
- **Interceptor Axios**: Middleware para tratamento global de requisições, autenticação, erros e loading.
- **Google Maps API**: Integração para exibição de mapas e recursos de geolocalização.
- **Estrutura Modular**: Separação clara entre apresentação, lógica de negócio, dados e infraestrutura.

---

## 📁 Estrutura de Pastas

```
src/
├── assets/                # Imagens, ícones e logos
├── components/            # Componentes reutilizáveis (ex: botões, footer, header)
├── data/                  # Serviços, repositórios e integrações externas
├── domain/                # Entidades, casos de uso e regras de negócio
├── hooks/                 # Custom hooks (ex: useAuth, useMap)
├── infra/                 # Configurações de infraestrutura (ex: axios, interceptors)
├── layout/                # Layouts de página e wrappers
├── presentation/          # Páginas, views e componentes visuais
│   └── pages/
│       └── private/
│           └── home/      # Página principal (Home) e suas seções
├── store/                 # Redux: reducers, actions, middlewares
│   └── reducers/
├── utils/                 # Funções utilitárias e helpers
├── App.tsx                # Componente raiz
├── main.tsx               # Entry point da aplicação
└── index.scss             # Estilos globais (TailwindCSS)
```

---

## 🧩 Principais Funcionalidades

- **Modal de Cases**: Exibição de cases de sucesso via modal controlado por Redux e Ant Design.
- **Exemplo de Redux**: Contador global e controle de modal usando Redux.
- **Integração com Google Maps**: Exemplo de uso para localização e mapas.
- **Interceptor Axios**: Tratamento global de autenticação, erros e loading em requisições HTTP.
- **Design Responsivo**: Layout adaptável para desktop, tablet e mobile.
- **Componentização**: Reaproveitamento de componentes e fácil manutenção.

---

## ⚙️ Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/fabiovasquezdev/react.ui.git
   cd seu-repo
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Configure variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis (exemplo):
   ```env
   VITE_API_URL=https://sua-api.com
   VITE_GOOGLE_MAPS_KEY=sua-chave-google-maps
   VITE_APP_NAME=VazCode
   # Outras variáveis customizadas...
   ```

   > **Dica:** Nunca compartilhe sua chave do Google Maps ou tokens sensíveis publicamente.

4. **Rode o projeto:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse em:**  
   [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Customização e Expansão

- **Adicionar novos serviços/cases:**  
  Integrar com uma API.
- **Adicionar novas páginas:**  
  Crie um novo diretório em `src/presentation/pages/` e registre a rota.
- **Integração com backend:**  
  Utilize os serviços em `src/data/` e configure endpoints no Axios.
- **Configurar Google Maps:**  
  Insira sua chave em `VITE_GOOGLE_MAPS_KEY` e utilize os hooks/componentes de mapa.
- **Personalizar tema:**  
  Edite o arquivo `index.scss` ou as configurações do Tailwind para alterar cores, fontes e espaçamentos.

---

## 👨‍💻 Contribuição

Pull requests são bem-vindos! Sinta-se à vontade para abrir issues e sugerir melhorias.

---

## 📄 Licença

Este projeto está sob a licença MIT.
