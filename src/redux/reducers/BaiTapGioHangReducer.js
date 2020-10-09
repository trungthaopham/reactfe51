import BaiTapGioHangRedux from "../../BaiTapRedux/BaiTapGioHangRedux"

const stateDefaut = {
    gioHang:[
        {maSP:1,tenSP:'Iphone',hinhAnh:'http://picsum.photos/50',soLuong:1,donGia:1000}
    ]
}
const BaiTapGioHangReducer = (state=stateDefaut,action) =>{
    return {...state}
}
export default BaiTapGioHangReducer;