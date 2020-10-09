import React, { Component } from 'react'
import CardItem from './CardItem'

export default class Modal extends Component {

    renderCartList = ()=>{
        return this.props.cardList.map((card,index)=>{
            return <CardItem key={index} card={card} deleteItem={this.props.deleteItem} tangGiamSoLuong={this.props.tangGiamSoLuong}/>;
        })
	}
	

    render() {
        return (
            <div
						className="modal fade"
						id="modelId"
						tabIndex={-1}
						aria-labelledby="modelTitleId"
						style={{ display: "none" }}
						aria-hidden="true"
					>
						<div
							className="modal-dialog"
							role="document"
							style={{ maxWidth: 1000 }}
						>
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">Giỏ hàng</h5>
									<button
										type="button"
										className="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">×</span>
									</button>
								</div>
								<div className="modal-body">
									<table className="table">
										<thead>
											<tr>
												<th>Mã sản phẩm</th>
												<th>tên sản phẩm</th>
												<th>hình ảnh</th>
												<th>số lượng</th>
												<th>đơn giá</th>
												<th>thành tiền</th>
											</tr>
										</thead>
										<tbody>
                                            {this.renderCartList()}
                                        </tbody>
									</table>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
									<button type="button" className="btn btn-primary">
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
        )
    }
}
