import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    //console.log("Child Constructor loaded");
    super(props);
    this.state =  {
      userInfo : {
        name: 'Dummy',
        location: 'India'
      } 
    };
    //console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child Component Did Mount loaded");
    // API Call
    const data = await fetch("https://api.github.com/users/KishoreKumarBurra");
    const json = await data.json();

    console.log('GitHub API=', json);
    this.setState({
      userInfo: json,
    })
  }

  componentDidUpdate () {
    console.log('Calling Component Did Update');
  }

  componentWillUnmount() {
    console.log('Calling Component Will Mount--')
  }

  render() {
    //console.log(this.props.name + "Child Render loaded");
    const { name, location, contact } = this.state.userInfo;
    //const { count, count2 } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <h1>Count2: {count2}</h1> */}
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
