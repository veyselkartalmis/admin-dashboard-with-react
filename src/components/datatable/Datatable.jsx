import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableSource"

const Datatable = () => {
    return (
        <div className="datatable">
            <div className="datatable">
                <div className="datatableTitle">
                    Add New User
                    <Link to="/users/new" className="link">
                        Add New
                    </Link>
                </div>
                <DataGrid
                    className="datagrid"
                    rows={data}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Datatable;