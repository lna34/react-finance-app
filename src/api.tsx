import axios from "axios";
import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyProfile,
  CompanySearch,
} from "./types/companySearch";

interface SearchResponse {
  data: CompanySearch[];
}

const apiBaseUrl = "https://financialmodelingprep.com/api/v3";

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `${apiBaseUrl}/search?query=${query}&apikey=${
        import.meta.env.VITE_FINANCE_API_KEY
      }`
    );
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log(err.message);
      return err.message;
    } else {
      console.log("Unexpected error", err);
      return "An unexpected error occured";
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `${apiBaseUrl}/profile/${query}?apikey=${
        import.meta.env.VITE_FINANCE_API_KEY
      }`
    );
    console.log(query);
    console.log(data);
    return data;
  } catch (err) {
    console.log("Unexpected error", err);
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `${apiBaseUrl}/key-metrics-ttm/${query}?apikey=${
        import.meta.env.VITE_FINANCE_API_KEY
      }`
    );
    return data;
  } catch (err) {
    console.log("Unexpected error", err);
  }
};
export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `${apiBaseUrl}/income-statement/${query}?limit=40&apikey=${
        import.meta.env.VITE_FINANCE_API_KEY
      }`
    );
    return data;
  } catch (err) {
    console.log("Unexpected error", err);
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `${apiBaseUrl}/balance-sheet-statement/${query}?limit=40&apikey=${
        import.meta.env.VITE_FINANCE_API_KEY
      }`
    );
    return data;
  } catch (err) {
    console.log("Unexpected error", err);
  }
};

export const getCashFlow = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `${apiBaseUrl}/cash-flow-statement/${query}?limit=40&apikey=${
        import.meta.env.VITE_FINANCE_API_KEY
      }`
    );
    return data;
  } catch (err) {
    console.log("Unexpected error", err);
  }
};
