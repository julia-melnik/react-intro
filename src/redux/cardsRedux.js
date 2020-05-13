import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards}, columnId) => cards.filter(cards => cards.columnId == columnId); //wybiera kolumny z danej listy

// action name creator
const reducerName = 'cards'; //zapisujemy nazwę właściwości stanu, na której będziemy wykonywać akcje
const createActionName = name => `app/${reducerName}/${name}`; //potrzebna w każdym pliku z reduksowymi akcjami i reducerem

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard= payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) { // Sprawdzamy typ akcji 
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
//Będziemy korzystać z tej struktury pliku przy każdym komponencie posiadającym jakiekolwiek akcje