import React from "react";
import { ClipLoader } from "react-spinners";
import "./Spinner.css";
interface Props {
  isLoading?: boolean;
}

const Spinner = ({ isLoading = true }: Props) => {
  return (
    <div className="loading-spinner">
      <ClipLoader loading={isLoading} size={35} />
    </div>
  );
};

export default Spinner;
