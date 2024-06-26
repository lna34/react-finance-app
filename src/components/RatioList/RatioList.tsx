import React from "react";
import "./RatioList.css";
import { TestDataCompany } from "../Table/TestData";

interface Props {
  config: any;
  data: any;
}

const RatioList = ({ config, data }: Props) => {
  const renderedRow = config.map((row: any) => {
    return (
      <li className="ratioListelement">
        <div className="ratioListContainer">
          <div>{row.label}</div>
          <div>{row.subtitle}</div>
        </div>
        <div>{row.render(data)}</div>
      </li>
    );
  });
  return (
    <div className="container">
      <ul>{renderedRow}</ul>
    </div>
  );
};

export default RatioList;
