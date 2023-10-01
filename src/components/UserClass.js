import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      info: {},
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      console.log("react op");
    }, 1000);

    // const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // const json = await result.json();
    // this.setState({
    //   info: json,
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    console.log("component did update is called");
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { userId, id, title, completed } = this.state.info;
    return (
      <div className="user-card">
        <h4>Count : {this.state.count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increment
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          count decrement
        </button>
        <h3>Name : {this.props.name}</h3>
        <h3>Location: location</h3>
        <h3>Contact: contact</h3>
        <h4>userId: {userId}</h4>
        <h4>id: {id}</h4>
        <h4>title: {title}</h4>
        <h4>{completed}</h4>
      </div>
    );
  }
}

export default UserClass;
