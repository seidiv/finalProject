import React, { Component } from "react";
import { withAlert } from "react-alert";
import { Link } from "react-router-dom";
class RegisterMainboard extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    description: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, email, password, password2, description } = this.state;

    return (
      <div>
        <div className="col-md-6 m-auto">
          <div className="card card-body mt-5">
            <h2 className="text-center">Register</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  placeholder="username"
                  type="text"
                  className="tc pa3 ba b--green bg-lightest-blue form-control"
                  name="username"
                  onChange={this.onChange}
                  value={username}
                />
              </div>
              <div className="form-group lg">
                <label>Email</label>
                <input
                  placeholder="email"
                  type="email"
                  className="tc pa3 ba b--green bg-lightest-blue form-control"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  placeholder="password"
                  type="password"
                  className="tc pa3 ba b--green bg-lightest-blue form-control"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  placeholder="confirm password"
                  type="password"
                  className="tc pa3 ba b--green bg-lightest-blue form-control"
                  name="password2"
                  onChange={this.onChange}
                  value={password2}
                />
              </div>
              <div className="tc form-group">
                <label>description</label>
                <textarea 
                  placeholder="write a few words for describing the mainboard"
                  type="text"
                  className="tc pa3 ba b--green bg-lightest-blue form-control"
                  name="description"
                  rows="3"
                  cols="50"
                  onChange={this.onChange}
                  value={description}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert()(RegisterMainboard);
