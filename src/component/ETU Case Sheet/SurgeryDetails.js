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

const validationSchema = yup.object().shape({
  surgeon: yup.object().required(),
  surgery: yup.object().required(),
});

const SurgeryDetails = () => {
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
      surgeon: null,
      surgery: null,
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

  const [surgeryData, setSurgeryData] = useState([
    {
      id: 100,
      "Surgery Name": "Back pain",
      "Surgeon Name": "6 Days",
    },
    {
      id: 200,
      "Surgery Name": "joint Pain",
      "Surgeon Name": "9 Days",
    },
  ]);

  let getSince = watch("surgeon");
  const [surgeryList, setSurgeryList] = useState();

  const surgeonList = [
    {
      id: 1,
      value: "Amar Salunkhe, Ajit Pawar",
      label: "Amar Salunkhe, Ajit Pawar",
    },
    {
      id: 2,
      value: "Amar Salunkhe, Ajit Pawar",
      label: "Amar Salunkhe, Ajit Pawar",
    },
    {
      id: 3,
      value: "Amar Salunkhe, Ajit Pawar",
      label: "Amar Salunkhe, Ajit Pawar",
    },
  ];

  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [showAllChips, setShowAllChips] = useState(false);
  const [selectedChips, setSelectedChips] = useState([]);
  const [selectedChip, setSelectedChip] = useState(null);
  const [selectedSince, setSelectedSince] = useState(null);

  const [selectedComplainSince, setSelectedComplainSince] = useState([]);

  const handleAddChip = () => {
    if (inputValue.trim() !== "") {
      setChips([...chips, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteChip = (chipToDelete) => () => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

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

  const data = {
    label: "Complaint",
    value: "Cough and Cold",
  };
  const dataArray = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ];

  const placeholder = "Search By UHID, Patient Name, Mobile No";
  const isClearable = true;
  const label = "Search By UHID, Patient Name, Mobile No.";

  const handleInputChange = (inputValue) => {
    // Handle input change, e.g., filter data
    console.log("Input changed to:", inputValue);
  };

  const onChange = (selectedOption) => {
    // Handle option selection
    console.log("Option selected:", selectedOption);
  };

  const handleSearchClick = () => {
    console.log("handleSearchClick");
  };
  const surgeryNameList = [
    {
      "Surgery Name ": "Back Pain",
      markCommon: false,
    },
    {
      "Surgery Name ": "Headaches",
      markCommon: true,
    },
    {
      "Surgery Name ": "Fatigue",
      markCommon: false,
    },
    {
      "Surgery Name ": "Digestive Issues",
      markCommon: true,
    },
    {
      "Surgery Name ": "Joint Pain",
      markCommon: false,
    },
    {
      "Surgery Name ": "Anxiety and Depression",
      markCommon: true,
    },
    {
      "Surgery Name ": "High Blood Pressure",
      markCommon: false,
    },
    {
      "Surgery Name ": "Menstrual Irregularities and Pain",
      markCommon: true,
    },
    {
      "Surgery Name ": "Heartburn and Acid Reflux",
      markCommon: false,
    },
    {
      "Surgery Name ": "Household Chemicals",
      markCommon: true,
    },
  ];

  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const openThirdModal = () => {
    setIsThirdModalOpen(true);
  };

  const closeThirdModal = () => {
    setIsThirdModalOpen(false);
  };

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
      setValue("surgery", null);
    } else {
      setSelectedChip(chip.id);
      setValue("surgery", chip);
    }
  };

  // const handleAdd = (data) => {
  //   const obj = {
  //     id: data?.addAllergy?.id,
  //     SurgeryDetails: data?.allergyDescription,
  //     "Surgeon Name": data?.addAllergy?.value,
  //   };
  //   setComplaintsData([...surgeryData, obj]);
  //   reset();
  // };
  const handleAdd = (data) => {
    console.log("bbbbbbbbbbbbbbbb" + data);
    const obj = {
      "Surgery Name": data?.surgery?.value,
      id: data?.surgery?.id,
      "Surgeon Name": ` ${data?.surgeon?.value}`,
    };
    setSurgeryData([...surgeryData, obj]);
  };

  return (
    <div>
      <div className="rounded border">
        <div className="bg-[#FFE6C9] sticky p-1  border  shadow-md flex justify-between">
          <div className="flex items-center">
            <div className="text-sm font-semibold flex items-center justify-start ml-2">
              SurgeryDetails
            </div>
            {/* <CancelPresentationIconButton onClick={closeModal} /> */}
          </div>
          <div className="flex justify-end w-1/2  mr-2">
            <div
              className={`px-3 py-[3px] placeholder-slate-300 relative  bg-white rounded text-sm border 
                  border-slate-300 text-slate-600
              outline-none hover:outline-none hover:ring w-2/3 flex justify-between`}
              onClick={openSecondModal}
            >
              <div className="flex justify-start items-center">
                SurgeryDetails
              </div>
              <div className="flex justify-end">
                <SearchIcon className="text-slate-500 " />
              </div>
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
          <div className=" bg-white">
            <div className="flex justify-between gap-3 mb-2">
              <div className="w-full">
                <div className="flex justify-between gap-3 p-2">
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
                <div className=" mt-2 w-full">
                  <CommonTransactionTable
                    dataResult={surgeryData}
                    removeHeaders={["id"]} // Headers to remove
                    // tableClass="h-40" // Custom CSS for the table container
                    renderActions={(row, index) => (
                      // Render custom actions for each row (e.g., buttons or icons)
                      <div className="flex items-center space-x-2">
                        <EditIcon />
                        <DeleteIcon />
                      </div>
                    )}
                    highlightRow={false} // Highlight rows on click
                    rowBackgroundColor={(row, index) => {
                      // Define custom row background color logic
                      return index % 2 === 0 ? "bg-gray-300" : "bg-white";
                    }}
                    handleSelectedRow={(row, index) => {
                      // Handle the selected row
                      console.log("Selected Row:", row, "Index:", index);
                    }}
                    editableColumns={[""]} // Editable columns
                    SelectCheckbox={false} // Display checkboxes
                  />
                </div>
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
                  SurgeryDetails
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
                    dataResult={surgeryNameList}
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
            <form onSubmit={handleSubmit(handleAdd)}>
              <Box sx={ModalStyle} style={{ width: "80vw", maxWidth: "70%" }}>
                <div className="flex justify-between items-center">
                  <div className="flex font-bold justify-start -mt-4 ">
                    SurgeryDetails
                  </div>
                  <div>
                    <CancelPresentationIconButton onClick={closeSecondModal} />
                  </div>
                </div>
                <div className="-mr-3 ">
                  <div className="border mt-2 p-2 bg-white">
                    <div>
                      {chips.map((chip) => {
                        return (
                          <>
                            {chip?.markCommon === true && (
                              <CommonButton
                                key={chip?.id}
                                variant="outlined"
                                label={chip?.value}
                                className={` mr-2 mb-1 ${
                                  chip?.id === selectedChip
                                    ? "bg-[#007EA9] text-white rounded-full border "
                                    : " text-black rounded-full border"
                                }`}
                                onClick={() => {
                                  handleClickChip(chip);
                                }}
                              />
                            )}
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 mt-4">
                    <div>
                      <DropdownField
                        control={control}
                        error={errors.surgery}
                        name="surgery"
                        placeholder="Surgery Name *"
                        dataArray={surgeryList}
                        isSearchable={true}
                      />
                    </div>
                    <div className="flex gap-2 mr-3">
                      <DropdownField
                        control={control}
                        error={errors.surgeon}
                        name="surgeon"
                        placeholder="Surgeon *"
                        dataArray={surgeonList}
                        isSearchable={true}
                      />
                      <div className="">
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
                    className="rounded  h-46  -mr-8"
                  >
                    <div className="-m-2 mt-2">
                      <CommonTransactionTable
                        dataResult={surgeryData}
                        removeHeaders={["id"]} // Headers to remove
                        // tableClass="h-40" // Custom CSS for the table container
                        renderActions={(row, index) => (
                          // Render custom actions for each row (e.g., buttons or icons)
                          <div className="flex items-center space-x-2">
                            <EditIcon />
                            <DeleteIcon />
                          </div>
                        )}
                        highlightRow={false} // Highlight rows on click
                        rowBackgroundColor={(row, index) => {
                          // Define custom row background color logic
                          return index % 2 === 0 ? "bg-gray-300" : "bg-white";
                        }}
                        handleSelectedRow={(row, index) => {
                          // Handle the selected row
                          console.log("Selected Row:", row, "Index:", index);
                        }}
                        editableColumns={[""]} // Editable columns
                        SelectCheckbox={false} // Display checkboxes
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
              </Box>
            </form>
          </Modal>

          <Modal
            open={isThirdModalOpen}
            aria-labelledby="modal-modal-title"
            onClose={closeThirdModal}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <form onSubmit={handleSubmit(handleAdd)}>
              <Box sx={ModalStyle} style={{ width: "70vw", maxWidth: "500px" }}>
                <div className="flex justify-between items-center">
                  <div className="flex font-bold justify-start -mt-4 ">
                    SurgeryDetails
                  </div>
                  <div>
                    <CancelPresentationIconButton onClick={closeThirdModal} />
                  </div>
                </div>
                <div className="-mr-3">
                  <div className=" items-center  gap-2 mt-2  mb-2"></div>
                </div>
              </Box>
            </form>
          </Modal>
        </TableContainer>
      </div>
    </div>
  );
};

export default SurgeryDetails;
