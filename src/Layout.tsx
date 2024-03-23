import { LeftOutlined } from '@ant-design/icons';
import { Button, Layout as ReactLayout, Space, Typography, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import * as React from 'react';
import { useState } from 'react';
import Article from './Article';
import CardList from './CardList';
import data from './data.json';

const { Content } = ReactLayout;
const { Title } = Typography;

export interface MenuItem {
  label: string;
  description?: string;
  media?: string;
  key: string;
  content?: string[];
}

const Layout: React.FC = () => {
  const items: MenuItem[] = data;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedPage, setSelectedPage] = useState<MenuItem | null>(null);

  console.log({ selectedPage })


  return (
    <ReactLayout style={{ minHeight: "100vh" }}>

      <Header style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '1rem' }}>
        <Space>
          {selectedPage && <Button
            style={{ verticalAlign: 'middle', marginTop: '8px' }}
            icon={<LeftOutlined style={{ color: 'white' }} />}
            type="text"
            onClick={() => setSelectedPage(null)} >


          </Button>}
          <Title style={{ color: 'white' }}>Dengue</Title>
        </Space>
      </Header>

      <Content style={{ padding: '2rem 1rem' }}>
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div style={{
            padding: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center', minHeight: '600px'
          }}>
            {!selectedPage ?
              <CardList items={items} onSelect={setSelectedPage} /> :
              <Article item={selectedPage} />
            }
          </div>
        </div>
      </Content>
    </ReactLayout >
  );
};

export default Layout;
