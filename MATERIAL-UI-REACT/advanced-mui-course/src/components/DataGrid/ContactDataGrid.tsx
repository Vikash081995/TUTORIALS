import {
  DataGrid,
  GridRenderCellParams,
  GridToolbar,
  GridToolbarContainer
} from "@mui/x-data-grid";
import { contactData } from "../../Data/ContactData";
import useTheme from "@mui/material/styles/useTheme";
import { Box, Button, Theme } from "@mui/material";

const handlePrintClick = (cellValues: GridRenderCellParams) => {
  console.log(cellValues);
};

const datagridSx = {
  "& .MuiDataGrid-ColumnHeaders": {
    backgroundColor: "primary.main",
    fontWeight: "bold",
    fontSize: 20
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      "&:nth-of-type(2n)": {
        backgroundColor: "grid.main"
      }
    }
  }
};

const columns = (theme: Theme) => [
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    renderCell: (cellValues: any) => {
      return (
        <Box
          sx={{
            color: "primary.main",
            fontSize: 18,
            fontWeight: "bold"
          }}
        >
          {cellValues.value}
        </Box>
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
  },
  {
    field: "Print",
    renderCell: (cellValues: GridRenderCellParams) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            handlePrintClick(cellValues);
          }}
        >
          Print
        </Button>
      );
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
        pageSizeOptions={[5]}
        sx={datagridSx}
        components={{
          Toolbar: () => (
            <GridToolbarContainer
              sx={{
                justifyContent: "flex-end",
                "& button": { border: "none" },
                "& .MuiBox-root": { display: "none" }
              }}
            ></GridToolbarContainer>
          )
        }}
        initialState={{
          sorting: {
            sortModel: [
              {
                field: "name",
                sort: "asc"
              }
            ]
          }
        }}
      />
      ;
    </div>
  );
}

export default ContactDataGrid;
