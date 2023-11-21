import React from "react";
import InputField from "../../Common Components/FormFields/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormContext } from "react-hook-form";
import * as Yup from "yup";
import { TableContainer } from "@mui/material";

const systemicExaminationData = [
  { name: "rs", label: "RS" },
  { name: "cvs", label: "CVS" },
  { name: "cns", label: "CNS" },
  { name: "pa", label: "PA" },
];

const SystemicExaminationPEWS = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded border">
        <div className="bg-[#FEF3C7] sticky top-0  p-[7px] border shadow flex justify-between">
          <div className="flex items-center">
            <div className="text-sm font-semibold w-full ml-2">
              Systemic Examination
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
          className="rounded  max-h-64 "
        >
          <div className=" p-2 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2 p-4">
              {systemicExaminationData.map((vital, index) => (
                <InputField
                  key={index}
                  label={vital.label}
                  name={vital.name}
                  variant="outlined"
                  type="text"
                  control={control}
                  focused={false}
                  disabled={false}
                  inputProps={{ maxLength: 20 }}
                  onKeyDown={(e) => console.log(e.key)}
                  shrink={true}
                />
              ))}
            </div>
          </div>
        </TableContainer>
      </div>
    </form>
  );
};

export default SystemicExaminationPEWS;
