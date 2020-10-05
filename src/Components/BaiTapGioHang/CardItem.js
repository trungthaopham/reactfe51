import React, { Component } from "react";

export default class CardItem extends Component {
	render() {
		return (
			<tr className="card-item">
				<td>{this.props.card.maSP}</td>
				<td>{this.props.card.tenSP}</td>
				<td>
					<img src={this.props.card.hinhAnh} width={50} alt="" />
				</td>
				<td>
					<button>-</button>{this.props.card.soLuong}<button>+</button>
				</td>
				<td>{this.props.card.giaBan}</td>
				<td>7600000</td>
				<td>
					<button className="btn btn-danger">Delete</button>
				</td>
			</tr>
		);
	}
}
