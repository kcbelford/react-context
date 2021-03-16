import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // hooking up context object to class component
  // same as Button.contextType = LanguageContext;
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>
  }
}

export default Button;
