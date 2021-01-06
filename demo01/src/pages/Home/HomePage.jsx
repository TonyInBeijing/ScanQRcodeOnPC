import React, { Component } from 'react'
import { Layout, Result,Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import QRcodeScanner from '../../components/qr-scanner/QRcodeScanner';
import SiderPage from './SiderPage';
const { Header, Content } = Layout;
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scanResult: '',
        };
        this.onScanResult = this.onScanResult.bind(this);
    }
    onScanResult(res) {
        this.setState({ scanResult: res });
    }
    render() {
        return (
            <div>
                <Layout style={{ height: '100vh' }}>
                    <Header style={{ paddingLeft: '24px' }}>
                        <span style={{ color: "#ffffff" }}>ProtoType I BETA</span>
                    </Header>
                    <Layout>
                        <div style={{ height: '100%', borderRight: 0, backgroundColor: '#ffffff' }}>
                            <SiderPage />
                        </div>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Content
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                {
                                    this.state.scanResult === '' ?
                                        (
                                            <Result
                                                icon={<SmileOutlined />}
                                                title="欢迎使用还没想好叫啥系统，我们可以先试一试访客到店功能～"
                                                extra={<QRcodeScanner onResult={this.onScanResult} />}
                                            />
                                        ) :
                                        (
                                            <Result
                                                status="success"
                                                title="Successfully Purchased Cloud Server ECS!"
                                                subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                                                extra={[
                                                    <Button type="primary" key="console">
                                                        Go Console
                                              </Button>,
                                                    <Button key="buy">Buy Again</Button>,
                                                ]}
                                            />
                                        )

                                }
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
