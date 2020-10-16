// Khai báo tất cả các state của ứng dụng
import {combineReducers} from 'redux'
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BaiTapGameXucXacReducer from './BaiTapGameXucXacRedux'

export const rootReducer = combineReducers({
// nơi khai báo các state 
    stateBaiTapGioHang: BaiTapGioHangReducer,
    stateBaiTapGameXucXac:BaiTapGameXucXacReducer
})
