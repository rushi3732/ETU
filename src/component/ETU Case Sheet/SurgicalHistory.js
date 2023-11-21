import {
  Box,
  Chip,
  Modal,
  TableContainer,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ModalStyle } from "../../Common Components/ModalStyle";
import CancelPresentationIconButton from "../../Common Components/Buttons/CancelPresentationIconButton";
import { AddIcon } from "../../Common Components/assets/commonassets/CommonAssets";
import { Controller, useFormContext } from "react-hook-form";

const SurgicalHistory = () => {
  const { control, handleSubmit } = useFormContext();
  return (
    <div>
      <div className="rounded border ">
        <div className="bg-[#ECFCCB]  sticky  p-[7px] border  shadow-md flex justify-between">
          <div className="flex items-center">
            <div className="text-sm font-semibold flex items-center justify-start whitespace-nowrap ml-2">
              Surgical History
            </div>
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
              overflow: "visible",
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
          className="rounded  h-64 "
        >
          <div className=" p-2 bg-white">
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
                      name="surgicalHistory"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          id="outlined-multiline-flexible"
                          label="Add Surgical Examination"
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

export default SurgicalHistory;
