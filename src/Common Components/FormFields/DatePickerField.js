import { FormControl, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { Controller } from "react-hook-form";
import "./style.css";
function DatePickerField({
  name,
  label,
  control,
  defaultValue,
  disabled,
  disablePast,
  disableFuture,
  sx,
  variant,
  inputProps,
  type,
  inputRef,
  inputFormat,
  error,
  dontCapitalize,
  color,
  onChange,
  minDate,
  value,
  onError,

  ...rest
}) {
  return (
    <div className="w-full">
      <FormControl className="w-full" sx={sx}>
        <Controller
          sx={{ width: "100%" }}
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label={label}
                value={value}
                minDate={minDate}
                onChange={onChange}
                inputFormat={inputFormat}
                onBlur={onBlur}
                disabled={disabled}
                disablePast={disablePast}
                disableFuture={disableFuture}
                renderInput={(params) => (
                  <TextField
                    onError={onError}
                    error={error}
                    {...params}
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        position: "absolute",
                        top: "-2px",
                      },
                    }}
                    sx={{
                      svg: {
                        color: "#073763",
                        height: 22,
                        width: "100%",
                        margin: "2px",
                        padding: "0px",
                        marginRight: "6px",
                      },
                      backgroundColor: "white",
                      overflow: "visible",
                      // MuiInputAdornment-root
                      "& .MuiInputAdornment-root": {
                        marginLeft: "0px",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& .MuiOutlinedInput-input": {
                          // border: 0,
                          fontSize: 14,
                          height: "18px",
                          width: "100%",
                          paddingX: "7px",
                          borderColor: "#0B83A5",
                          overflow: "hidden",
                        },
                        "& .MuiFormLabel-root": {
                          fontSize: "14px",
                        },
                      },
                    }}
                  />
                )}
                {...rest}
              />
            </LocalizationProvider>
          )}
        />
      </FormControl>
    </div>
  );
}

export default DatePickerField;
