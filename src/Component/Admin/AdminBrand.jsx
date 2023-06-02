import React from 'react'
import LeftNav from './LeftNav'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import LoupeIcon from '@mui/icons-material/Loupe';
import EditIcon from '@mui/icons-material/Edit';
export default function AdminBrand() {
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
                    <h5 className='background text-light text-center p-2'>Brand Page <Link to="/admin-add-brand"><LoupeIcon /></Link></h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nike</td>
                                <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-update-brand/${1}`}  ><EditIcon /></Link></td>
                                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("1")} ><DeleteOutlineIcon /></button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Adidas</td>

                                <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-update-brand/${2}`}  ><EditIcon /></Link></td>

                                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("2")} ><DeleteOutlineIcon /></button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Mufti</td>
                                <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-update-brand/${3}`}  ><EditIcon /></Link></td>
                                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("3")} ><DeleteOutlineIcon /></button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Gucci</td>
                                <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-update-brand/${4}`}  ><EditIcon /></Link></td>
                                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("4")} ><DeleteOutlineIcon /></button></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Tom hilfiger</td>

                                <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-update-brand/${5}`}  ><EditIcon /></Link></td>
                                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("5")} ><DeleteOutlineIcon /></button></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Reebok</td>
                                <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-update-brand/${6}`}  ><EditIcon /></Link></td>
                                <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("6")} ><DeleteOutlineIcon /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
