// External Libraries
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';

// Components
import Movies from './src/components/Movies';

// Services
import api from './src/services/api';

function App() {
  // States
  const [movies, setMovies] = useState([]);
  const [loading, setLoagind] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('r-api/?api=filmes');
      setMovies(response.data);
      setLoagind(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#09A6FF" size={40} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Movies data={item} />}
      />
    </View>
  );
}

// Stylization
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
