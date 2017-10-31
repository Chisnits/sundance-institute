import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

  }
  render() {
    {/* <audio>
      <source src="http://www.wavsource.com/snds_2017-09- 17_1751672946049674/animals/cat_meow2.wav">
      </source>
    </audio> */}
    function screenClick(e){
      var xPosition = e.clientX;
      var yPosition = e.clientY;
      console.log(xPosition);
      console.log(yPosition);
      var i = 0;
      
      function duplicate() {
        moveDiv(xPosition,yPosition);
        var d = document.getElementById('duplicater' + i);
        d.style.position = "absolute";
        d.style.left = e.clientX;
        d.style.top = e.clientY;
        console.log(d.style.left)

        var original = document.getElementById('duplicater' + i);
        var clone = original.cloneNode(true); // "deep" clone
        clone.id = "duplicater" + ++i; // there can only be one element with an ID
        clone.onclick = duplicate; // event handlers are not cloned
        original.parentNode.appendChild(clone);
      }
      duplicate();
      function moveDiv(x_pos,y_pos){
        var d = document.getElementById('duplicater' + i);
        d.style.left = x_pos + "px";
        d.style.top = y_pos + "px";
      }
    }
    document.body.addEventListener('click', screenClick, true);  
    return (
      <div className="app">
        <div className="cat" id="duplicater0"></div>
      </div>
    );
  }
}

export default App;
