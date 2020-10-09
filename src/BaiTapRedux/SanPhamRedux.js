import React, { Component } from "react";

export default class SanPhamRedux extends Component {
	render() {
		let {sanPham} = this.props;
		return (
				<div className="card text-left">
					<img className="card-img-top img-fluid" src={sanPham.hinhAnh} />
					<div className="card-body">
					<h4 className="card-title">{sanPham.tenSP}</h4>
					<p className="card-text">{sanPham.giaBan}</p>
					</div>
				</div>
		); 
	}
}
