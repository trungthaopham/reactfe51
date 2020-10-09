/**
 * Các bước thực hiện
 * 1.dàn layout 
 * 2. xác định dữ liệu thay đổi và lưu vào state
 * 3. Lấy data  trong state đi binding ra jsx
 * 4. render sản phẩm
 * 5. Xây dựng chứ năng xem chi tiêts
 * 6. xây dựng chứ năng thêm vào giỏ hàng
 * 7. xây dựng chứ năng tăng giảm số lượng
 * 8. xây dựng chứ năng xóa sản phẩm 
 * 9. Hiển thị tổng sản phẩm trong giỏ hàng
 */




import React, { Component } from "react";
import danhSachSanPham from "./data.json";
import Modal from "./Modal";
import SanPham from "./SanPham";
export default class BaiTapGioHang extends Component {
    state = {
        sanPhamChiTiet: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
            },
            cardList:[],
    }
    hanldeSanPhamChiTiet =(sanPhamChiTiet)=>{
        this.setState({
            sanPhamChiTiet,
        })
    }
    hanldeCardList = (sanPham)=>{
        // tìm vị trí sản phẩm
        const index = this.state.cardList.findIndex((card)=>{
            return card.maSP === sanPham.maSP;
        });
        let cardList = [...this.state.cardList];
        if(index!= -1){
            // tăng so luong
            cardList[index].soLuong += 1;

        }else{
            // them vao mang
            const newCard = { ...sanPham,soLuong:1};
            cardList = [...cardList, newCard];
        }
        
        this.setState({
            cardList, 
        });
    }


    renderDanhSachSanPham = ()=>{
        return danhSachSanPham.map((sanPham,index)=>{
            return <div className="col-sm-4" key={index}>
            <SanPham product={sanPham}
                    xuLyChiTiet={this.hanldeSanPhamChiTiet}
                    hanldeCardList = {this.hanldeCardList}
            />
        </div>

        })
        
	}
	
	// delete
	deleteItem = (maSP)=>{
		// xử lý giỏ hàng
		console.log(maSP);
		let gioHangUpdate = [...this.state.cardList];
		const indexSP = this.state.cardList.findIndex(spGH => spGH.maSP === maSP);
		if(indexSP !=1){
			gioHangUpdate.splice(indexSP,1);
		}

		// set lại state giỏ hàng
		this.setState({
			cardList:gioHangUpdate,
		})


	}
	tangGiamSoLuong = (maSP,tangGiam)=>{//true->tăng else false
		// tim nút + -
		console.log('maSP',maSP);
		console.log('Tanggiam',tangGiam);
		let gioHangUpdate = [...this.state.cardList];
		// const index = this.state.cardList.findIndex((spGH)=>{
        //     return spGH.maSP === maSP;
		// });
		let spGH = gioHangUpdate.find(sp => sp.maSP === maSP);
		if(spGH){
			console.log(spGH);
			if(tangGiam){
				spGH.soLuong += 1;
			} else{
				if(spGH.soLuong<=1){
					return
				}else{
					spGH.soLuong -= 1;
				}
			}
		}

		// set state lại
		this.setState({
			cardList: gioHangUpdate,
		})
	
	}
	tongSoLuong = ()=>{
		let tongSoLuong = this.state.cardList.reduce((soLuong,spGH,index)=>{return soLuong += spGH.soLuong},0)
		return tongSoLuong;
	}
	tongTien = ()=>{
		let tongTien = this.state.cardList.reduce((tongTien,spGH,index)=>{return tongTien += spGH.soLuong*spGH.giaBan},0)
		return tongTien;
	}


	render() {
		return (
			<div>
				<section className="container">
					<h3 className="title text-center">Bài tập giỏ hàng</h3>
					<div className="container text-center my-2">
						<button
							className="btn btn-danger "
							data-toggle="modal"
							data-target="#modelId"
						>
							Giỏ hàng ({this.tongSoLuong()} - {this.tongTien().toLocaleString()})
						</button>
					</div>
					<div className="container danh-sach-san-pham">
						<div className="row">
							{this.renderDanhSachSanPham()}
						</div>
					</div>
					<Modal cardList = {this.state.cardList}
							deleteItem={this.deleteItem}
							tangGiamSoLuong={this.tangGiamSoLuong}
					/>

					<div className="row">
						<div className="col-sm-5">
							<img className="img-fluid" src={this.state.sanPhamChiTiet.hinhAnh} alt />
						</div>
						<div className="col-sm-7">
							<h3>Thông số kỹ thuật</h3>
							<table className="table">
								<tbody>
									<tr>
										<td>Màn hình</td>
										<td>{this.state.sanPhamChiTiet.manHinh}</td>
									</tr>
									<tr>
										<td>Hệ điều hành</td>
										<td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
									</tr>
									<tr>
										<td>Camera trước</td>
										<td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
									</tr>
									<tr>
										<td>Camera sau</td>
										<td>{this.state.sanPhamChiTiet.cameraSau}</td>
									</tr>
									<tr>
										<td>RAM</td>
										<td>{this.state.sanPhamChiTiet.ram}</td>
									</tr>
									<tr>
										<td>ROM</td>
										<td>{this.state.sanPhamChiTiet.rom}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
