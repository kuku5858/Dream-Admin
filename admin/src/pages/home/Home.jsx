import React, { useState, useMemo, useEffect } from "react";
import GeneralInfo from "../../components/generalInfo/GeneralInfo";
import Chart from "../../components/chart/Chart";
import WidgetOne from "../../components/widgetOne/WidgetOne";
import WidgetTwo from "../../components/widgetTwo/WidgetTwo";

import "./home.css";
import { userReq } from "../../requestMethod";
import { data } from "../../data";

export default function Home() {
  const { totalUser, setTotalUser } = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getTotal = async () => {
      try {
        const res = await userReq.get("/users/total");
        console.log(`res: ${res.data[0]}`)
        res.data.map((item) =>
          {
            setTotalUser((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "activeUser": item.total },
          ])
        }
        );
      } catch {}
    };
    getTotal();
  }, [MONTHS]);

  console.log(`Total: ${totalUser}`);
  return (
    <div className="home__container">
      <GeneralInfo />
      <div className="home__chart">
        <Chart
          data={data}
          title={"User Analytics"}
          grid
          dataKey={"activeUser"}
        />
      </div>

      <div className="home__widgets">
        <WidgetOne />
        <WidgetTwo />
      </div>
    </div>
  );
}
