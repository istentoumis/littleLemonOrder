import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = {
  hasBackButton?: boolean;
};

const Header = ({ hasBackButton = false }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {hasBackButton && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      )}
      <Image
        source={require('../assets/little-lemon-logo-grey.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>LITTLE LEMON</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 12,
    padding: 8, // increase touchable area
  },
  backButtonText: {
    fontSize: 32, // bigger arrow
    color: '#000',
    fontWeight: 'bold',
  },
  logo: {
    width: 120,
    height: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default Header;
