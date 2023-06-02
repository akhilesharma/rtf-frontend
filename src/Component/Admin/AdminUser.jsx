import React from 'react'
import LeftNav from './LeftNav'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function AdminUser() {
    function deleteRecord(_id) {
        alert("Deleted"+_id)
  
    }
    
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>User List Page</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email id</th>
                                <th>Phone</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>akhilesh</td>
                                <td>akhilesh sharma</td>
                                <td>akhileshsharmask@gmail</td>
                                <td>6392213248</td>
                                <td><button className='btn text-primary' style={{ border: "none" }} onClick={()=>deleteRecord("111")} ><DeleteOutlineIcon></DeleteOutlineIcon></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
