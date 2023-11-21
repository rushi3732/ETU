// import {
//   Box,
//   Chip,
//   Modal,
//   TableContainer,
//   TextField,
//   Tooltip,
// } from "@mui/material";
// import React, { useState, useRef } from "react";
// import DropdownField from "../../Common Components/FormFields/DropdownField";
// import { ModalStyle } from "../../Common Components/ModalStyle";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import CancelPresentationIconButton from "../../Common Components/Buttons/CancelPresentationIconButton";
// import { useForm } from "react-hook-form";
// import InputField from "../../Common Components/FormFields/InputField";
// import CommonTransactionTable from "../../Common Components/CommonTable/CommonTransactionTable";
// import {
//   AddIcon,
//   DeleteIcon,
//   EditIcon,
// } from "../../Common Components/assets/commonassets/CommonAssets";
// import CheckBoxField from "../../Common Components/FormFields/CheckBoxField";
// import CommonButton from "../../Common Components/commonbutton/CommonButton";
// import SearchBar from "../../Common Components/FormFields/SearchBar";

// const validationSchema = yup.object().shape({
//   investigation: yup.object().required("Please Add Allergy"),
//   allergyDescription: yup.object().required("Please Add Allergy Description"),
// });

// const InvestigationPathology = () => {
//   const [chips, setChips] = useState([
//     "Liver Function Tests",
//     "Full Blood Examination",
//     "TSH (Thyroid Stimulating Hormone) Quantification",
//     "Iron studies",
//     "Urinalysis",
//     "INR (International Normalized Ratio)",
//     "CBC",
//     "WBC",
//     "Chip 9",
//     "Chip 10",
//     "Chip 11",
//     "Chip 12",
//   ]);

//   const investigationPathologyData = [
//     {
//       "Test Name": "CT Scan",
//       IsUrgent: false,
//     },
//     {
//       "Test Name": "X - Ray left Hand",
//       IsUrgent: true,
//     },
//   ];

//   const [investigationPathologyList, setInvestigationPathologyList] = useState([
//     { value: "option1", label: "Option 1" },
//     { value: "option2", label: "Option 2" },
//     { value: "option3", label: "Option 3" },
//   ]);

//   const [inputValue, setInputValue] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
//   const [showAllChips, setShowAllChips] = useState(false);
//   const [selectedChips, setSelectedChips] = useState([]);

//   const handleAddChip = () => {
//     if (inputValue.trim() !== "") {
//       setChips([...chips, inputValue]);
//       setInputValue("");
//     }
//   };

//   const {
//     register,
//     handleSubmit,
//     control,
//     watch,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     defaultValues: {
//       addAllergy: null,
//       allergyDescription: null,
//       isUrgent: false,
//     },
//   });

//   const isUrgent = watch("isUrgent");
//   const handleDeleteChip = (chipToDelete) => () => {
//     setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const openSecondModal = () => {
//     setIsSecondModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const closeSecondModal = () => {
//     setIsSecondModalOpen(false);
//   };

//   const handleClickChip = (chip) => {
//     const isSelected = selectedChips.includes(chip);
//     if (isSelected) {
//       setSelectedChips(
//         selectedChips.filter((selectedChip) => selectedChip !== chip)
//       );
//     } else {
//       setSelectedChips([...selectedChips, chip]);
//     }
//   };

//   const renderInput = (row, rowIndex, column) => {
//     console.log(row, rowIndex, column);
//     return (
//       <input
//         type="checkbox"
//         className="text-center"
//         checked={row.IsUrgent ? !row.active : row.active}
//         // onChange={() => handleEditColumn(row, rowIndex, column, !row.active)}
//       />
//     );
//   };

//   const inputRef = useRef();

//   const dataArray = [
//     { value: "apple", label: "Apple" },
//     { value: "banana", label: "Banana" },
//     { value: "cherry", label: "Cherry" },
//   ];
//   const placeholder = "Search By UHID, Patient Name, Mobile No";
//   const isClearable = true;
//   const label = "Search By UHID, Patient Name, Mobile No.";

//   const handleInputChange = (inputValue) => {
//     // Handle input change, e.g., filter data
//     console.log("Input changed to:", inputValue);
//   };

//   const onChange = (selectedOption) => {
//     // Handle option selection
//     console.log("Option selected:", selectedOption);
//   };

//   const handleSearchClick = () => {
//     console.log("handleSearchClick");
//   };
//   const PathologyRecords = [
//     {
//       "Pathology ": "Back Pain",
//       markCommon: false,
//     },
//     {
//       "Pathology ": "Headaches",
//       markCommon: true,
//     },
//     {
//       "Pathology ": "Fatigue",
//       markCommon: false,
//     },
//     {
//       "Pathology ": "Digestive Issues",
//       markCommon: true,
//     },
//     {
//       "Pathology ": "Joint Pain",
//       markCommon: false,
//     },
//     {
//       "Pathology ": "Anxiety and Depression",
//       markCommon: true,
//     },
//     {
//       "Pathology ": "High Blood Pressure",
//       markCommon: false,
//     },
//     {
//       "Pathology ": "Menstrual Irregularities and Pain",
//       markCommon: true,
//     },
//     {
//       "Pathology ": "Heartburn and Acid Reflux",
//       markCommon: false,
//     },
//     {
//       "Pathology ": "Household Chemicals",
//       markCommon: true,
//     },
//   ];
//   return (
//     <div>
//       <div className="rounded border">
//         <div className="bg-[#E0F2FE] sticky  p-1 border  shadow-md flex justify-between">
//           <div className="flex items-center">
//             <div className="text-sm font-semibold flex items-center justify-start ml-2">
//               Investigation(Pathology)
//             </div>
//           </div>
//           <div className="flex justify-end">
//             <Tooltip
//               title="Add InvestigationPathology"
//               onClick={openModal}
//               placement="left"
//               arrow
//             >
//               <button
//                 className="text-blue-500 mr-1 flex justify-end"
//                 onClick={openModal}
//               >
//                 <AddIcon />
//               </button>
//             </Tooltip>
//           </div>
//         </div>
//         <TableContainer
//           square={true}
//           elevation={1}
//           sx={{
//             "&::-webkit-scrollbar": {
//               width: 7,
//               height: 10,
//               marginY: "4px",
//               overflow: "visible",
//             },
//             "&::-webkit-scrollbar-thumb": {
//               backgroundColor: "#d1d5db",
//               borderRadius: "0.25rem",
//               padding: "2px !important",
//             },
//             "&::-webkit-scrollbar-track": {
//               backgroundColor: "#f8fafc",
//               borderRadius: "0.25rem",
//               padding: "2px !important",
//             },
//           }}
//           className="rounded  h-64 "
//         >
//           <div className="border shadow-md p-2 bg-white">
//             <div className="flex justify-between gap-3 mb-2">
//               <div>
//                 <div className="gap-3">
//                   {showAllChips
//                     ? chips.map((chip, index) => (
//                         <Chip
//                           key={index}
//                           variant="outlined"
//                           label={chip}
//                           onClick={() => handleClickChip(chip)}
//                           className={` mr-2 mb-1 ${
//                             selectedChips.includes(chip)
//                               ? "bg-[#007EA9] text-white"
//                               : " text-black"
//                           }`}
//                         />
//                       ))
//                     : chips
//                         .slice(0, 9)
//                         .map((chip, index) => (
//                           <Chip
//                             key={index}
//                             variant="outlined"
//                             label={chip}
//                             onClick={() => handleClickChip(chip)}
//                             className={` mr-2 mb-1 ${
//                               selectedChips.includes(chip)
//                                 ? "bg-[#007EA9] text-white"
//                                 : " text-black"
//                             }`}
//                           />
//                         ))}
//                   {chips.length > 9 && !showAllChips && (
//                     <Chip
//                       className={` bg-[#E3902F] text-white`}
//                       label="More"
//                       variant="outlined"
//                       onClick={openSecondModal}
//                     />
//                   )}
//                 </div>
//                 <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-2">
//                   <div>
//                     <DropdownField
//                       control={control}
//                       error={errors.investigation}
//                       name="investigation"
//                       placeholder="Investigation*"
//                       dataArray={investigationPathologyList}
//                       isSearchable={true}
//                     />
//                   </div>
//                   <div className="flex align-center">
//                     <CheckBoxField
//                       name="isUrgent"
//                       label="IS Urgent"
//                       control={control}
//                       defaultValue={isUrgent.checked}
//                     />
//                     <Tooltip title="Add" placement="right" arrow>
//                       <button className="text-blue-500  mt-2">
//                         <AddIcon />
//                       </button>
//                     </Tooltip>
//                   </div>
//                 </div>
//                 <div className="-m-2 mt-2">
//                   <CommonTransactionTable
//                     dataResult={investigationPathologyData}
//                     removeHeaders={["id"]} // Headers to remove
//                     // tableClass="h-40" // Custom CSS for the table container
//                     renderActions={(row, index) => (
//                       // Render custom actions for each row (e.g., buttons or icons)
//                       <div className="flex items-center space-x-2">
//                         <EditIcon />
//                         <DeleteIcon />
//                       </div>
//                     )}
//                     renderInput={renderInput}
//                     highlightRow={false} // Highlight rows on click
//                     rowBackgroundColor={(row, index) => {
//                       // Define custom row background color logic
//                       return index % 2 === 0 ? "bg-gray-300" : "bg-white";
//                     }}
//                     handleSelectedRow={(row, index) => {
//                       // Handle the selected row
//                       console.log("Selected Row:", row, "Index:", index);
//                     }}
//                     editableColumns={["IsUrgent"]} // Editable columns
//                     SelectCheckbox={true} // Display checkboxes
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Modal
//             open={isModalOpen}
//             aria-labelledby="modal-modal-title"
//             onClose={closeModal}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Box sx={ModalStyle} style={{ width: "70vw", maxWidth: "520px" }}>
//               <div className=" flex  justify-between items-center">
//                 <div className=" flex  font-bold justify-start -mt-4">
//                   Pathology
//                 </div>
//                 <div>
//                   <CancelPresentationIconButton onClick={closeModal} />
//                 </div>
//               </div>
//               <div className="-mr-2">
//                 <div className=" flex  justify-between items-center  gap-2 mt-2 ">
//                   <SearchBar
//                     dataArray={dataArray}
//                     placeholder={placeholder}
//                     isClearable={isClearable}
//                     label={label}
//                     handleInputChange={handleInputChange}
//                     onChange={onChange}
//                     inputRef={inputRef}
//                     searchIcon={false}
//                     clearSearchBar={true}
//                   />
//                   <div className="">
//                     <CommonButton
//                       type="button"
//                       label={<searchIcon />}
//                       onClick={handleSearchClick}
//                       className="h-9 px-3 w-min rounded text-sm font-medium searchIconButton bg-customBlue text-white whitespace-nowrap"
//                       disabled={false}
//                       searchIcon={true}
//                     />
//                   </div>
//                 </div>
//                 <div className=" ml-1 mt-2">
//                   <CommonTransactionTable
//                     dataResult={PathologyRecords}
//                     removeHeaders={["id"]} // Headers to remove
//                     // tableClass="h-40" // Custom CSS for the table container
//                     renderInput={renderInput}
//                     highlightRow={false} // Highlight rows on click
//                     rowBackgroundColor={(row, index) => {
//                       // Define custom row background color logic
//                       return index % 2 === 0 ? "bg-gray-300" : "bg-white";
//                     }}
//                     handleSelectedRow={(row, index) => {
//                       // Handle the selected row
//                       console.log("Selected Row:", row, "Index:", index);
//                     }}
//                     editableColumns={["markCommon"]} // Editable columns
//                     SelectCheckbox={true} // Display checkboxes
//                   />
//                 </div>
//                 <div className="flex  justify-end mt-2  ">
//                   <CommonButton
//                     type="Submit"
//                     label="Save"
//                     onClick={handleSearchClick}
//                     className="h-9 px-3 w-min rounded text-sm font-medium searchIconButton bg-[#4CAF50] text-white whitespace-nowrap"
//                     disabled={false}
//                     searchIcon={false}
//                   />
//                 </div>
//               </div>
//             </Box>
//           </Modal>
//           <Modal
//             open={isSecondModalOpen}
//             aria-labelledby="modal-modal-title"
//             onClose={closeSecondModal}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Box sx={ModalStyle} style={{ width: "70vw", maxWidth: "500px" }}>
//               <div className="flex justify-between items-center">
//                 <div className="flex font-bold justify-start -mt-4 ">
//                   Pathology
//                 </div>
//                 <div>
//                   <CancelPresentationIconButton onClick={closeSecondModal} />
//                 </div>
//               </div>
//               <div className="-mr-3">
//                 <div className=" flex  justify-between items-center  gap-2 mt-2  mb-2">
//                   <SearchBar
//                     dataArray={dataArray}
//                     placeholder="Pathology "
//                     isClearable={isClearable}
//                     label="Pathology"
//                     handleInputChange={handleInputChange}
//                     onChange={onChange}
//                     inputRef={inputRef}
//                     searchIcon={true}
//                     clearSearchBar={true}
//                   />
//                 </div>
//                 <TableContainer
//                   square={true}
//                   elevation={1}
//                   sx={{
//                     "&::-webkit-scrollbar": {
//                       width: 7,
//                       height: 10,
//                       marginY: "4px",
//                       overflow: "visible",
//                     },
//                     "&::-webkit-scrollbar-thumb": {
//                       backgroundColor: "#d1d5db",
//                       borderRadius: "0.25rem",
//                       padding: "2px !important",
//                     },
//                     "&::-webkit-scrollbar-track": {
//                       backgroundColor: "#f8fafc",
//                       borderRadius: "0.25rem",
//                       padding: "2px !important",
//                     },
//                   }}
//                   className="rounded  h-46  -mr-8"
//                 >
//                   <div className="border shadow-md p-2 bg-white">
//                     <div>
//                       {chips.slice(9).map((chip, index) => (
//                         <Chip
//                           key={index}
//                           variant="outlined"
//                           label={chip}
//                           className={`mr-3 mb-1 ${
//                             selectedChips.includes(chip)
//                               ? "bg-[#007EA9] text-white"
//                               : " text-black"
//                           }`}
//                           onClick={() => {
//                             handleClickChip(chip);
//                             closeSecondModal();
//                           }}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </TableContainer>
//               </div>
//             </Box>
//           </Modal>
//         </TableContainer>
//       </div>
//     </div>
//   );
// };

// export default InvestigationPathology;
import { Box, Modal, TableContainer, Tooltip } from "@mui/material";
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
import CheckBoxField from "../../Common Components/FormFields/CheckBoxField";

const validationSchema = yup.object().shape({
  investigation: yup.object().required(),
  isUrgent: yup.boolean().required(),
});

const InvestigationPathology = () => {
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
      duration: null,
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
      id: 100,
      Investigation: "Diseases of spleen",
      isUrgent: true,
    },
    {
      id: 200,
      Investigation: "Diseases of spleen",
      isUrgent: false,
    },
  ]);

  const isUrgent = watch("isUrgent");
  const [complaintsList, setComplaintsList] = useState();

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
  const InvestigationRecords = [
    {
      Investigation: "Back Pain",
      markCommon: false,
    },
    {
      Investigation: "Headaches",
      markCommon: true,
    },
    {
      Investigation: "Fatigue",
      markCommon: false,
    },
    {
      Investigation: "Digestive Issues",
      markCommon: true,
    },
    {
      Investigation: "Joint Pain",
      markCommon: false,
    },
    {
      Investigation: "Anxiety and Depression",
      markCommon: true,
    },
    {
      Investigation: "High Blood Pressure",
      markCommon: false,
    },
    {
      Investigation: "Menstrual Irregularities and Pain",
      markCommon: true,
    },
    {
      Investigation: "Heartburn and Acid Reflux",
      markCommon: false,
    },
    {
      Investigation: "Household Chemicals",
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
        {column === "isUrgent" && (
          <input
            type="checkbox"
            className="text-center"
            defaultChecked={row.isUrgent ? true : false}
            onChange={(e) => {
              console.log("eeeeee123", e.target.checked);
              let tempData = [...complaintsData];
              tempData[rowIndex].isUrgent = e.target.checked;
              setComplaintsData(tempData);
            }}
          />
        )}
      </div>
    );
  };

  const handleClickChip = (chip) => {
    if (chip?.id === selectedChip) {
      setSelectedChip(null);
      setValue("investigation", null);
    } else {
      setSelectedChip(chip.id);
      setValue("investigation", chip);
    }
  };

  const handleAdd = (e) => {
    console.log("datanbkbkb" + e);

    const investigation = watch("investigation");
    const obj = {
      id: e?.addAllergy?.id,
      InvestigationPathology: investigation,
      isUrgent: e?.isUrgent.value,
    };
    console.log("datanbkbkblll" + obj);

    setComplaintsData([...complaintsData, obj]);
    reset();
  };

  const handleAddChips = (e) => {
    console.log("e", e);
    const obj = {
      Investigation: e?.investigation?.value,
      id: e?.duration?.id,
      isUrgent: e.isUrgent,
    };

    setComplaintsData([...complaintsData, obj]);
  };

  return (
    <div>
      <div className="rounded border">
        <div className="bg-[#E0F2FE]  sticky  p-1 border  shadow-md flex justify-between">
          <div className="flex items-center">
            <div className="text-sm font-semibold flex items-center justify-start ml-2">
              Pathology
            </div>
          </div>
          <div className="flex justify-end w-1/2  mr-2">
            <div
              className={`px-3 py-[3px] placeholder-slate-300 relative  bg-white rounded text-sm border 
                  border-slate-300 text-slate-600
              outline-none hover:outline-none hover:ring w-2/3 flex justify-between`}
              onClick={openSecondModal}
            >
              <div className="flex justify-start items-center">Pathology</div>
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
                    <Tooltip title="Add Test" placement="left" arrow>
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
                    renderInput={renderInput}
                    editableColumns={["isUrgent"]} 
                    SelectCheckbox={true} 
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
                  Pathology
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
                    dataResult={InvestigationRecords}
                    removeHeaders={["id"]} 
                    renderInput={renderInput}
                    highlightRow={false} 
                    rowBackgroundColor={(row, index) => {
                      return index % 2 === 0 ? "bg-gray-300" : "bg-white";
                    }}
                    handleSelectedRow={(row, index) => {
                      console.log("Selected Row:", row, "Index:", index);
                    }}
                    editableColumns={["markCommon"]} 
                    SelectCheckbox={true} 
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
            <form onSubmit={handleSubmit(handleAddChips)}>
              <Box sx={ModalStyle} style={{ width: "80vw", maxWidth: "70%" }}>
                <div className="flex justify-between items-center">
                  <div className="flex font-bold justify-start -mt-4 ">
                    Pathology
                  </div>
                  <div>
                    <CancelPresentationIconButton onClick={closeSecondModal} />
                  </div>
                </div>
                <div className="-mr-3">
                  <div className="border  mt-2 p-2 bg-white">
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
                        error={errors.investigation}
                        name="investigation"
                        placeholder="Investigation *"
                        dataArray={complaintsList}
                        isSearchable={true}
                      />
                    </div>
                    <div className="flex gap-2 mr-3">
                      <CheckBoxField
                        name="isUrgent"
                        error={errors.isUrgent}
                        label="Is Urgent"
                        className="whitespace-nowrap"
                        control={control}
                        defaultValue={isUrgent.checked}
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
                        dataResult={complaintsData}
                        removeHeaders={["id"]} // Headers to remove
                        // tableClass="h-40" // Custom CSS for the table container
                        renderActions={(row, index) => (
                          // Render custom actions for each row (e.g., buttons or icons)
                          <div className="flex items-center space-x-2">
                            <EditIcon />
                            <DeleteIcon />
                          </div>
                        )}
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
                        editableColumns={["isUrgent"]} // Editable columns
                        SelectCheckbox={true} // Display checkboxes
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
                    Pathology
                  </div>
                  <div>
                    <CancelPresentationIconButton onClick={closeThirdModal} />
                  </div>
                </div>
                <div className="-mr-3">
                  <div className=" items-center  gap-2 mt-2  mb-2">
                    <div className="border rounded shadow-md p-2  bg-slate-100 ">
                      <div className="lg:grid grid-cols-3 gap-y-4 mx-4 hidden lg:visible">
                        <div className="flex  gap-1">
                          <p className="font-bold text-sm w-8/12 whitespace-nowrap">
                            {data.label}
                            <span className="font-bold text-sm mx-2">:</span>
                          </p>
                          <p className="text-sm whitespace-nowrap">
                            {data.value}
                          </p>
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
                      className="rounded  h-46 mb-2 -mr-8"
                    >
                      <div className=" my-2 bg-white">
                        <div className="font-bold text-sm mb-2 ">
                          Complaint Since
                        </div>
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
                      <div className="flex gap-2 ">
                        <InputField
                          name="since"
                          variant="outlined"
                          label="Since *"
                          error={errors.since}
                          control={control}
                        />
                        <DropdownField
                          control={control}
                          error={errors.addDuration}
                          name="addDuration"
                          placeholder="Duration *"
                          dataArray={complaintsList}
                          isSearchable={true}
                        />
                        <CommonButton
                          label="Add"
                          type="submit"
                          className="saveButton bg-[#073763] text-white"
                        />
                      </div>
                    </TableContainer>
                  </div>
                </div>
              </Box>
            </form>
          </Modal>
        </TableContainer>
      </div>
    </div>
  );
};

export default InvestigationPathology;
