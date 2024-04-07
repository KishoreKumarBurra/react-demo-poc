import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor loaded");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount Loaded");
  }

  render() {
    console.log("Parent Render loaded");
    return (
      <div>
        <h1> About </h1>
        <h2>Namaster React Web Series</h2>
        <UserClass
          name={"Kishore Kumar (Class)"}
          location={"Hyderabad"}
          contact={"@kishore"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//         <h1> About </h1>
//         <h2>Namaster React Web Series</h2>
//         <User name={"Kishore Kumar (Functional)"}/>
//         <UserClass name={"Kishore Kumar (Class)"} location={"Hyderabad"} contact={"@kishore"}/>
//     </div>
//   );
// };

export default About;
