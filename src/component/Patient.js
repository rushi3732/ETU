import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputField from "../Common Components/FormFields/InputField";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckBoxField from "../Common Components/FormFields/CheckBoxField";
import CommonButton from "../Common Components/commonbutton/CommonButton";
import {
  HistoryIcon,
  VaccineIcon,
} from "../Common Components/assets/commonassets/CommonAssets";
import Chip from "@mui/material/Chip";
import { Modal } from "@mui/material";
import { ModalStyle } from "../Common Components/modalstyle/ModalStyle";
import CancelPresentationIconButton from "../Common Components/Buttons/CancelPresentationIconButton";
// import Modal from '@mui/material/Modal';

const schema = yup.object().shape({
  // Define validation schema for your form fields here
  // Example for the "Temp" field:
  temp: yup.number().required("Temp is required"),
  pulseRate: yup.number().required("Pulse Rate is required"),
  bpSystolic: yup.number().required("BP(Systolic) is required"),
  bpDiastolic: yup.number().required("BP(Diastolic) is required"),
  spO2: yup.number().required("SpO2 is required"),
  weight: yup.number().required("Weight is required"),
  height: yup.number().required("Height is required"),
  bmi: yup.number().required("BMI is required"),
  respiration: yup.number().required("Respiration is required"),
  bsl: yup.number().required("BSL is required"),
  // Add more validation rules for other fields if needed
});
const schemaPastHistory = yup.object().shape({
  dm: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  htn: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  heartDisease: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  tb: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  copd: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  asthma: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  liver: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  other: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  // Add more fields here following the same structure
});

const Patient = () => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddChip = () => {
    if (inputValue.trim() !== "") {
      setChips([...chips, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteChip = (chipToDelete) => () => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const { control: controlPastHistory } = useForm({
    resolver: yupResolver(schemaPastHistory),
  });
  const patientData = {
    "Patient Name ": "Surekha Subhash Patil",
    UHID: "SJ/2022/000017",
    Age: "23Y 02M 04D",
    Gender: "FeMale",
    "Bed No": "1234",
    "Arrival Date & Time ": "12/02/2022, 12.30 AM",
    "Doctor Name": "Dr. Jayant Pawar",
  };
  const handleCompleteClick = () => {
    console.log("handleCompleteClick");
  };

  const patientVitals = [
    {
      name: "Temp",
      unit: "°F",
      value: 53,
    },
    {
      name: "Pulse Rate",
      unit: "bpm",
      value: 75,
    },
    {
      name: "BP(Systolic)",
      unit: "mmHg",
      value: 75,
    },
    {
      name: "BP(Diastolic)",
      unit: "mmHg",
      value: 57,
    },
    {
      name: "SpO2",
      unit: "%",
      value: 75,
    },
    {
      name: "Weight",
      unit: "kg",
      value: 67,
    },
    {
      name: "Height",
      unit: "cm",
      value: 177,
    },
    {
      name: "BMI",
      unit: "kg/m2",
      value: 21.39,
    },
    {
      name: "Respiration",
      unit: "bpm",
      value: 89,
    },
    {
      name: "BSL",
      unit: "cm",
      value: 90,
    },
  ];

  const [dataObject, setDataObject] = useState({
    dm: { checked: false, description: "" },
    htn: { checked: false, description: "" },
    "Heart Disease": { checked: false, description: "" },
    tb: { checked: false, description: "" },
    copd: { checked: false, description: "" },
    asthma: { checked: false, description: "" },
    liver: { checked: false, description: "" },
    other: { checked: false, description: "" },
  });

  const updateData = (property, value) => {
    setDataObject((prevDataObject) => ({
      ...prevDataObject,
      [property]: { ...prevDataObject[property], checked: value },
    }));
  };

  return (
    <>
      <div className="border shadow-md p-2 my-2 bg-gray-100 ml-3">
        {/* <div className="flex items-center">
          <div className="w-24 h-24 object-contain">
            <img src={photo} alt="Photo" className="w-full h-full" />
          </div>

          <div className="lg:grid grid-cols-3 gap-y-4 mx-4 hidden lg:visible gap-2">
            <div>
              <div className="font-bold text-sm whitespace-nowrap">
                Courtney Henry
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 11 16"
                  fill="none"
                >
                  <path
                    d="M5.5 0C2.46321 0 0 2.508 0 5.6C0 9.8 5.5 16 5.5 16C5.5 16 11 9.8 11 5.6C11 2.508 8.53679 0 5.5 0ZM5.5 7.6C4.41571 7.6 3.53571 6.704 3.53571 5.6C3.53571 4.496 4.41571 3.6 5.5 3.6C6.58429 3.6 7.46429 4.496 7.46429 5.6C7.46429 6.704 6.58429 7.6 5.5 7.6Z"
                    fill="#0B83A5"
                  />
                </svg>
                <span class="font-poppins text-8 font-small ml-2 whitespace-nowrap">
                  Kothrud, Pune.
                </span>
              </div>
            </div>
            <div class="border-l border-gray-500 h-16 w-1"></div>
            <div className="flex">
              <p className="font-bold text-sm w-4/12">Gender</p>
              <p className="font-bold text-sm mx-2">:</p>
              <p className="text-sm">Male</p>
            </div>
            <div className="flex">
              <p className="font-bold text-sm w-4/12 whitespace-nowrap">Marital status</p>
              <p className="font-bold text-sm mx-2">:</p>
              <p className="text-sm">Single</p>
            </div>
          </div>
        </div> */}
        <div className="lg:grid grid-cols-3 gap-y-4 mx-4 hidden lg:visible">
          {Object.entries(patientData).map(([key, value]) => (
            <div key={key} className="flex">
              <p className="font-bold text-sm w-4/12 whitespace-nowrap">
                {key}
              </p>
              <p className="font-bold text-sm mx-2">:</p>
              <p className="text-sm whitespace-nowrap">{value}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-y-4 mx-4 lg:hidden visible">
          {Object.entries(patientData).map(([key, value]) => (
            <div key={key} className="flex">
              <p className="font-bold text-sm w-4/12 whitespace-nowrap">
                {key}
              </p>
              <p className="font-bold text-sm mx-2">:</p>
              <p className="text-sm whitespace-nowrap">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center my-2 ml-3">
        <div className="text-black font-roboto text-md font-medium whitespace-nowrap">
          Electronic Medical Record
          <span className="text-gray-600 font-roboto text-md font-normal">
            (EMR)
          </span>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <HistoryIcon />
          <VaccineIcon />
          <CommonButton
            type="button"
            onClick={handleCompleteClick}
            label="Complete"
            className="bg-teal-500 text-white"
            disabled={false}
            searchIcon={false}
          />
        </div>
      </div>

      <div className="ml-3 h-auto">
        <div className="bg-[#FFD4E3] p-1 border shadow-md">
          <div className="flex justify-between">
            <div className="text-sm font-semibold w-full ">Vitals</div>
            <button className="text-blue-500 mr-1 flex justify-end">
              <Tooltip title="View Vital Details" placement="left" arrow>
                <svg
                  className="w-6 h-6"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                    fill="#007EA9"
                  />
                </svg>
              </Tooltip>
            </button>
          </div>
        </div>
        <div className="border shadow-md p-2 bg-white">
          <div className="flex justify-between mb-2">
            <form className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full mt-2">
                {patientVitals.map((vital, index) => (
                  <div key={index} className="flex justify-between ">
                    <div className="flex items-center">
                      <div className="w-20">
                        <p className="text-xs text-left whitespace-nowrap">
                          {vital.name}
                        </p>
                      </div>
                      <div className="w-4">
                        <span>:</span>
                      </div>
                    </div>
                    <div className="w-32">
                      <form>
                        <InputField
                          key={index}
                          label={vital.name}
                          name={vital.name.toLowerCase()} // Use the name as the field name
                          variant="outlined"
                          type="text" // Change this to the appropriate type
                          control={control}
                          defaultValue={vital.value}
                          // error={errors[vital.name.toLowerCase()]}
                          focused={false} // You can customize this
                          disabled={false} // You can customize this
                          inputProps={{ maxLength: 20 }} // You can customize this
                          onKeyDown={(e) => console.log(e.key)} // You can customize this
                          shrink={true} // You can customize this
                        />
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="ml-3 gap-3 my-2 ">
        <div className="bg-[#CFFAFE] p-1 border shadow-md">
          <div className="text-sm font-semibold w-full">Past History</div>
        </div>
        <div className="border shadow-md p-2 bg-white">
          <div className="flex justify-between mb-2">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:mb-2 sm:mb-2 xs:mb-2 gap-1 text-xs">
                {Object.keys(dataObject).map((property) => (
                  <div
                    className="flex items-center justify-between"
                    key={property}
                  >
                    <label className="cursor-pointer flex items-center">
                      <div className="w-4 m-2">
                        <CheckBoxField
                          name={property}
                          label={property}
                          control={control}
                          defaultValue={dataObject[property].checked}
                          onChange={(checked) => updateData(property, checked)}
                        />
                      </div>
                      <div className="w-28">
                        {/* <span className="text-xs whitespace-nowrap">
                          {property}
                        </span> */}
                      </div>
                    </label>
                    <div className="w-full lg:w-44 md:w-40 sm:w-40 gap-2">
                      <InputField
                        name={` whitespace-nowrap description-${property}`}
                        label="Description"
                        type="text"
                        control={controlPastHistory}
                        defaultValue={dataObject[property].description}
                        onChange={(description) =>
                          updateData(property, {
                            ...dataObject[property],
                            description,
                          })
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="ml-3 gap-3 my-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
          <div>
            <div className="bg-lime-50 p-1 border shadow-md flex justify-between">
              <div className="text-sm font-semibold w-full">Allergies</div>
              <div className="flex justify-end">
              <Tooltip title="Add Allergies" placement="left" arrow>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_9890_15977)">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
                      fill="#3B82F6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_9890_15977">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Modal
        // open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
       <CancelPresentationIconButton 
            // onClick={() => {
            // handleClose();
            // }}
          />
          </Box>
          </Modal>
                </Tooltip>
              </div>
            </div>
            <div className="border shadow-md p-2 bg-white">
              <div className="flex justify-between mb-2">
                <div>
                  <div>
                    <TextField
                      // label="Add a chip"
                      variant="outlined"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleAddChip();
                        }
                      }}
                    />
                    <button onClick={handleAddChip}>Add</button>
                  </div>
                  <div>
                    {chips.map((chip, index) => (
                      <Chip
                        key={index}
                        label={chip}
                        onDelete={handleDeleteChip(chip)}
                        color="primary"
                        style={{ margin: "4px" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#ECFCCB] p-1 border shadow-md">
              <div className="text-sm font-semibold w-full">
                Surgical History
              </div>
            </div>
            <div className="border shadow-md p-2 bg-white">
              <div className="md:flex justify-between ">
                {" "}
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                  className="w-full mr-4"
                >
                  <div>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Add Surgical History"
                      multiline
                      maxRows={4}
                      className="w-full"
                      variant="outlined"
                    />
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-3 gap-3 my-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
          <div>
            <div className="bg-[#DCFCE7] p-1 border shadow-md">
              <div className="text-sm font-semibold w-full">Complaints </div>
            </div>
            <div className="border shadow-md p-2 bg-white">
              <div className="flex justify-between mb-2">
                {/* Content for Previous Visits */}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#DBEAFE] p-1 border shadow-md">
              <div className="text-sm font-semibold w-full">
                Local Examination
              </div>
            </div>
            <div className="border shadow-md p-2 bg-white">
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
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Add Local Examination"
                      multiline
                      maxRows={4}
                      className="w-full"
                      variant="outlined"
                    />
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-3 gap-3 my-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
          <div>
            <div className="bg-[#FCE7F3] p-1 border shadow-md">
              <div className="text-sm font-semibold w-full">
                Injury Details{" "}
              </div>
            </div>
            <div className="border shadow-md p-2 bg-white">
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
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Add Injury Examination"
                      multiline
                      maxRows={4}
                      className="w-full"
                      variant="outlined"
                    />
                  </div>
                </Box>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#D6FEF4] p-1 border shadow-md">
              <div className="text-sm font-semibold w-full">Diagnosis</div>
            </div>
            <div className="border shadow-md p-2 bg-white">
              <div className="flex justify-between mb-2">
                {/* Content for Past History */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-3 gap-3 my-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
          <div>
            <div className="bg-[#FEF3C7] p-1 border shadow-md">
              <div className="text-sm font-semibold w-full">
                Surgery Details
              </div>
            </div>
            <div className="border shadow-md p-2 bg-white">
              <div className="flex justify-between mb-2">
                {/* Content for Previous Visits */}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#E0F2FE] p-1 border shadow-md flex justify-between">
              <div className="text-sm font-semibold w-full ">
                Investigation(Pathology)
              </div>
              <div className="flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_9890_15977)">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
                      fill="#3B82F6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_9890_15977">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="border shadow-md p-2 bg-white">
              <div className="flex justify-between mb-2">
                {/* Content for Past History */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-3 gap-3 my-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
          <div>
            <div className="bg-[#DEFFD6] p-1 border shadow-md  flex">
              <div className="text-sm font-semibold w-full">
                Investigation(Radiology)
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_9890_15977)">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
                      fill="#3B82F6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_9890_15977">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="border shadow-md p-2 bg-white">
              <div className="flex justify-between mb-2">
                {/* Content for Previous Visits */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-3 h-auto">
        <div className="bg-[#FFD4E3] p-1 border shadow-md">
          <div className="flex justify-between">
            <div className="text-sm font-semibold  ">Pain Assessment Scale</div>
            <div className="text-sm font-semibold  flex justify-center ">
              Pain Score Details
            </div>
            <button className="text-blue-500 mr-1 flex justify-end">
              <Tooltip title="View Vital Details" placement="left" arrow>
                <svg
                  className="w-6 h-6"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                    fill="#007EA9"
                  />
                </svg>
              </Tooltip>
            </button>
          </div>
        </div>
        <div className="border shadow-md p-2 bg-white">
          <div className="flex justify-between mb-2">
            <form className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full mt-2">
                {patientVitals.map((vital, index) => (
                  <div key={index} className="flex justify-between">
                    <p className="text-xs my-auto text-left">{vital.name}</p>
                    <p className="text-xs my-auto mx-2">:</p>
                    <div className="">
                      <TextField
                        size="small"
                        label={vital.unit}
                        id={vital.name.toLowerCase()}
                        variant="outlined"
                        fullWidth
                        value={vital.value}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="ml-3 gap-3 my-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
          <div>
            <div className="bg-[#CCFBF1] p-1 border shadow-md">
              <div className="text-sm font-semibold w-full">
                General Examination{" "}
              </div>
            </div>
            <div className="border shadow-md p-2 bg-white">
              <div className="flex justify-between mb-2">
                {/* Content for Previous Visits */}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#C6CCFF] p-1 border shadow-md">
              <div className="text-sm font-semibold w-full">
                Special Instruction{" "}
              </div>
            </div>
            <div className="border shadow-md p-2 bg-white">
              <div className="flex justify-between mb-2">
                {/* Content for Past History */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-3 h-auto  my-2">
        <div className="bg-[#E7D2FF] p-1 border shadow-md">
          <div className="flex justify-between">
            <div className="text-sm font-semibold w-full ">
              Systematic Examination
            </div>
          </div>
        </div>
        <div className="border shadow-md p-2 bg-white">
          <div className="flex justify-between mb-2"></div>
        </div>
      </div>
      <div className="ml-3 h-auto  my-2">
        <div className="bg-[#E7D2FF] p-1 border shadow-md">
          <div className="flex justify-between">
            <div className="text-sm font-semibold w-full ">Medication</div>
          </div>
        </div>
        <div className="border shadow-md p-2 bg-white">
          <div className="flex justify-between mb-2"></div>
        </div>
      </div>
      <div className="ml-3 h-auto  my-2">
        <div className="bg-[#BEEFFF] p-1 border shadow-md">
          <div className="flex justify-between">
            <div className="text-sm font-semibold w-full ">Advice</div>
          </div>
        </div>
        <div className="border shadow-md p-2 bg-white">
          <div className="flex justify-between mb-2"></div>
        </div>
      </div>
      <div className="ml-3 h-auto my-2">
        <div className="bg-[#FFD9D4] p-1 border shadow-md">
          <div className="flex justify-between">
            <div className="text-sm font-semibold w-full ">
              Doctor/Department Details
            </div>
          </div>
        </div>
        <div className="border shadow-md p-2 bg-white">
          <div className="flex justify-between mb-2"></div>
        </div>
      </div>
    </>
  );
};

export default Patient;
