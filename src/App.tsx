
import { useState } from 'react';
import { Layout, ConfigProvider } from 'antd';
import Navbar from './components/Navbar';
import BaseTab from './components/BaseTab';
import './App.css'

const { Header, Content } = Layout;


function App() {

  const [collapsed, setCollapsed] = useState(true);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: '#fff'
          }
        }
      }}
    >
      <Layout>
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout style={{ marginLeft: '80px'}}>
          <Header style={{ padding: 0, background: '#fff', height: '13vh'}} />
          <Content style={{ margin: '0', }}>
            <BaseTab  />
            {/* <div style={{ padding: 24, minHeight: 360, }}>
              Bill is a cat.
            </div> */}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App
