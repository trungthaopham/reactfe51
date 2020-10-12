/* eslint-disable default-case */
import BaiTapGioHangRedux from "../../BaiTapRedux/BaiTapGioHangRedux"

const stateDefaut = {
    gioHang: [
        // {maSP:1,tenSP:'Iphone',hinhAnh:'http://picsum.photos/50',soLuong:1,donGia:1000}
    ]
}

const BaiTapGioHangReducer = (state = stateDefaut, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            //Xử lý cập nhật state
            let gioHangUpdate = [...state.gioHang];
            // tìm sp
            const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.spGH.maSP);
            if (index !== -1) {
                gioHangUpdate[index].soLuong += 1;
            } else {
                gioHangUpdate.push(action.spGH);
            }
            state.gioHang = gioHangUpdate;
            return { ...state };
        }
        case 'XOA_GIO_HANG': {
            let gioHangUpdate = [...state.gioHang];
            const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSPClick);
            if (index !== -1) {
                gioHangUpdate.splice(index, 1);
            }
            state.gioHang = gioHangUpdate;
            return { ...state };
        }
        case 'TANG_GIAM_GIO_HANG':{
            // console.log('aaaa')
            let gioHangUpdate = [...state.gioHang];
            let spGioHang = gioHangUpdate.find(sp=>sp.maSP === action.maSP);
            if(spGioHang){
                if(action.tangGiam){
                    spGioHang.soLuong +=1;
                }else{
                    if(spGioHang.soLuong>1){
                        spGioHang.soLuong-=1;
                    }
                }
            }
            // update
            state.gioHang = gioHangUpdate;
            return { ...state };
        }
    }


    return { ...state }
}
export default BaiTapGioHangReducer;