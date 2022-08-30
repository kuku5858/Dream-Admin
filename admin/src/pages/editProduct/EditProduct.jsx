import React, { useMemo, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import UploadIcon from "@mui/icons-material/Upload";
import { useSelector, useDispatch } from "react-redux";

import { updateProductsAction } from "../../redux/actions";

import { productData } from "../../data.js";
import "./editProduct.css";
import { userReq } from "../../requestMethod";

export default function EditProduct() {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === params.id )
  );

  console.log(`product: ${JSON.stringify(product)}`);

  const [prodStat, setProdStat] = useState([]);

  const [inputs, setInputs] = useState({});
  // const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setInputs((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    updateProductsAction(product._id, inputs, dispatch);

    window.location.refresh();

  }

  
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getProdStat = async () => {
      try {
        const res = await userReq.get("/orders/status?pid" + params.id);
        res.data.map((item) =>
          setProdStat((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getProdStat();
  }, [params.id, MONTHS]);

  return (
    <div className="editproduct__container">
      <div className="editproduct__header">
        <h1>Product</h1>
        <Link to={"/addproduct"}>
          <button className="create__product">Add new product</button>
        </Link>
      </div>

      <div className="product__info">
        <div className="product__detail">
          <div className="name__image">
            <img
              src={product.image}
              alt=""
              className="productdetail__image"
            />
            <span className="productdetail__name">{product.productName}</span>
          </div>
          <div className="details">
            <div className="info">
              <span>Id:</span>
              <span>{product._id}</span>
            </div>
            <div className="info">
              <span>Sales:</span>
              <span>{productData[0].sales}</span>
            </div>
            <div className="info">
              <span>Price:</span>
              <span>${product.price}</span>
            </div>
            <div className="info">
              <span>Quantitiy:</span>
              <span>{product.quantity}</span>
            </div>
          </div>
        </div>
        <div className="info__right">
          <Chart
            data={prodStat}
            title={"Product Sales Analytics"}
            dataKey={"Sales"}
          />
        </div>
      </div>

      <div className="product__update">
        <h3>Update Product</h3>
        <form className="product__form">
          <div className="image__change">
            <img
              src={
                product.image ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4owD-nVEmGZry08KffxVhrCwQLdPpwgeD5Q&usqp=CAU"
              }
              alt=""
              className="image__update"
            />
            <label htmlFor="file">
              <UploadIcon />
            </label>
            <input
              type="file"
              id="file"
              fileName="image"
              style={{ display: "none" }}
            />
          </div>
          <div className="info__change">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Product Name" onChange={handleChange}
            />
            <label>Desctiption</label>
            <input
              type="text"
              placeholder="Product Description" onChange={handleChange}
            />
            <label>Price</label>
            <input
              type="number"
              placeholder="Price" onChange={handleChange}
            />
            <label>Quantity</label>
            <input
              type="number"
              placeholder="Quantity" onChange={handleChange}
            />
            <button className="productupdate__btn" onClick={handleUpdate}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
