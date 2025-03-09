import React from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";

interface Props {
  route: {
    params: {
      movie: {
        title: string;
        overview: string;
        poster_path: string;
      };
    };
  };
}

export default function MovieDetailScreen({ route }: Props) {
  const { movie } = route.params;

  return (
    <View style={tw`p-4 bg-[#373b69] flex-1`}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={tw`w-full h-80 rounded-lg`}
      />
      <Text style={tw`text-white text-2xl font-bold mt-4`}>
        {movie.title}
      </Text>
      <Text style={tw`text-gray-300 mt-2`}>{movie.overview}</Text>
    </View>
  );
}
