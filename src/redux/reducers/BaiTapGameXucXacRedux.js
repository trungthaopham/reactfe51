/* eslint-disable default-case */
// state cua bt game xucxac
const stateDefault = {
    banChon:'Tài',
    mangXucXac:[
        {so:1,hinhAnh:"./img/xucsac/1.png"},
        {so:2,hinhAnh:"./img/xucsac/2.png"},
        {so:3,hinhAnh:"./img/xucsac/3.png"}
    ],
    soBanThang:0,
    tongSoBanChoi:0
}

const BaiTapGameXucXacReducer = (state = stateDefault,action) => {
    switch(action.type){
        case 'DAT_CUOC':{
            state.banChon=action.taiXiu;
            return {...state};
        }
        case 'RANDOM_XUC_XAC':{
            // tạo ra xúc xắc ngẩu nhiên gán lại xúc xắc
            const mangXucXacNew = [];
            for(var i=0;i<3;i++){
                const soNgauNhien = Math.floor(Math.random()*6)+1;
                // tạo ra xuc xac ngau nhien
                const xucXac = {
                    so:soNgauNhien,
                    hinhAnh:`./img/xucsac/${soNgauNhien}.png`
                };
                // add
                mangXucXacNew.push(xucXac);
                // console.log(mangXucXacNew);
            }
            state.mangXucXac=mangXucXacNew;
            return {...state};
        }
        case 'END_GAME':{
            // console.log(action);
            //tinh tong diem cac xuc xac
            let tongDiem = state.mangXucXac.reduce((tongDiemXX,xucXac,index)=>{
                return tongDiemXX += xucXac.so;
            },0);
            if((tongDiem>9 && state.banChon ==='Tài') ||(tongDiem<=9 && state.banChon ==='Xỉu')){
                state.soBanThang +=1;
            } 
            // console.log(tongDiem);
            state.tongSoBanChoi +=1;
            return {...state}


        }
    }

    return {...state}
}
export default BaiTapGameXucXacReducer;