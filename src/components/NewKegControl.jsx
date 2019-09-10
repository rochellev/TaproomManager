import React from 'react';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ formVisibleOnPage: true });
    console.log('formVisibleOnPage set to ' + this.state.formVisibleOnPage);
  }

  render() {
    return (
      <div>New Keg Control!
        <strong onClick={this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default NewKegControl;