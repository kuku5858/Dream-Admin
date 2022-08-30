import React, { useEffect, useState } from "react";
import "./widgetTwo.css";
import { userReq } from "../../requestMethod";

export default function WidgetTwo() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const displayOrders = async () => {
      try {
        const res = await userReq.get("orders");
        setOrders(res.data);
        // console.log(`res: ${res.data}`)
      } catch {}
    };
    displayOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"wt__btn " + type}>{type}</button>;
  };
  return (
    <div className="widgettwo__container">
      <h3 className="widgettwo__title">Transactions</h3>
      <table className="wt__table">
        <thead>
          <tr className="wt__tr">
            <th className="wt__th">Customer</th>
            <th className="wt__th">Date</th>
            <th className="wt__th">Amount</th>
            <th className="wt__th">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr className="wt__tr" key={order._id}>
              <td className="wt__td">
                <span className="wtuser__name">{order.userId}</span>
              </td>
              <td className="wt__date">{order.createdAt}</td>
              <td className="wt__amount">${order.amount}</td>
              <td className="wt__status">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>

        {/* <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="wtuser__avatar"
            /> */}
      </table>
    </div>
  );
}
