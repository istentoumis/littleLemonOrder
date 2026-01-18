import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from '../components/Header';
import { menu } from '../constants/Menu';
import { filterMenu } from '../utils/menuUtils';
import { CartContext } from '../context/CartContext';

const HomeScreen = ({ navigation }) => {
  const { cartItems, addToCart } = useContext(CartContext)!;
  const [selectedCategory, setSelectedCategory] = useState(menu[0].id);
  const [search, setSearch] = useState('');
  const filteredMenu = filterMenu(menu, search);
  const currentCategory =
    filteredMenu.find(cat => cat.id === selectedCategory) || filteredMenu[0];

  const handleAddDish = dish => {
    addToCart(dish);
    Alert.alert('Added to cart', `${dish.name} has been added!`);
  };

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.cartButtonText}>🛒</Text>
        {cartItems.length > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search dishes..."
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
      >
        {filteredMenu.map(cat => (
          <Pressable
            key={cat.id}
            onPress={() => setSelectedCategory(cat.id)}
            style={[
              styles.tabButton,
              selectedCategory === cat.id && styles.tabButtonActive,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedCategory === cat.id && styles.tabTextActive,
              ]}
            >
              {cat.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      <ScrollView style={styles.dishesContainer}>
        {currentCategory?.dishes.map((dish, index) => (
          <View key={index} style={styles.dishCard}>
            <Image
              source={require('../assets/little-lemon-logo-grey.png')}
              style={styles.dishImage}
            />
            <Text style={styles.dishName}>{dish.name}</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAddDish(dish)}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabs: {
    flexGrow: 0,
    marginVertical: 16,
    paddingHorizontal: 12,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 12,
  },
  tabButtonActive: {
    backgroundColor: '#495E57',
  },
  tabText: {
    color: '#333',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#fff',
  },
  dishesContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  dishCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fafafa',
  },
  dishImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  dishName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#a9c3e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  cartButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#bbe7f1',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  cartButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  cartBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: '#FF6347',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
