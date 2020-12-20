// import QRcodeScanner from './pages/QRcodeScanner';
import HomePage from './pages/Home/HomePage';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './App.css';
function App() {
  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <HomePage />
      </ConfigProvider>
    </div>
  );
}

export default App;
