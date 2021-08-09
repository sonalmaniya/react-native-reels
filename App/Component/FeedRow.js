import React from 'react';
import {View} from 'react-native';
import {FeedFooter} from './FeedFooter';
import {FeedSideBar} from './FeedSideBar';
import {VideoComponent} from './VideoComponent';

const FeedRow = ({item, isNext, isVisible, index, transitionAnimation}) => {
  const {post} = item;
  return (
    <View>
      <VideoComponent post={post} isNext={isNext} isVisible={isVisible} />
      <FeedSideBar item={item} animation={transitionAnimation(index)} />
      <FeedFooter item={item} animation={transitionAnimation(index)} />
    </View>
  );
};

export {FeedRow};
