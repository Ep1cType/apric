/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {TasksListPage} from 'screens/tasks-list';
import {Provider} from 'react-redux';
import {store} from 'app/store';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={styles.view}>
          <TasksListPage />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    paddingVertical: 48,
  },
});

export default App;
