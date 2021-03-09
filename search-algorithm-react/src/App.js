import React from 'react';
import DATA from './data';

class App extends React.Component {
  state = {
    item: null,
    found: false,
    iterations: 0,
  }
  handleSubmit(e) {
    e.preventDefault()
    //get search item and search type from input form when submitted
    const item = parseInt(e.target.input.value)
    const type = e.target.type.value
    //determine which search algoritm to run
    if(type === "linear") {
      let foundObj = this.linearSearch(DATA, item)
      this.setState(foundObj)
    }
    if(type === "binary"){
      let count = 0;
      let data = DATA.sort((a,b) => a-b)
      let start = 0;
      let end = data.length -1
      let foundObj = this.binarySearch(data, item, count, start, end)
      this.setState(foundObj)
    }
  }

  linearSearch(data, item) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      count++
      if (data[i] === item) {
        return({
          item: item,
          found: true,
          iterations: count
        })
      }
    }
    return({
      item: item,
      found: false,
      iterations: count
    })
    
  }

  binarySearch(data, item, count, start, end) {
    count++

    if (start > end) {
      return({
        item: item,
        found: false,
        iterations: count
      })
    }
    const index = Math.floor((start + end) / 2)
    const value = data[index]

    if (value === item) {
      return({
        item: item,
        found: true,
        iterations: count
      })
    }
    else if (value < item) {
      return this.binarySearch(data, item, count, index + 1, end)
    }
    else if (value > item) {
      return this.binarySearch(data, item, count, start, index - 1)
    }
  }

  render() {
    return (
      <main className='App'>
        <p>Enter the item you want to search: </p>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="input">Input: </label>
          <input type="text" name="input" id="name" required />
          <p>Select search type: </p>
          <label htmlFor="linear">Linear</label>
          <input type="radio" name="type" id="linear" value="linear" required/>
          <label htmlFor="binary">Binary</label>
          <input type="radio" name="type" id="binary" value="binary" required/>
          <br />
          <button type="submit">Submit</button>
        </form>
        {this.state.item ? 
        <div>
          <h3>Results</h3>
          <p>Item was found? {this.state.found ? "true" : "false"}</p>
          <p>Number of iterations: {this.state.iterations}</p>
        </div> : <div />}
      </main>
    )
  }
}

export default App;