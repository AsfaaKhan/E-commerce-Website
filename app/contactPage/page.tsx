import React from 'react'
import Image from 'next/image'


const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row  mt-30">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 className='text-warning fw-bold mt-10'>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 mt-5 justify-center  ">
                    <div className="flex justify-center items-center text">
                        <Image src="/images/3.jpg" alt="Contact Us" height={500} width={400} />
                    </div>
                    <div className="col-md-6 " >
                        <form >
                            <div className="mb-3">
                                <label htmlFor="exampleForm" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="John Smith" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={5}></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-warning">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact