import React from 'react'
import LeftNav from './LeftNav'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function AdminNewsletter() {
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
          <h5 className='background text-light text-center p-2'>Newsletter Page</h5>
          <table className='table'>
            <tbody>
              <tr>
                <th>Id</th>
                <th>Email id</th>
                <th></th>
              </tr>
              <tr>
                <td>1</td>
                <td>akhileshsharmask@gmail</td>
                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("1")} ><DeleteOutlineIcon></DeleteOutlineIcon></button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>akhileshsharma@gmail</td>
                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("2")} ><DeleteOutlineIcon></DeleteOutlineIcon></button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>akhilesh@gmail</td>
                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("3")} ><DeleteOutlineIcon></DeleteOutlineIcon></button></td>
              </tr>
             
            </tbody>
          </table>
        </div>    
      </div>
    </div>
  )
}
