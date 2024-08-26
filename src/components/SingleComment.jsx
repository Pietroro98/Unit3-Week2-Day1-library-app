import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjN2FiYmZkZWUzZDAwMTU5YmRlZjciLCJpYXQiOjE3MjQ2NzY3OTYsImV4cCI6MTcyNTg4NjM5Nn0.Z8Ro8rjrLGdddg-QYpKfpM2Hh1WeoQIExG3WERKDt3w",
          },
        }
      );
      if (response.ok) {
        alert("La recensione è stata elimata!");
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
