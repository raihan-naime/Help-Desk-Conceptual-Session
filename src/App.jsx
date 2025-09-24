import React, { Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";

import Cards from "./Components/Cards/Cards";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";

// fetch data
const fetchData = async ()=>{
  const res = await fetch('/data.json');
  return res.json();
}
// const boxesData = (allData)=>{
//   return allData;
// }
// const totalData = boxesData()

const App = () => {
  const cardPromise = fetchData();
  
  // const [statusData, setStatusData] = useState(totalData);
  // console.log(statusData);
  
  return (
    <>
      <Navbar />

      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
      <Cards cardPromise={cardPromise}></Cards>
      </Suspense>

    </>
  );
};

export default App;
