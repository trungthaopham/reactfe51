import React, { Component } from 'react'
import Fotter from './Fotter'
import Header from './Header'
import LaptopComponent from './LaptopComponent'
import ProductListComponent from './ProductListComponent'
import SliderComponent from './SliderComponent'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <div className="bg-dark">
                <Header/>
                <SliderComponent/>
                <ProductListComponent/>
                <LaptopComponent/>
                <Fotter/>
                </div>
            </div>
        )
    }
}
