import React from 'react'
import LeftNav from './LeftNav'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
export default function AdminContactPage() {
    function deleteRecord(_id) {
        alert("Deleted " + _id)
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Admin Single Contact Page</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email id</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Akhilesh</td>
                                <td>akhileshsharmask@gmail</td>
                                <td>6392213248</td>                               
                                <td>Active</td>
                               <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-single-contact/1`} ><RemoveRedEyeIcon/></Link></td>
                                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("1")} ><DeleteOutlineIcon></DeleteOutlineIcon></button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Ranjan</td>
                                <td>akhileshsharmask@gmail</td>
                                <td>6392213248</td>                               
                                <td>Active</td>
                                <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-single-contact/2`} ><RemoveRedEyeIcon /></Link></td>
                                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("2")} ><DeleteOutlineIcon></DeleteOutlineIcon></button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Subham</td>
                                <td>akhileshsharmask@gmail</td>
                                <td>6392213248</td>                               
                                <td>Active</td>
                                <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-single-contact/3`} ><RemoveRedEyeIcon/></Link></td>
                                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("3")} ><DeleteOutlineIcon></DeleteOutlineIcon></button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Sonu</td>
                                <td>sharmask@gmail</td>
                                <td>6392213248</td>                               
                                <td>Active</td>
                                <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-single-contact/4`}  ><RemoveRedEyeIcon/></Link></td>
                                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("4")} ><DeleteOutlineIcon></DeleteOutlineIcon></button></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Mohit</td>
                                <td>akhileshsharmask@gmail</td>
                                <td>6392213248</td>                               
                                <td>Active</td>
                                <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-single-contact/5`}  ><RemoveRedEyeIcon/></Link></td>
                                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("5")} ><DeleteOutlineIcon></DeleteOutlineIcon></button></td>
                            </tr>
                          

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
