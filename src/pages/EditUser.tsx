import React, { Component } from 'react'

interface IProps {
    visible: boolean
}
export default class EditUser extends Component<IProps, any> {
    handleOk = () => {
        
    }
    handleCancel = () => {
        
    }
    render() {
        return (
            <div>
                {/* <Modal title="Basic Modal" visible={this.props.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal> */}
            </div>
        )
    }
}
