import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList () {
        return this.props.books.map((book) => {
            return(
                <li key={book.title} className="list-group-item"> {book.title}</li>
            );            
        }); 
    }

    render() {
        return (
            <ul className="list-group col-sm4" >
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever gets return from here will show as props inside BookList
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList)