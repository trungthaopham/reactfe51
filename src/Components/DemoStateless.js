//  State less component là component function (react function component)
// cú pháp tạo: rfc 
import React from 'react'

export default function DemoStateless() {

    // Bên trong lệnh return của function component là một nội dung của thẻ này. luu ý: Nội dung component phải được bao phủ bởi 1 thẻ bất kỳ
    return (
        <>
            <div className="container">
                <div className="card w-25" style={{backgroundColor: 'cadetblue', borderColor: 'darkblue'}}>
                    <img className="card-img-top" src="http://picsum.photos/150/150" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>

        </>
    )
}
