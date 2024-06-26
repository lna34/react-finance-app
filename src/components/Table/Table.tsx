import React from "react";
import "./Table.css";
import { testIncomeStatementData } from "./TestData";

const data = testIncomeStatementData;

interface Props {
  configs: any;
  data: any;
}

const Table = ({ configs, data }: Props) => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr key={company.cik}>
        {configs.map((val: any) => {
          return <td className="tableDataCell">{val.render(company)}</td>;
        })}
      </tr>
    );
  });
  const renderedHeaders = configs.map((config: any) => {
    return (
      <th key={config.label} className="tableHeader">
        {config.label}
      </th>
    );
  });

  return (
    <div className="tableContainer">
      <table>
        <thead className="tableHead">{renderedHeaders}</thead>
        <tbody className="tableBody">{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
