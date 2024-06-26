import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos} from '../components';
import { fetchAPI } from "../utils/fetchAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {

  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
      fetchAPI(`search?part=snippet&q=${searchTerm}`)
      .then(data => setVideos(data.items))
  },[searchTerm]);

  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex:2, ml:{md:'120px'}}}>
        <Typography variant="h5" fontWeight="400" mb={2} sx={{ color: "white" }}>
         Search Results For: <span style={{ color: "#FC1503" }}>
           {searchTerm}
          </span> Videos
        </Typography>
        <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed