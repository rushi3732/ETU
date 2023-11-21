import React, { useEffect, useState } from "react";
import { useFieldArray, useForm, useFormContext } from "react-hook-form";

// import {
//   getDepartment,
//   getDoctors,
// } from "../../../services/IpdEmr/IpdEmrServices";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Card, CardContent, TableContainer } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SearchDropdown from "../../Common Components/FormFields/searchDropdown";
import InputField from "../../Common Components/FormFields/InputField";
import CheckBoxField from "../../Common Components/FormFields/CheckBoxField";

const DoctorDepartmentDetails = () => {
  const [departmentDoctorList, setDepartmentDoctorList] = useState([]);
  const [departmentList, setDepartmentList] = useState([
    { id: 1, value: "Purchase", label: "Purchase" },
    { id: 2, value: "Clinical", label: "Clinical" },
  ]);
  const [doctorList, setDoctorList] = useState([
    { id: 1, value: "Satish Mane", label: "Satish Mane" },
    { id: 2, value: "Pooja Patil", label: "Pooja Patil" },
  ]);
  const [departmentId, setDepartmentId] = useState(null);
  const [doctorId, setDoctorId] = useState(null);
  const [errorDoctorDetails, setErrorDoctorDetails] =
    React.useState("invisible");
  const [doctorDataArr, setDoctorDataArr] = useState([]);
  const [duplicate, setDuplicate] = useState(false);

  console.log("departmentDoctorList123", departmentDoctorList);
  let schema = yup.object().shape({
    doctorDetails: yup.array().of(
      yup.object().shape({
        department: yup
          .object()
          .nullable()
          .shape({
            value: yup.string().required("Please Select Department"),
            label: yup.string().required("Please Select Department"),
          })
          .required("Please Select Department"),

        doctor: yup
          .object()
          .nullable()
          .when("department", (department) => {
            if (department !== null) {
              return yup
                .object()
                .nullable()
                .shape({
                  value: yup.string().required("Please Select Doctor"),
                  label: yup.string().required("Please Select Doctor"),
                })
                .required("Please Select Doctor");
            }
          })
          .notRequired("Please Select Doctor"),
      })
    ),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
    trigger,
  } = useFormContext({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      doctorDetails: [{ department: null, doctor: null }],
      reference: "",
      otBooked: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "doctorDetails",
  });

  let departmentDetails, doctorsDetail;

  let doctorDetailsData = watch("doctorDetails");

  useEffect(() => {
    console.log("doctorDetailsData", doctorDetailsData);
  }, [doctorDetailsData]);
  useEffect(() => {
    doctorDetailsData.map((item) => {
      console.log("doctorDetailsData", doctorDetailsData);
      departmentDetails = item.department;
      doctorsDetail = item.doctor;
    });
  }, [doctorId]);

  const handleChange = (e) => {
    console.log(e);
  };

  // useEffect(() => {
  //   getDepartment()
  //     .then((response) => {
  //       console.log("response", response.data.result);
  //       setDepartmentList(response.data.result);
  //     })
  //     .catch((response) => {
  //       console.log("Error");
  //     });
  // }, []);

  // useEffect(() => {
  //   if (departmentId !== null) {
  //     getDoctors(departmentId)
  //       .then((response) => {
  //         setDoctorList(response.data.result);
  //       })
  //       .catch((response) => {
  //         console.log("Error");
  //       });
  //   }
  // }, [departmentId]);

  const seen = {};
  const duplicates = [];
  const handleCheckDuplicate = () => {
    for (let i = 0; i < doctorDetailsData.length; i++) {
      const value = JSON.stringify(doctorDetailsData[i]);
      if (seen[value]) {
        duplicates.push(doctorDetailsData[i]);
      } else {
        seen[value] = true;
      }
    }
    console.log("Duplicates", duplicates);
    if (duplicates.length > 0) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  };

  return (
    <div>
      <div className="rounded border bg-white">
        <div className="bg-[#FFD9D4] sticky top-0  p-1 border shadow">
          <div className="text-sm font-semibold w-full ml-2">
            Doctor/Department Details
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
          className="rounded  max-h-64 "
        >
          <div className=" p-2 bg-white">
            <div className="w-full">
              {fields.map((item, index) => {
                return (
                  <div className="grid grid-cols-2 gap-2" key={item.id}>
                    {/* //Department// */}
                    <div className="mb-2">
                      <SearchDropdown
                        control={control}
                        // error={errors.doctorDetails?.[index]?.department}
                        searchIcon={false}
                        name={`doctorDetails[${index}].department`}
                        label="Department"
                        dataArray={departmentList}
                        isSearchable={true}
                        placeholder="Department"
                        // isClearable={true}
                        handleInputChange={handleChange}
                        inputRef={{
                          ...register(`doctorDetails[${index}].department`, {
                            onChange: (e) => {
                              if (e.target.value !== null) {
                                setDepartmentId(e.target.value.id);
                              } else {
                                setDepartmentId(null);
                              }
                              // let tempData = [...departmentDoctorList];
                              // tempData[index].deptId = e.target.value.id;
                              // tempData[index].deptName = e.target.value.label;
                              // setDepartmentDoctorList(tempData);
                            },
                          }),
                        }}
                      />
                    </div>
                    {/* //Doctor// */}
                    <div className="flex w-11/12 mb-2">
                      <div className="w-full">
                        <SearchDropdown
                          control={control}
                          // error={errors.doctorDetails?.[index]?.doctor}
                          searchIcon={false}
                          name={`doctorDetails[${index}].doctor`}
                          label="Doctor"
                          dataArray={doctorList}
                          isSearchable={true}
                          placeholder="Doctor"
                          isClearable={true}
                          handleInputChange={handleChange}
                          inputRef={{
                            ...register(`doctorDetails[${index}].doctor`, {
                              onChange: (e) => {
                                if (e.target.value !== null) {
                                  setDoctorId(e.target.value.value);
                                  doctorDataArr.push(e.target.value.value);
                                  handleCheckDuplicate();
                                  // setDuplicate(isDuplicate);
                                } else {
                                  setDoctorId(null);
                                }
                                // let tempData = [...departmentDoctorList];
                                // tempData[index].docId = e.target.value.id;
                                // tempData[index].docName =
                                //   e.target.value.label;
                                // setDepartmentDoctorList(tempData);
                              },
                            }),
                          }}
                        />
                      </div>
                      <div className="flex mx-2 ">
                        {fields.length !== 1 && (
                          <RemoveOutlinedIcon
                            className="mt-2 rounded-full border-2 border-red-600"
                            onClick={() => {
                              remove(index);
                              doctorDataArr.pop();
                              if (index !== fields.length - 1) {
                                setValue(
                                  `doctorDetails[${index}].department`,
                                  null
                                );
                                setValue(
                                  `doctorDetails[${index}].doctor`,
                                  null
                                );
                              }
                              doctorDetailsData.map((item) => {
                                if (item.internalReferenceDoctor !== "") {
                                  // setDepartment("");
                                }
                              });
                            }}
                          />
                        )}
                        {fields.length - 1 === index && (
                          <AddOutlinedIcon
                            className="mt-2 mx-1  rounded-full border-2 border-cyan-600"
                            onClick={(index) => {
                              let validData = true;
                              let isDuplicate;
                              for (let item of doctorDetailsData) {
                                if (
                                  item.department !== null &&
                                  item.doctor !== null
                                ) {
                                  validData = true;
                                } else {
                                  validData = false;
                                }
                              }
                              handleCheckDuplicate();
                              if (validData && duplicates.length === 0) {
                                append({ department: null, doctor: null });
                              } else {
                                trigger(["doctorDetails"]);
                              }
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              {duplicate ? (
                <p className="text-xs text-red-500">Doctor is Already </p>
              ) : null}

              <div className="grid grid-cols-2 gap-2">
                <InputField
                  name="reference"
                  variant="outlined"
                  label="Reference"
                  error={errors.reference}
                  control={control}
                />
                <div className="w-32">
                  <CheckBoxField
                    control={control}
                    name="otBooked"
                    label="OT Booked"
                  />
                </div>
              </div>
            </div>
          </div>
        </TableContainer>
      </div>
    </div>
  );
};

export default DoctorDepartmentDetails;
