import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./main-table.css";
import { useQuery } from "react-query";
import { useFilterContext } from "../../filter-context";
import { CustomKeysDataGrid } from "./custom-keys-data-grid";
import { getKey, createKey, deleteKey } from "../../../../api/accesskey";

export const MainKeyTable = ({ sidebarOpen, toggleSidebar, user }) => {
  const [selectionModel, setSelectionModel] = useState([]);
  const { filterState, clearFilters } = useFilterContext();

  const {
    data: keys,
    isLoading,
    error,
  } = useQuery(["keys"], () => getKey());

  useEffect(() => {
    return () => {
      clearFilters();
    };
  }, [clearFilters]);

  if (isLoading) return "Loading...";
  if (error) return "There was a problem loading this page";

  return (
    <>
      <Container>
        <Box sx={{ width: "100%" }}>
          <CustomKeysDataGrid
            rows={keys.keys}
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
          />
        </Box>
      </Container>
    </>
  );
};
