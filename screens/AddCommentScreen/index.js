import React from 'react';
import firebase from 'react-native-firebase';

const firestore = firebase.firestore();

import CommentForm from './CommentForm';

class AddCommentScreen extends React.Component {
  static navigationOptions = {
    title: 'Add a comment',
  };

  state = {
    comment: {
      name: '',
      comment: '',
    },
    disableForm: false,
  };

  handleAddComment = () => {
    this.setState({ disableForm: true });

    const { comment } = this.state;
    const { navigation } = this.props;
    const albumId = navigation.getParam('albumId');
    const collection = firestore.collection('albums')
                                .doc(albumId)
                                .collection('comments');

    collection.add({
      ...comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(() => navigation.pop());
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