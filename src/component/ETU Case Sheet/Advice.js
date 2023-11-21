import { Box, TableContainer, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const Advice = () => {
  const { control, handleSubmit } = useFormContext();

  return (
    <div className="rounded border ">
      <div className="bg-[#BEEFFF] sticky top-0 p-[7px] border shadow">
        <div className="flex justify-between">
          <div className="text-sm font-semibold w-full ml-2">Advice</div>
        </div>
      </div>
      <TableContainer
        square={true}
        elevation={1}
        sx={{
          "&::-webkit-scrollbar": {
            width: 7,
            height: 10,
            marginY: "4px",
            overflowY: "auto",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#d1d5db",
            borderRadius: "0.25rem",
            padding: "2px !important",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f8fafc",
            borderRadius: "0.25rem",
            padding: "2px !important",
          },
        }}
        className="rounded max-h-64"
      >
        <div className="p-2 bg-white">
          <div className="md:flex justify-between ">
            <Box
              component="div"
              sx={{
                "& .MuiTextField-root": { m: 1 },
              }}
              className="w-full mr-4"
            >
              <div>
                <Controller
                  name="advice"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-multiline-flexible"
                      label="Add Advice  History"
                      multiline
                      maxRows={4}
                      className="w-full"
                      variant="outlined"
                    />
                  )}
                />
              </div>
            </Box>
          </div>
        </div>
      </TableContainer>
    </div>
  );
};

export default Advice;
