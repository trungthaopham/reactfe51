import React, { Component } from "react";
import SanPhamGHRedux from "./SanPhamGHRedux";

//import thu vuieenj kết nối react - redux store
import { connect } from 'react-redux';
class GioHangRedux extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((sanPham, index) => {
            return <tr key={index}>
                <td>{sanPham.maSP}</td>
                <td>{sanPham.tenSP}</td>
                <td><img src={sanPham.hinhAnh} width="50px"></img></td>
                <td><button onClick={()=>{this.props.tangGiamSoLuong(sanPham.maSP,false)}}> - </button>
                {sanPham.soLuong}
                <button onClick={()=>{this.props.tangGiamSoLuong(sanPham.maSP,true)}}> +</button></td>
                <td>{sanPham.giaBan}</td>
                <td>{sanPham.soLuong * sanPham.giaBan}</td>
                <td><button className="btn btn-danger" onClick={() => this.props.xoaGioHang(sanPham.maSP)}>Xóa</button></td>
            </tr>
        })
        // console.log(this.props.gioHang);
    }


    render() {
        console.log("props:", this.props.gioHang)
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Hinh Ảnh</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>

                    </tr>
                </thead>
                <tbody>
                    {this.renderGioHang()}
                </tbody>
            </table>
        );
    }
}
// Lấy state từ redux store biến thành props của component
// tham số state: đại diện cho rootproducer
const mapStateToProps = (state) => {
    // console.log(state.stateBaiTapGioHang.gioHang)
    return {
        gioHang: state.stateBaiTapGioHang.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            // console.log(maSPClick);
            /// Tao ra action gui len reducer
            const action = {
                type: 'XOA_GIO_HANG',
                maSPClick
            }
            // dung ham dispatch dua len reducer
            dispatch(action);
        },
        tangGiamSoLuong: (maSP,tangGiam)=>{
            const action = {
                type: 'TANG_GIAM_GIO_HANG',
                maSP,
                tangGiam
            }
            dispatch(action);

        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux); // kết nối giữa gioHangReduxComponent và redux store
