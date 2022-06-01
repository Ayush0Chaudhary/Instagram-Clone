import CommentProps from "../../types/commentPropType";

const Comment: React.FC<CommentProps> = (props: CommentProps) => {
    const {comment, commentator}  = props;
    return(
        <div className="comment">
            <div className="commentor-name" style={{"fontFamily": "Sans", "fontSize": 13}}>
                {commentator}
                {/* TODO: put name of person who commented */}
            </div>
            <div className="comment-data">
                {/* TODO: put actual comment */}
                {comment}
            </div>
        </div>
    )
}

export default Comment;