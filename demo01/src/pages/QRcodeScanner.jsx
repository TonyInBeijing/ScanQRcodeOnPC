import React, { Component } from 'react'
import QRScanner from 'qr-code-scanner';
import { Button, Modal } from 'antd';
import './qrcode-scanner.css';
export default class QRcodeScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
        }
        this.initScanner = this.initScanner.bind(this);
    }
    componentDidMount() {
    }
    initScanner() {
        this.setState({ modalShow: true }, () => {
            QRScanner.initiate({
                onResult: result => { console.log(result); },
                onError: err => { console.log(err) },
                timeout: 100000,
                className: 'video-container',
                parent: document.getElementById('scanner-container'),
            });
        });
    }
    render() {
        return (
            <div>
                <Button type="primary" size="large" onClick={this.initScanner}>开始扫码</Button>
                <Modal
                    title="ScannerModal"
                    visible={this.state.modalShow}
                    onCancel={() => { this.setState({ modalShow: false }) }}
                    onOk={() => { this.setState({ modalShow: false }) }}
                >
                    <div id="scanner-container"></div>
                </Modal>
            </div>
        )
    }
}
