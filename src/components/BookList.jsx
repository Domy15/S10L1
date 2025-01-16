import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

function BookList (props) {
  let stato = {
    searchQuery: "",
    asin: "",
  };

  const [state, setState] = useState(stato)

  const changeAsin = (asinBook) => {
    setState({ ...state, asin: asinBook });
  };

  const showCard = (b) => {
    if (b.asin == state.asin) {
      return (<Col xs={4} key={b.asin} data-testid="book-card">
      <SingleBook book={b} changeAsin={changeAsin} selected={true}/>
    </Col>)
    } else {
      return (<Col xs={4} key={b.asin} data-testid="book-card">
      <SingleBook book={b} changeAsin={changeAsin} selected={false}/>
    </Col>)
    }
  }

    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={state.searchQuery}
                onChange={(e) => setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          <Col xs={6}>
          <Row>
          {props.books
            .filter((b) =>
              b.title.toLowerCase().includes(state.searchQuery)
            ).map((b) => (
              showCard(b)
            ))}
            </Row>
            </Col>
            <Col xs={6}>
            <CommentArea asin={state.asin} data-testid="comment-area" />
            </Col>
        </Row>
      </>
    );
  }

export default BookList;
