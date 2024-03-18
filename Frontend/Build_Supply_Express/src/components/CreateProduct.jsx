// import React from 'react'
import  {  useEffect, useState } from "react";
import {toast} from "react-toastify"

// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../static/data";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { createProduct } from "../redux/actions/product";
import { useSelector,useDispatch } from "react-redux";

function CreateProduct() {
    const { seller } = useSelector((state) => state.seller);
    const { success, error } = useSelector((state) => state.products);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const [images, setImages] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [originalPrice, setOriginalPrice] = useState();
    const [discountPrice, setDiscountPrice] = useState();
    const [stock, setStock] = useState();

    useEffect(()=>{
        if(error){
            toast.error(error)
        }
        if(success){
            toast.success(" Product created Successfully!")
            navigate("/dashboard");
            window.location.reload()
        }
    },[dispatch,error,success])
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newForm=new FormData();
        images.forEach((image)=>{
            newForm.append("images",image)
        });
        newForm.append("name",name);
        newForm.append("description",description);
        newForm.append("category",category);
        newForm.append("tags",tags);
        newForm.append("originalPrice",originalPrice);
        newForm.append("discountPrice",discountPrice);
        newForm.append("stock",stock);
        newForm.append("shopId",seller._id);
        dispatch(createProduct(newForm));
        // console.log(newForm);
        // console.log(n);


        
    }
    const handleImageChange=(e)=>{
        e.preventDefault();
        let files=Array.from(e.target.files);
        setImages((prevImages)=>[...prevImages,...files])
    }
  return (
    <div className="container bg-white shadow rounded-3 p-3 overflow-auto" style={{height:" 80vh", width: "90%", maxWidth: "800px", margin: "auto"}}>
    <h5 className="text-center fs-2 font-family: Poppins;">Create Product</h5>
   
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="productName" className="form-label">
                Name <span className="text-danger">*</span>
            </label>
            <input
                type="text"
                id="productName"
                name="name"
                value={name}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your product name..."
            />
        </div>

        <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
                Description <span className="text-danger">*</span>
            </label>
            <textarea
                id="productDescription"
                name="description"
                required
                rows="8"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your product description..."
            ></textarea>
        </div>

        <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
                Category <span className="text-danger">*</span>
            </label>
            <select
                id="productCategory"
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Choose a category</option>
                {categoriesData &&
                    categoriesData.map((i) => (
                        <option value={i.title} key={i.title}>
                            {i.title}
                        </option>
                    ))}
            </select>
        </div>

        <div className="mb-3">
            <label htmlFor="productTags" className="form-label">Tags</label>
            <input
                type="text"
                id="productTags"
                name="tags"
                value={tags}
                className="form-control"
                onChange={(e) => setTags(e.target.value)}
                placeholder="Enter your product tags..."
            />
        </div>

        <div className="mb-3">
            <label htmlFor="originalPrice" className="form-label">Original Price</label>
            <input
                type="number"
                id="originalPrice"
                name="price"
                value={originalPrice}
                className="form-control"
                onChange={(e) => setOriginalPrice(e.target.value)}
                placeholder="Enter your product price..."
            />
        </div>

        
            <div className="mb-3">
            <label htmlFor="discountPrice" className="form-label">Price (With Discount) <span className="text-danger">*</span></label>
            <input
                type="number"
                className="form-control"
                id="discountPrice"
                name="price"
                value={discountPrice}
                onChange={(e) => setDiscountPrice(e.target.value)}
                placeholder="Enter your product price with discount..."
            />
        </div>

        <div className="mb-3">
            <label htmlFor="productStock" className="form-label">Product Stock <span className="text-danger">*</span></label>
            <input
                type="number"
                className="form-control"
                id="productStock"
                name="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="Enter your product stock..."
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Upload Images <span className="text-danger">*</span></label>
            <input
                type="file"
                className="form-control"
                id="upload"
                name="images"
                multiple
                onChange={handleImageChange}
            />
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            <div className="d-flex flex-wrap mt-2">
                {images && images.map((i) => (
                    <img src={URL.createObjectURL(i)} key={i} alt="" className="img-thumbnail me-2 mb-2" style={{width: "120px", height: "120px", objectFit: "cover" }}/>
                ))}
            </div>
        </div>

        <div className="text-center">
            <button type="submit" className="btn btn-primary">Create</button>
        </div>
            </form>
        </div>
    
           

  )
}

export default CreateProduct
