import { Box, Stack, Typography } from "@mui/material";
import {Sidebar, Videos} from "./"

import { useEffect, useState } from "react";
import  {fetchData} from "../utils/fetchFromApi"

const Feed = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        setError(error);
      }
      // volver con axios
    };

    fetchDataFromAPI();
  }, []);
  console.log(data)
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copyrigth"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 CA Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh, flex:2" }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
          New <span style={{ color: "#f31503" }}>videos</span>
        </Typography>
        <Videos></Videos>
      </Box>
    </Stack>
  );
};

export default Feed;
