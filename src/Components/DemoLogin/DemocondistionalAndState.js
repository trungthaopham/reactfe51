import React, { Component } from 'react'

export default class DemocondistionalAndState extends Component {
    /**
     * isLogin la thuoc tinh cua class
     *      true:login->hien user
     *      false:out -> hiện button
     */
    state = {
        isLogin : false,
    }

    
    // isLogin = false; -> render ko chay lai biến
    // phương thức của class
    handelLogin = ()=>{
        // console.log("á")
        // this.isLogin= true;
        // this.state.isLogin = true; -> render cũng ko chạy lại
        this.setState({
            isLogin :true,
        })
    }
    
    renderLogin = ()=>{
        if(this.state.isLogin){
            return <p>Trung Thảo</p>
        }else{
            return <button className="btn-primary btn" onClick={()=>{this.handelLogin()}}>Login</button>
        }
    }
    
    // render là pthuc cập nhật lại giao diện
    render() {
        console.log("aaaaaa");
        return (
            <div>
                <h2>Conditionnal And State</h2>
                {this.renderLogin()}
            </div>

            
        )
    }
}
