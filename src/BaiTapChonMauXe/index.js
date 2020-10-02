/**Các bước thực hiện
 * 1/ dàn layout
 * 2/ xác định data thay đổi và lưu vào state
 * 3/ lấy data trong state đi binding ra jsx
 * 4/ bắt sự kiện click cho các nut chọn màu
 * 5/ cặp nhật lại giá trị trong state
 */



import React, { Component } from "react";

export default class BaiTapChonMauXe extends Component {

    state = {
        imgCar: "./img/car/products/red-car.jpg",
    };
    handelChangeColor = (imgCar)=>{
        // console.log(imgCar);
        this.setState({
            // imgCar:imgCar,
            imgCar, // obj literal
        })
    }

	render() {
		return (
			<section className="show-room">
				<h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
				<div className="container">
					<div className="chose__color d-flex justify-content-around">
						<button className="btn" onClick={()=>{this.handelChangeColor("./img/car/products/black-car.jpg")}}>
							<img
								src="./img/car/icons/icon-black.jpg"
								alt="hinh"
								style={{ width: 50 }}
							/>
						</button>
						<button className="btn" onClick={()=>{this.handelChangeColor("./img/car/products/red-car.jpg")}}>
							<img
								src="./img/car/icons/icon-red.jpg"
								alt="hinh"
								style={{ width: 50 }}
							/>
						</button>
						<button className="btn" onClick={()=>{this.handelChangeColor("./img/car/products/silver-car.jpg")}}>
							<img
								src="./img/car/icons/icon-silver.jpg"
								alt="hinh"
								style={{ width: 50 }}
							/>
						</button>
						<button className="btn" onClick={()=>{this.handelChangeColor("./img/car/products/steel-car.jpg")}}>
							<img
								src="./img/car/icons/icon-steel.jpg"
								alt="hinh"
								style={{ width: 50 }}
							/>
						</button>
					</div>
					<div className="car mt-2">
						<img
							className="img-thumbnail"
							src={this.state.imgCar}
							alt="hinh"
						/>
					</div>
				</div>
			</section>
		);
	}
}
