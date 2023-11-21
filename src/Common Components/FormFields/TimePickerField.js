import React from "react";
import { DesktopTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";

const TimePickerField = ({ className, label, name, value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopTimePicker
        className={`bg-white  ${className}`}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            fullWidth
            size="small"
            name={name}
            {...params}
            sx={{
              svg: { color: "#0B83A5" },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default TimePickerField;
