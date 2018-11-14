import React from 'react';
import CommentForm from './CommentForm';

class AddCommentScreen extends React.Component {
  static navigationOptions = {
    title: 'Add a comment',
  };

  state = {
    comment: {
      name: '',
      rating: 3,
      comment: '',
    },
    disableForm: false,
  };

  handleAddComment = () => {
    // TODO: disable the form
    // TODO: add a comment to Firestore
    // TODO: navigate back
  }

  handleCommentChanged = (comment) => {
    this.setState({ comment });
  }

  render() {
    const { comment, disableForm } = this.state;

    return (
      <CommentForm
        comment={comment}
        onCommentChanged={this.handleCommentChanged}
        onAddComment={this.handleAddComment}
        disabled={disableForm}
      />
    );
  }
}

export default AddCommentScreen;
