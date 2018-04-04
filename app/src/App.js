import React, { Component } from "react";
import "./App.css";
import * as Api from "./api";

class App extends Component {
  state = {
    status: false,
    response: false
  }
  verifyPalindrome = () => {
    const data = this.data.value;
    if (!data) {
      return alert("Please type a text");
    }

    Api.verifyPalindromeApi(data).then(response => {
      if (response) {
        return this.setState({ status: true, response: true });
      }
      return this.setState({ status: false, response: true });
    });
  };

  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">Palindrome Test</h1>
        </header>
        <div className="content row">
          <div className="col-md-6 col-md-offset-3">
            <label>Verify if your text is a Palindrome</label>
            <input type="text" ref={v => (this.data = v)} className="form-control" placeholder="Type your text" />
            <button className="btn btn-primary" onClick={this.verifyPalindrome}>
              Verify Now
            </button>
          </div>
          <div className="content">
            {this.state.response && this.state.status && <div className="alert alert-success">
                  IS A PALINDROME
                </div>}
            {this.state.response && !this.state.status && <div className="alert alert-danger">
                  IS NOT A PALINDROME
                </div>}
          </div>
        </div>
      </div>;
  }
}

export default App;
