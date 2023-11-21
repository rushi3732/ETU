import React, { useState } from "react";
import CancelPresentationIconButton from "../../Common Components/Buttons/CancelPresentationIconButton";
import { ModalStyle } from "../../Common Components/modalstyle/ModalStyle";
import {
  Modal,
  Box,
  AppBar,
  Toolbar,
  Typography,
  TableContainer,
} from "@mui/material";
import CheckBoxField from "../../Common Components/FormFields/CheckBoxField";
import { useForm } from "react-hook-form";
import CommonButton from "../../Common Components/commonbutton/CommonButton";
import InputField from "../../Common Components/FormFields/InputField";
import CommonTransactionTable from "../../Common Components/CommonTable/CommonTransactionTable";
import {
  DeleteIcon,
  EditIcon,
} from "../../Common Components/assets/commonassets/CommonAssets";
import DatePickerField from "../../Common Components/FormFields/DatePickerField";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import DropdownField from "../../Common Components/FormFields/DropdownField";
import RadioField from "../../Common Components/FormFields/RadioField";
import { DesktopTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TimePickerField from "../../Common Components/FormFields/TimePickerField";

const broughtList = [
  {
    name: "nameofperson",
    label: "Name Of Person",
    value: "",
  },
  {
    name: "address",
    label: "Address",
    value: "",
  },
  {
    name: "mobilenumber",
    label: "Mobile Number",
    value: "",
  },
];
const policeDetailsList = [
  {
    name: "policestation",
    label: "Police Station *",
    value: "",
  },
  {
    name: "policeofficername",
    label: "Police Officer Name *",
    value: "",
  },
  {
    name: "batchno",
    label: "Batch No *",
    value: "",
  },
  {
    name: "designation",
    label: "Designation *",
    value: "",
  },
];
const isBeingList = [
  {
    id: 1,
    value: "IPD",
    label: "IPD",
  },
  {
    id: 2,
    value: "OPD",
    label: "OPD",
  },
];
const mlcTypeList = [
  {
    id: 1,
    value: "IPD",
    label: "IPD",
  },
  {
    id: 2,
    value: "OPD",
    label: "OPD",
  },
];
const diagnosisList = [
  {
    id: 1,
    value: "IPD",
    label: "IPD",
  },
  {
    id: 2,
    value: "OPD",
    label: "OPD",
  },
];

const MLRAttached = [
  { id: 1, label: "Yes" },
  { id: 2, label: "No" },
];

const MedicoLegalCase = (props) => {
  const { medicoLegalCase, isMLCModalOpen, setIsMLCModalOpen } = props;
  const {
    control,
    watch,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      expired: false,
      selfvisit: false,
      informed: false,
      expireddate: new Date(),
      identificationmark: "",
      isbring: null,
      patientindate: new Date(),
      patientintime: null,
      mlctype: null,
      grievous: "",
      diagnosis: null,
      mlrtype: false,
      policestation: "",
      policeofficername: "",
      batchno: "",
      designation: "",
      informed: false,
      regcasedate: new Date(),
      giventime: null,
      probablecauseofdeath: "",
      expiredtime: null,
      expireddate: new Date(),
    },
  });

  const [time, setTime] = useState(new Date());

  const [expiredtime, setExpiredtime] = useState(new Date());
  const [identificationList, setIdentificationList] = useState([]);
  const [broughtRecordList, setBroughtRecordList] = useState([]);
  const handleTimeChange = (newValue) => {
    setTime(newValue);
  };

  const handleexpiredTimeChange = (newValue) => {
    setTime(newValue);
  };
  const handlePatientInTime = (newValue) => {
    setTime(newValue);
  };

  const expired = watch("expired");
  const selfvisit = watch("selfvisit");
  const informed = watch("informed");
  const expireddateValue = watch("expireddate");

  console.log("expireddateValue", expireddateValue);
  const handleAddIdentification = (data) => {
    console.log("data2obhhr4", data);

    const obj = {
      "Identification Mark": data.identificationmark,
    };
    setIdentificationList([...identificationList, obj]);
    // reset({ identificationmark: "" });
  };
  const handleAddBroughtList = (data) => {
    const obj = {
      "Person Name": data.nameofperson,
      Address: data.address,
      "Mobile Number": data.mobilenumber,
    };
    setBroughtRecordList([...broughtRecordList, obj]);
  };
  const onSubmit = (data) => {
    console.log("dataddddd", data);
    // data.isbring
    // data.patientindate
    // data.patientintime
    // data.grievous
    // data.diagnosis
    // data.mlrtype
    // BroughtToHospitalRequestDto:[]
    // grievous:data.grievous,
    // patientInDate:data.patientindate,
    // patientInTime:data.patientintime,
    // policeStation: data.policestation,
    // policeOfficerName:data.policeofficername,
    // batchNo:data.batchno,
    // designation:data.designation,
    // isInformed:data.informed,
    // registrationDate:data.regcasedate,
    // registrationTime:data.giventime,
    // mlrAttached:  data.mlctype ,
    //   expireDate: expireddate,
    //   expireTime:data.expiredtime,
    //   deathProbable:data.probablecauseofdeath,
  };
  return (
    <div>
      <Modal
        open={isMLCModalOpen}
        aria-labelledby="modal-modal-title"
        className="rounded"
      >
        <Box sx={ModalStyle} style={{ width: "80vw", maxWidth: "85%" }}>
          <div>
            <div className="-mt-2">
              <CancelPresentationIconButton
                onClick={() => {
                  setIsMLCModalOpen(false);
                }}
              />
            </div>
            <div className="-mt-2">
              <div>
                <fieldset className="border-2 rounded  border-gray-200  m-2 p-1">
                  <legend className="md:mx-2 lg:px-2 font-bold text-gray-700 whitespace-nowrap">
                    Medico Legal Case Information
                  </legend>
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
                    className="rounded  pr-[6px]   "
                  >
                    <div className="h-[80%]">
                      <div className="pb-2 pl-3">
                        <CheckBoxField
                          name="expired"
                          label="Expired"
                          className="whitespace-nowrap"
                          control={control}
                          defaultValue={expired.checked}
                        />
                        <div>
                          <p className="font-bold text-sm w-4/12 whitespace-nowrap">
                            Identification Mark
                          </p>
                        </div>
                        <form onSubmit={handleSubmit(handleAddIdentification)}>
                          <div className=" grid grid-cols-4 gap-2 mt-2">
                            <div className="col-span-2">
                              <InputField
                                name="identificationmark"
                                variant="outlined"
                                label="Identification Mark"
                                error={errors.identificationmark}
                                control={control}
                              />
                            </div>
                            <div className="col-span-1">
                              <CommonButton
                                label="Add"
                                type="submit"
                                className="saveButton bg-[#073763] text-white"
                              />
                            </div>
                          </div>
                        </form>
                        <div>
                          {identificationList.length !== 0 ? (
                            <CommonTransactionTable
                              dataResult={identificationList}
                              removeHeaders={["id"]}
                              renderActions={(row, index) => (
                                <div className="flex items-center space-x-2">
                                  <DeleteIcon />
                                </div>
                              )}
                              highlightRow={false}
                              rowBackgroundColor={(row, index) => {
                                return index % 2 === 0
                                  ? "bg-gray-300"
                                  : "bg-white";
                              }}
                              handleSelectedRow={(row, index) => {
                                console.log(
                                  "Selected Row:",
                                  row,
                                  "Index:",
                                  index
                                );
                              }}
                              editableColumns={[""]}
                              SelectCheckbox={false}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-sm whitespace-nowrap">
                            Brought To Hospital
                          </p>
                          <CheckBoxField
                            name="selfvisit"
                            label="Self Visit"
                            className="whitespace-nowrap"
                            control={control}
                            defaultValue={selfvisit.checked}
                          />
                        </div>
                        {selfvisit !== true ? (
                          <form onSubmit={handleSubmit(handleAddBroughtList)}>
                            <div className="grid items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 w-full mt-2 ">
                              {broughtList.map((value, index) => (
                                <div
                                  key={index}
                                  className="flex justify-between  mb-2"
                                >
                                  <div className="w-full">
                                    <InputField
                                      key={index}
                                      label={value.label}
                                      name={value.name}
                                      variant="outlined"
                                      type="text"
                                      control={control}
                                      focused={false}
                                      disabled={false}
                                      inputProps={{ maxLength: 20 }}
                                      onKeyDown={(e) => console.log(e.key)}
                                      shrink={true}
                                    />
                                  </div>
                                </div>
                              ))}
                              <div className="-mt-1">
                                <CommonButton
                                  label="Add"
                                  type="submit"
                                  className="saveButton bg-[#073763] text-white"
                                />
                              </div>
                            </div>
                          </form>
                        ) : (
                          ""
                        )}

                        <div>
                          {selfvisit !== true &&
                          broughtRecordList.length !== 0 ? (
                            <CommonTransactionTable
                              dataResult={broughtRecordList}
                              removeHeaders={["id"]}
                              renderActions={(row, index) => (
                                <div className="flex items-center space-x-2">
                                  <DeleteIcon />
                                </div>
                              )}
                              highlightRow={false}
                              rowBackgroundColor={(row, index) => {
                                return index % 2 === 0
                                  ? "bg-gray-300"
                                  : "bg-white";
                              }}
                              handleSelectedRow={(row, index) => {
                                console.log(
                                  "Selected Row:",
                                  row,
                                  "Index:",
                                  index
                                );
                              }}
                              editableColumns={[""]}
                              SelectCheckbox={false}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div>
                            {expired ? (
                              <div>
                                <div>
                                  <p className="font-bold text-sm whitespace-nowrap">
                                    Expired
                                  </p>
                                </div>

                                <div className="grid grid-cols-1 mb-2 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 w-full mt-2">
                                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
                                    <DatePickerField
                                      control={control}
                                      name="expireddate"
                                      label="Expired Date "
                                      value={new Date()}
                                      disablePast={true}
                                      disableFuture={false}
                                      size="small"
                                      inputFormat="dd-MM-yyyy"
                                    />
                                    <TimePickerField
                                      className="bg-white"
                                      label="Time"
                                      name="expiredtime"
                                      value={expiredtime}
                                      onChange={handleexpiredTimeChange}
                                    />
                                  </div>
                                  <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                                    <InputField
                                      name="probablecauseofdeath"
                                      variant="outlined"
                                      label="Probable Cause of Death"
                                      error={errors.probablecauseofdeath}
                                      control={control}
                                    />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <div>
                                  <p className="font-bold text-sm  whitespace-nowrap">
                                    Is Being
                                  </p>
                                </div>
                                <div className="w-1/3">
                                  <DropdownField
                                    control={control}
                                    error={errors.isbring}
                                    name="isbring"
                                    placeholder="Is Being *"
                                    dataArray={isBeingList}
                                    isSearchable={true}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-sm  whitespace-nowrap">
                              Patient-In Date & Time
                            </p>
                          </div>
                          <div>
                            <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 w-full mt-2 ">
                              <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 gap-2">
                                <DatePickerField
                                  name="patientindate"
                                  label="Patient In Date"
                                  control={control}
                                  defaultValue={null}
                                  disablePast={true}
                                  disableFuture={false}
                                  size="small"
                                />
                                <TimePickerField
                                  className="bg-white "
                                  label="Patient In time"
                                  name="patientintime"
                                  value={time}
                                  onChange={handlePatientInTime}
                                />
                              </div>
                              <DropdownField
                                control={control}
                                error={errors.mlctype}
                                name="mlctype"
                                placeholder="MLC Type "
                                dataArray={mlcTypeList}
                                isSearchable={true}
                              />
                              <InputField
                                name="grievous"
                                variant="outlined"
                                label="IReferred Hospital Name"
                                error={errors.grievous}
                                control={control}
                              />
                              <DropdownField
                                control={control}
                                error={errors.diagnosis}
                                name="diagnosis"
                                placeholder="Diagnosis"
                                dataArray={diagnosisList}
                                isSearchable={true}
                                isMulti={true}
                                isClearable={true}
                              />
                              <div className="flex gap-2 items-center">
                                <div>
                                  <p className="font-bold text-sm  whitespace-nowrap">
                                    MLR Attached :
                                  </p>
                                </div>
                                <div className="flex">
                                  <RadioField
                                    dataArray={MLRAttached}
                                    name="mlrtype"
                                    control={control}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <div>
                              <p className="font-bold text-sm  whitespace-nowrap">
                                Police Officer's Details
                              </p>
                            </div>
                            <div>
                              <CheckBoxField
                                name="informed"
                                label="InFormed"
                                className="whitespace-nowrap"
                                control={control}
                                defaultValue={informed.checked}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 w-full mt-2 ">
                            {policeDetailsList.map((value, index) => (
                              <div
                                key={index}
                                className="flex justify-between  mb-2"
                              >
                                <div className="w-full">
                                  <InputField
                                    key={index}
                                    label={value.label}
                                    name={value.name}
                                    variant="outlined"
                                    type="text"
                                    control={control}
                                    focused={false}
                                    disabled={false}
                                    inputProps={{ maxLength: 20 }}
                                    onKeyDown={(e) => console.log(e.key)}
                                    shrink={true}
                                  />
                                </div>
                              </div>
                            ))}
                            <div className="grid grid-cols-1 -mt-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
                              <DatePickerField
                                name="regcasedate"
                                label="Reg Case Date"
                                control={control}
                                defaultValue={null}
                                disablePast={true}
                                disableFuture={false}
                                size="small"
                              />
                              <TimePickerField
                                className="bg-white "
                                label="Given Time"
                                name="giventime"
                                value={time}
                                onChange={handleTimeChange}
                              />
                            </div>
                            <div className="text-right -mt-1">
                              <CommonButton
                                label="Save"
                                type="submit"
                                className="saveButton bg-customGreen text-white"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </TableContainer>
                </fieldset>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MedicoLegalCase;
