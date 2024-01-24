import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native';

let meal;
const GroceryDeliveryApp = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const route = useRoute();
  if (route.params) {
    const meals = route.params;
    meal = meals['meals'];

  } else {
    meal = [
      {
        id: 1,
        name: 'Apples',
        price: 0.99,
        image: 'https://www.bootdey.com/image/280x280/FF00FF/000000',
      },
      {
        id: 2,
        name: 'Bananas',
        price: 0.79,
        image: 'https://www.bootdey.com/image/280x280/00BFFF/000000',
      },
      {
        id: 3,
        name: 'Bread',
        price: 2.99,
        image: 'https://www.bootdey.com/image/280x280/20B2AA/000000',
      },
    ]
  }
  // console.log(meal);

  const searchFilter = (item) => {
    const query = searchQuery.toLowerCase();
    return item.name.toLowerCase().includes(query);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://hadhramaut.ma/fr/bannerfinal.png' }}
        style={styles.coverImage}
      />
      <Text style={styles.title}>نوع الطبق</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="بحث..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={meal.filter(searchFilter)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemContent}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)} د,م</Text>
              </View>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+ عربة التسوق</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MealDetials')}>
                <Text style={styles.buttonText}>Add to Wishlist</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  coverImage: {
    height: 140,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 67,
    marginBottom: 7,
    marginHorizontal: 10,
  },
  searchInput: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 20,
  },
  card: {
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 115,
    height: 70,
    borderRadius: 5,
    // marginRight: 2,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#999',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#FFC107',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default GroceryDeliveryApp