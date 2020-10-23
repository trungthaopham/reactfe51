import React, { Component } from 'react'
import FormComponent from './FormComponent'
import { connect } from 'react-redux'
import { QuanLyNguoiDungReducer } from '../redux/reducers/QuanLyNguoiDungReducer'
import { suaNguoiDungAction, xoaNguoiDungAction } from '../redux/action/QuanLyNguoiDungAction'
import NewFromComponent from './NewFromComponent'


class DanhSachNguoiDung extends Component {
    renderMangNguoiDung = ()=>{
        return this.props.mangNguoiDung.map((item,index)=>{
            return <tr key={index}>
                <td >{item.maNguoiDung}</td>
                <td >{item.tenNguoiDung}</td>
                <td >{item.soDienThoai}</td>
                <td >{item.email}</td>
                <td className="text-center">
                    <button className="btn btn-success mr-2"
                    onClick={()=>{
                        // tạo action từ nguoi dung click
                        let action = suaNguoiDungAction(item);
                        this.props.dispatch(action);
                    }}
                    >Sửa</button>
                    <button className="btn btn-danger" onClick={()=>{
                        // gọi hàm trong mapDispatchtoprops

                        // ham này sử dụng kho connect với redux sẽ tự có props này
                        // let action = {
                        //     type: 'XOA_NGUOI_DUNG',
                        //     maNguoiDung:item.maNguoiDung
                        // }
                        this.props.dispatch(xoaNguoiDungAction(item.maNguoiDung))
                    }}>Xóa</button>
                </td>
            </tr>
        })
    }
    render() {
        // console.log(this.props.mangNguoiDung)
        return (
            <div className="container">
                {/* <FormComponent/> */}
                <NewFromComponent/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã người dùng</th>
                            <th>Tên người dùng</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMangNguoiDung()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
        return {
            mangNguoiDung:state.QuanLyNguoiDungReducer.mangNguoiDung
        }
}

const mapDispatchToProps = {
    
}
export default connect(mapStateToProps)(DanhSachNguoiDung)