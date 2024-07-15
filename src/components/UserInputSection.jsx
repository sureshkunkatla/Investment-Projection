import React from "react";

const UserInputSection = ({ inputObj, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INTIAL INVESTMENT</label>
          <input
            type={"number"}
            value={inputObj.initialInvestment}
            onChange={(e) =>
              onChange("initialInvestment", parseInt(e.target.value))
            }
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type={"number"}
            value={inputObj.annualInvestment}
            onChange={(e) =>
              onChange("annualInvestment", parseInt(e.target.value))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type={"number"}
            value={inputObj.expectedReturn}
            onChange={(e) =>
              onChange("expectedReturn", parseInt(e.target.value))
            }
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type={"number"}
            value={inputObj.duration}
            onChange={(e) => onChange("duration", parseInt(e.target.value))}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInputSection;
