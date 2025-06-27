import Box from "@mui/material/Box";
import React from "react";
import WebsiteTable from "./WebsiteTable.tsx";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function MyWebsites() {
  const navigate = useNavigate();
  return (
    <>
      <h3 className="text-24 font-semibold p-5 ml-5 font-sans, line-sp">
        All Websites
      </h3>
      <Box>
        <Box className="flex flex-col">
          <Button
            onClick={() => navigate("/add_websites")}
            className=" w-[160px] text-white normal-case ml-10 bg-[#613FDD]"
          >
            + Add website
          </Button>
        </Box>
        <WebsiteTable />
      </Box>
    </>
  );
}

export default MyWebsites;
