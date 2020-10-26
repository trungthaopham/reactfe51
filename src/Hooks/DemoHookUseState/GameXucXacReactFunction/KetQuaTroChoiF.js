import React from 'react'
import {useDispatch} from 'react-redux'
export default function KetQuaTroChoiF(props) {

    const dispatch = useDispatch()
    return (
        <div>
            <div className="text-center">
                    <button onClick={() => {
                        let action ={
                            type: 'RANDOM_XUC_XAC'
                        }
                        dispatch(action);
                    }} className="btn btn-success p-3 mt-4"> Play Game</button>
                </div>
        </div>
    )
}
