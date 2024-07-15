import InvestmentLogo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <div id="header">
      <img src={InvestmentLogo} alt={"Investment logo"} />
      <h1>Investment Calculator</h1>
    </div>
  );
};

export default Header;
