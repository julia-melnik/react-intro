import { connect } from 'react-redux';
import List from './List';
import { getColumnsForList, createActionAddColumn } from '../../redux/columnsRedux.js';

//export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => ({ // dodaje propsy komponentu List, wykorzystując fragmenty stanu aplikacji z reduksowego magazynu (store).
  columns: getColumnsForList(state, props.id),  // pierwszy argm. zawsze state    
});
 
const mapDispatchToProps = (dispatch, props) => ({ //zadaniem jest wysyłanie akcji
  addColumn: title => dispatch(createActionAddColumn({ //przekazując go do propsaaction komponentu Creator
    listId: props.id,
    title,
  })),
});
export default connect(mapStateToProps, mapDispatchToProps)(List);