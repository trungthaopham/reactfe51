import React, { Component } from 'react'

export default class DemoListAndKey extends Component {
    danhSachKhoaHoc = ['NodeJS','ReactJS','VueJS',]
    
    renderDanhSachKhoaHoc = () =>{
        return this.danhSachKhoaHoc.map((khoaHoc,index)=>{
        return <li key={index}>{khoaHoc}</li>
        });
    }
    
    render() {
        return (
            <div>
                <h2>List and Keys</h2>
                <h3>Danh sách khóa học</h3>
                <ul>
                    {this.renderDanhSachKhoaHoc()}
                </ul>
            </div>
        )
    }
}
