import { Slider, styled, Tooltip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import MedicationErrorRepModal from "./medicationError/MedicationErrorRepModal";
// import PhlebitiesScoreModal from "./PhlebitiesScoreModal";
// import InitialNursingModal from "./InitialNursingModal";
import { useForm } from "react-hook-form";
import CommonTransactionTable from "../../../../Common Components/CommonTable/CommonTransactionTable";
import ConfirmationModal from "../../../../Common Components/ConfirmationModal";
import {
  errorAlert,
  successAlert,
  warningAlert,
} from "../../../../Common Components/Toasts/CustomToasts";
import { PainAssessmentScaleSvg } from "../../../../Common Components/assets/ipdassets/clinicalcarechartassets/ClinicalCareChartAssets";
import {
  addNewPatientPainScore,
  getAllPainAssessment,
} from "../../services/nursingServices/painAssessment/PainAssessmentService";
import { VisitContext } from "../ClinicalCareChart";
import PainAssessmentScale from "../PainAssessmentScale.png";
import DialyWeight from "./DialyWeight";
import CareNPosition from "./carenposition/CareNPosition";
import CommonButton from "../../../../Common Components/Buttons/CommonButton";
import { DeleteIcon } from "../../../../Common Components/assets/commonassets/CommonAssets";
import CommonBackDrop from "../../../../Common Components/CommonBackDrop/CommonBackDrop";
function valueText(value) {
  return `${value}°C`;
}
const CustomSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  padding: 7,

  "& .MuiSlider-mark": {
    border: "none",
    color: "gray",
    height: 7,
    // marginLeft: "2px",
  },
  "& .MuiSlider-rail": {
    border: "none",
    backgroundImage:
      "linear-gradient(.25turn,  lightblue, green, greenyellow, yellow, orange, red)",
  },
  "& .MuiSlider-track": {
    border: "none",
    backgroundImage:
      "linear-gradient(.25turn,  lightblue, green, greenyellow, yellow, orange, red)",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid blue",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "black",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
const sliderMarks = [
  {
    value: 0,
    scaledValue: 0,
  },
  {
    value: 1,
    scaledValue: 1,
  },
  {
    value: 2,
    scaledValue: 2,
  },
  {
    value: 3,
    scaledValue: 3,
  },
  {
    value: 4,
    scaledValue: 4,
  },
  {
    value: 5,
    scaledValue: 5,
  },
  {
    value: 6,
    scaledValue: 6,
  },
  {
    value: 7,
    scaledValue: 7,
  },
  {
    value: 8,
    scaledValue: 8,
  },
  {
    value: 9,
    scaledValue: 9,
  },
  {
    value: 10,
    scaledValue: 10,
  },
];

const painScore = [
  {
    id: 0,
    score: 0,
    value: "No Pain",
  },
  {
    id: 1,
    score: 1,
    value: "Mild Pain",
  },
  {
    id: 2,
    score: 2,
    value: "Mild Pain",
  },
  {
    id: 3,
    score: 3,
    value: "Mild Pain",
  },
  {
    id: 4,
    score: 4,
    value: "Moderate Pain",
  },
  {
    id: 5,
    score: 5,
    value: "Moderate Pain",
  },
  {
    id: 6,
    score: 6,
    value: "Severe Pain",
  },
  {
    id: 7,
    score: 7,
    value: "Severe Pain",
  },
  {
    id: 8,
    score: 8,
    value: "Very Severe Pain",
  },
  {
    id: 9,
    score: 9,
    value: "Very Severe Pain",
  },
  {
    id: 10,
    score: 10,
    value: "Worst Pain Possible",
  },
];

export default function PainAssessment(props) {
  const defaultValues = {
    painScore: "",
  };
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const localStorageObj = JSON.parse(localStorage.getItem("loggedUser"));
  const patientInfo = useContext(VisitContext);
  const selectedPatientInfo =
    patientInfo?.patientVisitId || patientInfo?.visitId;
  const [finalData, setFinalData] = React.useState();
  const [dataResult, setDataResult] = useState([]);
  const [openPost, setOpenPost] = React.useState(false);
  const [sliderReset, setSliderReset] = React.useState(0);
  const handleClosePost = () => {
    if (openPost) {
      setOpenPost(false);
    }
  };
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteConfirm, setOpenDelete] = React.useState(false);
  //function to open the confirmation modal
  const handleOpenDelete = () => setOpenDelete(true);
  //function to close the confirmation modal
  const handleCloseDelete = () => {
    if (deleteConfirm) {
      setOpenDelete(false);
    }
  };

  const [openMedicationErrorModal, setOpenMedicationErrorModal] =
    React.useState(false);
  const handleOpenMedicationErrorModal = () =>
    setOpenMedicationErrorModal(true);
  const handleCloseMedicationErrorModal = () =>
    setOpenMedicationErrorModal(false);

  const [openPhlebitiesModal, setOpenPhlebitiesModal] = React.useState(false);
  const handleOpenPhlebitiesModal = () => setOpenPhlebitiesModal(true);
  const handleClosePhlebitiesModal = () => setOpenPhlebitiesModal(false);

  const [openInitialNursingModal, setOpenInitialNursingModal] =
    React.useState(false);
  const handleOpenInitialNursing = () => setOpenInitialNursingModal(true);
  const handleCloseInitialNursing = () => setOpenInitialNursingModal(false);

  const [openCareNPostionModal, setOpenCareNPostionModal] =
    React.useState(false);
  const handleOpenCareNPostionModal = () => setOpenCareNPostionModal(true);
  const handleCloseCareNPostionModal = () => setOpenCareNPostionModal(false);

  const populateTable = () => {
    getAllPainAssessment(selectedPatientInfo)
      .then((response) => response.data)
      .then((res) => {
        setDataResult(res.result);
      });
  };

  function postPainAssessment(obj) {
    addNewPatientPainScore(obj)
      .then((response) => {
        if (response.data.statusCode === 200) {
          successAlert(response.data.message);
          setSliderReset(0);
          populateTable();
        } else if (!selectedPatientInfo) {
          warningAlert("Please Select Patient");
          setSliderReset(0);
        }
      })
      .catch((error) => {
        errorAlert(error.message);
        handleClosePost();
      });
  }

  const onSubmitDataHandler = (data) => {
    const painScoreValue = painScore.find(
      (painScore) => painScore.score === sliderReset
    );

    if (selectedPatientInfo) {
      let painScorePostObj = {
        painScore: "",
        visitId: selectedPatientInfo,
        painScoreDescription: "",
      };

      painScorePostObj.painScore = sliderReset;
      painScorePostObj.painScoreDescription = painScoreValue.value;
      setFinalData(painScorePostObj);

      if (patientInfo) {
        setOpenPost(true);
      }
    }
  };

  function addRecord() {
    setOpenPost(false);
    postPainAssessment(finalData);
  }

  useEffect(() => {
    if (selectedPatientInfo) {
      populateTable();
    }
  }, [finalData, selectedPatientInfo]);

  //axios request for data deletion. That is delete request
  // function deleteRecord() {
  //   handleCloseDelete();
  //   setOpenBackdrop(true);
  //   dataResult.splice(deleteId, 1);
  //   setOpenBackdrop(false);

  //   // deletePainAssessmentById(deleteId)
  //   //   .then((response) => {
  //   //     if (response.data.statusCode === 200) {
  //   //       populateTable();
  //   //       deleteAlert(response.data.message);
  //   //       setOpenBackdrop(false);
  //   //     }
  //   //     handleCloseDelete();
  //   //   })
  //   //   .catch((error) => {
  //   //     setOpenBackdrop(false);
  //   //     errdeleteAlert(error.message);
  //   //   });
  // }

  // const renderActions = (row, index) => {
  //   return (
  //     <div className="flex gap-2 cursor-pointer">
  //       <>
  //         <Tooltip title="Delete">
  //           <button
  //             type="button"
  //             onClick={() => {
  //               handleOpenDelete();
  //               setDeleteId(row.id);
  //             }}
  //           >
  //             <DeleteIcon />
  //           </button>
  //         </Tooltip>
  //       </>
  //     </div>
  //   );
  // };

  return (
    <div className="w-full">
      <form
        className="grid grid-cols-1 w-full gap-x-2"
        onSubmit={handleSubmit(onSubmitDataHandler)}
      >
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="col-span-3 lg:col-span-2 w-full ">
            <h1 className="my-1 font-semibold text-[16px] mb-2">
              Assessment List
            </h1>

            {dataResult.length > 0 ? (
              <CommonTransactionTable
                dataResult={dataResult}
                highlightRow={true}
                removeHeaders={["id", "visitId"]}
                tableClass={"rounded w-44 h-44"}
                // renderActions={renderActions}
              />
            ) : (
              <p className="text-center my-4">No Data Found...</p>
            )}
          </div>
          <div className="w-full hidden lg:block">
            <DialyWeight
              actions={props.actions}
              patientInfo={props.patientInfo}
            />
          </div>
        </div>
        <div className="mt-5 rounded-md border p-5 w-full bg-white">
          <h1 className="my-2 text-center font-semibold w-full">
            Patient Pain Assessment
          </h1>

          <div className="flex space-x-2 w-full">
            <div className="flex flex-col space-y-3 xl:space-y-6 xl:pt-4 2xl:space-y-7 2xl:pt-10 w-[25%] xl:w-[20%] text-xs 2xl:text-sm text-gray-600">
              <h1>Verbal Descriptor Scale</h1>
              <h1>Wong-Baker Facial Grimace Scale</h1>
              <h1>Activity Tolerance Scale</h1>
            </div>
            <div className="w-[97%] 2xl:w-full">
              <div className="w-full hidden 2xl:block">
                <img src={PainAssessmentScale} />
              </div>
              <div className="2xl:hidden">
                <PainAssessmentScaleSvg />
              </div>
              <div className="flex w-full justify-start mt-2">
                <div className="w-[92%] xl:w-[90% ] 2xl:w-[91%] ml-3 lg:ml-5 2xl:ml-8">
                  <CustomSlider
                    className="painScore"
                    control={control}
                    {...register("painScore")}
                    name="painScore"
                    onChange={(value) => {
                      if (selectedPatientInfo) {
                        setSliderReset(value.target.value);
                      } else {
                        warningAlert("Please Select Patient...!");
                      }
                    }}
                    aria-label="Custom marks"
                    value={sliderReset !== null ? sliderReset : 0}
                    getAriaValueText={valueText}
                    min={0}
                    step={1}
                    max={10}
                    valueLabelDisplay="auto"
                    aria-labelledby="non-linear-slider"
                    style={{ height: "14px" }}
                    marks={sliderMarks}
                  />
                </div>
              </div>
              {localStorageObj?.role === "Admin" ||
              localStorageObj?.role === "Super Admin" ? (
                ""
              ) : selectedPatientInfo ? (
                <>
                  {patientInfo?.isBillGenerated === true ? null : (
                    <div className="flex justify-end space-x-4 mt-2 ">
                      {props.actions.map((obj) => (
                        <>
                          {!obj.isAction && obj.permission === "Create" ? (
                            <>
                              <CommonButton
                                type="submit"
                                label="Save"
                                className="saveButton bg-customGreen text-white"
                              />
                            </>
                          ) : null}
                        </>
                      ))}
                    </div>
                  )}
                </>
              ) : null}
            </div>
          </div>
          <CommonBackDrop openBackdrop={openBackdrop} />
        </div>
        <div className="w-full lg:hidden pt-2">
          <DialyWeight
            patientInfo={props.patientInfo}
            actions={props.actions}
          />
        </div>
        <div className="flex space-x-2 justify-end mt-2 ">
          {props.actions.map((obj) => (
            <>
              {!obj.isAction && obj.permission === "Care And Position" ? (
                <>
                  <CommonButton
                    type="button"
                    label="Care And Position"
                    className="otherButton bg-[#E9CFEC] "
                    onClick={() => {
                      if (selectedPatientInfo) {
                        handleOpenCareNPostionModal();
                      } else {
                        warningAlert("Please Select Patient...!");
                      }
                    }}
                  />
                </>
              ) : null}
            </>
          ))}

          {props.actions.map((obj) => (
            <>
              {!obj.isAction && obj.permission === "Report Medication Error" ? (
                <>
                  <CommonButton
                    type="button"
                    label="Report Medication Error"
                    className="otherButton bg-[#C3FDB8] "
                    onClick={() => {
                      if (selectedPatientInfo) {
                        handleOpenMedicationErrorModal();
                      } else {
                        warningAlert("Please Select Patient...!");
                      }
                    }}
                  />
                </>
              ) : null}
            </>
          ))}

          {props.actions.map((obj) => (
            <>
              {!obj.isAction && obj.permission === "Phlebitis" ? (
                <>
                  <CommonButton
                    type="button"
                    label="Phlebitis"
                    className="otherButton bg-[#CFECEC] "
                    onClick={() => {
                      if (selectedPatientInfo) {
                        handleOpenPhlebitiesModal();
                      } else {
                        warningAlert("Please Select Patient...!");
                      }
                    }}
                  />
                </>
              ) : null}
            </>
          ))}

          {props.actions.map((obj) => (
            <>
              {!obj.isAction &&
              obj.permission === "Initial Nursing Assessment" ? (
                <>
                  <CommonButton
                    type="button"
                    label="Initial Nursing Assessment"
                    className="otherButton bg-[#E9CFEC] "
                    onClick={() => {
                      if (selectedPatientInfo) {
                        handleOpenInitialNursing();
                      } else {
                        warningAlert("Please Select Patient...!");
                      }
                    }}
                  />
                </>
              ) : null}
            </>
          ))}
        </div>
        {openCareNPostionModal ? (
          <CareNPosition
            patientInfo={patientInfo}
            open={openCareNPostionModal}
            handleClose={handleCloseCareNPostionModal}
            actions={props.actions}
          />
        ) : null}
        {openMedicationErrorModal ? (
          <MedicationErrorRepModal
            patientInfo={patientInfo}
            open={openMedicationErrorModal}
            handleClose={handleCloseMedicationErrorModal}
            actions={props.actions}
          />
        ) : null}
        {/* {openPhlebitiesModal ? (
          <PhlebitiesScoreModal
            open={openPhlebitiesModal}
            patientInformation={props.patientInformation}
            setOpen={setOpenPhlebitiesModal}
            handleOpen={handleOpenPhlebitiesModal}
            handleClose={handleClosePhlebitiesModal}
            selectedPatient={props.selectedPatient}
            actions={props.actions}
          />
        ) : null} */}
        {/* {openInitialNursingModal ? (
          <InitialNursingModal
            open={openInitialNursingModal}
            patientInformation={props.patientInformation}
            setOpenInitialNursingModal={setOpenInitialNursingModal}
            handleOpen={handleOpenInitialNursing}
            handleClose={handleCloseInitialNursing}
            selectedPatient={props.selectedPatient}
            actions={props.actions}
          />
        ) : null} */}
      </form>
      <ConfirmationModal
        confirmationOpen={openPost}
        confirmationHandleClose={handleClosePost}
        confirmationSubmitFunc={addRecord}
        confirmationLabel="Confirmation"
        confirmationMsg="Are you sure want to add this record ?"
        confirmationButtonMsg="Add"
      />

      {/* DELETE Confirmation  */}
      {/* <ConfirmationModal
        confirmationOpen={deleteConfirm}
        confirmationHandleClose={handleCloseDelete}
        confirmationSubmitFunc={deleteRecord}
        confirmationLabel="Confirmation "
        confirmationMsg="Are you sure want to delete this record ?"
        confirmationButtonMsg="Delete"
      /> */}
    </div>
  );
}

