import React from 'react'

const TransactionsList = ({TransactionsList}) => {
// {console.log(TransactionsList.map(p => p.posted_at))}

  return (
  
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At {TransactionsList.map(p => p.posted_at)}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description {TransactionsList.map(p => p.description)}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category {TransactionsList.map(p => p.category)}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount {TransactionsList.map(p => p.amount)}
            </h3>
          </th>
        </tr>

      </tbody>
    </table>
  )
}

export default TransactionsList
