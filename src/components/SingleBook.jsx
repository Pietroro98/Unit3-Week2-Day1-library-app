import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <>
        <Card
        className="h-100"
          onClick={() => this.props.onBookSelect(this.props.book)}
          style={{ border: this.props.isSelected ? "3px solid red" : "none" }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
          <Card.Footer>{this.props.book.price}€</Card.Footer>
        </Card>
      </>
    );
  }
}

export default SingleBook;
