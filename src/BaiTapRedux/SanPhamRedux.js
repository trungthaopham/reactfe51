import React, { Component } from "react";
import {connect} from 'react-redux';


class SanPhamRedux extends Component {
	render() {
		let {sanPham,themGioHang} = this.props;
		return (
				<div className="card text-left">
					<img className="card-img-top img-fluid" src={sanPham.hinhAnh} />
					<div className="card-body">
					<h4 className="card-title">{sanPham.tenSP}</h4>
					<p className="card-text">{sanPham.giaBan}</p>
					</div>
					<button className="btn btn-primary">Chi tiet</button>
					<button className="btn btn-secondary" onClick={()=>{
						themGioHang(sanPham)
					}}>Them gio hang</button>
				</div>
		); 
	}
}
const mapStateToProps = (state)=>{
    return {

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        themGioHang: (sanPhamClick)=>{
			// tu sản phẩm được click tạo giỏ hàng
			// console.log('aaaaa')
			let spGH = {...sanPhamClick,soLuong:1};
			// Để gửi giá trị lên reducer cần 1 obj có thuộc tính type để phân biệt state thay đổi
			let action ={
				type: 'THEM_GIO_HANG',//thuộc tính bắt buộc
				spGH:spGH,
			};
			//Dùng hàm dispatch mà redux cung cấp đưa lên action 
			dispatch(action);
			// console.log(sanPhamClick)
        }
    }
}
// tham so 1 ham connect là 1 hàm (callbackFunction): lấy giá trị từ reducer về
// tham so 2 ham connect là 1 hàm (callbackFunction): đưa các giá trị lên reducer
export default connect(mapStateToProps,mapDispatchToProps)(SanPhamRedux);