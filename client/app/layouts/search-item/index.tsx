import React from 'react';
import { Image, Text, View } from 'react-native';
import { searchItemStyle } from './search-items-styles';

interface ItemProps {
  detail: { id: number; title: string; author: string; image: string };
}

const SearchItem: React.FC<ItemProps> = ({ detail }) => {
  const { title, author } = detail;

  return (
    <View style={searchItemStyle.liItemContainer}>
      <Image
        source={{
          uri: detail.image,
        }}
        resizeMode="stretch"
        style={searchItemStyle.image}
      />
      <View style={searchItemStyle.textContainer}>
        <Text style={searchItemStyle.title}>{title}</Text>
        <Text style={searchItemStyle.author}>{author}</Text>
      </View>
    </View>
  );
};

export default SearchItem;
