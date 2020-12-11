import React, { Component } from 'react'
import QRScanner from 'qr-code-scanner';
export default class QRcodeScanner extends Component {
    componentDidMount() {
        QRScanner.initiate({
            onResult: result => { console.log(result); },
            onError: err => { console.log(err) },
            timeout: 10000,
        });
    }
    render() {
        return (
            <div>
                测试
            </div>
        )
    }
}
