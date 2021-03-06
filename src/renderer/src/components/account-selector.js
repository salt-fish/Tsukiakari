import React, { Component } from 'react';
import Button from './button';
import AccountList from './account-list';
import B from '../lib/bem';

const b = B.with('account-selector');

export default class AccountSelector extends Component {
  static defaultProps = {
    onSelect: () => null,
    accounts: [],
  }

  constructor(props) {
    super(props);
    this.state = { selectedAccount: props.accounts[0] };
    this.onSelect = ::this.onSelect;
  }

  onSelect(account) {
    this.props.onSelect(account);
  }

  render() {
    return (
      <div className={b()}>
        <div className={b('title-wrapper')}>
          <span className={b('title')}>Choose account</span>
        </div>
        <div className={b('accounts')}>
          <AccountList
            accounts={this.props.accounts}
            selectedAccount={this.state.selectedAccount}
            onSelect={account => this.setState({ selectedAccount: account })}
          />
        </div>
        <div className={b('buttons')}>
          <Button
            className={b('button', { back: true })}
            onClick={this.props.onBackClick}
            style={{
              marginRight: '6px',
            }}
          >
            Back
          </Button>
          <Button
            onClick={this.props.onCreate.bind(this, this.state.selectedAccount, {})}
          >
            Add
          </Button>
        </div>
      </div>
    );
  }
}
