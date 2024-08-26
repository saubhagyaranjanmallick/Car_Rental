import React from "react";
import logout from "../assets/Image/logout.avif";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={logout}
          alt="logout"
          style={{ height: "300px", width: "350px" }}
        />
      </div>

      {/* Add your success message here */}

      <p style={{fontSize:"20px"}}>You have been logged out successfully.</p>
      <div style={{ alignItems:"center", display:"flex", justifyContent:"center"}}>
        <Button variant="outlined" color="primary" sx={{ margin: "10px" , textTransform:"capitalize" }} onClick={()=>{navigate("/")}}>
        Dashboard
        </Button>
      </div>
    </>
  );
};

export default Logout;
