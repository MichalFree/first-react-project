import { connect } from 'react-redux';
import { getCardsForSearchResults } from '../../redux/cardsRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
  const cardId = props.match.params.cardId;
  return {
    cards: getCardsForSearchResults(state, cardId),
  };
};

export default connect(mapStateToProps)(SearchResults);
