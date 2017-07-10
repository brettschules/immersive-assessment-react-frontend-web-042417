import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Transaction from './Transaction'
import Search from './Search'

const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'
class AccountContainer extends Component {

  constructor(props) {
    super(props)

    // we have provided this default state for you,
    // use this to get the functionality working
    // and then replace the default transactions with a call to the API

    this.state = {
      searchTerm: '',
      transactions: [
        {
          id: 1,
          posted_at: "2017-02-28 11:00:00",
          description: "Leather Pants, Gap co.",
          category: "Fashion",
          amount: -20000
        },
        {
          id: 2,
          posted_at: "2017-02-29 10:30:00",
          description: "Paycheck from Bob's Burgers",
          category: "Income",
          amount: 100000
        },
        {
          id: 3,
          posted_at: "2017-05-24 10:53:00",
          description: "'Pair Programming Illuminated' by Laurie Williams and Robert Kessler",
          category: "Book",
          amount: 1498
        },
        {
          id: 4,
          posted_at: "2017-05-24 08:52:00",
          description: "Medium Iced Cold Brew, Gregory's Coffee",
          category: "Coffee",
          amount: 365
        }
      ]
    }
  }

  componentWillMount() {
    this.fetchURL()
  }

  fetchURL() {
    fetch(URL)
    .then(resp => resp.json())
    .then(set => this.setState.transactions({
      set
    }))
  }

  handleSubmit(event) {
    this.setState({
      searchTerm: event
    })
  }

  filteredTranscations() {
    if (this.state.searchTerm === " ") {
      return this.state.transactions
    } else {
      // return first transaction that matches either the description or searchTerm
      return this.state.transactions.find((t) => t.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || t.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
  }


  render() {

    return (
      <div>
        <div className="Account">
          <Search handleSubmit={this.handleSubmit.bind(this)} />
          <TransactionsList transactions={this.filteredTranscations.bind(this)} />
          </div>

          <div className="Transactions">
            <Transaction transactions={this.state.transactions} />
          </div>
      </div>
    )
  }
}

export default AccountContainer
