
import Comments from './Comments';

// to map over the list of all comments
const CommentsList = ( {comments} ) => 
{
// Maps over each comment and renders a Comments component.
// Renders replies by calling itself (CommentsList) recursively with comment.replies.
    return comments.map((comment, index) => 
    <div key={index}> 

    <Comments data={comment} />

        <div className='pl-5 border border-l-gray-300 ml-5'>
            
            {/* FOR REPLIES which is also a list of comments so recursive*/}
            <CommentsList comments={comment.replies} />
        </div>

    </div>
    );

}

export default CommentsList;