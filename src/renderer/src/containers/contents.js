import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Contents from '../components/contents';
import * as column from '../actions/column';
import * as sidemenu from '../actions/sidemenu';

function mapStateToProps(state) {
  return {
    accounts: state.accounts.accounts,
    columns: state.tweets.columns,
    timeline: state.tweets.timeline,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteRequest: bindActionCreators(column.deleteColumn, dispatch),
    openAddColumnMenu: bindActionCreators(sidemenu.openAddColumnMenu, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contents);
