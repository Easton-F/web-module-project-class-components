import React from 'react'

class TodoForm extends React.Component {
  render () {
    return (  <form>
      <input type='text' placeholder='Add a Todo'/>
      <button>Add</button>
    </form>)
  }
}

export default TodoForm;