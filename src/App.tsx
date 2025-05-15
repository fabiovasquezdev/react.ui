import { ConfigProvider, ThemeConfig } from 'antd'
import { RouterProvider } from 'react-router-dom'
import ptBR from "antd/locale/pt_BR";
import { router } from './main/routes';

const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#376C83",
    colorLink: "#376C83",
  }
}
function App() {

  return (
    <div className="font-sans">
      <ConfigProvider locale={ptBR} theme={antdTheme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  )
}

export default App