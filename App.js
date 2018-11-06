import React from 'react';
import { createStackNavigator } from 'react-navigation';

import AlbumListScreen from './screens/AlbumListScreen';
import AlbumDetailScreen from './screens/AlbumDetailScreen';

const RootStack = createStackNavigator({
  AlbumListScreen,
  AlbumDetailScreen,
}, {
  initialRouteName: 'AlbumListScreen',
});

function App() {
  return <RootStack />;
}

export default App;