import { Layout } from "antd";
import { Outlet } from "react-router";
import { Content } from "antd/es/layout/layout";

export const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
