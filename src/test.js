import Counter from './Component/Counter';
import './App.css';
import React, { useState } from 'react';

const Test = () => {
  const [all, setCounters] = useState({
    counters : [
      {id : 1, value : 0},
      {id : 2, value : 0},
      {id : 3, value : 0},
      {id : 4, value : 0},
    ]
  });

  const plusHandler = (counter) => {
    const newCounters = [...all.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index].value++;
    setCounters({ newCounters});
  };
  const cutHandler = (counter) => {
    const newCounters = [...all.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index].value--;
    setCounters({ newCounters});
  };
  const deleteHandler = (counter) => {
    const newCounters = all.counters.filter((c) => c.id !== counter.id);
    setCounters({newCounters });
  };
  const resetHandler = () => {
    const newState = all.counters.map((c) => {
      c.value = 0
      return c;
    });
    setCounters({newState});
  };

  const restartHandler = () => {
    window.location.reload();
  };
  return (
    <div>
      <nav class="navbar navbar-light" >
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart  fa-lg m-2" />
        <span class="badge rounded-pill bg-info text-dark m-2">
          {      
            all.counters.filter((c) => c.value > 0).length
          }
          </span>
        Items
        </div>
      </nav>
      <main className="contailer">
      <button
          className="btn btn-success m-2"
          onClick={resetHandler}
          disabled={all.counters.length === 0 ? "disabled" : ""}
        >
          <i className="fa fa-refresh" aria-hidden="true" />
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={restartHandler}
          disabled={all.counters.length !== 0 ? "disabled" : ""}
        >
          <i className="fa fa-recycle" aria-hidden="true" />
        </button>
        <div>
          
        {all.counters.map(counter => (
          <Counter 
            key={counter.id}
            counter={counter}
            plusHandler={plusHandler}
            cutHandler={cutHandler}
            deleteHandler={deleteHandler}
          />
        ))
        }
        </div>
      </main>
       
    </div>
  );
};

export default App;
