import React from 'react';
import {View} from 'react-native';
import {VideoComponent} from './VideoComponent';

const FeedRow = ({item, isNext, isVisible}) => {
  const {post} = item;
  return (
    <View>
      <VideoComponent post={post} isNext={isNext} isVisible={isVisible} />
    </View>
  );
};

export {FeedRow};
