import React from "react";
import "./ServicesBar.css";
import spliter from "./Line 10.svg";
import { FormControl, MenuItem, Select } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
const ServicesBar = () => {
  const [selectedValue, setSelectedValue] = useState("Trading");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="d-flex jusitfy-content-center flex-column align-items-center w-100">
      <div className="servicesBar-Component row">
        <div className="service-item trading d-flex col-md-2 col-sm-6">
          <h2>Trading</h2>
          <img src={spliter} alt="" className="spliter" />
        </div>
        <div className="service-item automation col-md-3 col-sm-6">
          <h2>Automation</h2>
          <img src={spliter} alt="" className="spliter" />
        </div>
        <div className="service-item portolio col-md-2 col-sm-6">
          <h2>Portfolio</h2>
          <img src={spliter} alt="" className="spliter" />
        </div>
        <div className="service-item alerts col-md-2 col-sm-6">
          <h2>Alerts</h2>
          <img src={spliter} alt="" className="spliter" />
        </div>
        <div className="service-item training col-md-2 col-sm-12">
          <h2>Training</h2>
        </div>
      </div>
      <div className="heading-select">
        <FormControl
          sx={{
            Height: "40px !important",
            m: 1,
            width: "90%",
            backgroundColor: "#181818",
            borderRadius: "10px",
            border: "2px solid #fff",
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "transparent", // Remove the border color when focused
              },
          }}
        >
          <Select
            sx={{
              height: "100%",
              fontWeight: "700",
              color: "#fff",
              textAlign: "center",
              "& .MuiSelect-icon": {
                color: "inherit",
              },
            }}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            onChange={handleChange}
            value={selectedValue}
            IconComponent={ExpandMoreIcon}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#000", // Background color of the menu items
                },
              },
            }}
            classes={{
              // Target the selected class and customize its background color
              ".css-14pi00-MuiButtonBase-root-MuiMenuItem-root.Mui-selected": {
                backgroundColor: "darkgray",
              },
            }}
          >
            <MenuItem sx={{ color: "#fff" }} value="Trading">
              Trading
            </MenuItem>
            <MenuItem sx={{ color: "#fff" }} value="Automation">
              Automation
            </MenuItem>
            <MenuItem sx={{ color: "#fff" }} value="Portfolio">
              Portfolio
            </MenuItem>
            <MenuItem sx={{ color: "#fff" }} value="Alerts">
              Alerts
            </MenuItem>
            <MenuItem sx={{ color: "#fff" }} value="Training">
              Training
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default ServicesBar;
