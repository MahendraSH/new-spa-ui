// Import all necessary modules and icons
import { useGetAdminObjectQuery } from "@/app/features/admin-apis/admin-object-api-slice";
import HeadingNav from "@/components/heading-nav";
import EditColumnsDrawerActions from "@/components/Management-components/data/edit-columns-DrawerActions";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

// Define the columns for DataGrid
const columns = [
  {
    field: "propertyName",
    headerName: "Property Name",
    width: 200,
    renderCell: (params) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ whiteSpace: "pre-wrap" }}>{params.value}</span>
        <EditColumnsDrawerActions
          propertyName={params.value}
          description={params.row.description}
          display_ui={params.row.display_ui}
          required={params.row.required}
          unique={params.row.unique}
          type={params.row.type}
          searchable={params.row.searchable}
          minLength={params.row.minLength}
          maxLength={params.row.maxLength}
          pattern={params.row.pattern}
          ui_type={params.row.ui_type}
        />
      </Box>
    ),
  },
  { field: "type", headerName: "Type", width: 130 },
  { field: "ui_type", headerName: "UI Type", width: 130 },
  { field: "description", headerName: "Description", width: 200 },
  // ... (define additional columns as needed)
  // Icons columns
  {
    field: "required",
    headerName: "Required",
    width: 130,
    renderCell: (params) =>
      params.value ? (
        <CheckCircleOutlineIcon color="success" />
      ) : (
        <HighlightOffIcon color="error" />
      ),
  },
  {
    field: "display_ui",
    headerName: "Display UI",
    width: 150,
    renderCell: (params) =>
      params.value ? (
        <CheckCircleOutlineIcon color="success" />
      ) : (
        <HighlightOffIcon color="error" />
      ),
  },
  {
    field: "unique",
    headerName: "Unique",
    width: 130,
    renderCell: (params) =>
      params.value ? (
        <CheckCircleOutlineIcon color="success" />
      ) : (
        <HighlightOffIcon color="error" />
      ),
  },
  {
    field: "searchable",
    headerName: "Searchable",
    width: 150,
    renderCell: (params) =>
      params.value ? (
        <CheckCircleOutlineIcon color="success" />
      ) : (
        <HighlightOffIcon color="error" />
      ),
  },
  {
    field: "minLength",
    headerName: "Min Length",
    width: 150,
  },
  {
    field: "maxLength",
    headerName: "Max Length",
    width: 150,
  },
  {
    field: "pattern",
    headerName: "Pattern",
    width: 150,
  },
  // ... (define additional columns as needed)
];

// The main component
const DataObjectAddColumns = () => {
  const objectId = useParams().objectId;
  const { data, isLoading, isError, isSuccess, error } =
    useGetAdminObjectQuery(objectId);
  // The function for handling form submission will likely involve an API call

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    toast.error(
      error.data.message || error.data.error || "Something went wrong"
    );
    return <div>Error</div>;
  }
  if (isSuccess) {
    return (
      <Box>
        <HeadingNav
          navLinks={[
            { link: "/", label: "Dashboard" },
            { link: "/data-management", label: "Data Management" },
            { link: `/data-management/${objectId}`, label: objectId },
          ]}
        />

        {/* DataGrid to display values */}
        <Box sx={{ height: 400, width: "100%", my: 2 }}>
          <DataGrid
            rows={Object.entries(data?.properties || []).map(
              ([key, value]) => ({
                id: key,
                propertyName: key,
                ...value,
              })
            )}
            initialState={{
              pageSize: 5,
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 25]}
            disableSelectionOnClick
            disableColumnFilter
            disableColumnMenu
            disableDensitySelector
            disableRowSelectionOnClick
            autoHeight
            sx={{ my: 2 }}
          />
        </Box>
      </Box>
    );
  }
};

export default DataObjectAddColumns;
