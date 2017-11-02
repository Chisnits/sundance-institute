import React, { Component } from 'react';
import _ from 'lodash';
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
      //e.clientX & Y are the coordinates of where
      //the user clicks
      var xPosition = e.clientX;
      var yPosition = e.clientY;
      // console.log(xPosition)
      // console.log(yPosition)
      var i = 0;
      
        var original = document.getElementById('duplicater' + i);
        var clone = original.cloneNode(true); // "deep" clone
        clone.id = _.uniqueId("duplicater_"); // there can only be one element with an ID
        clone.onclick = screenClick; // event handlers are not cloned
        original.parentNode.appendChild(clone);
        console.log(clone)

        //Now that we have cloned the cat,
        //we need to move it to the location of the click.
        function moveDiv(x_pos,y_pos){
          var d = document.getElementById('duplicater' + i);
          d.style.left = x_pos - 70 + "px";
          d.style.top = y_pos - 50 + "px";
        }
        //invoke the function that moves the cat
        //passing in the coordinates
        moveDiv(xPosition,yPosition);
    }
    document.body.addEventListener('click', screenClick, true);  
    return (
      <div className="app">
        <div className="witch"></div>
        <div className="wrapper"></div>
        <div className="parallax"></div>
        <div className="cat" id="duplicater0"></div>
      </div>
    );
  }
}

export default App;
