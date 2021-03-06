import React, { Component } from 'react'
import swal from 'sweetalert2';
import { connect } from 'react-redux'
import { xoaNguoiDungAction } from '../redux/action/QuanLyNguoiDungAction';

class FormComponent extends Component {
    state = {
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
        maNguoiDungXoa:''
    }
    handleChangeInput = (event) => {
        //lấy name và value
        let { name, value } = event.target;
        // Lấy ra attribute types (các thuộc tính trên thẻ tự thêm gọi la attribute)
        let types = event.target.getAttribute('types');
        console.log(types)
        // xử lý value
        let newValue ={...this.state.value};//tạo ra value mới với giá trị value cũ
        newValue[name]=value;//thay đổi giá trị bên trong value
        
        // xử lý error
        let newError = {...this.state.error};
        newError[name] = value.trim()==='' ? 'Không được bỏ trống' : '';

        // validation các trường đặc biệt
        if(types === "phoneNumber") {
            const regexNumber = /^[0-9]+$/;
            if(!regexNumber.test(value.trim())){
                newError[name]= 'Dữ liệu phải là số'
            }
        }
        if(types==='email'){
            const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regexEmail.test(value.trim())){
                newError[name]= 'Email không hợp lệ'
            }
        }

        this.setState({
            value:newValue,
            error:newError
        },() => {
                console.log(this.state)
            })


        // this.setState({
        //     [name]: value
        // }, () => {
        //     console.log(this.state)
        // }
        // );
    }
    ///
    /**
     * Giải pháp 1 sử dụng lifeCycle componentWillReceiveprops
     */
    componentWillReceiveProps(newProps){
        // khi bấm bút sửa => props thay đổi ta lấy dc props từ ng dung chỉnh sửa (this.props.nguoidungchinhsua) ta gán vào state cua component => va render value từ state
        this.setState({
            value:newProps.nguoiDungChinhSua
        })
    }

    ///

    render() {

        // lấy giá trị từ QuanLyNguoiDungReducer.nguoiDungChinhSua ve render len các value
        let {maNguoiDung,tenNguoiDung,soDienThoai,email} = this.state.value;
        return (
            <form className="card" onSubmit={(event)=>{
                //cản sự kiện submit lại trang của browser
                event.preventDefault();
                let valid = true;
                // duyệt thuộc tính trong obj value (duyệt thuộc tính trong đối tượng thì dùng es6 for in)
                for(let tenThuocTinh in this.state.value){
                    if(this.state.value[tenThuocTinh].trim()===''){
                        valid = false;
                    }
                }
                // duyet lỗi => rỗng 
                for(let tenThuocTinh in this.state.error){
                    if(this.state.error[tenThuocTinh]!==''){
                        valid = false;
                    }
                }
                if(!valid){
                    alert('Dữ liệu không hợp lệ')
                    swal.fire(
                        'Thông báo',
                        'Dự liệu không hợp lệ',
                        'error'
                        )
                    return; // chặn sự kiện submit
                }
                swal.fire(
                    'Thông báo',
                    'Thêm người dùng thành công',
                    'success'
                    ) 
                console.log("submit")
            }}>
                <div className="card-header bg-dark text-light font-weight-both">
                    <span>Thông tin người dùng</span>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <span>Mã người dùng</span>
                                <input value={maNguoiDung} className="form-control" name="maNguoiDung" onChange={this.handleChangeInput}></input>
                                <p className="text-danger">{this.state.error.maNguoiDung}</p>
                            </div>
                            <div className="form-group">
                                <span>Tên người dùng</span>
                                <input value={tenNguoiDung} className="form-control" name="tenNguoiDung" onChange={this.handleChangeInput}></input>
                                <p className="text-danger">{this.state.error.tenNguoiDung}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <span>Số điện thoại</span>
                                <input types="phoneNumber" value={soDienThoai} className="form-control" name="soDienThoai" onChange={this.handleChangeInput}></input>
                                <p className="text-danger">{this.state.error.soDienThoai}</p>
                            </div>
                            <div className="form-group">
                                <span>Email</span>
                                <input types="email" value={email} className="form-control" name="email" onChange={this.handleChangeInput}></input>
                                <p className="text-danger">{this.state.error.email}</p>
                            </div>
                        </div>
                        <div className="col-12 text-right form-group">
                            <button className="btn btn-success">Thêm người dùng</button>
                        </div>
                        <div className="col-12 form-group"> 
                            <input type="number" name="maNguoiDungXoa" placeholder="Nhập mã người dùng cần xóa" className="form-control"
                                onChange={(e)=>{
                                    this.setState({
                                        maNguoiDungXoa:e.target.value
                                    })
                                }}
                            ></input>
                            <button type="button" className="btn btn-danger mt-2"
                                onClick={()=>{
                                    // dispatch ma nguoi dung len reducer
                                    // let action ={
                                    //     type: 'XOA_NGUOI_DUNG',
                                    //     maNguoiDung : this.state.maNguoiDungXoa
                                    // }
                                    this.props.dispatch(xoaNguoiDungAction(this.state.maNguoiDungXoa));
                                }}
                            > Xóa người dùng</button>
                        </div>
                    </div>
                </div>
            </form>

        )
    }
}
// lấy state nguoidungchihsua từ reducer ve component load len các thẻ input
const mapStateToProps = state => {
    return {
        nguoiDungChinhSua: state.QuanLyNguoiDungReducer.nguoiDungChinhSua
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps)(FormComponent);