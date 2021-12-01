import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Column/Column.scss';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };
  render() {
    const { cards } = this.props;
    return (
      <section className={styles.component}>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;
