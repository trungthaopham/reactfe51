import React, { memo } from 'react'


const Comment = (props) => {
    console.log('comment');
    return (
        <div>
            {props.renderNotify()}
            <br />
            <textarea></textarea> <br />
            <button>Gửi</button>
        </div>
    )
}
export default memo(Comment);