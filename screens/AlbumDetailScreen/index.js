import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import AlbumHeader from './AlbumHeader';
import CommentList from './CommentList';

const mockAlbum = {
  _id: "B0014I4KH6",
  "title": "Taylor Swift",
  "artist": "Taylor Swift",
  "url": "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
  "image": "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
  "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
};

const mockComments = [
  {
    _id: 'lkkkkk',
    name: 'Peat',
    comment: 'Very good',
    timestamp: new Date(),
  }
]

class AlbumDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Album detail',
  };

  handleAddComment = () => {
    // TODO(self): navigate to add comment screen
  }

  render() {
    return (
      <View>
        <AlbumHeader
          album={mockAlbum}
          onAddComment={this.handleAddComment}
        />
        <CommentList commentList={mockComments} />
      </View>
    );
  }
}

export default AlbumDetailScreen;