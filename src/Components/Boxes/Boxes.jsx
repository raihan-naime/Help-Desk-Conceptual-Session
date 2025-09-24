import React from "react";
import Container from "../Container/Container";

const Boxes = ({ data }) => {
  const pendingData = data.filter((user) => user.status === "Pending");
  const submittedData = data.filter((user) => user.status === "Submitted");
  const reviewedData = data.filter((user) => user.status === "Reviewed");

  return (
    <>
      <Container>
        <div className="grid grid-cols-3 gap-5 my-10">
          <div className="box bg-purple-500">
            <h2 className="boxHeading ">Pending</h2>
            <p className="boxNumber">{pendingData.length}</p>
          </div>
          <div className="box bg-slate-500">
            <h2 className="boxHeading ">Submitted</h2>
            <p className="boxNumber">{submittedData.length}</p>
          </div>
          <div className="box bg-green-500">
            <h2 className="boxHeading ">Reviewed</h2>
            <p className="boxNumber">{reviewedData.length}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Boxes;
