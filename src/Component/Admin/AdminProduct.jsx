import React, { useContext } from 'react'
import LeftNav from './LeftNav'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import LoupeIcon from '@mui/icons-material/Loupe';
import EditIcon from '@mui/icons-material/Edit';
import { ProductContext } from "../../Store/ProductContext"

export default function AdminProduct() {
    var Products = useContext(ProductContext)
    function deleteRecord(_id) {
        alert("Deleted" + _id)
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Product Page <Link to="/admin-add-product"><LoupeIcon /></Link></h5>
                    <div className='table-responsive'>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Maincategory</th>
                                    <th>Subcategory</th>
                                    <th>Brand</th>
                                    <th>Color</th>
                                    <th>Size</th>
                                    <th>Discount</th>
                                    <th>Base Price</th>

                                    <th>Final Price</th>
                                    <th>Stock</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                {
                                    Products.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.maincategory}</td>
                                            <td>{item.subcategory}</td>
                                            <td>{item.brand}</td>
                                            <td>{item.color}</td>
                                            <td>{item.size}</td>
                                          
                                            <td>{item.discount}%</td>
                                            <td>&#8377;{item.baseprice}</td>
                                            <td>&#8377;{item.finalprice}</td>
                                            <td>{item.stock}</td>
                                            <td><img src={item.pic1} width="50px" height="50px" className="rounded" /></td>
                                            <td><img src={item.pic2} width="50px" height="50px" className="rounded" /></td>
                                            <td><img src={item.pic3} width="50px" height="50px" className="rounded" /></td>
                                            <td><img src={item.pic4} width="50px" height="50px" className="rounded" /></td>

                                            <td><Link className='btn text-primary' style={{ border: "none" }} to={`/admin-update-product/${item._id}`}  ><EditIcon /></Link></td>
                                            <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord("1")} ><DeleteOutlineIcon /></button></td>
                                        </tr>
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
