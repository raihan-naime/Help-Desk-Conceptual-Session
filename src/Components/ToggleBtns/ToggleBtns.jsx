import React from "react";
import Container from "../Container/Container";

const ToggleBtns = ({ toggleBtns, setToggleBtns }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];
  return (
    <>
      <Container>
        <div className="text-right my-5">
          {btns.map((btn, ind) => (
            <button key={ind}
              onClick={() => {
                setToggleBtns(btn);
              }}
              className={`toggle-btn ${
                ind === 0
                  ? "rounded-l-md"
                  : ind === btns.length - 1
                  ? "rounded-r-md"
                  : ""
              } ${toggleBtns === btn ? "!bg-purple-600 !text-white" : ""}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ToggleBtns;
