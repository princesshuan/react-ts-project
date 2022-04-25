import React, { Component } from 'react';
interface IUser {
    age: number
}
// interface IProps {
//     name: string
//     age?: number
//     auth?: boolean
//     user?: IUser
// }
class Lee extends Component<any, IUser> {
    constructor(props:any) {
        super(props);
        this.state = {
            age: 0
        }
        console.log('constructor');
        
    }
    componentDidMount() {
        console.log("componentDidMount");
        
    }
    
    render() {
        console.log("render");
        
        return (
            <div>
                <h1>{this.state.age}</h1>
                {/* <h2>{this.props.age}</h2>
                <h2>{this.props.user?.age}</h2> */}
            </div>
        );
    }
}

export default Lee;


