import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {


    renderKQ = ()=>{
        let tongDiem = this.props.mangXucXac.reduce((tongDiemXX,xucXac,index)=>{
            return tongDiemXX+=xucXac.so;
        },0);
        let kq = tongDiem > 9 ? 'Tài' : 'Xỉu';
        return <div>
            <span className="display-4 text-danger">{tongDiem} - {kq}</span>
        </div>
    }
    render() {
        return (
            <div className="container text-center py-5">
                <div className="display-4">
                    {this.renderKQ()}
                </div>
                <div className="display-4">
                    Bạn chọn: <span className="text-danger">{this.props.banChon}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span>
                </div>
                <div className="display-4">
                    Tổng số bàn chơi: <span className="text-primary">{this.props.tongSoBanChoi}</span>
                </div>
                <div className="text-center">
                    <button onClick={() => { this.props.playGame() }} className="btn btn-success p-3 mt-4"> Play Game</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            let n = 0;
            let ranDomXucXac = setInterval(() => {
                const action = {
                    type: 'RANDOM_XUC_XAC'
                }
                dispatch(action);
                n++;
                if (n === 10) {
                    //stop
                    clearInterval(ranDomXucXac);

                    // dispatch action tra ve kqa 
                    const actionXLKQ ={
                        type:'END_GAME'
                    }
                    dispatch(actionXLKQ);
                }
            }, 100);
        }
    }
}

const mapStateToProps = state => {
    return {
        banChon: state.stateBaiTapGameXucXac.banChon,
        soBanThang: state.stateBaiTapGameXucXac.soBanThang,
        tongSoBanChoi: state.stateBaiTapGameXucXac.tongSoBanChoi,
        mangXucXac: state.stateBaiTapGameXucXac.mangXucXac
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);