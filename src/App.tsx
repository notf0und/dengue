import { ConfigProvider } from 'antd';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import './styles.css';



const App: React.FC = () => {


  return (
    <ConfigProvider
      theme={{
        token: {
          // colorPrimary: '#23b9ca',
          // borderRadius: 0,
          // colorBgContainer: '#fff',
          // colorBgBase: '#23b9ca'

        },

        components: {
          Layout: {
            headerBg: '#23b9ca',
            headerPadding: '1rem',
            // headerHeight: 100
          },
          Menu: {
            // itemBg: 'unset',
            // colorText: 'white',
            // fontSize: 16,
          }
        }
      }}
    >
      <BrowserRouter basename="/dengue">
        <Layout />
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;