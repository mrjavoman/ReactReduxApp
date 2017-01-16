import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList () {
        return this.props.books.map((book) => {
            return(
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item"> 
                    {book.title}
                </li>
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

// Anything returned from this function will end up as props on  the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever select book is call result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook }, dispatch);
}

// Promote BookList from a Component to a Container - it needs to know about
// this new dispatch method, selectBook. 
// Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)