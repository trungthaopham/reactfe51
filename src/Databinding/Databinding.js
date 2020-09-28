import React, { Component } from 'react'

export default class Databinding extends Component {
    //thuộc tính sử dụng ở nhiều phupwng thức trong lớp đối tượng
    hocVien = {
        ma:1,
        avata:'http://picsum.photos/200/200',
        tenHocVien: 'Pham Trung Thao'
    }
    // phương thức=> phương thức có thể gọi trong các phương thức khác trong của lớp đối tượng

    renderHocVien = ()=>{
        return <div className="card" style={{backgroundColor: 'cadetblue', borderColor: 'darkblue'}}>
        <img className="card-img-top" src={this.hocVien.avata} alt />
        <div className="card-body">
            <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
            <p className="card-text">{this.hocVien.ma}</p>
        </div>
        </div>
        
    }



    //  gia tri la bien
    render() {
        let title = 'CYBERSOFT';
        let imgSrc = 'http://picsum.photos/200/200';
        // binding data là hàm
        const renderImg = ()=>{
            // giá trị hàm muốn render ra giao diện phải trả về chuổi , số, jsx
            return (
                <div className="card text-white bg-primary">
            <img className="card-img-top" src={imgSrc} alt />
            <div className="card-body">
            <h4 className="card-title">{title}</h4>
                <p className="card-text">Text</p>
            </div>
            </div>
            );
            
        }
        
        return (
            <div className="container">
                <div id="title">{title}</div>
                
                <div className="w-25">
                <img src={imgSrc}/>
                </div>
                <input className="w-25 form-control" value={title}/>
                <div>
                {renderImg()}
                </div>
                <h2 className="display-5">Thông tin học viên</h2>
                <ul>
                    <li>Mã học viên:{this.hocVien.ma}</li>
                    <li>Tên học viên:{this.hocVien.tenHocVien}</li>
                    <li>Avata:<img src={this.hocVien.avata} width="100" height="100"></img></li>
                </ul>
                <div className="col-2">
                    {this.renderHocVien()}
                </div>
            </div>
        )
    }
}
