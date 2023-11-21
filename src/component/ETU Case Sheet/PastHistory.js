import React, { useState } from "react";
import InputField from "../../Common Components/FormFields/InputField";
import CheckBoxField from "../../Common Components/FormFields/CheckBoxField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm} from "react-hook-form";

const schemaPastHistory = yup.object().shape({
  dm: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  htn: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  heartDisease: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  tb: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  copd: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  asthma: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  liver: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
  other: yup.object().shape({
    checked: yup.boolean(),
    description: yup.string(),
  }),
});

const PastHistory = (props) => {
  const { setPastHistory } = props;
  const { control, register, setValue } = useForm({
    resolver: yupResolver(schemaPastHistory),
  });

  const [dataObject, setDataObject] = useState([
    { label: "DM", checked: false, description: "" },
    { label: "HTN", checked: true, description: "" },
    { label: "Heart Disease", checked: false, description: "" },
    { label: "TB", checked: false, description: "" },
    { label: "COPD", checked: false, description: "" },
    { label: "Asthma", checked: false, description: "" },
    { label: "Liver", checked: false, description: "" },
    { label: "Other", checked: false, description: "" },
  ]);

  console.log("dataObject123", dataObject);

  return (
    <div className="w-full">
      <div className="rounded border">
        <div className="bg-[#CFFAFE]  p-[7px] border shadow-md">
          <div className="text-sm font-semibold w-full ml-2">Past History</div>
        </div>
        <div className="border shadow-md p-2 bg-white">
          <div className="mb-2">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:mb-2 sm:mb-2 xs:mb-2 gap-1 text-xs w-full">
                {dataObject?.map((property, index) => (
                  <div
                    className="flex items-center justify-between whitespace-nowrap"
                    key={index}
                  >
                    <label className="cursor-pointer flex items-center">
                      <div className="w-4 m-2">
                        <fieldset
                          onChange={(e) => {
                            let tempData = [...dataObject];
                            tempData[index].checked = e.target.checked;
                            setDataObject(tempData);
                            if (e.target.checked === false) {
                              setValue(`description${index}`, "");
                            }
                            setPastHistory(tempData);
                          }}
                        >
                          <CheckBoxField
                            name={`check${index}`}
                            label={property?.label}
                            control={control}
                            defaultValue={property?.checked}
                          />
                        </fieldset>
                      </div>
                      <div className="w-28"></div>
                    </label>
                    {property?.checked && (
                      <div className="w-full lg:w-44 md:w-40 sm:w-40 gap-2">
                        <InputField
                          name={`description${index}`}
                          label="Description"
                          type="text"
                          control={control}
                          defaultValue={property?.description}
                          inputRef={{
                            ...register(`description${index}`, {
                              onChange: (e) => {
                                let tempData = [...dataObject];
                                tempData[index].description = e.target.value;
                                setDataObject(tempData);
                                setPastHistory(tempData);
                              },
                            }),
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastHistory;
