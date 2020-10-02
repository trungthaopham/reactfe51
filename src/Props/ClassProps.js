import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Class Props</h3>
                <p>Tên: {this.props.hoVaTen}</p>
                <p>Lớp: {this.props.lop}</p>
            </div>
        )
    }
}
