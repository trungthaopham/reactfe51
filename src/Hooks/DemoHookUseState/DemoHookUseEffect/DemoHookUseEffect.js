import React,{useState,useEffect} from 'react'

export default function DemoHookUseEffect(props) {
    const [number,setNum] = useState(1);
    // const [object,setObject] = useState({number:1})
    // useEffect(()=>{
    //     //hàm này sẽ chạy khi lần đầu component render và các lần render lại
    //     console.log('componentDidMount');
    //     console.log('componentDidUpdate');
    // })
    ////////////////////////////
    // useEffect(()=>{
    //     // tham so 2 mang rong => chỉ thay thế cho componentDidMount
    //     console.log('componentDidMount');
        
    // },[])
    //////////////////////////////////
    useEffect(()=>{
        // tham so 2 mảng là giá trị thay đổi thi ham se được thực thi
        console.log('componentDidUpdate');
        
    },[number]) // có thể nhiu biến state ở tham so 2

    useEffect(() => {
        
        return () => {
            // huy thi component se goi ham nay
            console.log('thay cho componentWillUnMount');
        }
    })

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={
                ()=>{setNum(number + 1)}
                }>+</button>
        </div>
    )
}
