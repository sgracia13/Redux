import React, {Component} from 'react';
import {connect} from 'react-redux'

class BookList extends Component {
    render() {
        let books = this.props.books
        let bookItems = books.map((book) => {
            return <li>{book}</li>
        })

return (

    <div>
        <h1>BookList</h1>
        <ul>{bookItems}</ul>
        <p>{this.props.ctr}</p>
    </div>
)


    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        ctr: state.counter
    }
}

export default connect(mapStateToProps)(BookList)