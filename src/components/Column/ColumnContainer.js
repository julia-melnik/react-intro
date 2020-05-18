import { connect } from 'react-redux';
import Column from './Column.js';
import { getCardsForColumn, createActionAddCard } from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({ //powiązane propsów ze stanem 
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column); //odpowiedzialne za połączenie komponenta App z magazynem