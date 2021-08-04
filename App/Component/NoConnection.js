import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CommonStyle from '../Theme/CommonStyle';
import {AppContext} from '../Context';
import {fontSize} from '../Utils/Constant';
import {ButtonComponent} from './AppButton';

const styles = StyleSheet.create({
  outer: {
    ...CommonStyle.absoluteView,
    ...CommonStyle.center,
  },
  inner: {
    width: '60%',
    borderRadius: 10,
    paddingTop: 20,
    overflow: 'hidden',
    borderWidth: 0.5,
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 5,
  },
});

const NoConnection = props => {
  const {appTheme} = useContext(AppContext);
  const {retryConnection} = props;
  return (
    <View style={styles.outer}>
      <View
        style={[
          styles.inner,
          {backgroundColor: appTheme.card, borderColor: appTheme.border},
        ]}>
        <Text
          style={[
            {
              color: appTheme.text,
              textAlign: 'center',
              fontSize: fontSize.large,
            },
          ]}>
          Oops!
        </Text>
        <Text
          style={[
            styles.subTitle,
            {color: appTheme.lightText, fontSize: fontSize.large},
          ]}>
          {'No Internet Connection!\n Check your connection.'}
        </Text>
        <ButtonComponent
          title={'Retry'}
          icon={'refresh'}
          onPress={retryConnection}
          style={{width: '100%', marginVertical: 0, borderRadius: 0}}
        />
      </View>
    </View>
  );
};

export {NoConnection};
