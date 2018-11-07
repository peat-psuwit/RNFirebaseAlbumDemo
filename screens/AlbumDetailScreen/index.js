import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

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

  getAlbum() {
    // TODO: get album data from Firestore
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

  componentDidMount() {
    this.getAlbum();
    this.subscribeToComment();
  }

  componentWillUnmount() {
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