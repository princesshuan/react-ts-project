import React, { Component } from 'react';
import { Button } from "antd";
import '../home.css'

interface IState {
    width: number
}
class Home extends Component<any, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            width: 500
        }
    }

    change = () => {
        this.setState((state, props) => ({
            width: state.width + 10
        }))
    }
    render() {
        return (
            <div>
                <div className={this.state.width > 550 ? 'title' : ''} style={{
                    width: `${this.state.width}px`,
                    background: 'red'
                }}>
                    home page
                </div>
                <Button type='primary' onClick={this.change}>change</Button>
            </div>


        );
    }
}

export default Home;