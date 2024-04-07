import { useState } from "react";

const User = ({ name }) => {
  console.log(name);

  const [count] = useState(0);
  const [count1] = useState(1);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count1 = {count1}</h1>
      <h3>Name: {name}</h3>
      <h4>Location: Hyderabad</h4>
      <h4>Contact: @kishore</h4>
    </div>
  );
};

export default User;
