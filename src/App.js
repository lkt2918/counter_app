import Counter from './Component/Counter';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  plusHandler = (counter) => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index].value++;
    this.setState({ newCounters});
  };
  cutHandler = (counter) => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index].value--;
    this.setState({ newCounters});
  };
  deleteHandler = (counter) => {
    const newCounters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({newCounters });
  };
  resetHandler = () => {
    const newState = this.state.counters.map((c) => {
      c.value = 0
      return c;
    });
    this.setState({newState});
  };

  restartHandler = () => {
    window.location.reload();
  };
  render() {
  return (
    <div>
      <nav class="navbar navbar-light" >
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart  fa-lg m-2" />
        <span class="badge rounded-pill bg-info text-dark m-2">
          {      
            this.state.counters.filter((c) => c.value > 0).length
          }
          </span>
        Items
        </div>
      </nav>
      <main className="contailer">
      <button
          className="btn btn-success m-2"
          onClick={this.resetHandler}
          disabled={this.state.counters.length === 0 ? "disabled" : ""}
        >
          <i className="fa fa-refresh" aria-hidden="true" />
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={this.restartHandler}
          disabled={this.state.counters.length !== 0 ? "disabled" : ""}
        >
          <i className="fa fa-recycle" aria-hidden="true" />
        </button>
        <div>
          
        {this.state.counters.map(counter => (
          <Counter 
            key={counter.id}
            counter={counter}
            plusHandler={this.plusHandler}
            cutHandler={this.cutHandler}
            deleteHandler={this.deleteHandler}
          />
        ))
        }
        </div>
      </main>
       
    </div>
  );
  }
};

export default App;
