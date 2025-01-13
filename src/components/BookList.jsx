import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    asin: "",
  };

  changeAsin = (asinBook) => {
    this.setState({ asin: asinBook });
  };

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
        <Row className="g-2 mt-3">
          <Col xs={6}>
          <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            ).map((b) => (
              <Col xs={4} key={b.asin}>
                <SingleBook book={b} changeAsin={this.changeAsin} />
              </Col>
            ))}
            </Row>
            </Col>
            <Col xs={6}>
            {this.state.asin && <CommentArea asin={this.state.asin}/>}
            {console.log("ciao") }
            </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
