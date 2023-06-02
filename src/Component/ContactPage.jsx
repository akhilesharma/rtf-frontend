import React, { useState } from 'react'

export default function ContactPage() {
    var [contact, setcontact] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    var [show,setshow]=useState(false)
    function getData(e) {

        var name = e.target.name
        var value = e.target.value
        setcontact((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        alert(
            `
            Name: ${contact.name}
            Email: ${contact.email}
            Phone: ${contact.phone}
            Subject: ${contact.subject}
            Message: ${contact.message}
         
            `
        )
        setshow(true)
        setcontact({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        })
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <div className='background text-light text-center p-2 m-1'>akhileshsharmask@gmail.com</div>
                    <div className='background text-light text-center p-2 m-1'>6392213248</div>
                    <div className='background text-light text-center p-2 m-1'>A468, hdfc atm shiv mandir marg block A new ashok nagar delhi 110096</div>
                    <div className="mapouter"><div className="gmap_canvas"><iframe title='map' width="100%" height="470px" id="gmap_canvas" src="https://maps.google.com/maps?q=110096&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
                </div>

                <div className='col-md-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Contact Us Section</h5>
                    {
                        show ? <div class="alert alert-success" role="alert">
                          yup!!!  message is sent successfull.
                        </div>:""
                    }
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" onChange={getData} className="form-control" name='name' placeholder='enter name' value={contact.name} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" onChange={getData} className="form-control" name='email' placeholder='enter email Id' value={contact.email} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="text" onChange={getData} className="form-control" name='phone' placeholder='enter phone number' value={contact.phone} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <input type="text" onChange={getData} className="form-control" name='subject' placeholder='enter subject' value={contact.subject} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea name='message' className='form-control ' rows={5} onChange={getData} value={contact.message} ></textarea>
                        </div>

                        <button type="submit" className="btn background text-light btn-sm w-100">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
