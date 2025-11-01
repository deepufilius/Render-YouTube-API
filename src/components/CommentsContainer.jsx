import CommentList from "./CommentList"
import commentsData from "../../utils/commentsData"

const CommentsContainer = () => {
  return (
    <div className="mt-5">
        <h1 className="font-bold text-xl">Comments:</h1>
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer