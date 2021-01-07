import React, { Component } from 'react'
import { Layout, Result, Button, Modal, Divider, Descriptions, List } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import QRcodeScanner from '../../components/qr-scanner/QRcodeScanner';
import SiderPage from './SiderPage';
const { Header, Content } = Layout;
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scanResult: '',
            // 访客记录
            userRecordListShow: false,
            // 记录内容
            setRecordListShow: false,
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
                                            <div>
                                                <Result
                                                    status="success"
                                                    title="访客登记成功，准备开始整活～"
                                                    subTitle=""
                                                    extra={
                                                        <Button type="primary" key="primary">
                                                            记录本次服务内容
                                                    </Button>
                                                    }
                                                />
                                                <Divider>基本信息</Divider>
                                                <div style={{ backgroundColor: '#ffffff' }}>
                                                    <Descriptions bordered>
                                                        <Descriptions.Item label="访客姓名">行走的钱袋子1号</Descriptions.Item>
                                                        <Descriptions.Item label="手机号">1810000000</Descriptions.Item>
                                                        <Descriptions.Item label="所在省市">北京市顺义区</Descriptions.Item>
                                                        <Descriptions.Item label="首次到店">是</Descriptions.Item>
                                                        <Descriptions.Item label="住址">
                                                            北京市顺义区一个中风险地区就问你怕不怕～
                                                        </Descriptions.Item>
                                                    </Descriptions>
                                                </div>
                                                <Divider>到店记录</Divider>
                                                <div style={{ backgroundColor: '#ffffff', paddingLeft: '12px' }}>
                                                    <List
                                                        itemLayout="horizontal"
                                                        dataSource={[
                                                            {
                                                                title: '体验了一波健康镜+脉诊仪',
                                                                date: '2020-12-01 11:11:11'
                                                            },
                                                            {
                                                                title: '魏大夫给安排了一波扶阳罐，美滋滋',
                                                                date: '2020-12-10 09:00:00'
                                                            },
                                                            {
                                                                title: '魏大夫又给安排了一波五脏鸠，爽歪歪',
                                                                date: '2020-12-20 09:00:00',
                                                            },
                                                            {
                                                                title: '魏大夫还安排了一波耳穴仪，舒服了',
                                                                date: '2020-12-30 09:00:00'
                                                            },
                                                        ]}
                                                        renderItem={item => (
                                                            <List.Item>
                                                                <List.Item.Meta
                                                                    title={item.title}
                                                                    description={item.date}
                                                                />
                                                            </List.Item>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        )

                                }
                                {/* 本次服务内容 */}
                                <Modal
                                    visible={this.state.setRecordListShow}
                                ></Modal>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
