import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";

function Product({ product }) {
  return (
    <TouchableOpacity style={styles.productItem}>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text style={styles.productName}>{product.title}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Text style={styles.stockText}>{product.inStock ? '' : 'Stokta Yok'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productItem: {
    backgroundColor: '#ECEFF1',
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    margin: 5,
    flex: 1,
  },
  image: {
    height: 150,
    width: '100%',
    resizeMode: 'cover'
  },
  productName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
    height: 50,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'gray',
  },
  stockText:{
    fontSize: 15,
    color: 'red',
    marginTop: 10,
    fontWeight: '600'
  }
})

export default Product;
