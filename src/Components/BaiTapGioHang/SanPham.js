import React, { Component } from 'react'

export default class SanPham extends Component {
    hanldeDetail =()=>{
        const currentProduct = this.props.product;
        // console.log("run");
        this.props.xuLyChiTiet(currentProduct);
    }
    
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.product.hinhAnh} alt="aa" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.product.tenSP}</h4>
                    <button className="btn btn-success" onClick={this.hanldeDetail}>Chi tiết</button>
                    <button className="btn btn-danger" onClick={()=>{this.props.hanldeCardList(this.props.product)}}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
