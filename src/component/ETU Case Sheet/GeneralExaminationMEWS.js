import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../Common Components/FormFields/InputField";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TableContainer,
  Typography,
} from "@mui/material";
import CommonButton from "../../Common Components/commonbutton/CommonButton";
import CancelPresentationIconButton from "../../Common Components/Buttons/CancelPresentationIconButton";
import { ModalStyle } from "../../Common Components/ModalStyle";
import RadioField from "../../Common Components/FormFields/RadioField";

const schema = yup.object().shape({
  saturationWithO2: yup.number().required("Saturation With O2 is required"),
  saturationWithoutO2: yup
    .number()
    .required("Saturation Without O2 is required"),
  oxygenRatePerMin: yup.number().required("Oxygen Rate Per Min is required"),
  pulmonaryArtery: yup.string(),
});

const GeneralExaminationData = [
  { name: "saturation With O2 (%)", value: "" },
  { name: "saturation Without 02 (%)", value: "" },
  { name: "oxygen Rate Per Min", value: "" },
];

const GeneralExaminationMEWS = () => {
  const [eyeOpeningResponse, setEyeOpeningResponse] = React.useState(0);
  const [verbalResponse, setVerbalResponse] = React.useState(0);
  const [motorResponse, setMotorResponse] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const defaultValues = {
    motorOptions: 1,
    verbalOptions: 1,
    eyeOpeningOptions: 1,
    totallyUnresponsive: "Totally Unresponsive",
  };
  const {
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setMotorResponse(watch("motorOptions"));
    setVerbalResponse(watch("verbalOptions"));
    setEyeOpeningResponse(watch("eyeOpeningOptions"));
  }, [
    watch("motorOptions"),
    watch("verbalOptions"),
    watch("eyeOpeningOptions"),
  ]);

  const [avpu, setavpu] = useState("A");
  const mewsScore = 4;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [GCSData, setGCSData] = React.useState(0);

  let calculateGCS;
  useEffect(() => {
    calculateGCS =
      parseInt(eyeOpeningResponse) +
      parseInt(verbalResponse) +
      parseInt(motorResponse);
    setGCSData(calculateGCS);
  }, [eyeOpeningResponse, verbalResponse, motorResponse]);

  const handleSearchClick = () => {
    console.log("handleSearchClick");
  };

  const handleEyeOpeningResponseChange = (event) => {
    setEyeOpeningResponse(event.target.value);
    console.log(event.target.value);
    console.log(event);
  };

  const eyeOpeningOptions = [
    { id: 1, label: "None (1)", value: 0 },
    { id: 2, label: "To Pain (2)", value: 0 },
    { id: 3, label: "To Verbal Stimuli (3)", value: 0 },
    { id: 4, label: "Spontaneous (4)", value: 0 },
  ];
  const avpuOptions = [
    { id: 1, label: "A", value: 0 },
    { id: 2, label: "V", value: 0 },
    { id: 3, label: "P", value: 0 },
    { id: 4, label: "U", value: 0 },
  ];

  const verbalOptions = [
    { id: 1, label: "None (1)    ", value: 0 },
    { id: 2, label: "Incoherent (2)", value: 0 },
    { id: 3, label: "Inappropriate Words (3)", value: 0 },
    { id: 4, label: "Confused (4)", value: 0 },
    { id: 5, label: "ET Tube in Situ (T)", value: 0 },
  ];

  const motorOptions = [
    { id: 1, label: "None (1) ", value: 0 },
    { id: 2, label: "Extension to Pain or Decerebrate (2)", value: 0 },
    { id: 3, label: "Flexion To Pain or Decorticate (3)", value: 0 },
    { id: 4, label: "Withdraws From Pain (4)", value: 0 },
    { id: 5, label: "Localizes Pain (5)", value: 0 },
    { id: 6, label: " Obeys Commands (6)", value: 0 },
  ];

  return (
    <form>
      <div className="rounded border">
        <div className="bg-[#CCFBF1]  sticky top-0  p-[7px] border shadow">
          <div className="text-sm font-semibold w-full ml-2">
            General Examination
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
          className="rounded  h-48"
        >
          <div className="p-2 bg-white">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
                {GeneralExaminationData.map((value, index) => (
                  <InputField
                    key={index}
                    control={control}
                    label={value.name}
                    name={value.name.toLowerCase().replace(/ /g, "-")}
                    variant="outlined"
                    type="text"
                    defaultValue={value.value}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className=" border-r-2 border-slate-300 my-2 mx-1">
                <div className="flex justify-between h-full my-auto">
                  <CommonButton
                    type="button"
                    label="GCS"
                    onClick={openModal}
                    className="h-8 px-6 my-auto rounded-md bg-customBlue text-white text-sm"
                    disabled={false}
                    searchIcon={false}
                  />
                  <div className="flex mx-4 my-auto">
                    <p className="font-semibold mx-4 whitespace-nowrap">
                      GCS Score
                    </p>
                    <p className="bg-red-500 text-white font-semibold rounded-full w-7 h-7 text-center pt-0.5">
                      {GCSData}
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-slate-300 my-2 mx-1 sm:mx-auto">
                <div className="flex justify-between  font-bold  h-full my-auto">
                  <RadioField
                    dataArray={avpuOptions}
                    name="avpu"
                    control={control}
                  />
                </div>
                <div className="flex justify-end   my-auto">
                  <p className="font-semibold mr-2">Mews</p>
                  <p className="bg-green-500 text-white font-semibold rounded-full w-7 h-7 text-center pt-0.5">
                    {mewsScore}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TableContainer>
        <Modal
          open={isModalOpen}
          aria-labelledby="modal-modal-title"
          onClose={closeModal}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={ModalStyle} style={{ width: "70vw", maxWidth: "820px" }}>
            <div className=" flex  justify-between items-center">
              <div className=" flex  font-bold justify-start -mt-4">
                GCS Calculator
              </div>
              <div>
                <CancelPresentationIconButton onClick={closeModal} />
              </div>
            </div>
            <div className="-mr-2">
              <div className=" flex  justify-between items-center  gap-6 mt-2 "></div>
              <div className=" ml-1 mt-2 flex  gap-2">
                <fieldset className="border-2 rounded font-bold border-gray-200  p-2">
                  <legend className="text-sm whitespace-nowrap">
                    Eye Opening Response
                  </legend>
                  <div className="mx-2">
                    <RadioField
                      dataArray={eyeOpeningOptions}
                      name="eyeOpeningOptions"
                      control={control}
                      onChange={handleEyeOpeningResponseChange}
                    />
                  </div>
                </fieldset>
                <fieldset className="border-2 rounded font-bold border-gray-200  p-2">
                  <legend className="text-sm whitespace-nowrap">
                    Verbal Response
                  </legend>
                  <div className="mx-2">
                    <RadioField
                      dataArray={verbalOptions}
                      name="verbalOptions"
                      control={control}
                      onChange={(e) => {
                        setVerbalResponse(e.target.value);
                      }}
                    />
                  </div>
                </fieldset>
                <fieldset className="border-2 rounded font-bold border-gray-200  p-2">
                  <legend className="text-sm whitespace-nowrap">
                    Motor Response
                  </legend>
                  <div className="mx-2">
                    <RadioField
                      dataArray={motorOptions}
                      name="motorOptions"
                      control={control}
                      onChange={(e) => {
                        setMotorResponse(e.target.value);
                      }}
                    />
                  </div>
                </fieldset>
              </div>
              <div className="mt-3 flex justify-between  ">
                <div className="flex justify-start my-auto gap-2">
                  <div className="flex gap-2">
                    <p className="font-semibold whitespace-nowrap">GCS Score</p>
                    <p className="bg-red-500 text-white font-semibold rounded-full w-7 h-7 text-center pt-0.5">
                      {GCSData}
                    </p>
                  </div>
                  <div>
                    <InputField
                      name="totallyUnresponsive"
                      variant="outlined"
                      label="Alert"
                      error={errors.totallyUnresponsive}
                      control={control}
                    />
                  </div>
                </div>
                <div className=" flex justify-end">
                  <CommonButton
                    type="Submit"
                    label="Save"
                    onClick={handleSearchClick}
                    className="h-9 px-3 w-min rounded text-sm font-medium searchIconButton bg-[#4CAF50] text-white whitespace-nowrap"
                    disabled={false}
                    searchIcon={false}
                  />
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </form>
  );
};

export default GeneralExaminationMEWS;
