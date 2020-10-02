import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps'

export default class DemoProps extends Component {

    state ={
        ten: "Phạm Trung Thảo",
        lop: 51,
    }

    render() {
        return (
            <div>
                <h2>Props</h2>
                <FunctionProps 
                    // truyền props trong reactjs
                    hoVaTen={this.state.ten}
                    lop={this.state.lop}
                    />
                <ClassProps 
                    hoVaTen={this.state.ten}
                    lop={this.state.lop}
                />
            </div>
        )
    }
}
