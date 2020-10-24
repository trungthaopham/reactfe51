import { SUA_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../constants/QuanLyNguoiDungConst";

const stateDefault = {
    mangNguoiDung: [
        { maNguoiDung: 1, tenNguoiDung: 'Nguyễn Van A', soDienThoai: '0000006', email: 'a@gmail.com' },
        { maNguoiDung: 2, tenNguoiDung: 'Nguyễn Van b', soDienThoai: '0000006', email: 'a@gmail.com' }
    ],
    nguoiDungChinhSua: {
        maNguoiDung: '',
        tenNguoiDung: '',
        soDienThoai: '',
        email: ''
    },
    stateForm: {
        value: {
            maNguoiDung: '',
            tenNguoiDung: '',
            soDienThoai: '',
            email: ''
        },
        error: {
            maNguoiDung: '',
            tenNguoiDung: '',
            soDienThoai: '',
            email: ''
        },
        maNguoiDungXoa: ''
    }
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    // console.log(action)
    switch (action.type) {
        case XOA_NGUOI_DUNG: {
            let mangNguoiDungCapNhat = [...state.mangNguoiDung];

            mangNguoiDungCapNhat = mangNguoiDungCapNhat.filter((item) => item.maNguoiDung != action.maNguoiDung);
            state.mangNguoiDung = mangNguoiDungCapNhat;
            return { ...state }
        }
        case SUA_NGUOI_DUNG: {
            // lấy nguoi dung dc click
            let nguoiDungDuocClick = { ...action.nguoiDungChinhSua };
            // cap nhat người dùng chỉnh sữa = ng dung dc click
            state.nguoiDungChinhSua = nguoiDungDuocClick;
            state.stateForm = { ...state.stateForm, value: nguoiDungDuocClick };
            return { ...state };
        }
        case 'HANDLE_CHANGE_INPUT': {
            state.stateForm = { ...action.newState };
            return { ...state }
        }

        case 'CAP_NHAT_THONG_TIN': {
            let mangNguoiDungCapNhat = [...state.mangNguoiDung];
            // tim
            let index = mangNguoiDungCapNhat.findIndex(item => item.maNguoiDung === action.nguoiDungCapNhat.maNguoiDung);
            // update
            mangNguoiDungCapNhat[index] = action.nguoiDungCapNhat;
            state.mangNguoiDung = mangNguoiDungCapNhat;
            return { ...state };
        }
        case 'THEM_NGUOI_DUNG': {
            let mangNguoiDungCapNhat = [...state.mangNguoiDung, action.nguoiDung];
            state.mangNguoiDung = mangNguoiDungCapNhat;
            return { ...state }
        }


        default: return { ...state }
    }
}