import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: "",
      amountReceived: "",
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      changeDue: "",
      alertSuccess: "alert alert-success text-center hidden",
      alertFail: "alert alert-danger text-center hidden"
    };

    this.updateAmountDue = this.updateAmountDue.bind(this);
    this.updateAmountReceived = this.updateAmountReceived.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  updateAmountDue(e) {
    this.setState({ amountDue: e.target.value });
  }

  updateAmountReceived(e) {
    this.setState({ amountReceived: e.target.value });
  }

  calculate(e) {
    e.preventDefault();
    let twenties = 0;
    let tens = 0;
    let fives = 0;
    let ones = 0;
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    const alertSuccess = "alert alert-success text-center";
    const alertFail = "alert alert-danger text-center";

    let paid = parseFloat(this.state.amountReceived);
    let owed = parseFloat(this.state.amountDue);

    let changeDue = (paid - owed).toFixed(2);
    console.log(changeDue);

    let cents = changeDue * 100;
    console.log(cents);


    // cents calculations
    twenties = Math.floor(cents / 2000);
    cents = cents % 2000;

    tens = Math.floor(cents / 1000);
    cents = cents % 1000;

    fives = Math.floor(cents / 500);
    cents = cents % 500;

    ones = Math.floor(cents / 100);
    cents = cents % 100;

    quarters = Math.floor(cents / 25);
    cents = cents % 25;

    dimes = Math.floor(cents / 10);
    cents = cents % 10;

    nickels = Math.floor(cents / 5);
    cents = cents % 5;

    pennies = Math.round(cents / 1);
    cents = cents % 1;


    if (owed > paid) {
      this.setState({
        alertFail,
        alertSuccess: null,
        twenties: 0,
        tens: 0,
        fives: 0,
        ones: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0,
        changeDue: changeDue,
      })
    } else {
      this.setState({
        alertSuccess,
        alertFail: null,
        twenties: twenties,
        tens: tens,
        fives: fives,
        ones: ones,
        quarters: quarters,
        dimes: dimes,
        nickels: nickels,
        pennies: pennies,
        changeDue: changeDue,
      })
    }
  }

  render() {

    const showSuccess = {
      display: this.state.alertSuccess
        ? 'block'
        : 'none'
    }
    const showFail = {
      display: this.state.alertFail
        ? 'block'
        : 'none'
    }

    console.log('RENDER CALLED!');
    return (
      <div className="container">
        <div className="page-header">
          <h1 style={{ color: "white" }}>Change Calculator</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">Enter Information</div>
              <div className="form-group">
                <form onSubmit={this.calculate}>
                  <div className="panel-body">
                    <label htmlFor="due">How much is due?</label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={this.updateAmountDue}
                      value={this.state.amountDue}
                      name="amountDue" />
                    <div className="form-group">
                      <label htmlFor="received">How much was received?</label>
                      <input
                        type="number"
                        className="form-control"
                        onChange={this.updateAmountReceived}
                        value={this.state.amountReceived}
                        name="amountReceived"
                      />
                    </div>
                  </div>
                  <div className="panel-footer">
                      <button type="submit" className="btn btn-primary btn-block" name="calculate">Calculate</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="col-md-8">
              <div className="panel panel-default">
                <div className="panel-body text-center">
                  <div className="col-md-12">
                    <div className={this.state.alertSuccess} style={showSuccess} role="alert">The total change due is ${this.state.changeDue}</div>
                    <div className={this.state.alertFail} style={showFail} role="alert">Add money you are short ${this.state.changeDue}!</div>
                  </div>
                  <div className="col-md-3">
                    <div className="well well-lg">
                      <p>
                        <strong>Twenties</strong>
                      </p>
                      <p>{this.state.twenties}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="well well-lg">
                      <p>
                        <strong>Tens</strong>
                      </p>
                      <p>{this.state.tens}</p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="well well-lg">
                      <p>
                        <strong>Fives</strong>
                      </p>
                      <p>{this.state.fives}</p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="well well-lg">
                      <p>
                        <strong>Ones</strong>
                      </p>
                      <p>{this.state.ones}</p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="well well-lg">
                      <p>
                        <strong>Quarters</strong>
                      </p>
                      <p>{this.state.quarters}</p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="well well-lg">
                      <p>
                        <strong>Dimes</strong>
                      </p>
                      <p>{this.state.dimes}</p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="well well-lg">
                      <p>
                        <strong>Nickels</strong>
                      </p>
                      <p>{this.state.nickels}</p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="well well-lg">
                      <p>
                        <strong>Pennies</strong>
                      </p>
                      <p>{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;



