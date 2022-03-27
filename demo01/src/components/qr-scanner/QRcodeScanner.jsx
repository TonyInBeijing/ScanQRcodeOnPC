/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-27 10:46:06
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-27 13:27:51
 * @FilePath: /ScanQRcodeOnPC/demo01/src/components/qr-scanner/QRcodeScanner.jsx
 * @Description: 
 * 
 */
import React, { Component } from 'react'
import QRScanner from 'qr-code-scanner';
import { Button, Modal, Card, Avatar } from 'antd';
import './qrcode-scanner.css';
export default class QRcodeScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            scanFlag: false,
            scanResult: '',
        }
        this.initScanner = this.initScanner.bind(this);
    }
    componentDidMount() {
    }
    initScanner() {
        this.setState({ modalShow: true }, () => {
            QRScanner.initiate({
                onResult: result => {
                    this.setState({ scanFlag: true, scanResult: result });
                },
                onError: err => { console.log(err) },
                timeout: 100000,
                className: 'video-container',
                lockLayerClassName: 'lock-layer',
                parent: document.getElementById('scanner-container'),
            });
        });
    }
    render() {
        const scanResultDOM = (
            <div>
                <Card
                >
                    <Card.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="测试客户1"
                        description="请与客户确认扫描结果，确认无误后获取客户健康档案"
                    />
                </Card>,
            </div>
        );
        return (
            <div>
                <Button
                    type="primary"
                    size="large"
                    onClick={this.initScanner}
                >
                    扫码登记
                    </Button>
                <Modal
                    title="客户到店"
                    visible={this.state.modalShow}
                    okText="确定"
                    cancelText="取消"
                    okButtonProps={{ disabled: this.state.scanFlag === false }}
                    cancelButtonProps={{ disabled: this.state.scanFlag === false }}
                    onCancel={() => {
                        this.setState({ modalShow: false, scanFlag: false }, () => {
                            QRScanner.stop();
                            // 通知父组件扫面结果
                            this.props.onResult('');
                        })
                    }}
                    onOk={() => {
                        this.setState({ modalShow: false, scanFlag: false }, () => {
                            QRScanner.stop();
                            // 通知父组件扫面结果
                            this.props.onResult(this.state.scanResult);
                        })
                    }}
                >
                    <div id="scanner-container"></div>
                    {
                        this.state.scanFlag && this.state.scanResult !== '' ? scanResultDOM : null
                    }
                </Modal>
            </div >
        )
    }
}
