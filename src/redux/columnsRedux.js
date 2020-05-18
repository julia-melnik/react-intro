import shortid from 'shortid';

// selectors
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId); //wybiera kolumny z danej listy

// action name creator
const reducerName = 'columns'; //zapisujemy nazwę właściwości stanu, na której będziemy wykonywać akcje
const createActionName = name => `app/${reducerName}/${name}`; //potrzebna w każdym pliku z reduksowymi akcjami i reducerem

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators     
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) { // Sprawdzamy typ akcji 
    case ADD_COLUMN:
      return [...state, action.payload];
    default:
      return state;
  }
}
//Będziemy korzystać z tej struktury pliku przy każdym komponencie posiadającym jakiekolwiek akcje