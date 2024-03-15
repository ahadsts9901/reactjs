import React from 'react'

const Header = () => {
  return (
    <section className='container-fluid bg-dark text-white'>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-3">
                    <h1 className='m-0'>LOGO</h1>
                </div>
                <div className="col-2 d-flex align-align-items-center justify-content-center">
                    <ul className='list-unstyled d-flex align-items-center m-0 w-100 gap-5'>
                        <li>Home</li>
                        <li>Cart</li>
                    </ul>

                </div>
                <div className='col-3'>
                    <h1>Cart:- 0</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header