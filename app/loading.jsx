import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const loading = () => {
  return (
    <div className="w-full fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black ">
      <div>
        <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default loading;
