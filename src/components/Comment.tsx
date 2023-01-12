import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';



interface CommentProps {
  content:string;
  onDeleteComment:(comment:string)=> void;
}

export function Comment({content, onDeleteComment}:CommentProps){

  // Delete Comment FUNCTION
  function handleDeleteComment(){
    onDeleteComment(content);
  }

  //Handle Comment Like FUCNTION
  function handleCommentLike(){
    setLikeCount((state)=>{
      return state + 1
    })
  }

  //Comment Comment Like STATE
  const [likeCount, setLikeCount] = useState(0);

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/92760374?v=4" alt="avatar" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                  <header>
                     <div className={styles.authorAndTime}>
                        <strong>Álvaro Orlando</strong>
                         <small> 
                          <time title="11 de maio às 08:13:00" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
                         </small> 
                     </div>
                     <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={24} />
                     </button>
                  </header>
                  <p>
                   { content }
                  </p>
                </div>
                <footer>
                  <button onClick={ handleCommentLike }>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                  </button>
                </footer>
            </div>
        </div>
    )
}