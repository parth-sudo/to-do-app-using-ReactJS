import React from 'react';
import Footer from "./components/Footer"
import Main from "./components/Main"
import Header from "./components/Header"
import Todo from "./components/Todo"
import Joke from "./components/Joke"
import toDoData from "./toDoData"
import Greeting from "./components/Greeting"

class App extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      todos : toDoData
    }
  }
  render()
  {

    const todoItems = this.state.todos.map(item => { // passing array of objects.s
    
        return (
          <Todo key = {item.id} item = {item}/>
        )
    })
    
      return (
         <div>  
         
        <Greeting/>
    
        <Header/>
         
         {todoItems}
    
         <Footer/>
      
         </div>
    
      )

  }
}

export default App;
