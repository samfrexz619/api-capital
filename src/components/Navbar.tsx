import { MenuOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, ConfigProvider } from 'antd';
import homeIcon from '@/assets/home.svg'
import taskIcon from '@/assets/task.svg'
import { Links } from '@/lib/types';


const { Sider } = Layout;

const links: Links[] = [
  {
    name: 'home',
    icon: homeIcon,
    id: 1,
  },
  {
    name: 'storage',
    icon: taskIcon,
    id: 2,
  }
]

interface NavProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Navbar = ({ collapsed, setCollapsed }: NavProps) => {

  const siderStyles: React.CSSProperties = {
    background: '#fff',
    padding: '15px',
    overflow: 'auto',
    minHeight: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'none',
    boxShadow: '0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
    zIndex: 99,
  }

  const navStyles: React.CSSProperties = {
    // width: '100%',
    marginTop: '4rem',
    background: '#fff',
    height: '100%',
    border: 'none',
  }

  return ( 
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHoverBg: '#fff',
            activeBarHeight: 4,
            itemHeight: 50,
            itemSelectedBg: '#fff',
          },
        }
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={siderStyles}
      >
        <div className="demo-logo-vertical" />
        <Button
          type='text'
          style={{background: '#fff'}}
          onClick={() => setCollapsed(!collapsed)}>
          <MenuOutlined  style={{color: '#000', fontSize: '20px'}}/>
        </Button>
        <Menu
          style={navStyles}
          mode="inline"
          defaultSelectedKeys={['1']}
          items={links.map(link => {
            const key = link.id
            const icon = <img src={link.icon} alt="" style={{height: '25px', width: '25px', background: 'inherit', maxWidth: '140%'}} />
            const label = link.name
            return {
              key, icon, label
            }
          })}
        />
      </Sider>
    </ConfigProvider>
   );
}
 
export default Navbar;