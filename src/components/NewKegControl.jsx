import React from 'react';
import NewKegForm from './NewKegForm';

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
  }

  render() {
    let currentVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentVisibleContent = <NewKegForm />;
    }
    return (
      <div>
        {currentVisibleContent}
      </div>
    );
  }
}

export default NewKegControl;