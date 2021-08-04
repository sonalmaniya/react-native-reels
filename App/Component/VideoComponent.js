import React, {useContext, useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {AppContext} from '../Context';
import {width} from '../Utils/Constant';

const styles = StyleSheet.create({
  videoView: {
    width,
    opacity: 1,
  },
});

const VideoComponent = ({post, isVisible, isNext}) => {
  const {displayHeight} = useContext(AppContext);
  const {isMute} = useContext(AppContext);
  const videoRef = useRef(null);
  const {url} = post;
  const {videoView} = styles;

  useEffect(() => {
    if (!isVisible && isNext && videoRef) {
      videoRef.current.seek(0);
    }
  }, [isVisible, isNext]);

  const videoError = error => {
    // Manage error here
  };

  return (
    <View style={[styles.videoOuter, {height: displayHeight}]}>
      <Video
        ref={videoRef}
        fullscreenAutorotate={true}
        source={url}
        autoPlay={true}
        repeat={true}
        onError={videoError}
        resizeMode={'cover'}
        muted={(!isVisible && true) || isMute}
        style={[videoView, {height: displayHeight}]}
        playInBackground={false}
        paused={!isVisible}
        ignoreSilentSwitch={'ignore'}
      />
    </View>
  );
};

export {VideoComponent};
