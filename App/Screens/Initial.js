import React, {useEffect, useContext} from 'react';
import {View} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {AppContext} from '../Context';
import {isIOS, height} from '../Utils/Constant';
import CommonStyle from '../Theme/CommonStyle';

const Initial = () => {
  const {setDisplayHeight} = useContext(AppContext);
  const navigation = useNavigation();

  useEffect(() => {
    goToNextScreen('Home');
  }, []);

  const goToNextScreen = async (name, params = {}) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name, params}],
      }),
    );
  };

  const onLayout = ({nativeEvent}) => {
    setDisplayHeight((!isIOS && nativeEvent.layout.height) || height);
  };

  return <View style={CommonStyle.flexContainer} onLayout={onLayout} />;
};

export default Initial;
