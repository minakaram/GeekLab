import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "./DropDown.css";
import logo from "./layer.svg";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: "#202020", // Background color of the menu items
    },
  },
};

// const names = ["Health Care", "Beauty Care", "Body Care", "Gym"];

const DropDown = ({options,message,header}) => {
  const [personName, setPersonName] = React.useState([options[0]]); // Set initial state to contain the first value

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="industry-section">
      <p>{header}</p>
      <FormControl
        sx={{
          m: 1,
          width: "100%",
          border: "2px solid #fff",
          borderRadius: "10px",
          "&:hover": {
            border: "2px solid #fff", // Remove hover effect
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: "none", // Remove border when focused
            },
        }}
      >
        <img src={logo} alt="" className="industry-logo" />
        <Select
          sx={{
            paddingLeft: "1.8rem",
            color: "#fff",
            overflow: "hidden",
            "&:hover": {
              backgroundColor: "transparent",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "none",
              },
            "& .MuiSelect-icon": {
              color: "#fff", // Set the color of the arrow icon to white
            },
          }}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          IconComponent={ExpandMoreIcon}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option} sx={{ backgroundColor: "#202020", color: "#fff",height:"40px",width:"100%" }}>
              <Checkbox checked={personName.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <span>{message}</span>
    </div>
  );
};

export default DropDown;
