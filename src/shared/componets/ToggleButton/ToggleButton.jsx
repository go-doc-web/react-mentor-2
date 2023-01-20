import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./toggle-button.module.scss";

class ToggleButton extends Component {
  static defaultProps = {
    type: "submit",
  };

  state = {
    isToggle: false,
  };

  handleClick = () => {
    // const prevState = this.state.isToggle;
    // console.log(prevState);
    this.setState(({ isToggle }) => {
      return {
        isToggle: !isToggle,
      };
    });
  };

  render() {
    const { text, type } = this.props;
    const { isToggle } = this.state;
    const { handleClick } = this;

    return (
      <button
        onClick={handleClick}
        className={isToggle ? `${styles.btn} ${styles.toggle}` : styles.btn}
        type={type}
      >
        {text}
      </button>
    );
  }
}

export default ToggleButton;

ToggleButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
};
