import React, { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";

export const ViewCart = () => {
  const form = useRef();

  const [allItems, setAllItems] = useState([]);
  const [finalItems, setFinalItems] = useState([]);

  const handleAdd = (id) => {
    allItems.forEach((data) => {
      if (data.id === id) {
        setAllItems([...allItems, data]);
      }
    });
    localStorage.setItem("cart", JSON.stringify(allItems));
  };

  const deleteSeed = (id) => {
    let totalItem = [],
      flag = true;
    allItems.forEach((data) => {
      if (data.id == id && flag) {
        flag = false;
      } else {
        totalItem = [...totalItem, data];
      }
    });
    setAllItems(totalItem);
    localStorage.setItem("cart", JSON.stringify(totalItem));
  };

  const removeDuplicates = (arr) => {
    const uniqueItems = Array.from(new Set(arr.map(JSON.stringify))).map(
      JSON.parse
    );
    return uniqueItems;
  };

  const totalquantity = (id) => {
    let total = 0;
    allItems.forEach((data) => {
      if (data.id === id) {
        total++;
      }
    });
    return total;
  };

  const totalCost = (id) => {
    let cost;
    allItems.forEach((data) => {
      if (data.id === id) {
        cost = data.cost;
      }
    });
    return totalquantity(id) * cost;
  };

  const overallCostOfCart = () => {
    let cost = 0;
    allItems.forEach((data) => {
      cost += totalCost(data.id);
    });
    return cost;
  };

  const getAllItemsDetails = () => {
    const header = "Sl-Name-Qty-Cost";
    const itemDetails = removeDuplicates(allItems)
      .map((item, index) => {
        const slNo = index + 1;
        const itemName = item.name;
        const quantity = totalquantity(item.id);
        const cost = totalCost(item.id);
        return `${slNo}-${itemName}-${quantity}-${cost}`;
      })
      .join("\n");

    const totalCostString = `TOTAL COST => ${overallCostOfCart()}`;

    return `${header}\n${itemDetails}\n${totalCostString}`;
  };

  console.log(getAllItemsDetails());

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    emailjs
      .sendForm(
        "service_ohtyzmq",
        "template_ingc6ze",
        form.current,
        "WrUZpU19S55_uYEjN"
      )
      .then(
        (result) => {
          alert('Order Placed, Thank You');
          console.log(result.text);
        },
        (error) => {
          alert('Something went wrong');
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    let totalData = JSON.parse(localStorage.getItem("cart"));
    // const uniqueItems = Array.from(new Set(totalData.map(JSON.stringify))).map(JSON.parse);
    setAllItems(totalData);
  }, []);

  return (
    <div>
      <div style={{ padding: "10px" }}>
        <div
          style={{
            borderRadius: "5px",
            boxShadow: "0px 0px 16px #4443403D",
            padding: "15px",
          }}
        >
          {allItems.length > 0 ? (
            <table style={{ width: "100%" }}>
              <thead>
                <tr style={{ fontWeight: "bold" }}>
                  <td>SL</td>
                  <td>Name</td>
                  <td>No's</td>
                  <td>Cost</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {removeDuplicates(allItems).map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data?.name}</td>
                    <td>{totalquantity(data.id)}</td>
                    <td>{totalCost(data.id)}</td>
                    <td>
                      <button
                        style={{ backgroundColor: "orange" }}
                        onClick={() => handleAdd(data?.id)}
                      >
                        +
                      </button>{" "}
                      &nbsp;&nbsp;
                      <button
                        style={{ backgroundColor: "red" }}
                        onClick={() => deleteSeed(data?.id)}
                      >
                        -
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3>Selected Items will be displayed here</h3>
          )}
          <div
            style={{
              display: "flex",
              padding: "20px 0px 0px 0px",
              fontWeight: "bold",
            }}
          >
            <div style={{ display: "flex" }}>
              Total Cost:{" "}
              <div style={{ fontSize: "18px", textIndent: "12px" }}>
                {overallCostOfCart()}
              </div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <form ref={form} onSubmit={sendEmail}>
                <textarea
                  name="message"
                  value={getAllItemsDetails()}
                  style={{ display: "none" }}
                />
                <input
                  type="submit"
                  value="Order"
                  style={{
                    backgroundColor: "black",
                    height: "30px",
                    width: "100px",
                    borderRadius: "4px",
                    color: "white",
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
