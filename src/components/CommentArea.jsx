import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  // Funzione per fare fetch dei commenti
  fetchComments = async () => {
    this.setState({ isLoading: true }); // Imposta lo stato di caricamento
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjN2FiYmZkZWUzZDAwMTU5YmRlZjciLCJpYXQiOjE3MjQ2NzY3OTYsImV4cCI6MTcyNTg4NjM5Nn0.Z8Ro8rjrLGdddg-QYpKfpM2Hh1WeoQIExG3WERKDt3w",
          },
        }
      );
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments, isLoading: false, isError: false });
      } else {
        throw new Error("Errore nella chiamata");
      }
    } catch (error) {
      console.error(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  // Chiamato quando il componente viene montato
  componentDidMount() {
    if (this.props.asin) {
      this.fetchComments();
    }
  }

  // Chiamato quando le props cambiano
  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />} 
        {this.state.isError && <Error />} 
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
