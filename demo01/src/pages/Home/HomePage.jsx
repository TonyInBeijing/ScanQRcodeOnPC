import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import QRcodeScanner from '../QRcodeScanner';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Layout style={{ height: '100vh' }}>
                    <Header style={{ paddingLeft: '24px' }}>
                        <span style={{ color: "#ffffff" }}>ProtoType I BETA</span>
                    </Header>
                    <Layout>
                        <Sider width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="WorkBench">
                                    <Menu.Item key="1">UserQRCode</Menu.Item>
                                    <Menu.Item disabled key="2">option2</Menu.Item>
                                    <Menu.Item disabled key="3">option3</Menu.Item>
                                    <Menu.Item disabled key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu disabled key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu disabled key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
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
