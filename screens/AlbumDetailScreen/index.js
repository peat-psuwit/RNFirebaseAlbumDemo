import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import firebase from 'react-native-firebase';

const firestore = firebase.firestore();

import AlbumHeader from './AlbumHeader';
import CommentList from './CommentList';
import NoCommentPlaceholder from './NoCommentPlaceholder';

class AlbumDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Album detail',
  };

  state = {
    album: {
      title: '',
      artist: '',
      url: '',
      image: '',
      thumbnail_image: '',
    },

    comments: [],
  };

  subscribeToAlbum() {
    const { navigation } = this.props;
    const albumId = navigation.getParam('albumId');
    const docRef = firestore.collection('albums').doc(albumId);

    this.albumSubscription = docRef.onSnapshot((doc) => {
      this.setState({ album: doc.data() });
    });
  }

  subscribeToComment() {
    // TODO: subscribe to Firestore for comment
  }

  updateCommentState() {
    // TODO: convert data to correct format & update state
  }

  unsubscribeFromComment() {
    // TODO: unsubscribe from Firestore
  }

  unsubscribeFromAlbum() {
    this.albumSubscription();
  }

  componentDidMount() {
    this.subscribeToAlbum();
    this.subscribeToComment();
  }

  componentWillUnmount() {
    this.unsubscribeFromAlbum();
    this.unsubscribeFromComment();
  }

  handleAddComment = () => {
    const { navigation } = this.props;

    navigation.navigate('AddCommentScreen', {
      albumId: navigation.getParam('albumId')
    });
  }

  renderCommentList() {
    const { comments } = this.state;
    if (comments.length === 0)
      return <NoCommentPlaceholder />
    else
      return <CommentList commentList={comments} />
  }

  render() {
    const { album } = this.state;

    return (
      <View style={styles.container}>
        <AlbumHeader
          album={album}
          onAddComment={this.handleAddComment}
        />
        {this.renderCommentList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AlbumDetailScreen;