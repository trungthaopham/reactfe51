import React, { Component, PureComponent } from 'react'

export default class ChildComponent extends PureComponent {
    // purecomponent giúp nhận pk và render lại khi props thay đổi
    constructor(props){
        super(props);
        this.state ={}
        console.log("Contructor child")
    }
    static getDerivedStateFromProps(newProps, currentState){
        console.log("getDriverdStateFromPropsChild")
        return null;

    }
    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate child')
    //     return true;
    // }

    render() {
        console.log('render child')
        return (
            <div>
                <h3>Child number: {this.props.number}</h3>
                Component Child
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMountchild")
    }
    componentDidUpdate(){
        console.log("componentDidUpdatechild")
    }
    componentWillUnmount(){
        //Life cycle chạy được khi 
        console.log("componentWillUnmount")
    }
}
