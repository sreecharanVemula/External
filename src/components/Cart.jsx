import React from 'react'

function Cart() {
  return(
    <div>
        <h1>Your Items</h1>
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

export default Cart