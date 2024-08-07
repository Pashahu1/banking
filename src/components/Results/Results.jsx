import {calculateInvestmentResults, formatter} from "../../util/investment.js";

export default function Results({input}) {
    const resultData = calculateInvestmentResults(input)
    const initialInvestmentResults = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

  return (
      <table id='result'>
          <thead>
          <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
          </tr>
          </thead>
          <tbody>
            {resultData.map(yearDate => {
                const totalInterest =
                    yearDate.valueEndOfYear -
                    yearDate.annualInvestment *
                    yearDate.year -
                    initialInvestmentResults;
                const totalAmountInvested = yearDate.valueEndOfYear - totalInterest;

                return (
                    <tr key={yearDate.year}>
                        <td>{yearDate.year}</td>
                        <td>{formatter.format(yearDate.valueEndOfYear)}</td>
                        <td>{formatter.format(yearDate.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                )
            })}
          </tbody>
      </table>
  )
}