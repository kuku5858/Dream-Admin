import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";

import "./products.css";
import { deleteProductsAction, getProductsAction } from "../../redux/actions";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProductsAction(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProductsAction(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
    {
      field: "productName",
      headerName: "Product name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="product__item">
            <img src={params.row.image} alt="" className="product__image" />
            {params.row.productName}
          </div>
        );
      },
    },
    {
      field: "description",
      headerName: "Description",
      sortable: false,
      width: 260,
    },
    {
      field: "price",
      headerName: "Price",
      sortable: false,
      width: 100,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      sortable: false,
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <EditIcon className="products__icons edit" />
            </Link>
            <DeleteIcon
              className="products__icons delete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="products__container">
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => {
          if (row !== null) {
            return row._id;
          }
          else {
            return 1;
          }
        }}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default Products;
