import { LeftOutlined } from '@ant-design/icons';
import { Button, FloatButton, Layout as ReactLayout, Space, Typography, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Article from './Article';
import CardList from './CardList';

const { Content } = ReactLayout;
const { Title } = Typography;

export interface MenuItem {
  label: string;
  description?: string;
  media?: string;
  media_details?: string;
  key: string;
  content?: string[];
  children?: MenuItem[]
}

export const findElementByKey = (elements: MenuItem[], key: string, searchCallback: (element: MenuItem) => boolean): MenuItem | undefined => {
  for (const element of elements) {
    if (searchCallback(element)) {
      return element; // Return the element if found
    }

    if (element.children) {
      const foundChild = findElementByKey(element.children, key, searchCallback);
      if (foundChild) {
        return foundChild; // Return the found child element
      }
    }
  }

  return undefined;
};


const Layout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const { pathname } = useLocation();




  return (
    <ReactLayout style={{ minHeight: "100vh" }
    } >
      <Header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Space>
          {pathname !== '/' && <Button
            style={{ verticalAlign: 'middle', marginTop: '8px' }}
            icon={< LeftOutlined style={{ color: 'white' }} />}
            type="text"
            onClick={() => navigate(-1)} >


          </Button>}
          < Title style={{ color: 'white' }}> Dengue </Title>
        </Space>
      </Header>

      < Content style={{
        padding: '2rem 1rem',
        justifyContent: 'center'
      }}
      >
        <div
          style={
            {
              background: colorBgContainer,
              borderRadius: borderRadiusLG,

            }
          }
        >

          <Routes>

            <Route index element={<CardList />}></Route>
            <Route path="/article/:articleId" element={<Article />}></Route>
            <Route path="/articles/:itemKey" element={<CardList />}></Route>

          </Routes>

          <FloatButton.BackTop />
        </div>

      </Content>
    </ReactLayout >
  );
};

export default Layout;
