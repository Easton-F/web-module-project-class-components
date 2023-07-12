import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
            <li>Walk the Dog</li>
            <li>Take out Trash</li>
            <li>Workout</li>
        </ul>

        <form>
          <input type='text' placeholder='Add a Todo'/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
