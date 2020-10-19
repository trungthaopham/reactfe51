import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state ={
            number:{
                index:1
            }
        };
        console.log('contructor');
    }
    static getDerivedStateFromProps(newProps, currentState){
        console.log('getDrivedStateFromProps');
        return null;
    }



    render() {
        console.log("render")
        return (
            <div>
                4565
                <header>Header Component</header>
                <h1>LifeCycle number: {this.state.number}</h1>
                <button onClick={()=>{
                    let newNumber = {...this.state.number};
                    newNumber.index +=1;
                    this.setState({
                    number:newNumber
                })
                }}    >+</button>
                {/* {this.state.number <3 ? 
                < ChildComponent/> : ''} */}
                <ChildComponent number={this.state.number.index}/>
            </div>
        )
    }
    componentDidMount(){
        // gọi API tại didmount
        console.log('componentDidMount');
    }


    componentDidUpdate(){
        //Hàm chạy lại khi setState hoặc thay đổi props
        console.log('componentDidUpdate');
    }
}
