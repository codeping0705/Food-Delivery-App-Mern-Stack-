import React from 'react'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id="carousel">
          <div className ="carousel-caption" style={{zIndex:"15"}}>
          <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-danger text-white" type="submit">Search</button>
    </form>

          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900x700?shushi" className="d-block w-100" style={{filter:"brightness(80%)"}} alt=" " />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700?pizza" className="d-block w-100" style={{filter:"brightness(80%)"}} alt=" " />
          </div>
          
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700?pastry" className="d-block w-100" style={{filter:"brightness(80%)"}} alt= " " />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700?cake" className="d-block w-100" style={{filter:"brightness(80%)"}} alt=" " />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700?Icecream" className="d-block w-100" style={{filter:"brightness(80%)"}} alt=" " />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700?Burrito" className="d-block w-100" style={{filter:"brightness(80%)"}} alt=" " />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700?IndianFood" className="d-block w-100" style={{filter:"brightness(80%)"}} alt=" " />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" style={{filter:"brightness(80%)"}} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div />
      <div />
      <div />
    </div>
  )
}
