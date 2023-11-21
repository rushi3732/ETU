import { Box, Modal } from "@mui/material";
import React from "react";
import CancelPresentationIconButton from "../../Common Components/Buttons/CancelPresentationIconButton";
import SearchBar from "../../Common Components/FormFields/SearchBar";
import CommonButton from "../../Common Components/commonbutton/CommonButton";
import CommonTransactionTable from "../../Common Components/CommonTable/CommonTransactionTable";
import { ModalStyle } from "../../Common Components/ModalStyle";

const ModalComponent = ({
  isModalOpen,
  closeModal,
  dataArray,
  placeholder,
  isClearable,
  label,
  handleInputChange,
  onChange,
  inputRef,
  handleSearchClick,
  dataResult,
  renderInput,
  modalTitle,
}) => {
  return (
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
        <div className="flex justify-between items-center">
          <div className="flex font-bold justify-start -mt-4">{modalTitle}</div>
          <div>
            <CancelPresentationIconButton onClick={closeModal} />
          </div>
        </div>
        <div className="-mr-2">
          <div className="flex justify-between items-center gap-2 mt-2">
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
          <div className="ml-1 mt-2">
            <CommonTransactionTable
              dataResult={dataResult}
              removeHeaders={["id"]}
              renderInput={renderInput}
              highlightRow={false}
              rowBackgroundColor={(row, index) =>
                index % 2 === 0 ? "bg-gray-300" : "bg-white"
              }
              handleSelectedRow={(row, index) => {
                console.log("Selected Row:", row, "Index:", index);
              }}
              editableColumns={["markCommon"]}
              SelectCheckbox={true}
            />
          </div>
          <div className="flex justify-end mt-2">
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
  );
};

export default ModalComponent;
