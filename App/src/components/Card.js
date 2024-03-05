import React from 'react'

export default function () {
    return (
        <div>
            <div className='row'>

                <div className="card mt-3 mx-auto " style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src=" " className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some Important Text.</p>
                        <div className='container w-100' >
                            <select className='m-2 h-100  bg-danger'>
                                {Array.from(Array(5), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    )
                                })}
                            </select >

                            <select className='m-2 h-90  bg-danger'>
                                <option value="half">Half</option>
                                <option value="Full">Full</option>

                            </select>
                            <div className=' d-inline h-100 fs-9'>
                                Total Price
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
