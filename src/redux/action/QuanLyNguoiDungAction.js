import { SUA_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../constants/QuanLyNguoiDungConst"

// định nghĩa action để các component trong ung dung muoons gọi nghiệp vụ này thì import vào gọi
export const xoaNguoiDungAction = (maNguoiDung)=>{
    return{
        type: XOA_NGUOI_DUNG,
        maNguoiDung
    }
}
export const suaNguoiDungAction = (nguoiDung)=>{
    return {
        type: SUA_NGUOI_DUNG,
        nguoiDungChinhSua: nguoiDung
    }
}