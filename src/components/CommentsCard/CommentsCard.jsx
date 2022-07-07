import "./CommentsCard.css";
import * as commentsAPI from "../../utilities/comments-api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const moment = require("moment");
//import { useNavigate } from "react-router-dom";

export default function CommentsCard({ comment, user }) {
  const { postId } = useParams();
  //Use the navigate function to change routes programmatically
  // const navigate = useNavigate();

  // get comment author name by comment id
  useEffect(() => {});

  // change the format of the ISODate
  const time = moment(comment.createdAt);

  async function handleDelete() {
    // if the user of the comment is same as the login user
    const deleteCom = await commentsAPI.deleteComment(comment._id);
    console.log(deleteCom);
    // need to refresh it
    //navigate(`/${postId}`); //not working
    window.location.href = `/${postId}`;
  }

  let btn = comment?.user === user._id;

  return (
    <div className="comments-card-container">
      <p>
        <strong>Title:</strong> {comment.commentTitle}
      </p>
      <p>
        <strong>Contents:</strong> {comment.content}
      </p>
      {/* Need the comment author name .. not the user name/post author name */}
      <p>
        <strong>Author:</strong>
      </p>
      <p>
        <strong>Created Date:</strong> {time.format("MM/DD/YYYY HH:mm")}
      </p>
      {btn && (
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}
