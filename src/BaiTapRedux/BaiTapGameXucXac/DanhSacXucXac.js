import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSacXucXac extends Component {

    renderXucSac = ()=>{
        return this.props.mangXucXac.map((xucXac,index)=>{
            return <img key={index} className="m-5" src={xucXac.hinhAnh} style={{width:50}}></img>
        })
    }
    render() {
        return (
            <div className="row text-center mt-5">
                <div className="col-3">
                    <button onClick={()=>{this.props.datCuoc('Tài')}} className="btn btn-success p-5"><span className="display-4">Tài</span></button>
                </div>
                <div className="col-6">
                    {this.renderXucSac()}
                </div>
                <div className="col-3">
                    <button onClick={()=>{this.props.datCuoc('Xỉu')}} className="btn btn-danger p-5"><span className="display-4">Xỉu</span></button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=>{
    // dispatch là pthuc đưa dữ liệu lên redux store
    return {
        datCuoc: (taiXiu)=>{
            // console.log('taiXiu')
            //tạo ra action
            const action = {
                type:'DAT_CUOC',
                taiXiu
            }
            dispatch(action);
        }
    }

}

const mapStateToProps = state => {
    return{
        mangXucXac: state.stateBaiTapGameXucXac.mangXucXac
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DanhSacXucXac)