import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({//powiązane propsów ze stanem 
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(Home); //odpowiedzialne za połączenie komponentu App z magazynem