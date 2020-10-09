import React, { Component } from "react";
import SanPhamGHRedux from "./SanPhamGHRedux";

//import thu vuieenj kết nối react - redux store
import { connect } from 'react-redux';
class GioHangRedux extends Component {

    renderGioHang = () => {
        return <SanPhamGHRedux />
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
    return {
        gioHang: state.StateBaiTapGioHang.gioHang
    }
}

export default connect()(GioHangRedux); // kết nối giữa gioHangReduxComponent và redux store
