import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { useState, useEffect } from 'react'
const TOKEN= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVjMDAxY2QyMjA3MTAwMTVkZTJmNTUiLCJpYXQiOjE3MzY3NzU1ODEsImV4cCI6MTczNzk4NTE4MX0.y9tX550zICTKcNyFIEQ0DiT6Y8Otlu3j_QG8v_56hRY"

function CommentArea (props) {
  const states = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  const [state, setState] = useState(states)

  useEffect(() => {
    const showComment = async () => {
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + props.asin,
          {
            headers: {
              Authorization: TOKEN,
            },
          }
        )
        if (response.ok) {
          let commentsData = await response.json()
          setState({
            comments: commentsData,
            isLoading: false,
            isError: false})
        } else {
          setState({isLoading: false,
            isError: true})
        }
      } catch (error) {
        console.log(error)
        setState({isLoading: false,
          isError: true})
      }
    }; showComment()
  }, [props.asin])

    return (
      <div className="text-center">
        {state.isLoading && <Loading />}
        {state.isError && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={state.comments} />
      </div>
    )
  }

export default CommentArea
