import QRcodeScanner from './pages/QRcodeScanner';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './App.css';
function App() {
  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <QRcodeScanner />
      </ConfigProvider>
    </div>
  );
}

export default App;
