import React from "react";
import InputField from "../../Common Components/FormFields/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Modal, TableContainer } from "@mui/material";
import { useEffect, useState } from "react";

const systemicExaminationData = [
  { name: "respiratorySystem", label: "Respiratory System", value: "RS" },
  {
    name: "cardiovascularSystem",
    label: "Cardiovascular System",
    value: "CVS",
  },
  {
    name: "centralNervousSystem",
    label: "CentralNervous System",
    value: "CNS",
  },
  { name: "pulmonaryArtery", label: "Pulmonary Artery", value: "PA" },
  { name: "menstrualHistory", label: "Menstrual History", value: "MH" },
  // Add more data as needed
];

const validationSchema = Yup.object().shape({
  respiratorySystem: Yup.string().required("Respiratory System is required"),
  cardiovascularSystem: Yup.string().required(
    "Cardiovascular System is required"
  ),
  centralNervousSystem: Yup.string().required(
    "Central Nervous System is required"
  ),
  pulmonaryArtery: Yup.string().required("Pulmonary Artery is required"),
  menstrualHistory: Yup.string().required("Menstrual History is required"),
});

const SystemicExaminationMEWS = () => {
  const [inputValues, setInputValues] = useState([]);

  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  let getInputValue = "";
  useEffect(() => {
    setInputValues(systemicExaminationData);
  }, []);

  console.log("inputValues123", inputValues);

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
            <div className="gap-4 mb-2 p-4 grid grid-cols-2">
              {inputValues?.map((vital, index) => (
                <div
                  key={index}
                  className={
                    vital.name === "menstrualHistory"
                      ? "grid col-span-2"
                      : "grid col-span-1"
                  }
                >
                  <InputField
                    label={vital.label}
                    name={vital.name}
                    variant="outlined"
                    type="text"
                    control={control}
                    defaultValue={vital.value}
                    error={errors[vital.name]?.message}
                    focused={false}
                    disabled={false}
                    inputProps={{ maxLength: 20 }}
                    onKeyDown={(e) => console.log(e.key)}
                    shrink={true}
                    inputRef={{
                      ...register(vital.name, {
                        onChange: (e) => {
                          console.log("eeeeeeeee123", e.target.value);
                          let tempData = [...inputValues];
                          tempData[index].value = e.target.value;
                          setInputValues(tempData);
                        },
                      }),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </TableContainer>
      </div>
    </form>
  );
};

export default SystemicExaminationMEWS;
