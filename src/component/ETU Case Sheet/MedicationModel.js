import React, { useState, useRef } from "react";
import CommonButton from "../../Common Components/commonbutton/CommonButton";
import {
  DeleteIcon,
  EditIcon,
} from "../../Common Components/assets/commonassets/CommonAssets";
import CommonTransactionTable from "../../Common Components/CommonTable/CommonTransactionTable";
import { Box, Input, Modal, TableContainer, Tooltip } from "@mui/material";
import DatePickerField from "../../Common Components/FormFields/DatePickerField";
import InputField from "../../Common Components/FormFields/InputField";
import SearchIcon from "@mui/icons-material/Search";
import CancelPresentationIconButton from "../../Common Components/Buttons/CancelPresentationIconButton";
import RadioField from "../../Common Components/FormFields/RadioField";
import SearchBar from "../../Common Components/FormFields/SearchBar";
import { useForm } from "react-hook-form";
import { ModalStyle } from "../../Common Components/ModalStyle";
import ModalComponent from "./ModalComponent";
import DropdownField from "../../Common Components/FormFields/DropdownField";

const MedicationModel = () => {
  const {
    register,
    reset,
    setValue,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    quantity: null,
    dosage: null,
    iVFlowRate: null,
    startDate: null,
    duration: null,
    durationIn: null,
  });

  const inputRef = useRef();

  const dataArray = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ];
  const placeholder = "Search Drug/ Medicine *";
  const isClearable = true;
  const label = "Search Drug/ Medicine.";

  const handleInputChange = (inputValue) => {
    console.log("Input changed to:", inputValue);
  };
  const [renderInput, setRenderInput] = useState(null);

  const [chips, setChips] = useState([
    {
      id: 1,
      value: "Headache",
      label: "Headache",
      markCommon: false,
    },
    {
      id: 2,
      value: "Oral",
      label: "1---1---1---1",
      markCommon: true,
    },
    {
      id: 3,
      value: "Back Pain",
      label: "Back Pain",
      markCommon: false,
    },
    {
      id: 4,
      value: "Digestive Issues",
      label: "Digestive Issues",
      markCommon: true,
    },
    {
      id: 5,
      value: "Cough and Cold",
      label: "Cough and Cold",
      markCommon: false,
    },
    {
      id: 6,
      value: "Joint Pain",
      label: "Joint Pain",
      markCommon: true,
    },
    {
      id: 7,
      value: "Anxiety and Depression",
      label: "Anxiety and Depression",
      markCommon: false,
    },
    {
      id: 8,
      value: "Chip 8",
      label: "Chip 8",
      markCommon: true,
    },
    { id: 9, value: "Chip 9", label: "Chip 9", markCommon: false },
    {
      id: 10,
      value: "Chip 10",
      label: "Chip 10",
      markCommon: false,
    },
    {
      id: 11,
      value: "Chip 11",
      label: "Chip 11",
      markCommon: false,
    },
    {
      id: 12,
      value: "Chip 12",
      label: "Chip 12",
      markCommon: false,
    },
  ]);
  const [frequencyChips, setFrequencyChips] = useState([
    {
      id: 1,
      value: "1---1---1",
      label: "1---1---1",
      markCommon: false,
    },
    {
      id: 2,
      value: "1---1---1---1",
      label: "1---1---1---1",
      markCommon: true,
    },
    {
      id: 3,
      value: "0---1---0",
      label: "0---1---0",
      markCommon: false,
    },

    {
      id: 4,
      label: "0---1---1",
      value: "0---1---1",
      markCommon: false,
    },
    {
      id: 5,
      value: "1---0---1",
      label: "1---0---1",
      markCommon: true,
    },
    {
      id: 6,
      value: "1---0---0",
      label: "1---0---0",
      markCommon: false,
    },
    {
      id: 7,
      value: "STAT",
      label: "STAT",
      markCommon: true,
    },
    {
      id: 8,
      value: "SOS",
      label: "SOS",
      markCommon: false,
    },
    {
      id: 9,
      value: "½---0---0",
      label: "½---0---0",
      markCommon: false,
    },
  ]);
  const [instructionsChips, setInstructionsChips] = useState([
    {
      id: 1,
      value: "After Meal",
      label: "After Meal",
      markCommon: false,
    },
    {
      id: 2,
      value: "Before Meal",
      label: "Before Meal",
      markCommon: true,
    },
    {
      id: 3,
      value: "Early Morning",
      label: "Early Morning",
      markCommon: false,
    },
    {
      id: 4,
      value: "After Meal",
      label: "After Meal",
      markCommon: true,
    },
    {
      id: 5,
      value: "After breakfast",
      label: "After breakfast",
      markCommon: false,
    },
    {
      id: 6,
      value: "Before Sleep",
      label: "Before Sleep",
      markCommon: true,
    },
  ]);
  const [durationChips, setDurationChips] = useState([
    { id: 1, value: "1 Days" },
    { id: 2, value: "2 Days" },
    { id: 3, value: "3 Days" },
    { id: 4, value: "4 Days" },
    { id: 5, value: "5 Days" },
    { id: 6, value: "7 Days" },
    { id: 7, value: "1 Week" },
    { id: 8, value: "15 Days" },
    { id: 9, value: "1 Month" },
    { id: 10, value: "6 Month" },
    { id: 11, value: "1 Year" },
    { id: 12, value: "2 Years" },
  ]);
  const [routeChips, setRouteChips] = useState([
    {
      id: 1,
      value: "Rectal",
      label: "Rectal",
      markCommon: false,
    },
    {
      id: 2,
      value: "Oral",
      label: "Oral",
      markCommon: true,
    },
    {
      id: 3,
      value: "Intradermal",
      label: "Intradermal",
      markCommon: false,
    },
    {
      id: 4,
      value: "Subcutaneous",
      label: "Subcutaneous",
      markCommon: true,
    },
    {
      id: 5,
      value: "Intravenous",
      label: "Intravenous",
      markCommon: false,
    },
    {
      id: 6,
      value: "Intramuscular",
      label: "Intramuscular",
      markCommon: true,
    },
    {
      id: 7,
      value: "Topical",
      label: "Topical",
      markCommon: false,
    },
    {
      id: 8,
      value: "Inhalation",
      label: "Inhalation",
      markCommon: true,
    },
  ]);
  const [selectedChip, setSelectedChip] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Default Modal Title");
  const [dataResult, setDataResult] = useState();
  const openModal = (title) => {
    let inputRenderer;

    switch (title) {
      case "Frequency":
        setDataResult([...frequencyRecords]);
        inputRenderer = (row, rowIndex, column) => (
          <div className="flex">
            {column === "markCommon" && (
              <input
                type="checkbox"
                className="text-center"
                defaultChecked={row.markCommon}
                onChange={(e) => {
                  let tempData = [...frequencyChips];
                  tempData[rowIndex].markCommon = e.target.checked;
                  setFrequencyChips(tempData);
                }}
              />
            )}
          </div>
        );
        break;

      case "Instructions":
        setDataResult([...instructionsRecords]);
        inputRenderer = (row, rowIndex, column) => (
          <div className="flex">
            {column === "markCommon" && (
              <input
                type="checkbox"
                className="text-center"
                defaultChecked={row.markCommon}
                onChange={(e) => {
                  let tempData = [...instructionsChips];
                  tempData[rowIndex].markCommon = e.target.checked;
                  setInstructionsChips(tempData);
                }}
              />
            )}
          </div>
        );
        break;

      case "Route":
        setDataResult([...routeRecords]);
        inputRenderer = (row, rowIndex, column) => (
          <div className="flex">
            {column === "markCommon" && (
              <input
                type="checkbox"
                className="text-center"
                defaultChecked={row.markCommon}
                onChange={(e) => {
                  let tempData = [...routeChips];
                  tempData[rowIndex].markCommon = e.target.checked;
                  setRouteChips(tempData);
                }}
              />
            )}
          </div>
        );
        break;

      default:
        break;
    }

    setModalTitle(title);
    setIsModalOpen(true);
    setRenderInput(
      () => (row, rowIndex, column) => inputRenderer(row, rowIndex, column)
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [complaintsData, setComplaintsData] = useState([
    {
      id: 1,
      "Drug Type": "Brand",
      "Drug Name": "ADMAX CAP",
      Frequency: "0---1---0",
      Dosage: "1",
      Instructions: "After breakfast",
      Duration: "12 Days",
      Quantity: "12",
      Route: "ORAL",
      "IV Flow Rate": "0",
      "Start Date": "2023-10-30",
    },

    {
      id: 2,
      "Drug Type": "Brand",
      "Drug Name": "ADMAX CAP",
      Frequency: "0---1---0",
      Dosage: "1",
      Instructions: "After breakfast",
      Duration: "12 Days",
      Quantity: "12",
      Route: "ORAL",
      "IV Flow Rate": "0",
      "Start Date": "2023-10-30",
    },
    {
      id: 3,
      "Drug Type": "Brand",
      "Drug Name": "ADMAX CAP",
      Frequency: "0---1---0",
      Dosage: "1",
      Instructions: "After breakfast",
      Duration: "12 Days",
      Quantity: "12",
      Route: "ORAL",
      "IV Flow Rate": "0",
      "Start Date": "2023-10-30",
    },
    {
      id: 4,
      "Drug Type": "Brand",
      "Drug Name": "ADMAX CAP",
      Frequency: "0---1---0",
      Dosage: "1",
      Instructions: "After breakfast",
      Duration: "12 Days",
      Quantity: "12",
    },

    {
      id: 5,
      "Drug Type": "Brand",
      "Drug Name": "ADMAX CAP",
      Frequency: "0---1---0",
      Dosage: "1",
      Instructions: "After breakfast",
      Duration: "12 Days",
      Quantity: "12",
      Route: "ORAL",
      "IV Flow Rate": "0",
      "Start Date": "2023-10-30",
    },
    {
      id: 6,
      "Drug Type": "Brand",
      "Drug Name": "ADMAX CAP",
      Frequency: "0---1---0",
      Dosage: "1",
      Instructions: "After breakfast",
      Duration: "12 Days",
      Quantity: "12",
      Route: "ORAL",
      "IV Flow Rate": "0",
      "Start Date": "2023-10-30",
    },
  ]);

  const onChange = (selectedOption) => {
    console.log("Option selected:", selectedOption);
  };
  const handleAddChips = (data) => {
    const since = `${data?.since} + ${data?.addDuration?.value}`;
    console.log("data", data);
    const obj = {
      Medication: data?.addComplaints?.value,
      id: data?.addComplaints?.id,
      Since: `${data?.since} ${data?.addDuration?.value}`,
    };

    setComplaintsData([...complaintsData, obj]);
  };
  const machineOptions = [
    { id: 1, label: "Brand Name", value: 0 },
    { id: 2, label: "Generic", value: 0 },
  ];

  const handleClickChip = (chip) => {
    if (chip?.id === selectedChip) {
      setSelectedChip(null);
      setValue("addComplaints", null);
    } else {
      setSelectedChip(chip.id);
      setValue("addComplaints", chip);
    }
  };

  const handleSearchClick = () => {
    console.log("handleSearchClick");
  };
  const ComplaintsRecords = [
    {
      "Medication ": "Intradermal",
      markCommon: false,
    },
    {
      "Medication ": "Headaches",
      markCommon: true,
    },
    {
      "Medication ": "Fatigue",
      markCommon: false,
    },
    {
      "Medication ": "Digestive Issues",
      markCommon: true,
    },
    {
      "Medication ": "",
      markCommon: false,
    },
    {
      "Medication ": "Anxiety and Depression",
      markCommon: true,
    },
    {
      "Medication ": "High Blood Pressure",
      markCommon: false,
    },
    {
      "Medication ": "Menstrual Irregularities and Pain",
      markCommon: true,
    },
    {
      "Medication ": "Heartburn and Acid Reflux",
      markCommon: false,
    },
    {
      "Medication ": "Household Chemicals",
      markCommon: true,
    },
  ];

  const frequencyRecords = [
    {
      Instructions: "1---1---1",
      markCommon: false,
    },
    {
      Instructions: "1---1---1---1",
      markCommon: true,
    },
    {
      Instructions: "0---1---0",
      markCommon: false,
    },
    {
      Instructions: "0---1---1",
      markCommon: true,
    },
    {
      Instructions: "1---0---1",
      markCommon: false,
    },
    {
      Instructions: "1---0---0",
      markCommon: true,
    },
    {
      "Instructions ": "STAT",
      markCommon: false,
    },
    {
      Instructions: "SOS",
      markCommon: true,
    },
    {
      Instructions: "½---0---0",
      markCommon: false,
    },
  ];
  const instructionsRecords = [
    {
      Instructions: "Back Pain",
      markCommon: false,
    },
    {
      Instructions: "Headaches",
      markCommon: true,
    },
    {
      Instructions: "Fatigue",
      markCommon: false,
    },
    {
      Instructions: "Digestive Issues",
      markCommon: true,
    },
    {
      Instructions: "Joint Pain",
      markCommon: false,
    },
    {
      Instructions: "Anxiety and Depression",
      markCommon: true,
    },
    {
      "Instructions ": "High Blood Pressure",
      markCommon: false,
    },
    {
      Instructions: "Menstrual Irregularities and Pain",
      markCommon: true,
    },
    {
      Instructions: "Heartburn and Acid Reflux",
      markCommon: false,
    },
    {
      Instructions: "Household Chemicals",
      markCommon: true,
    },
  ];
  const durationRecords = [
    {
      Duration: "After Meal",
      markCommon: false,
    },
    {
      Duration: "Before Meal",
      markCommon: true,
    },
    {
      Duration: "Early Morning",
      markCommon: false,
    },
    {
      Duration: "After Meal",
      markCommon: true,
    },
    {
      Duration: "After breakfast",
      markCommon: false,
    },
    {
      Duration: "Before Sleep",
      markCommon: true,
    },
  ];
  const routeRecords = [
    {
      Route: "Rectal",
      markCommon: false,
    },
    {
      Route: "Oral",
      markCommon: true,
    },
    {
      Route: "Intradermal",
      markCommon: false,
    },
    {
      Route: "Subcutaneous",
      markCommon: true,
    },
    {
      Route: "Intravenous",
      markCommon: false,
    },
    {
      Route: "Intramuscular",
      markCommon: true,
    },
    {
      Route: "Topical",
      markCommon: false,
    },
    {
      Route: "Inhalation",
      markCommon: true,
    },
  ];

  const frequencyOptions = [
    {
      id: 1,
      value: "abc",
      label: "abc",
    },
    {
      id: 2,
      value: "pqr",
      label: "pqr",
    },
  ];

  const instructionOptions = [
    {
      id: 1,
      value: "abc",
      label: "abc",
    },
    {
      id: 2,
      value: "pqr",
      label: "pqr",
    },
  ];
  const routesOptions = [
    {
      id: 1,
      value: "abc",
      label: "abc",
    },
    {
      id: 2,
      value: "pqr",
      label: "pqr",
    },
  ];
  let duration = watch("duration");

  const durationIn = [
    {
      id: 1,
      value: duration > 1 ? "Days" : "Day",
      label: duration > 1 ? "Days" : "Day",
    },
    {
      id: 2,
      value: duration > 1 ? "Months" : "Month",
      label: duration > 1 ? "Months" : "Month",
    },
    {
      id: 3,
      value: duration > 1 ? "Years" : "Year",
      label: duration > 1 ? "Years" : "Year",
    },
  ];

  return (
    <form onSubmit={handleSubmit(handleAddChips)}>
      <div className="-mr-3">
        <div className="border rounded mt-2 p-1 bg-white">
          <div className=" gap-3 pt-1 px-1">
            <div className="gap-3">
              {chips.map((chip, index) => (
                <>
                  {chip?.markCommon === true && (
                    <CommonButton
                      key={chip?.id}
                      variant="outlined"
                      label={chip?.value}
                      onClick={() => {
                        handleClickChip(chip);
                      }}
                      className={` mr-2 mb-1 ${
                        chip?.id === selectedChip
                          ? "bg-[#007EA9] text-white rounded-full border"
                          : " text-black rounded-full border"
                      }`}
                    />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between  items-center mt-2">
          <div>
            <div className="flex justify-between  items-center gap-4">
              <div className="flex">
                <RadioField
                  dataArray={machineOptions}
                  name="machineType"
                  control={control}
                />
              </div>
              <div className="flex justify-end">
                <SearchBar
                  dataArray={dataArray}
                  placeholder={placeholder}
                  isClearable={isClearable}
                  label={label}
                  handleInputChange={handleInputChange}
                  onChange={onChange}
                  inputRef={inputRef}
                  searchIcon={true}
                  clearSearchBar={true}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <CommonButton
              label="Past Medicines"
              type="submit"
              className="saveButton bg-[#073763] text-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 mt-2">
          {" "}
          <div className="rounded border">
            <div className="bg-[#FFE6C9] sticky  p-1 border  shadow-md flex justify-between">
              <div className="flex items-center">
                <div className="text-sm font-semibold flex items-center justify-start ml-2">
                  Frequency
                </div>
              </div>
              <div className="flex justify-end w-1/3  mr-2">
                <DropdownField
                  control={control}
                  error={errors.frequency}
                  name="frequency"
                  placeholder="Frequency*"
                  dataArray={frequencyOptions}
                  isSearchable={true}
                />
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
              className="rounded  h-20 "
            >
              <div className=" bg-white">
                <div className="flex justify-between gap-3 p-2">
                  <div className="gap-3">
                    {frequencyChips.map((chip, index) => (
                      <>
                        {chip?.markCommon === true && (
                          <CommonButton
                            key={chip?.id}
                            variant="outlined"
                            label={chip?.value}
                            onClick={() => {
                              handleClickChip(chip);
                            }}
                            className={` mr-2 mb-1 ${
                              chip?.id === selectedChip
                                ? "bg-[#007EA9] text-white rounded-full border"
                                : " text-black rounded-full border"
                            }`}
                          />
                        )}
                      </>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Tooltip title="Add Allergies" placement="left" arrow>
                      <button
                        className="text-blue-500 mr-1 flex justify-end"
                        onClick={() => openModal("Frequency")}
                      >
                        <EditIcon />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </TableContainer>
          </div>
          <div className="rounded border">
            <div className="bg-[#FCE7F3] sticky  p-1 border  shadow-md flex justify-between">
              <div className="flex items-center">
                <div className="text-sm font-semibold flex items-center justify-start ml-2">
                  Instructions
                </div>
              </div>
              <div className="flex justify-end w-1/3  mr-2">
                <DropdownField
                  control={control}
                  error={errors.instruction}
                  name="instruction"
                  placeholder="Instructions*"
                  dataArray={instructionOptions}
                  isSearchable={true}
                />
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
              className="rounded  h-20 "
            >
              <div className=" bg-white">
                <div className="flex justify-between gap-3 p-2">
                  <div className="gap-3">
                    {instructionsChips.map((chip, index) => (
                      <>
                        {chip?.markCommon === true && (
                          <CommonButton
                            key={chip?.id}
                            variant="outlined"
                            label={chip?.value}
                            onClick={() => {
                              handleClickChip(chip);
                            }}
                            className={` mr-2 mb-1 ${
                              chip?.id === selectedChip
                                ? "bg-[#007EA9] text-white rounded-full border"
                                : " text-black rounded-full border"
                            }`}
                          />
                        )}
                      </>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Tooltip title="Add Allergies" placement="left" arrow>
                      <button
                        className="text-blue-500 mr-1 flex justify-end"
                        onClick={() => openModal("Instructions")}
                      >
                        <EditIcon />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </TableContainer>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 mt-2">
          {" "}
          <div className="rounded border">
            <div className="bg-[#FCCBF7] sticky p-1 border shadow-md flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center">
                <div className="text-sm font-semibold flex items-center justify-start ml-2">
                  Duration
                </div>
              </div>
              <div className="flex justify-end gap-2 mr-2">
                <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                  <InputField
                    name="duration"
                    variant="outlined"
                    label="Duration*"
                    error={errors.duration}
                    control={control}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <DropdownField
                    control={control}
                    error={errors.durationIn}
                    name="durationIn"
                    placeholder="Duration In *"
                    dataArray={durationIn}
                    isSearchable={true}
                  />
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
              className="rounded  h-20 "
            >
              <div className=" bg-white">
                <div className=" p-2">
                  <div className="gap-3">
                    {durationChips.map((chip, index) => (
                      <>
                        <CommonButton
                          key={chip?.id}
                          variant="outlined"
                          label={chip?.value}
                          onClick={() => {
                            handleClickChip(chip);
                          }}
                          className={` mr-2 mb-1 ${
                            chip?.id === selectedChip
                              ? "bg-[#007EA9] text-white rounded-full border"
                              : " text-black rounded-full border"
                          }`}
                        />
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </TableContainer>
          </div>
          <div className="rounded border">
            <div className="bg-[#DCFCE7] sticky  p-1 border  shadow-md flex justify-between">
              <div className="flex items-center">
                <div className="text-sm font-semibold flex items-center justify-start ml-2">
                  Route
                </div>
              </div>
              <div className="flex justify-end w-1/3  mr-2">
                <DropdownField
                  control={control}
                  error={errors.routes}
                  name="routes"
                  placeholder="Routes*"
                  dataArray={routesOptions}
                  isSearchable={true}
                />
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
              className="rounded  h-20 "
            >
              <div className=" bg-white">
                <div className="flex justify-between gap-3 p-2">
                  <div className="gap-3">
                    {routeChips.map((chip, index) => (
                      <>
                        {chip?.markCommon === true && (
                          <CommonButton
                            key={chip?.id}
                            variant="outlined"
                            label={chip?.value}
                            onClick={() => {
                              handleClickChip(chip);
                            }}
                            className={` mr-2 mb-1 ${
                              chip?.id === selectedChip
                                ? "bg-[#007EA9] text-white rounded-full border"
                                : " text-black rounded-full border"
                            }`}
                          />
                        )}
                      </>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Tooltip title="Add Allergies" placement="left" arrow>
                      <button
                        className="text-blue-500 mr-1 flex justify-end"
                        onClick={() => openModal("Route")}
                      >
                        <EditIcon />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </TableContainer>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 mt-4">
          <div className="flex  items-center  gap-2 w-full">
            <div className="flex justify-between items-center gap-2 w-1/2">
              <InputField
                name="quantity"
                variant="outlined"
                label="Quantity *"
                error={errors.quantity}
                control={control}
              />
              <InputField
                name="dosage"
                variant="outlined"
                label="Dosage *"
                error={errors.dosage}
                control={control}
              />
            </div>
            <div className="w-1/2">
              <InputField
                name="iVFlowRate"
                variant="outlined"
                label="IV Flow Rate *"
                error={errors.iVFlowRate}
                control={control}
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div>
              <DatePickerField
                name="startDate"
                label="Start Date"
                control={control}
                defaultValue={null}
                disablePast={true}
                disableFuture={false}
                size="small"
              />
            </div>
            <div className="flex">
              <CommonButton
                label="Add"
                type="submit"
                className="saveButton bg-[#073763] text-white"
              />
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
          className="rounded  h-32  -mr-8"
        >
          <div className="-m-2 mt-2">
            <CommonTransactionTable
              dataResult={complaintsData}
              removeHeaders={["id"]}
              renderActions={(row, index) => (
                <div className="flex items-center space-x-2">
                  <EditIcon />
                  <DeleteIcon />
                </div>
              )}
              highlightRow={false}
              rowBackgroundColor={(row, index) => {
                return index % 2 === 0 ? "bg-gray-300" : "bg-white";
              }}
              handleSelectedRow={(row, index) => {
                console.log("Selected Row:", row, "Index:", index);
              }}
              editableColumns={[""]}
              SelectCheckbox={false}
            />
          </div>
        </TableContainer>
        <div className="flex justify-end gap-2">
          <CommonButton
            label="Reset"
            type="submit"
            className="h-10 px-3 mx-4 border border-customRed bg-white text-customRed rounded text-base font-medium overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
          />

          <CommonButton
            label="Save"
            type="submit"
            className="saveButton bg-[#073763] text-white"
          />
        </div>
      </div>
      <ModalComponent
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        dataArray={dataArray}
        placeholder={placeholder}
        isClearable={isClearable}
        handleSearchClick={handleSearchClick}
        dataResult={dataResult}
        renderInput={renderInput && renderInput}
        label={label}
        handleInputChange={handleInputChange}
        onChange={onChange}
        inputRef={inputRef}
        searchIcon={false}
        clearSearchBar={true}
        modalTitle={modalTitle}
      />
    </form>
  );
};

export default MedicationModel;
