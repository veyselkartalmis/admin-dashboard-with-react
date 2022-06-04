import "./datatable.scss";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableSource";
import { useState } from "react";

const Datatable = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to="/users/test" style={{ textDecoration: "none" }}>
							<div className="viewButton">View</div>
						</Link>
						<div className="deleteButton"
							onClick={() => handleDelete(params.row.id)}>Delete</div>
					</div>
				);
			},
		},
	];

	return (
		<div className="datatable">
			<div className="dataTableTitle">
				Add New User
				<Link to="/users/new" className="link">
					Add New
				</Link>
			</div>
			<DataGrid
				className="datagrid"
				rows={userRows}
				//Iki diziyi concant metodu ile birleştiriyorum
				//datatableSource.js dosyasında bulunan userColumns dizisine actionColumn dizisini ekliyorum
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
