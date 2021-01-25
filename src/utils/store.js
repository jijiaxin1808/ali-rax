import AsyncStorage from 'universal-asyncstorage';

export function setToken(token) {
  AsyncStorage.setItem('undefinedToken', token);
}

export async function hashToken() {
  const token = await AsyncStorage.getItem('undefinedToken');
  return token !== undefined;
}
