import React, { useState } from 'react'
import LeftNav from './LeftNav';
import { useNavigate } from 'react-router-dom';
export default function AdminAddProduct() {
    var [product, setproduct] = useState({
        name: "",
        maincategory: "Male",
        subcategory: "Jeans",
        brand: "",
        color: "",
        size: "",
        baseprice: "",
        discount: "",
        finalprice: "",
        stock: "In Stock",
        description: "This Is Sample Product",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""
    })
    var navigate = useNavigate()
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setproduct((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function getFile(e) {
        var name = e.target.name
        var value = e.target.files[0]
        setproduct((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        product.finalprice=product.baseprice-product.baseprice*product.discount/100
        alert(
            `
            Name:                ${product.name}
            Maincategory:        ${product.maincategory}
            Subcategory:         ${product.subcategory}
            Brand:               ${product.brand}
            Size:                ${product.size}
            Size:                ${product.size}
            Color:               ${product.color}
            BasePrice:           ${product.baseprice}
            Discoumt:            ${product.discount}
            Finalprice:          ${product.finalprice}
            Stock:               ${product.stock}
            Description:         ${product.description}
            Pic1:                ${product.pic1}
            Pic2:                ${product.pic2}
            Pic3:                ${product.pic3}
            Pic4:                ${product.pic4}
        
            `
        )
        navigate("/admin-product")
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Product Add Page </h5>
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' onChange={getData} placeholder="Enter product name" />
                        </div>
                        <div className='row mb-3'>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Maincategory</label>
                                <select name='maincategory' onChange={getData} className="form-select">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Kids">Kids</option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Subcategory</label>
                                <select name='subcategory' onChange={getData} className="form-select">
                                    <option value="Shirt">Shirt</option>
                                    <option value="Tshirt">Tshirt</option>
                                    <option value="Jeans">Jeans</option>
                                    <option value="trouser">trouser</option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Brand</label>
                                <select name='brand' onChange={getData} className="form-select">
                                    <option value="Adidas">Adidas</option>
                                    <option value="Nike">Nike</option>
                                    <option value="Gucci">Gucci</option>
                                    <option value="Tom hilfiger">Tom hilfiger</option>
                                    <option value="Reebok">Reebok</option>
                                    <option value="Mufti">Mufti</option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Stock</label>
                                <select name='stock' onChange={getData} className="form-select">
                                    <option value="In Stock">In Stock</option>
                                    <option value="Out Of Stock">Out Of Stock</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col-sm-6 col-12">
                                <label className="form-label">Color</label>
                                <input type="text" className="form-control" name='color' onChange={getData} placeholder="Enter Product Color" />
                            </div>
                            <div className="col-sm-6 col-12">
                                <label className="form-label">Size</label>
                                <input type="text" className="form-control" name='size' onChange={getData} placeholder="Enter Product Size" />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col-sm-6 col-12">
                                <label className="form-label">BasePrice</label>
                                <input type="number" min={0} className="form-control" name='baseprice' onChange={getData} placeholder="Enter Product BasePrice" />
                            </div>
                            <div className="col-sm-6 col-12">
                                <label className="form-label">Discount</label>
                                <input type="number" min={0} className="form-control" name='discount' onChange={getData} placeholder="Enter Discount On Product" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Final Price</label>
                            <input type="number" min={0} className="form-control" name='finalprice' onChange={getData} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea type="text" className="form-control" name='description' onChange={getData} placeholder="Enter Product Description" rows={5} />
                        </div>
                        <div className='row mb-3'>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Pic1</label>
                                <input type="file" min={0} className="form-control" name='pic1' onChange={getFile} />
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Pic2</label>
                                <input type="file" min={0} className="form-control" name='pic2' onChange={getFile} />
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Pic4</label>
                                <input type="file" min={0} className="form-control" name='pic3' onChange={getFile} />
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Pic4</label>
                                <input type="file" min={0} className="form-control" name='pic4' onChange={getFile} />
                            </div>
                        </div>
                        <button type="submit" className="btn background text-light text-center w-100">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
