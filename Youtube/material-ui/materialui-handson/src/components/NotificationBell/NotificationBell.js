import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";

const NotificationBell = () => {
  return (
    <Badge badgeContent={4} color="primary">
      <NotificationsIcon />
    </Badge>
  );
};

export default NotificationBell;
