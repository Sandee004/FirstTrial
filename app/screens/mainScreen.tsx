import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import SingleMovieScreen from "./singleMovieScreen";

interface Movie {
  title: string;
  poster_path: string | null;
  overview: string;
  isLiked: boolean;
  id: number;
}

const apiKey = "ceba03f56c18f997a242eb118d552605";
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16`;

export default function MainScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const moviesWithNumberId = data.results.map((movie: Movie) => ({
          ...movie,
          id: Number(movie.id),
        }));
        setMovies(moviesWithNumberId);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🎬 Animated Movies</Text>

      <View>
        {loading ? (
          <ActivityIndicator size="large" color="purple" />
        ) : (
          <FlatList
            data={movies}
            keyExtractor={(item: { id: number }) => item.id.toString()}
            renderItem={({ item }) => <SingleMovieScreen movie={item} />}
            numColumns={2}
            contentContainerStyle={styles.list}
          />
        )}
      </View>

      <View style={styles.baseBar}>
        <Icon name="home" size={30} color="white" />
        <Icon name="favorite" size={30} color="white" />
        <Icon name="person" size={30} color="white" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
  },
  baseBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    height: 50,
    alignItems: "center",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
