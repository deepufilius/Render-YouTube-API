import Comment from "./Comment";

const CommentList = ({comments}) => {
  return comments.map((comment,index)=>(
        <div key={index}>
            <Comment data={comment}/>
            <div className="pl-3 ml-3 border-0 border-l border-l-black ">
                <CommentList comments={comment.replies}/>
            </div>
        </div>  
    ))
}

export default CommentList