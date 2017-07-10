import React from 'react'

class Search extends React.Component {
  constructor({handleSubmit}){
    super({handleSubmit})

    this.state = {
      searchTerm: ""
    }
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
    this.handleSubmit(event.target.value)
  }




  render() {
    return(
      <div className="ui huge fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          value={this.state.searchTerm}
          onChange={this.handleChange.bind(this)}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}
// const Search = ({handleChange}) => {
//   return (
//     <div className="ui huge fluid icon input">
//       <input
//         type="text"
//         placeholder={"Search your Recent Transactions"}
//       />
//       <i className="circular search link icon"></i>
//     </div>
//   )
// }

export default Search
