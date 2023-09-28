import { Tabs, ConfigProvider } from 'antd';
import { useState } from 'react';
import type { TabsProps } from 'antd';
import TabItems from './TabItems';


const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Program Details',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Application Form',
    children: <TabItems  />,
  },
  {
    key: '3',
    label: 'Workflow',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Preview',
    children: 'Content of Tab Pane 4',
  }
];


const BaseTab = () => {

  const [activeTabKey, setActiveTabKey] = useState<string>('');

  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };
  
  const baseStyles: React.CSSProperties = {
    width: '100%',
    background: '#fff'
  }

  console.log(activeTabKey)

  return ( 
    <div style={baseStyles}>
      <ConfigProvider
        theme={{
          token: {
            // colorPrimary: '#1D4ED8',
            // colorText: '#0B0B0B',
            lineType: 'solid',
            lineWidthBold: 0,
            // colorBgContainer: '#ff0000'
          },
          components: {
            Tabs: {
              inkBarColor: '#fff',
              cardBg: '#ff0000'
            }
          }
        }}
      >
        <Tabs
          defaultActiveKey="2"
          items={items}
          onChange={onTabChange}
          tabBarStyle={{
            boxShadow: '0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            // background: '#00635B',
            height: '100px',
            marginBottom: '4rem'
          }}
        />
      </ConfigProvider>
    </div>
   );
}
 
export default BaseTab;