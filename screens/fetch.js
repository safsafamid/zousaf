// In ProductScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductScreen = () => {
  const route = useRoute();
  const { category } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on the selected category
    // For simplicity, you can use a mock API or fetch data from your backend
    const fetchProducts = async () => {
      try {
        // Example: Fetch products from an API based on the selected category
        const response = await fetch(`https://api.example.com/products?category=${category}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <View>
      <Text>Products in {category}</Text>
      {/* Render the list of products */}
      {products.map((product) => (
        <Text key={product.id}>{product.name}</Text>
      ))}
    </View>
  );
};

export default ProductScreen;
