import { DataGrid } from "@mui/x-data-grid";
import { contactData } from "../../Data/ContactData";
import useTheme from "@mui/material/styles/useTheme";
import { Theme } from "@mui/material";

const columns = (theme: Theme) => [
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    renderCell: (cellValues: any) => {
      return (
        <div style={{ color: theme.palette.primary.main }}>
          {cellValues.value ? cellValues.value[0] : ""}
        </div>
      );
    }
  },
  {
    field: "Role",
    headerName: "Role",
    minWidth: 100,
    renderCell: (cellValues: any) => {
      return cellValues.value;
    }
  },
  {
    field: "Skills",
    headerName: "Skills",
    minWidth: 150,
    renderCell: (cellValues: any) => {
      return cellValues.value;
    }
  },
  {
    field: "startDate",
    headerName: "Start Date",
    minWidth: 150,
    renderCell: (cellValues: any) => {
      return cellValues.value;
    }
  },
  {
    field: "preference",
    headerName: "workPreference",
    minWidth: 150,
    renderCell: (cellValues: any) => {
      return cellValues.value;
    }
  }
];

function ContactDataGrid() {
  const rows = () => [...contactData];
  const theme = useTheme();
  return (
    <div style={{ height: 500 }}>
      <DataGrid
        rows={rows()}
        columns={columns(theme)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        pageSizeOptions={[5]}
        // headerHeight={60}
        // rowsHeight={120}
      />
      ;
    </div>
  );
}

export default ContactDataGrid;
