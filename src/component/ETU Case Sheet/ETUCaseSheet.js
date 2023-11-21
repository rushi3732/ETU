import React, { useState, useRef, useEffect } from "react";
import {
  HistoryIcon,
  VaccineIcon,
} from "../../Common Components/assets/commonassets/CommonAssets";
import CommonButton from "../common/CommonButton";
import Allergies from "./Allergies";
import Advice from "./Advice";
import DoctorDepartmentDetails from "./DoctorDepartmentDetails";
import Medication from "./Medication";
import SurgicalHistory from "./SurgicalHistory";
import SpecialInstruction from "./SpecialInstruction";
import GeneralExaminationMEWS from "./GeneralExaminationMEWS";
import PainAssessmentScale from "./PainAssessmentScale";
import InvestigationPathology from "./InvestigationPathology";
import InvestigationRadiology from "./InvestigationRadiology";
import { InjuryDetails } from "./InjuryDetails";
import Diagnosis from "./Diagnosis";
import LocalExamination from "./LocalExamination";
import Complaints from "./Complaints";
import PastHistory from "./PastHistory";
import Vitals from "./Vitals";
import { Tooltip } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SearchIcon from "@mui/icons-material/Search";
import CheckBoxField from "../../Common Components/FormFields/CheckBoxField";
import SearchBar from "../../Common Components/FormFields/SearchBar";
import SurgeryDetails from "./SurgeryDetails";
import GeneralExaminationPEWS from "./GeneralExaminationPEWS";
import SystemicExaminationPEWS from "./SystemicExaminationPEWS";
import SystemicExaminationMEWS from "./SystemicExaminationMEWS";
import MedicoLegalCase from "./MedicoLegalCase";

const ETUCaseSheet = () => {
  const [pastHistory, setPastHistory] = useState([]);
  const [allergiesDetails, setAllergiesDetails] = useState([]);
  const [diagnosisDetails, setDiagnosisDetails] = useState([]);
  const [generalDetails, setGeneralDetails] = useState(null);
  const [PainScoreDetails, setPainScoreDetails] = useState(null);
  const [isMLCModalOpen, setIsMLCModalOpen] = useState(false);

  console.log("isMLCModalOpen123", isMLCModalOpen);
  const methods = useForm({
    defaultValues: {
      medicoLegalCase: false,
      temp: "",
      pulserate: "",
      bpsystolic: "",
      bpdiastolic: "",
      spo: "",
      weight: "",
      height: "",
      bmi: "",
      respiration: "",
      bsl: "",
      rs: "",
      cvs: "",
      pa: "",
      cns: "",
      advice: "",
      specialInstruction: "",
      injuryDetails: "",
      localExamination: "",
      surgicalHistory: "",
      doctorDetails: [{ doctor: null, department: null }],
    },
  });

  const {
    control,
    watch,
    register,
    setValue,
    formState: { errors },
  } = methods;

  const medicoLegalCase = watch("medicoLegalCase");
  useEffect(() => {
    console.log("medicoLegalCase changed:", medicoLegalCase);
  }, [medicoLegalCase]);

  const dataArray = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ];

  const placeholder = "Search By UHID, Patient Name, Mobile No";
  const isClearable = true;
  const label = "Search By UHID, Patient Name, Mobile No.";

  const handleInputChange = (inputValue) => {
    console.log("Input changed to:", inputValue);
  };

  const onChange = (selectedOption) => {
    console.log("Option selected:", selectedOption);
  };

  const inputRef = useRef();

  const patientData = {
    "Patient Name ": "Surekha Subhash Patil",
    UHID: "SJ/2022/000017",
    Age: "23Y 02M 04D",
    Gender: "FeMale",
    "Bed No": "1234",
    "Arrival Date & Time ": "12/02/2022, 12.30 AM",
    "Doctor Name": "Dr. Jayant Pawar",
  };
  // const handleCompleteClick = () => {
  //   console.log("handleCompleteClick");
  //   const obj = {
  //     vitals: {},
  //     pastHistory: {},
  //     allergies: [],
  //     surgicalHistory: {},
  //     complaints: [],
  //     localExamination: {},
  //     injuryDetails: {},
  //     diagnosis: [],
  //     Pathology: [],
  //     Radiology: [],
  //     painAssessmenScale: [],
  //     generalExamination: {},
  //     specialInstruction: {},
  //     systemicExamination: {},
  //     Medication: [],
  //     Advice: {},
  //     doctorOrDepartmentDetails: [],
  //   };
  // };

  let departmentDetails, doctorsDetail;
  const onSubmit = (data) => {
    console.log("onCompleteClick", data);
    let tempPastHistoryArr = [];
    for (let obj of pastHistory) {
      if (obj?.description !== "") {
        tempPastHistoryArr.push({
          type: obj?.label,
          description: obj?.description,
        });
      }
    }

    let tempallergiesDetails = [];
    for (let obj of allergiesDetails) {
      tempallergiesDetails.push({
        allergy: obj?.Allergies,
        description: obj?.["Allergy Description"],
      });
    }

    let tempDiagnosisDetails = [];
    for (let obj of diagnosisDetails) {
      tempDiagnosisDetails.push({
        // diagnosisId:obj?.,
        description: obj?.Diagnosis,
        since: obj?.Since,
        duration: obj?.Since,
        status: obj?.Status,
        isChronic: obj?.chronicNonChronic,
      });
    }
    let doctorDepartmentDetails = [];
    data.doctorDetails.map((item) => {
      const obj = {
        deptId: item.department?.id,
        deptName: item.department?.value,
        docId: item.doctor?.id,
        docName: item.doctor?.value,
      };
      doctorDepartmentDetails.push(obj);
    });
    let postObj = {
      pastHistoryDtoList: tempPastHistoryArr,
      allergiesDetails: tempallergiesDetails,
      diagnosisDetails: tempDiagnosisDetails,
      doctorDepartmentDetails: doctorDepartmentDetails,
    };
    console.log("postObj123", postObj);
    console.log("PainScoreDetails", PainScoreDetails);
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex w-11/12 lg:w-10/12 ml-4 gap-2 items-center mb-2">
            <div className="w-2/5">
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
            </div>
            <div className=" flex gap-2">
              <CommonButton
                type="button"
                label={<SearchIcon />}
                // onClick={onCompleteClick}
                className="h-9 px-3 w-min rounded text-sm font-medium searchIconButton bg-customBlue text-white whitespace-nowrap"
                disabled={false}
                searchIcon={true}
              />
            </div>
          </div>
          <div className="border rounded shadow-md p-2  sticky top-[68px] bg-slate-100 z-30  ml-3">
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
            <div className="flex items-center gap-2">
              <div className="text-black font-roboto text-md font-bold  whitespace-nowrap">
                Electronic Medical Record
                <span className="text-gray-600 font-roboto text-md font-normal">
                  (EMR)
                </span>
              </div>
              <div>
                <fieldset
                  onChange={(e) => {
                    console.log("eee123", e.target.checked);
                    if (e.target.checked === true) {
                      setIsMLCModalOpen(true);
                    }
                  }}
                >
                  <CheckBoxField
                    name="medicoLegalCase"
                    label="Medico legal case"
                    className="whitespace-nowrap"
                    control={control}
                    defaultValue={medicoLegalCase.checked}
                  />
                </fieldset>
                <MedicoLegalCase
                  isMLCModalOpen={isMLCModalOpen}
                  setIsMLCModalOpen={setIsMLCModalOpen}
                />
              </div>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <Tooltip title="History" arrow>
                <button className="text-blue-500  flex justify-end">
                  <HistoryIcon />
                </button>
              </Tooltip>
              <Tooltip title="Vaccine" arrow>
                <button className="text-blue-500  flex justify-end">
                  <VaccineIcon />
                </button>
              </Tooltip>
              <CommonButton
                type="submit"
                // onClick={onCompleteClick}
                label="Complete"
                className="bg-teal-500 text-white"
                disabled={false}
                searchIcon={false}
              />
            </div>
          </div>

          <div className="ml-3 h-auto">
            <Vitals />
          </div>
          <div className="ml-3 gap-3 my-2 ">
            <PastHistory setPastHistory={setPastHistory} />
          </div>
          <div className="ml-3 gap-3 my-2 ">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
              <Allergies setAllergiesDetails={setAllergiesDetails} />
              <SurgicalHistory />
            </div>
          </div>
          <div className="ml-3 gap-3 my-2 ">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
              <Complaints />
              <LocalExamination />
            </div>
          </div>
          <div className="ml-3 gap-3 my-2 ">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
              <InjuryDetails />
              <Diagnosis setDiagnosisDetails={setDiagnosisDetails} />
            </div>
          </div>
          <div className="ml-3 gap-3 my-2 ">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
              <SurgeryDetails />
              <InvestigationPathology />
              <InvestigationRadiology />
            </div>
          </div>
          <div className="ml-3 h-auto">
            <PainAssessmentScale setPainScoreDetails={setPainScoreDetails} />
          </div>
          <div className="ml-3 gap-3 my-2 ">
            {patientData.Gender === "Male" ? (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
                <GeneralExaminationMEWS />
                <SpecialInstruction />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
                <GeneralExaminationPEWS setGeneralDetails={setGeneralDetails} />
                <SpecialInstruction />
              </div>
            )}
          </div>
          <div className="ml-3 h-auto  my-2">
            {patientData.Gender === "Male" ? (
              <div>
                <SystemicExaminationMEWS />
              </div>
            ) : (
              <div>
                <SystemicExaminationPEWS />
              </div>
            )}
          </div>
          <div className="ml-3 h-auto  my-2">
            <Medication />
          </div>
          <div className="ml-3 gap-3 my-2 ">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
              <Advice />
              <DoctorDepartmentDetails />
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default ETUCaseSheet;
