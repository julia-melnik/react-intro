import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({//powiązane propsów ze stanem 
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(App); //odpowiedzialne za połączenie komponentu App z magazynem