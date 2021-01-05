import React, { Component } from 'react'
import { Layout } from 'antd';
import QRcodeScanner from '../../components/qr-scanner/QRcodeScanner';
import SiderPage from './SiderPage';
const { Header, Content } = Layout;
export default class HomePage extends Component {
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
                                <QRcodeScanner />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
