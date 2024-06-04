import { Box, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Buttons from "../../Components/Buttons";
import { getData } from "../../API";

export default function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData);
    };
    
    fetchData();
  }, []);

  return (
    <Box>
      <Buttons />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", paddingTop: "10px" }}>
        {data.map((video) => (
          <Card
            key={video.id}
            sx={{ borderRadius: "20px", paddingBottom: "20px", width: "calc(33.33% - 13.33px)" }}
            onClick={() => window.open(video.videoLink, "_blank")}
          >
            <Box sx={{ width: "90%", height: "0", paddingBottom: "56.25%", position: "relative" }}>
              <img
                src={video.image}
                alt={video.name}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", cursor: "pointer" }}
              />
            </Box>
            <Box sx={{ paddingLeft: "10px", paddingTop: "20px" }}>
              <Typography sx={{ fontWeight: "500", fontSize: "16px", lineHeight: "22px" }}>
                {video.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "rgb(15, 15, 15)",
                  lineHeight: "20px",
                }}
              >
                {video.productMade}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "rgb(15, 15, 15)",
                  lineHeight: "20px",
                }}
              >
                {video.views.toLocaleString()} views
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
