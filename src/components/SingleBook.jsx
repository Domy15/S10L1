import { Card } from 'react-bootstrap'


function SingleBook (props) {

    return (
      <>
        <Card
          onClick={() => {props.changeAsin(props.book.asin)}}
          style={{border: props.selected ? "3px solid red" : "none"}}
        >
          <Card.Img variant="top" src={props.book.img} style={{height: "16em", width: "12em"}}/>
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  }

export default SingleBook
