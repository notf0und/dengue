import { ConfigProvider } from 'antd';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import ScrollToTop from './ScrollToTop';
import './styles.css';




const App: React.FC = () => {


  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: '#23b9ca',
            headerPadding: '1rem',
          },
        }
      }}
    >
      <BrowserRouter basename={import.meta.env.PROD ? "/dengue" : '/'}>
        <ScrollToTop />
        <Layout />
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;