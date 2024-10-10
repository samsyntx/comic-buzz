import React, { useState } from 'react';
import { Image, View, ActivityIndicator, StyleSheet, ImageStyle, ViewStyle } from 'react-native';

interface PropTypes {
  uri: string;
  placeholder?: string;
  imageStyle?: ImageStyle;
  containerStyle: ViewStyle;
  alt?: string;
}

const LazyLoadImage: React.FC<PropTypes> = ({ uri, placeholder, imageStyle, containerStyle, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {isLoading && !error && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      )}
      <Image
        source={error ? { uri: placeholder } : { uri }}
        style={[styles.image, imageStyle, isLoading ? { display: 'none' } : null]}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        accessibilityLabel={alt} // Added accessibilityLabel
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
});

export default LazyLoadImage;
