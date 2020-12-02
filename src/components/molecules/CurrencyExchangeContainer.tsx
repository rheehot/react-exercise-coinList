import React from "react";
import styled from "styled-components";
import CurrencyExchangeBox from "../atoms/CurrencyExchangeBox";
import mixin from "styles/mixin";
import mainSvg from "svgs";

interface IProps {
  currencyOption: string;
  currentPrice: number;
  cyptoCurrency: number | string;
  exchangeResultPrice: number;
  onChangeCyptoCurrency: (num: string | number) => void;
  onChangeExchangeResultPrice: (num: string | number) => void;
}

export const CurrencyExchangeContainer: React.FC<IProps> = ({
  currencyOption,
  currentPrice,
  cyptoCurrency,
  exchangeResultPrice,
  onChangeCyptoCurrency,
  onChangeExchangeResultPrice,
}) => {
  const newPrice =
    typeof cyptoCurrency === "number"
      ? currentPrice * cyptoCurrency
      : currentPrice * 1;

  return (
    <STDContainer>
      <CurrencyExchangeBox
        currency={"BTC"}
        price={cyptoCurrency.toLocaleString(undefined, {
          maximumFractionDigits: 8,
        })}
        onChangeHandler={onChangeCyptoCurrency}
      />
      {mainSvg.exchnageArrow}
      <CurrencyExchangeBox
        currency={currencyOption.toUpperCase()}
        price={newPrice.toLocaleString()}
        onChangeHandler={onChangeExchangeResultPrice}
      />
    </STDContainer>
  );
};

const STDContainer = styled.div`
  ${mixin.flexSet()}
  width: 100%;
  padding: 40px 0;
  background-color: #dddddd;
  margin-bottom: 10px;

  svg {
    width: 40px;
    height: 40px;
    font-weight: 500;
    margin: 0 10px;
  }
`;
