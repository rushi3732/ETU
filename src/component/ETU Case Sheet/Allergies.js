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
import React, { useState, useRef, useEffect } from "react";
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

const validationSchema = yup.object().shape({
  addAllergy: yup.object().required(),
  allergyDescription: yup.string().required(),
});

const Allergies = (props) => {
  const { setAllergiesDetails } = props;
  const [chips, setChips] = useState([
    {
      id: 1,
      value: "Food Allergy",
      label: "Food Allergy",
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
      value: "Drug Allergy",
      label: "Drug Allergy",
      markCommon: false,
    },
    {
      id: 4,
      value: "Wheezing or other breathing problems",
      label: "Wheezing or other breathing problems",
      markCommon: true,
    },
    {
      id: 5,
      value: "Itching",
      label: "Itching",
      markCommon: false,
    },
    {
      id: 6,
      value: "Grass and Tree Pollen",
      label: "Grass and Tree Pollen",
      markCommon: true,
    },
    {
      id: 7,
      value: "Animal Dander",
      label: "Animal Dander",
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

  const [allergiesData, setAllergiesData] = useState([
    {
      id: 100,
      Allergies: "Food Allergy",
      "Allergy Description": "Food Allergy",
    },
  ]);

  useEffect(() => {
    setAllergiesDetails(allergiesData);
  }, [allergiesData]);

  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);

  const [showAllChips, setShowAllChips] = useState(false);
  const [selectedChip, setSelectedChip] = useState(null);

  const inputRef = useRef();

  const addAllergyInputRef = useRef();

  const handleAddChip = () => {
    if (inputValue.trim() !== "") {
      setChips([...chips, inputValue]);
      setInputValue("");
    }
  };

  const defaultValues = {
    addAllergy: null,
    allergyDescription: "",
  };

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    watch,
    setFocus,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues,
  });
  let addAlergyValue = watch("addAllergy");
  console.log("addAlergyValue", addAlergyValue);

  const allergyInputRef = useRef(null);
  console.log("errors", errors);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openSecondModal = () => {
    setIsSecondModalOpen(true);
    if (allergyInputRef.current) {
      allergyInputRef.current.focus();
    }
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
    reset();
  };
  const openThirdModal = () => {
    setIsThirdModalOpen(true);
  };

  const closeThirdModal = () => {
    setIsThirdModalOpen(false);
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
  const investigationPathologyData = [
    {
      "Allergy ": "Wheezing or other breathing problems",
      markCommon: false,
    },
    {
      "Allergy ": "Animal Dander",
      markCommon: true,
    },
    {
      "Allergy ": "Insect Bites and Stings",
      markCommon: false,
    },
    {
      "Allergy ": "Itching",
      markCommon: true,
    },
    {
      "Allergy ": "latex",
      markCommon: false,
    },
    {
      "Allergy ": "Drug Allergy",
      markCommon: true,
    },
    {
      "Allergy ": "Household Chemicals",
      markCommon: false,
    },
    {
      "Allergy ": "Food Allergy",
      markCommon: true,
    },
    {
      "Allergy ": "Allergy",
      markCommon: false,
    },
    {
      "Allergy ": "Household Chemicals",
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
      setValue("addAllergy", null);
    } else {
      setSelectedChip(chip.id);
      setValue("addAllergy", chip);
    }
  };

  const handleAdd = (data) => {
    const obj = {
      Allergies: data?.addAllergy?.value,
      id: data?.addAllergy?.id,
      "Allergy Description": data?.allergyDescription,
    };
    setAllergiesData([...allergiesData, obj]);
    reset();
  };
  const handleAddChips = (data) => {
    console.log("data", data);
    const obj = {
      Allergies: data?.addAllergy?.value,
      id: data?.addAllergy?.id,
      "Allergy Description": data?.allergyDescription,
    };

    setAllergiesData([...allergiesData, obj]);
  };

  console.log("chipschips123", chips);
  return (
    <div>
      <div className="rounded border">
        <div className="bg-lime-50 sticky  p-1 border  shadow-md flex justify-between">
          <div className="flex items-center">
            <div className="text-sm  font-semibold flex items-center justify-start ml-2">
              Allergies
            </div>
          </div>
          <div className="flex justify-end w-1/2  mr-2">
            <div
              className={`px-3 py-[3px] placeholder-slate-300 relative  bg-white rounded text-sm border 
                  border-slate-300 text-slate-600
              outline-none hover:outline-none hover:ring w-2/3 flex justify-between`}
              onClick={openSecondModal}
            >
              <div className="flex justify-start items-center">Allergy</div>
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
          <div className="p-2 bg-white">
            <div className="flex justify-between gap-3 mb-2">
              <div className="w-full">
                <div className="flex justify-between gap-3">
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
                                    : " text-black bg-white  rounded-full border"
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
                                    : " text-black bg-white  rounded-full border"
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
                    dataResult={allergiesData}
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
            <form onSubmit={handleSubmit(handleAddChips)}>
              <Box sx={ModalStyle} style={{ width: "50vw", maxWidth: "35%" }}>
                <div className=" flex  justify-between items-center">
                  <div className=" flex  font-bold justify-start -mt-4">
                    Allergies
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
                      dataResult={chips}
                      removeHeaders={["id", "value"]} // Headers to remove
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
                      className="h-9 px-3 w-min rounded text-sm font-medium searchIconButton bg-[#4CAF50] text-white whitespace-nowrap"
                      disabled={false}
                      searchIcon={false}
                    />
                  </div>
                </div>
              </Box>
            </form>
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
                    Allergies
                  </div>
                  <div>
                    <CancelPresentationIconButton onClick={closeSecondModal} />
                  </div>
                </div>
                <div className="-mr-3">
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
                    className="rounded  h-60  -mr-8"
                  >
                    <div className="border mt-2 shadow-md p-[7px] bg-white">
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
                                      : " text-black bg-white  rounded-full border"
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
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 mt-4">
                        <div>
                          <DropdownField
                            control={control}
                            error={errors.addAllergy}
                            name="addAllergy"
                            placeholder="Add Allergy *"
                            dataArray={chips?.filter(
                              (val) => val?.markCommon === true
                            )}
                            isSearchable={true}
                            // inputRef={{
                            //   ...register("addAllergy", allergyInputRef),
                            // }}
                          />
                        </div>
                        <div className="flex align-center gap-2">
                          <InputField
                            control={control}
                            name="allergyDescription"
                            variant="outlined"
                            type="text"
                            label="Allergy Description"
                            placeholder="Allergy Description"
                            error={errors.allergyDescription}
                          />
                          <CommonButton
                            label="Add"
                            type="submit"
                            className="saveButton bg-[#073763] text-white"
                          />
                        </div>
                      </div>
                      <div className=" mt-2">
                        <CommonTransactionTable
                          dataResult={allergiesData}
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
                  </TableContainer>
                </div>
              </Box>
            </form>
          </Modal>
        </TableContainer>
      </div>
    </div>
  );
};

export default Allergies;
