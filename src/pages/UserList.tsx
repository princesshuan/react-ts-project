import { Table, Space, Button, message } from 'antd';
import React, { Component } from 'react';
import DeleteUser from './DeleteUser';
// const { Column } = Table;
interface IUser {
    id: number
    name: string
}
interface IState {
    userList:IUser[]
}
class UserList extends Component<any, IState> {
    constructor(props:any) {
        super(props);
        let userList: IUser[] = []
        for (let i = 0; i < 100; i++) {
            userList.push({
                id: i,
                name:"user"+i
            })
        }
        this.state = {
            userList:userList
        }
    }
    deleteUser = (id:number) => {
        console.log(id,'id');
        this.setState({ userList: this.state.userList.filter(user => user.id !== id) });
        message.success('删除成功')
    }
    render() {
        return (
            // <div style={{width:500}}>
                <Table
                    dataSource={this.state.userList}
                    rowKey='id'
                >
                    <Table.Column
                        title={'id'}
                        dataIndex={'id'} />
                    <Table.Column
                        title={'用户名'}
                        dataIndex={'name'}
                    />
                    <Table.Column
                        title="管理"
                        key="action"
                        render={(user:IUser) => (
                            <Space size="middle">
                                <Button type="primary">编辑</Button>
                                <DeleteUser id={user.id} callback={this.deleteUser}/>
                            </Space>
                        )}
                    />
                </Table>
            // </div>
        );
    }
}

export default UserList;