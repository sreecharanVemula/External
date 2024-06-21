import React from 'react'

function Home() {
  return (
    <div>
        <h1>Welcome to the Ecommerce shopping cart</h1>
        <h1>HOT DEALS</h1>
         <div className='d-flex justify-content-around'>

        <div className="card">

            <div className="card-body">Apple watch</div>
        </div>
        <div className="card">
        <div className="card-body">Iphone</div>
        </div>
        <div className="card">
        <div className="card-body">HeadPhones</div>
        </div>
    </div>
    </div>
  )
}

export default Home