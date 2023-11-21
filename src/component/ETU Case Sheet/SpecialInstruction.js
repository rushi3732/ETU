import { Box, TableContainer, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const SpecialInstruction = () => {
  const { control, handleSubmit } = useFormContext();

  return (
    <div>
      <div className="rounded border">
        <div className="bg-[#C6CCFF] sticky top-0   p-[7px] border shadow">
          <div className="text-sm font-semibold w-full ml-2">
            Special Instruction{" "}
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
          className="rounded  h-48 "
        >
          <div className="p-2 bg-white">
            <div className="flex justify-between mb-2">
              <div className="flex justify-between  w-full">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                  className="w-full  mr-4"
                >
                  <div>
                    <Controller
                      name="specialInstruction"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          id="outlined-multiline-flexible"
                          label="Add Special Instruction"
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
          </div>
        </TableContainer>
      </div>
    </div>
  );
};

export default SpecialInstruction;
