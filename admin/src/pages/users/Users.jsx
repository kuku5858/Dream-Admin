import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux"

import { deleteUserAction, getAllUsersAction } from "../../redux/actions";

import "./users.css";

export default function Users() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  console.log(users)


  useEffect(() => {
    getAllUsersAction(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUserAction(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "username",
      headerName: "Username",
      width: 160,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "email",
      headerName: "Email",
      sortable: false,
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 90,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row._id}>
              <EditIcon className="users__icons edit" />
            </Link> */}
            <DeleteIcon
              className="users__icons delete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="users__container">
      <DataGrid
        rows={users}
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
