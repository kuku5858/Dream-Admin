import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../fireBase";

import { addProductsAction } from "../../redux/actions";
import "../newUser/newUser.css";

export default function AddProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };


  const handleClick = (e) => {
    e.preventDefault();

    //Giving image file uniqe name so it will not cause problem when we upload file with same name
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            setMessage("Upload is paused");
            break;
          case "running":
            setMessage("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, image: downloadURL };
          addProductsAction(product, dispatch);
          setMessage("Uploaded successfully");
          setInputs({});
          setFile(null);
        });
      }
    );
  };

  return (
    <div className="newuser__container">
      <h1>New Product</h1>
      <form className="newuser__form">
        <small>{message}</small>
        <div className="newuser__items">
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            required
            onChange={handleChange}
          />
        </div>

        <div className="newuser__items">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            required
            onChange={handleChange}
          />
        </div>

        <div className="newuser__items">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            required
            onChange={handleChange}
          />
        </div>

        <div className="newuser__items">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            required
            onChange={handleChange}
          />
        </div>

        <div className="newuser__items">
          <label htmlFor="file">Image</label>
          <input
            type="file"
            id="file"
            fileName="image"
            required
            onChange={handleFile}
          />
        </div>
        <button className="newuser__btn" onClick={handleClick}>
          Add Product
        </button>
      </form>
    </div>
  );
}
