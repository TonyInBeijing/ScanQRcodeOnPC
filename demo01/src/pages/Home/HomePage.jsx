import React, { Component } from 'react'
import { Layout, Result, Button, Modal, Divider, Descriptions, List, Input, Row, Col, Card, Select } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import QRcodeScanner from '../../components/qr-scanner/QRcodeScanner';
import SiderPage from './SiderPage';
const { Header, Content } = Layout;
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scanResult: '',
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
                <Layout style={{ minHeight: '100vh' }}>
                    <Header style={{ paddingLeft: '24px' }}>
                        <span style={{ color: "#ffffff" }}>体验店管理系统</span>
                    </Header>
                    <Layout>
                        <div style={{ minHeight: '100vh', borderRight: 0, backgroundColor: '#ffffff' }}>
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
                                    this.state.scanResult == '' ?
                                        (
                                            <Result
                                                icon={<SmileOutlined />}
                                                title="欢迎使用体验店管理系统"
                                                extra={<QRcodeScanner onResult={this.onScanResult} />}
                                            />
                                        ) :
                                        (
                                            <div>
                                                <Result
                                                    status="success"
                                                    title="客户登记成功"
                                                    subTitle=""
                                                    extra={
                                                        <Button type="primary" key="primary" onClick={() => { this.setState({ setRecordListShow: true }); }}>
                                                            记录本次服务内容
                                                        </Button>
                                                    }
                                                />
                                                <Divider>基本信息</Divider>
                                                <div style={{ backgroundColor: '#ffffff' }}>
                                                    <Descriptions bordered>
                                                        <Descriptions.Item label="访客姓名">测试客户1</Descriptions.Item>
                                                        <Descriptions.Item label="手机号">18500031126</Descriptions.Item>
                                                        <Descriptions.Item label="所在省市">北京市昌平区</Descriptions.Item>
                                                        <Descriptions.Item label="首次到店">否</Descriptions.Item>
                                                        <Descriptions.Item label="住址">
                                                            北京市昌平区生命科学园
                                                        </Descriptions.Item>
                                                    </Descriptions>
                                                </div>
                                                <Divider>最新检测报告</Divider>
                                                <Row gutter={16}>
                                                    <Col key="1" span={8}>
                                                        <Card title="脉诊仪检测报告" extra={<Button type="link">查看详情</Button>} bordered={false}>
                                                            <p>这里是脉诊检测报告</p>
                                                            <p>这里是脉诊检测报告</p>
                                                            <p>这里是脉诊检测报告</p>
                                                        </Card>
                                                    </Col>
                                                    <Col key="2" span={8}>
                                                        <Card title="闻诊仪检测报告" extra={<Button type="link">查看详情</Button>} bordered={false}>
                                                            <p>这里是闻诊检测报告</p>
                                                            <p>这里是闻诊检测报告</p>
                                                            <p>这里是闻诊检测报告</p>
                                                        </Card>
                                                    </Col>
                                                    <Col key="3" span={8}>
                                                        <Card title="耳穴仪检测报告" extra={<Button type="link">查看详情</Button>} bordered={false}>
                                                            <p>这里是耳穴检测报告</p>
                                                            <p>这里是耳穴检测报告</p>
                                                            <p>这里是耳穴检测报告</p>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                                <Divider>产品&健康解决方案建议</Divider>
                                                <Row gutter={16}>
                                                    <Col span={12}>
                                                        <Card title="产品建议">
                                                            <p>根据您的检测结果，我们推荐您使用国珍牌松花粉</p>
                                                        </Card>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Card title="健康解决方案建议">
                                                            <p>根据您的检测结果，我们推荐您进行体重管理健康解决方案</p>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                                <Divider>到店记录</Divider>
                                                <div style={{ backgroundColor: '#ffffff', paddingLeft: '12px' }}>
                                                    <List
                                                        itemLayout="horizontal"
                                                        dataSource={[
                                                            {
                                                                title: '四诊合参测试',
                                                                date: '2020-12-01 11:11:11'
                                                            },
                                                            {
                                                                title: '扶阳罐体验',
                                                                date: '2020-12-10 09:00:00'
                                                            },
                                                            {
                                                                title: '耳穴仪体验',
                                                                date: '2020-12-20 09:00:00',
                                                            },
                                                            {
                                                                title: '呼吸气体检测',
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
                                    title="访客记录"
                                    onOk={() => { this.setState({ setRecordListShow: false }); }}
                                    onCancel={() => { this.setState({ setRecordListShow: false }); }}
                                >
                                    <Select placeholder="请选择服务项目" style={{ width: '100%' }}>
                                        <Select.Option value="project1">负压理疗</Select.Option>
                                        <Select.Option value="project2">五藏灸</Select.Option>
                                        <Select.Option value="project3">扶阳罐</Select.Option>
                                        <Select.Option value="project4">泥灸</Select.Option>
                                    </Select>
                                    <Divider></Divider>
                                    <Input.TextArea placeholder="输入访客本次做的项目" rows={5}></Input.TextArea>
                                </Modal>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
