import React,{useState} from 'react'
// const =arr[]; các giá trị không phải state, khog can render lại khi setState => để ngoài component tranh chiếm bộ nhớ đệm
export default function BaiTapDoiMauXe(props) {
    // const [state, setState] = useState({ imgCar: "./img/car/products/red-car.jpg" });
    const [stateHinh, setStateHinh]= useState('./img/car/products/black-car.jpg');
    // const changeColor =(color)=>{
    //     setState({ imgCar: color })
    // }
    const thayDoiAnh = (color)=>{
        const urlNew = color;
        setStateHinh(urlNew)
    }

    return (
        <section className="show-room">
				<h2 className="text-center">Bài Tập Chọn Màu Xe Hook</h2>
				<div className="container">
					<div className="chose__color d-flex justify-content-around">
						<button className="btn" onClick={()=>{thayDoiAnh('./img/car/products/black-car.jpg')}}>
							<img
								src="./img/car/icons/icon-black.jpg"
								alt="hinh"
								style={{ width: 50 }}
							/>
						</button>
						<button className="btn" onClick={()=>{thayDoiAnh('./img/car/products/red-car.jpg')}}>
							<img
								src="./img/car/icons/icon-red.jpg"
								alt="hinh"
								style={{ width: 50 }}
							/>
						</button>
						<button className="btn" onClick={()=>{thayDoiAnh('./img/car/products/silver-car.jpg')}}>
							<img
								src="./img/car/icons/icon-silver.jpg"
								alt="hinh"
								style={{ width: 50 }}
							/>
						</button>
						<button className="btn" onClick={()=>{thayDoiAnh('./img/car/products/steel-car.jpg')}}>
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
							src={stateHinh}
							alt="hinh"
						/>
					</div>
				</div>
			</section>
    )
}
