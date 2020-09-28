import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showTitle = ()=>{
            alert ('Hello word');
    }
    showMess = (mess)=>{
        alert (`hello${mess}`)
    }


    render() {
        return (
            <div>
                {/* Xử lý sự kiện truyền callback */}
                <button onClick={this.showTitle}>Click me!</button>
                {/* Xủ lý sự kiện sử dụng hàm trung gian */}
                <button onClick={()=>{this.showTitle()}}>Hola</button>
                <br></br>
                <br></br>
                <button onClick={this.showMess.bind(this,' Thảo')}>Show message</button>
                <button onClick={()=>{this.showMess(' Thảo')}}>Click show</button>
            </div>
        )
    }
}
