import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    //bind handleClick to make sure this.props.chooseVideo refer to correct instance
    this.handleClick = this.handleClick.bind(this);
  }
  //Need to give Menu an event handler to deal with event object onClick and get the correct result 
  handleClick(e) {
    const text = e.target.value; // get the text from the input click 
    //call the chooseVideo and pass in text as argument
    this.props.chooseVideo(text);
  }
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}