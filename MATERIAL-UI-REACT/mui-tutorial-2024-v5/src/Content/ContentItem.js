import React from "react";
import { Typography, Box } from "@mui/material";

const ContentItem = ({ title, description, img, swap }) => {
  return (
    <Box
      bgcolor={swap && "#f2f2f2"}
      display="flex"
      padding={10}
      justifyContent="space-between"
      alignItems="center"
    >
      {swap ? (
        <>
          <Box>
            <Typography color="#734950" padding={3} variant="h3">
              {title}
            </Typography>
            <Typography variant="caption" padding={3}>
              {description}
            </Typography>
          </Box>
          <img
            src={img}
            alt={title}
            loading="lazy"
            width="50%"
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginLeft: "10%",
              borderRadius: 20
            }}
            height="300px"
          />
        </>
      ) : (
        <>
          <img
            src={img}
            alt={title}
            loading="lazy"
            width="50%"
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginRight: "10%",
              borderRadius: 20
            }}
            height="300px"
          />
          <Box>
            <Typography color="#734950" padding={3} variant="h3">
              {title}
            </Typography>
            <Typography variant="caption" padding={3}>
              {description}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContentItem;
