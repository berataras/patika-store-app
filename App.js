import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";
import { Product, Header } from "./src/components";
import products from './api/product';

const App = () => {
  const renderProduct = ({item}) => <Product product={item} />
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header />
        <FlatList
          numColumns={2}
          renderItem={renderProduct}
          data={products}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
});

export default App;
