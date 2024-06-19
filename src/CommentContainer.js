import CommentsList from './CommentsList';
import commentsData from './utils/commentsData';

const CommentsContainer = () => {
    return (
      <div className='m-5 p-2'>
          <h1 className='text-2xl font-bold'>
             Comments
             </h1>
             {/* <Comments data={commentsData[0]}/> */}
             <CommentsList comments={commentsData} />
  
        </div>
    )
  }
  
  export default CommentsContainer;

  // structure
//   CommentsContainer
//   └── CommentsList (commentsData)
//       ├── Comment 1 (no replies)
//       ├── Comment 2
//       │   ├── Reply 1 (no replies)
//       │   └── Reply 2
//       │       └── Reply 2.1
//       │           └── Reply 2.1.1
//       │               └── Reply 2.1.1.1
//       │                   └── Reply 2.1.1.1.1 (no replies)
//       └── Comment 3 (no replies)
