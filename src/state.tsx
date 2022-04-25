import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
interface IState {
    counter: number
    
}
class state extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        //初始化
        this.state = {
            counter:0
        }
    }
    componentDidMount() {
        // setInterval(() => {
        //     this.setState({
        //         counter:this.state.counter +1
        //     })
        // }, 1000)
        for (let i = 0; i < 100; i++) {
            //修改
            this.setState((state, props) => ({
                counter: state.counter + 1

            }));
            console.log(this.state.counter);
        }
    }
    
    render() {
        return (
            <div>
                {this.state.counter}
                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default state;