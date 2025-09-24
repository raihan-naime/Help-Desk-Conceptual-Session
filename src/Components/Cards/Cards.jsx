import React, { use, useState } from "react";
import Card from "./Card";
import Container from "../Container/Container";
import ToggleBtns from "../ToggleBtns/ToggleBtns";
import Boxes from "../Boxes/Boxes";

const Cards = ({ cardPromise }) => {
  const [toggleBtns, setToggleBtns] = useState("All");
  const users = use(cardPromise);
  const [data, setData] = useState(users);

  const filteredData = toggleBtns === 'All'? data: data.filter((data) => data.status === toggleBtns);
//   console.log(filteredData);

  return (
    <Container>
      <Boxes data={data} />
      <ToggleBtns toggleBtns={toggleBtns} setToggleBtns={setToggleBtns} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredData.length === 0 ? <h1 className="flex items-center justify-center p-10 text-3xl bg-purple-200 text-purple-600 font-bold">NO Data</h1> : filteredData.map((user, ind) => (
          <Card key={ind} data={data} setData={setData} user={user}></Card>
        ))}
      </div>
    </Container>
  );
};

export default Cards;
