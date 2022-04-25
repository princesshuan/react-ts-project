import { Button, message, Popconfirm } from 'antd';
import React, { Component } from 'react';
interface IProps {
    id: number,
    callback:(id:number)=>void
}
class DeleteUser extends Component<IProps,any> {
    deleteUser = () => {
        //网络请求 成功

        this.props.callback(this.props.id)

        //失败
        // message.warning('删除失败')
    }
    confirm = () => {
        this.deleteUser()
    }
    cancel = () => {
        message.warning('取消删除')
    }
    render() {
        return (
            <div>
                <Popconfirm
                    title="确认删除吗？"
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="确认"
                    cancelText="取消"
                >
                    <Button type="primary" danger >删除</Button>
                </Popconfirm>
                
            </div>
        );
    }
}

export default DeleteUser;