import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CategorieScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: 'قائمة الأطباق الرئيسية',
      progress: '20%',
      users: [
        { id: 1, img: 'https://hadhramaut.ma/INDELIVERY/managemedia/madbi.jpg' },
      ],
      meals: [
        {
          id: 1,
          name: 'كبسة تونه',
          price: 60,
          image: 'https://hadhramaut.ma/Indelivery//images/%D9%83%D8%A8%D8%B3%D8%A9%20%D8%AA%D9%88%D9%86%D8%A9.jpg',
        },
        {
          id: 2,
          name: 'شواية نص دجاجة',
          price: 90,
          image: 'https://hadhramaut.ma/Indelivery//images/%D8%AF%D8%AC%D8%A7%D8%AC%20%D8%B4%D9%88%D8%A7%D9%8A%D8%A9.jpg',
        },
        {
          id: 3,
          name: 'مضغوط نص دجاجة',
          price: 90,
          image: 'https://hadhramaut.ma/INDELIVERY/images/%D9%85%D8%B6%D8%BA%D9%88%D8%B7%20%D8%AF%D8%AC%D8%A7%D8%AC.jpg',
        },
      ],
      backgroundColor: '#ffdcb2',
      titleColor: '#ff8c00',
    },
    {
      id: 2,
      title: 'قائمة الصحون الجانبية',
      progress: '60%',
      users: [
        { id: 15, img: 'https://hadhramaut.ma/INDELIVERY/managemedia/side.jpg' },
      ],
      backgroundColor: '#d8e4fa',
      titleColor: '#6495ed',
    },
    {
      id: 3,
      title: 'قائمة المقبلات',
      progress: '50%',
      users: [
        { id: 10, img: 'https://hadhramaut.ma/INDELIVERY/managemedia/b0174c3c-e19c-480e-82e3-69017c15ecb8.jpg' },
      ],
      backgroundColor: '#e2caf8',
      titleColor: '#8a2be2',
    },
    {
      id: 4,
      title: 'قائمة الفطور',
      progress: '40%',
      users: [
        { id: 7, img: 'https://hadhramaut.ma/INDELIVERY/managemedia/petit-dej.jpg' },
      ],
      backgroundColor: '#bfdfdf',
      titleColor: '#008080',
    },
    {
      id: 5,
      title: 'قائمة المشروبات الساخنة',
      progress: '60%',
      users: [
        { id: 15, img: 'https://hadhramaut.ma/INDELIVERY/managemedia/cafe.jpg' },
      ],
      backgroundColor: '#ffccff',
      titleColor: '#ff00ff',
    },
    {
      id: 6,
      title: 'قائمة المشروبات البارده',
      progress: '60%',
      users: [
        { id: 24, img: 'https://hadhramaut.ma/INDELIVERY/managemedia/jus.jpg' },
      ],
      backgroundColor: '#c7e3ff',
      titleColor: '#1e90ff',
    },
    {
      id: 6,
      title: '  قائمة الحلويات',
      progress: '60%',
      users: [
        { id: 24, img: 'https://hadhramaut.ma/INDELIVERY/managemedia/b0174c3c-e19c-480e-82e3-69017c15ecb8.jpg' },
      ],
      backgroundColor: '#c7e3ff',
      titleColor: '#1e90ff',
    },
    {
      id: 6,
      title: 'PROMOS HADHRAMAUT',
      progress: '60%',
      users: [
        { id: 24, img: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
      ],
      backgroundColor: '#c7e3ff',
      titleColor: '#1e90ff',
    },
  ]);

  const renderAppointmentCard = ({ item  }) => (
    <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Meals', { meals: item.meals })}>
      <View style={[styles.card, { backgroundColor: item.backgroundColor, borderTopWidth:4, borderTopColor: item.titleColor}]}>
        <Text style={[styles.cardTitle, { color: item.titleColor }]}>{item.title}</Text>
        <View style={styles.cardContent}>
          <View style={styles.attendeesContainer}>
            {item.users.map((attendee) => (
              <Image key={attendee.id} source={{ uri: attendee.img }} style={styles.attendeeImage} />
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const searchFilter = (item) => {
    const query = searchQuery.toLowerCase();
    return item.title.toLowerCase().includes(query);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>فئات المتجر</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="بحث..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList 
        contentContainerStyle={styles.listContainer}
        data={appointments.filter(searchFilter)}
        renderItem={renderAppointmentCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row-reverse',
    flex: 1,
    padding: 10,
    paddingTop:60,
  },
  listContainer:{
    paddingHorizontal:5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
    flex:1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    marginHorizontal:10,

    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize:18,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  cardDates: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  cardDate: {
    color: '#888',
  },
  cardContent: {
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  attendeesContainer: {
    flexWrap:'wrap',
    flexDirection: 'row',
  },
  attendeeImage: {
    width: 138,
    height: 100,
    borderRadius: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    flex:1,
  },
  buttonText: {
    color: '#00008B',
  },
});

export default CategorieScreen;