import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedBook: null,
  }
  handleBookSelect = (book) => {
    this.setState({ selectedBook: book })
  }
  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={6}>
            <Row className="g-2">
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={12} md={6} key={b.asin}>
                    <SingleBook
                      book={b}
                      onBookSelect={this.handleBookSelect}
                      isSelected={this.state.selectedBook && this.state.selectedBook.asin === b.asin}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={12} md={6}>
            {this.state.selectedBook ? (
              <CommentArea asin={this.state.selectedBook.asin} />
            ) : (
              <p>Seleziona un libro per vedere i commenti</p>
            )}
          </Col>
        </Row>
      </>
    )
  }
}

export default BookList
