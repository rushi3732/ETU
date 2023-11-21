import { Tooltip } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import InputField from "../../Common Components/FormFields/InputField";
import { useFormContext } from "react-hook-form";
import { ViewIcon } from "../../Common Components/assets/commonassets/CommonAssets";

const Vitals = ({}) => {
  const { control, watch, errors, setValue } = useFormContext();
  const patientVitals = [
    {
      name: "temp",
      unit: "°F",
      value: "",
    },
    {
      name: "pulserate",
      unit: "bpm",
      value: "",
    },
    {
      name: "bpsystolic",
      unit: "mmHg",
      value: "",
    },
    {
      name: "bpdiastolic",
      unit: "mmHg",
      value: "",
    },
    {
      name: "spo",
      unit: "%",
      value: "",
    },
    {
      name: "weight",
      unit: "kg",
      value: "",
    },
    {
      name: "height",
      unit: "cm",
      value: "",
    },
    {
      name: "bmi",
      unit: "kg/m2",
      value: "",
    },
    {
      name: "respiration",
      unit: "bpm",
      value: "",
    },
    {
      name: "bsl",
      unit: "cm",
      value: "",
    },
  ];

  return (
    <div>
      <div className="rounded border  shadow-md">
        <div className="bg-[#FFD4E3]  p-[7px] border ">
          <div className="flex justify-between">
            <div className="text-sm font-semibold w-full ml-2 ">Vitals</div>
            <Tooltip title="View" placement="left" arrow>
              <button className="text-blue-500 mr-1 flex justify-end">
                <ViewIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="border shadow-md p-2 bg-white">
          <div className="flex justify-between mb-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full mt-2 ">
              {patientVitals.map((vital, index) => (
                <div key={index} className="flex justify-between  mb-2">
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
                    <InputField
                      key={index}
                      label={vital.name}
                      name={vital.name}
                      variant="outlined"
                      type="number"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitals;
