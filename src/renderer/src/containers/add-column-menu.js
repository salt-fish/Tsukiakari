import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddColumnMenu from '../components/add-column-menu';
import * as sidemenu from '../actions/sidemenu';
import * as column from '../actions/column';
import * as addColumnMenu from '../actions/add-column-menu.js';
import { connectFilterStream } from '../actions/tweets';

function mapStateToProps(state: State): Object {
  return {
    accounts: state.accounts.accounts,
    isOpen: state.sidemenu.isAddColumnMenuOpen,
    searchedTweets: state.addColumnMenu.searchedTweets,
    searchTweetsWord: state.addColumnMenu.searchTweetsWord,
    tweetLoadingStatus: state.addColumnMenu.tweetLoadingStatus,
  };
}

function mapDispatchToProps(dispatch: Dispatch): Object {
  return {
    close: bindActionCreators(sidemenu.closeAddColumnMenu, dispatch),
    createColumn: bindActionCreators(column.addColumn, dispatch),
    connectFilterStream: bindActionCreators(connectFilterStream, dispatch),
    searchTweets: bindActionCreators(addColumnMenu.searchTweets, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddColumnMenu);
