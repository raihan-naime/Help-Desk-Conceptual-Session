import React from "react";

const Card = ({ user, data, setData }) => {
  const handleClick = () => {
    const currentData = data.find(
      (element) => element.ticketId === user.ticketId
    );

    if(currentData.status === 'Pending'){
        currentData.status = 'Submitted'
    }else if(currentData.status === 'Submitted'){
        currentData.status = 'Reviewed'
    }


    const restData = data.filter(
      (element) => element.ticketId !== user.ticketId
    );
    console.log(currentData, restData);
    setData([currentData, ...restData])
  };
  return (
    <div onClick={handleClick} className="bg-slate-200 rounded-md p-5">
      <img
        className="h-25 w-25 rounded-full"
        src={user.userImg}
        title={user.requestedBy}
        alt={user.requestedBy}
      />
      <h1 className="text-xl font-semibold">{user.requestedBy}</h1>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold ">{user.subject}</h2>
        <div className="flex items-center gap-3">
          <span
            className={`${
              user.priority === "High"
                ? "bg-green-100 text-green-500"
                : user.priority === "Medium"
                ? "bg-red-100 text-red-500"
                : "bg-yellow-100 text-yellow-500"
            } py-2 px-3 text-xl rounded-md`}
          >
            {user.priority}
          </span>
          <span
            className={`${
              user.status === "Pending"
                ? "bg-green-100 text-green-500"
                : user.status === "Reviewed"
                ? "bg-red-100 text-red-500"
                : "bg-yellow-100 text-yellow-500"
            } py-2 px-3 text-xl rounded-md`}
          >
            {user.status}
          </span>
        </div>
      </div>
      <p>{user.description}</p>
    </div>
  );
};

export default Card;
