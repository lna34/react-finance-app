import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../types/companySearch";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../components/Dashboard/Dashboard";
import "./CompanyPage.css";
interface Props {}
const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfile = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfile();
  }, []);

  return (
    <div className="companyPage">
      <Sidebar />
      {company ? <Dashboard ticker={ticker!} /> : <div>Company not found</div>}
    </div>
  );
};

export default CompanyPage;
