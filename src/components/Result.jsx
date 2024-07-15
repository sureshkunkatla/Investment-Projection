import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ inputObj }) => {
  const getAnnualData = calculateInvestmentResults(inputObj);
  const intialInvestment =
    getAnnualData[0].valueEndOfYear -
    getAnnualData[0].interest -
    getAnnualData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Captial</th>
        </tr>
      </thead>
      <tbody>
        {getAnnualData.map((eachItem) => {
          const totalInterest =
            eachItem.valueEndOfYear -
            eachItem.annualInvestment * eachItem.year -
            intialInvestment;

          const investedCaptial =
            intialInvestment + eachItem.annualInvestment * eachItem.year;
          return (
            <tr key={eachItem.year}>
              <td>{eachItem.year}</td>
              <td>{formatter.format(eachItem.valueEndOfYear)}</td>
              <td>{formatter.format(eachItem.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCaptial)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
