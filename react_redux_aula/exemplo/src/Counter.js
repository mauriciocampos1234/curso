import React from 'react';
import './App.css';


class Counter extends React.Component{
  alterarTitulo = ()=>{
    
  }
  decrement = ()=>{
    
  }
  
  render(){
    return(
      <div>
        <button onClick={this.alterarTitulo}>Alterar titulo!</button>
        <button onClick={this.increment}>Mais</button>
        <h2>10</h2>
        <h3>Título</h3>
      </div>
    )
  }
}

export default Counter;
