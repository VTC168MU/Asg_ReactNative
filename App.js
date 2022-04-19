import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import BlogNavigation from './Navigations/BlogNavigation';
import authReducer from './Store/reducers/authReducer';
import BlogReducers from './Store/reducers/BlogReducers';
import CagetoryReducers from './Store/reducers/CagetoryReducers';

const rootReducers = combineReducers({
  categories: CagetoryReducers,
  auths: authReducer,
  bloges: BlogReducers
})
const store = createStore(rootReducers)
export default function App() {
  return (
    <Provider store={store}>
      <BlogNavigation></BlogNavigation>
    </Provider>
  );
}
