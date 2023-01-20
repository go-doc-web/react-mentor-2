import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./main-menu.module.scss";

class MainMenu extends Component {
  static defaultProps = {
    items: [],
  };

  state = {
    indexActive: 0,
  };

  handleClick = (idx) => {
    this.setState({ indexActive: idx });
  };

  render() {
    const { items } = this.props;
    const { indexActive } = this.state;
    const { handleClick } = this;

    const elements = items.map(({ id, text, link }, index) => {
      return (
        <li key={id}>
          <a
            onClick={() => handleClick(index)}
            className={
              indexActive === index
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
            href={link}
          >
            {text}
          </a>
        </li>
      );
    });

    return (
      <ul className={styles.menu} id="main-menu">
        {elements}
      </ul>
    );
  }
}

export default MainMenu;

MainMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};
