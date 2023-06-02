import React,{useState} from "react";
export default function Footer() {
    var [newsletter,setnewsletter]=useState("")
    function getData(e) {
        setnewsletter(e.target.value)
    }
    function postData() {
        alert("email id: "+newsletter)
    }
    return (
        <>
            <div className="background text-center text-light p-3 mt-2">
                <p>   RightToFashion@CopyRight</p>
                <div className="row">
                    <div className="col-md-3 col-1"></div>
                    <div className="col-md-6 col-10">
                        <form onSubmit={postData}>
                            <div className="mb-3">

                                <input type="email" required className="form-control" name="email" onChange={getData} placeholder="enter your mail id to subscribe our newsletter service" />
                            </div>

                            <button type="submit" className="btn btn-light w-100">Subscribe</button>
                        </form>
                    </div>

                </div>
                <div className="col-md-3 col-1"></div>
            </div>
        </>
    )
}