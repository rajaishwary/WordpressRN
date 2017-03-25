import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Root from '../components/Root';
import * as Actions from '../actions';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapDispatchToProps)(Root);