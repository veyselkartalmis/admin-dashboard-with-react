import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableSource";

const Datatable = () => {
	const actionColumn = [
		{
			field: "action",
			headerName: "action",
			width: 200,
			renderCell: () => {
				return (
					<div className="cellAction">
						<div className="viewButton">View</div>
						<div className="deleteButton">Delete</div>
					</div>
				);
			},
		},
	];

	return (
		<div className="datatable">
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
