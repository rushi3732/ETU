import {
  Box,
  Chip,
  Modal,
  TableContainer,
  TextField,
  Tooltip,
  Typography,
  useFormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import DropdownField from "../../Common Components/FormFields/DropdownField";
import { ModalStyle } from "../../Common Components/ModalStyle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CancelPresentationIconButton from "../../Common Components/Buttons/CancelPresentationIconButton";
import { useForm } from "react-hook-form";
import InputField from "../../Common Components/FormFields/InputField";
import CommonTransactionTable from "../../Common Components/CommonTable/CommonTransactionTable";
import {
  AddIcon,
  DeleteIcon,
  EditIcon,
} from "../../Common Components/assets/commonassets/CommonAssets";
import SearchBar from "../../Common Components/FormFields/SearchBar";
import CommonButton from "../../Common Components/commonbutton/CommonButton";
import { useRef } from "react";
import RadioField from "../../Common Components/FormFields/RadioField";
import DatePickerField from "../../Common Components/FormFields/DatePickerField_04102023_ak";
import MedicationModel from "./MedicationModel";

const validationSchema = yup.object().shape({
  addDuration: yup.object().required(),
  since: yup.string().required(),
  addComplaints: yup.object().required(),
});

const Medication = () => {
  const {
    register,
    reset,
    setValue,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      addDuration: null,
      addComplaints: null,
      since: null,
      isUrgent: false,
    },
  });
  const inputRef = useRef();

  const [chips, setChips] = useState([
    {
      id: 1,
      value: "Headache",
      label: "Headache",
      markCommon: false,
    },
    {
      id: 2,
      value: "Anaphylaxis",
      label: "Anaphylaxis",
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [showAllChips, setShowAllChips] = useState(false);
  const [selectedChip, setSelectedChip] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };

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

  const onChange = (selectedOption) => {
    console.log("Option selected:", selectedOption);
  };

  const handleSearchClick = () => {
    console.log("handleSearchClick");
  };
  const ComplaintsRecords = [
    {
      "Medication ": "Back Pain",
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
      "Medication ": "Joint Pain",
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

  const renderInput = (row, rowIndex, column) => {
    console.log(row, rowIndex, column);
    return (
      <div className="flex">
        {column === "markCommon" && (
          <input
            type="checkbox"
            className="text-center"
            defaultChecked={row.markCommon ? true : false}
            onChange={(e) => {
              console.log("eeeeee123", e.target.checked);
              let tempData = [...chips];
              tempData[rowIndex].markCommon = e.target.checked;
              setChips(tempData);
            }}
          />
        )}
      </div>
    );
  };

  const handleClickChip = (chip) => {
    if (chip?.id === selectedChip) {
      setSelectedChip(null);
      setValue("addComplaints", null);
    } else {
      setSelectedChip(chip.id);
      setValue("addComplaints", chip);
    }
  };

  return (
    <div>
      <div className="rounded border">
        <div className="bg-purple-200 sticky  p-1 border  shadow-md flex justify-between">
          <div className="flex items-center">
            <div className="text-sm font-semibold flex items-center justify-start ml-2">
              Medication
            </div>
            {/* <CancelPresentationIconButton onClick={closeModal} /> */}
          </div>
          <div className="flex justify-end w-1/3  mr-2">
            <div
              className={`px-3 py-[3px] placeholder-slate-300 relative  bg-white rounded text-sm border 
                  border-slate-300 text-slate-600
              outline-none hover:outline-none hover:ring w-2/3 flex justify-between`}
              onClick={openSecondModal}
            >
              <div className="flex justify-start items-center">Medication</div>
              <div className="flex justify-end">
                <SearchIcon className="text-slate-500 " />
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-white">
          <div className="flex justify-between gap-3 mb-2">
            <div className="w-full">
              <div className="flex justify-between   gap-3 pt-2 px-1">
                <div className="gap-3">
                  {showAllChips
                    ? chips.map((chip, index) => (
                        <>
                          {chip?.markCommon === true && (
                            <CommonButton
                              key={chip?.id}
                              variant="outlined"
                              label={chip?.value}
                              onClick={() => {
                                handleClickChip(chip);
                                openSecondModal();
                              }}
                              className={` mr-2 mb-1 ${
                                chip?.id === selectedChip
                                  ? "bg-[#007EA9] text-white rounded-full border"
                                  : " text-black rounded-full border"
                              }`}
                            />
                          )}
                        </>
                      ))
                    : chips.slice(0, 9).map((chip, index) => (
                        <>
                          {chip?.markCommon === true && (
                            <CommonButton
                              key={chip?.id}
                              variant="outlined"
                              label={chip?.value}
                              onClick={() => {
                                handleClickChip(chip);
                                openSecondModal();
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
                      onClick={openModal}
                    >
                      <EditIcon />
                    </button>
                  </Tooltip>
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
                    padding: "1.50px !important",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#f8fafc",
                    borderRadius: "0.25rem",
                    padding: "1.50px !important",
                  },
                }}
                className="rounded  h-52 "
              >
                <div className=" w-full top-0">
                  <CommonTransactionTable
                    dataResult={complaintsData}
                    removeHeaders={["id"]} // Headers to remove
                    renderActions={(row, index) => (
                      <div className="flex items-center space-x-2">
                        <EditIcon />
                        <DeleteIcon />
                      </div>
                    )}
                    highlightRow={false} // Highlight rows on click
                    rowBackgroundColor={(row, index) => {
                      return index % 2 === 0 ? "bg-gray-300" : "bg-white";
                    }}
                    handleSelectedRow={(row, index) => {
                      console.log("Selected Row:", row, "Index:", index);
                    }}
                    editableColumns={[""]} // Editable columns
                    SelectCheckbox={false} // Display checkboxes
                  />
                </div>
              </TableContainer>
            </div>
          </div>
        </div>
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
          <Box sx={ModalStyle} style={{ width: "70vw", maxWidth: "520px" }}>
            <div className=" flex  justify-between items-center">
              <div className=" flex  font-bold justify-start -mt-4">
                Medication
              </div>
              <div>
                <CancelPresentationIconButton onClick={closeModal} />
              </div>
            </div>
            <div className="-mr-2">
              <div className=" flex  justify-between items-center  gap-2 mt-2 ">
                <SearchBar
                  dataArray={dataArray}
                  placeholder={placeholder}
                  isClearable={isClearable}
                  label={label}
                  handleInputChange={handleInputChange}
                  onChange={onChange}
                  inputRef={inputRef}
                  searchIcon={false}
                  clearSearchBar={true}
                />
                <div className="">
                  <CommonButton
                    type="button"
                    label={<searchIcon />}
                    onClick={handleSearchClick}
                    className="h-9 px-3 w-min rounded text-sm font-medium searchIconButton bg-customBlue text-white whitespace-nowrap"
                    disabled={false}
                    searchIcon={true}
                  />
                </div>
              </div>
              <div className=" ml-1 mt-2">
                <CommonTransactionTable
                  dataResult={ComplaintsRecords}
                  removeHeaders={["id"]} // Headers to remove
                  // tableClass="h-40" // Custom CSS for the table container
                  renderInput={renderInput}
                  highlightRow={false} // Highlight rows on click
                  rowBackgroundColor={(row, index) => {
                    // Define custom row background color logic
                    return index % 2 === 0 ? "bg-gray-300" : "bg-white";
                  }}
                  handleSelectedRow={(row, index) => {
                    // Handle the selected row
                    console.log("Selected Row:", row, "Index:", index);
                  }}
                  editableColumns={["markCommon"]} // Editable columns
                  SelectCheckbox={true} // Display checkboxes
                />
              </div>
              <div className="flex  justify-end mt-2  ">
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
          </Box>
        </Modal>
        <Modal
          open={isSecondModalOpen}
          aria-labelledby="modal-modal-title"
          onClose={closeSecondModal}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={ModalStyle} style={{ width: "80vw", maxWidth: "70%" }}>
            <div className="flex justify-between items-center">
              <div className="flex font-bold justify-start -mt-4 ">
                Medication
              </div>
              <div>
                <CancelPresentationIconButton onClick={closeSecondModal} />
              </div>
            </div>
            <MedicationModel />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Medication;
