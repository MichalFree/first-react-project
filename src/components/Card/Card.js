import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
  };
  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <h2 className={styles.title}>{title}</h2>
      </section>
    );
  }
}

export default Card;
