import React, { Component } from 'react'
import DanhSachXucSac from './DanhSacXucXac';
import KetQuaTroChoi from './KetQuaTroChoi';
// import "./style.scss";
import style from './BaiTapGameXucXac.module.css';


export default class BaiTapGameXucXac extends Component {

    


    render() {
        return (
            <div className={`${style.fontGameXucXac}`} style={{ backgroundImage: 'url(./img/xucsac/bgGame.png)', width: '100%', height: '100%', position: 'fixed', top: '0', left: '0' }}>
                <h4 className="display-4 text-center">Bài Tập Game Xúc Xắc</h4>
                <DanhSachXucSac/>
                <KetQuaTroChoi />
            </div>
        )
    }
}
