import React, { Component } from 'react'
import QRScanner from 'qr-code-scanner';
import { Button, Modal } from 'antd';
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
                onResult: result => { this.setState({ scanFlag: true, scanResult: result }) },
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
            <div></div>
        );
        return (
            <div>
                <Button type="primary" size="large" onClick={this.initScanner}>Open Scanner</Button>
                <Modal
                    title="User QRcode Scanner"
                    visible={this.state.modalShow}
                    okText="Check User Detail"
                    cancelText="Cancel"
                    onCancel={() => {
                        this.setState({ modalShow: false, scanFlag: false }, () => {
                            QRScanner.stop();
                        })
                    }}
                    onOk={() => {
                        this.setState({ modalShow: false, scanFlag: false }, () => {
                            QRScanner.stop();
                        })
                    }}
                >
                    <div id="scanner-container"></div>
                    {
                        this.state.scanFlag && this.state.scanResult !== '' ? (<span>Scan Result:::{this.state.scanResult}</span>) : null
                    }
                </Modal>
            </div >
        )
    }
}
