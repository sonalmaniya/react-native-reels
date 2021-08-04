import AsyncStorage from '@react-native-community/async-storage';

export const setItemInStorage = async (key, data) => {
  try {
    return await AsyncStorage.setItem(key, data);
  } catch (error) {
    return null;
  }
};

export const getItemFromStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return value;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const removeStoreItem = async key => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    return null;
  }
};

export const setObjectInStore = async (key, data) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    return null;
  }
};

export const getObjectFromStore = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const storeMultiDelete = async keyArray => {
  try {
    return await AsyncStorage.multiRemove(keyArray);
  } catch (error) {
    return null;
  }
};

export const clearStorage = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (error) {
    return null;
  }
};
