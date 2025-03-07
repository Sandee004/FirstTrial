import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Define the props interface for TypeScript
interface Movie {
  title: string;
  poster_path: string | null;
  overview: string;
  isLiked: boolean;
  id: number | string;
}

const SingleMovieScreen: React.FC<{ movie: Movie }> = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "default_image_url";

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.movieTitle} numberOfLines={2}>
        {movie.title}
      </Text>
    </View>
  );
};

export default SingleMovieScreen;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    margin: 8,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
  },
});
