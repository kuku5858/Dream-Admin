import React, { useEffect, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "./generalInfo.css";
import { userReq } from "../../requestMethod";

export default function GeneralInfo() {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userReq.get("orders/status");
        setIncome(res.data);
        if (res.data.length > 1) {
          setPercentage(
            (res.data[res.data.length - 1].total * 100) /
              res.data[res.data.length - 2].total -
              100
          );
        } else if (res.data.length === 1) {
          setPercentage(100);
        } else {
          setPercentage(0);
        }
      } catch {}
    };
    getIncome();
  }, []);

  console.log(income);

  return (
    <div className="generalinfo__conatainer">
      <div className="generalinfo__items">
        <span className="generalinfo__title">Revenue</span>
        <div className="money__container">
          <span className="money">${income.length >= 1 && income[income.length - 1].total}</span>
          <span className="rate">
            {percentage < 0 ? (
              <ArrowDownwardIcon className="general__icons down" />
            ) : (
              <ArrowUpwardIcon className="general__icons" />
            )}
            {Math.floor(percentage)}%
          </span>
        </div>
        <span className="general__info">Compared to last month</span>
      </div>

      <div className="generalinfo__items">
        <span className="generalinfo__title">Sales</span>
        <div className="money__container">
          <span className="money">$1,000</span>
          <span className="rate">
            <ArrowUpwardIcon className="general__icons" />
            5.3
          </span>
        </div>
        <span className="general__info">Compared to last month</span>
      </div>

      <div className="generalinfo__items">
        <span className="generalinfo__title">Income</span>
        <div className="money__container">
          <span className="money">$1,000</span>
          <span className="rate">
            <ArrowDownwardIcon className="general__icons down" />
            -2.3
          </span>
        </div>
        <span className="general__info">Compared to last month</span>
      </div>
    </div>
  );
}
