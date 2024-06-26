import React from "react";
import Table from "../../components/Table/Table";
import RatioList from "../../components/RatioList/RatioList";
import { CompanyKeyMetrics } from "../../types/companySearch";
import { testIncomeStatementData } from "../../components/Table/TestData";

type Props = {};
const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
  },
];
const DesignPage = (props: Props) => {
  return (
    <>
      <h1>Design page</h1>
      <h2>Exemples de designs</h2>
      <Table data={testIncomeStatementData} configs={tableConfig} />
      <RatioList data={testIncomeStatementData} config={tableConfig} />
    </>
  );
};
export default DesignPage;
