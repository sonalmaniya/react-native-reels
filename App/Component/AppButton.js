import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import {AppContext} from '../Context';
import CommonStyle from '../Theme/CommonStyle';

const styles = StyleSheet.create({
  outer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 5,
    minWidth: 100,
    ...CommonStyle.center,
  },
});

const ButtonComponent = props => {
  const {title, onPress, style, border, backColor, textColor, isProcessing} =
    props;
  const {outer} = styles;
  const {appTheme} = useContext(AppContext);
  return (
    <TouchableOpacity onPress={onPress} disabled={isProcessing}>
      <View
        style={[
          outer,
          {
            backgroundColor: backColor || appTheme.appTheme,
            borderColor: border || appTheme.border,
          },
          style,
        ]}>
        {(!isProcessing && (
          <Text style={{color: textColor || appTheme.tint}}>{title}</Text>
        )) || <ActivityIndicator color={textColor || appTheme.tint} />}
      </View>
    </TouchableOpacity>
  );
};

export {ButtonComponent};
