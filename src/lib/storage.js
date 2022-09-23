import {AsyncStorage} from 'react-native';

const clear = async () => {
  return await AsyncStorage.clear();
};

const get = async key => {
  return AsyncStorage.getItem(key, (error, result) => {
    return JSON.parse(result);
  });
};

const set = async (key, value) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

const remove = async key => {
  return await AsyncStorage.removeItem(key);
};

const multiGet = async (...keys) => {
  return await AsyncStorage.multiGet([...keys]).then(stores => {
    const data = {};
    stores.forEach((result, i, store) => {
      data[store[i][0]] = JSON.parse(store[i][1]);
    });
    return data;
  });
};

const multiRemove = async (...keys) => {
  return await AsyncStorage.multiRemove([...keys]);
};

export default {
  clear,
  get,
  set,
  remove,
  multiGet,
  multiRemove,
};
