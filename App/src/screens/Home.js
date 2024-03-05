import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function () {
    return (
        <div>
            <div><Navbar /> </div>
            <div>
                <Carousel></Carousel>
           
            <div class="row">
                <div className="col-sm-3">
                    <div className="m-3"> <Card></Card></div>
                </div>

                <div className="col-sm-3">
                    <div className="m-3"> <Card></Card></div>
                </div>

                <div className="col-sm-3">
                    <div className="m-3"> <Card></Card></div>
                </div>

            </div>
            <div class="row">
                <div className="col-sm-3">
                    <div className="m-3"> <Card></Card></div>
                </div>

                <div className="col-sm-3">
                    <div className="m-3"> <Card></Card></div>
                </div>

                <div className="col-sm-3">
                    <div className="m-3"> <Card></Card></div>
                </div>
                

            </div>
            <div><Footer /> </div>

        </div>
        <div/>
        </div>
    )
}
