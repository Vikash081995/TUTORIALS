import React from "react";
import { Box } from "@mui/material";
import ContentItem from "./ContentItem";

const ContentArray = [
  {
    title: "Title 1",
    description: "Description 1",
    img: "/1.jpg"
  },
  {
    title: "Productivity is brilliant",
    description: "Description 2",
    img: "/2.jpg"
  },
  {
    title: "Fast Development",
    description: "Description 2",
    img: "/2.jpg"
  }
];

const Content = () => {
  return (
    <Box
      bgcolor="#fbf2f2"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      height="10%"
    >
      {ContentArray.map((con, index) => (
        <ContentItem
          key={index}
          title={con.title}
          description={con.description}
          img={con.img}
          swap={index % 2 === 0 ? true : false}
        />
      ))}
    </Box>
  );
};

export default Content;
