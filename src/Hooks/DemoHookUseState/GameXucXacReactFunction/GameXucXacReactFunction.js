import React from 'react'
import KetQuaTroChoiF from './KetQuaTroChoiF'
import XucXacF from './XucXacF'


export default function GameXucXacReactFunction() {
    return (
        <div style={{fontFamily: "fontGame", backgroundImage: 'url(./img/xucsac/bgGame.png)', width: '100%', height: '100%', position: 'fixed', top: '0', left: '0' }}>
        <h4 className="display-4 text-center">Bài Tập Game Xúc Xắc</h4>

            <XucXacF/>
            <KetQuaTroChoiF/>
        </div>

    )
}
