import React from 'react'
import { connect, useSelector } from 'react-redux'

function XucXacF(props) {
    // useSelecter la hook thay thees cho phuowng thuwcs mapStateToProps cua react-redux
    // useSelecter dung de ket noi den reducer lay ve state
    // console.log("ComponentXucXac",props.mangXucXac)
    // const mangXucXac = useSelector(state => state.stateBaiTapGameXucXac.mangXucXac);
    const {mangXucXac,} = useSelector(state => state.stateBaiTapGameXucXac);
    const renderXucSac = ()=>{
        return mangXucXac.map((xucXac,index)=>{
            return <img key={index} className="m-5" src={xucXac.hinhAnh} style={{width:50}}></img>
        })
    }
    return (
        <div className="row text-center mt-5">
                <div className="col-3">
                    <button onClick={()=>{}} className="btn btn-success p-5"><span className="display-4">Tài</span></button>
                </div>
                <div className="col-6">
                    {renderXucSac()}
                </div>
                <div className="col-3">
                    <button onClick={()=>{}} className="btn btn-danger p-5"><span className="display-4">Xỉu</span></button>
                </div>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        mangXucXac: state.stateBaiTapGameXucXac.mangXucXac
    }
}

const mapDispatchToProps = {
    
}
export default connect(mapStateToProps)(XucXacF);

