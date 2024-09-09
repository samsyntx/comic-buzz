import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Animated, PanResponder, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setItems] = useState([
    { title: 'Item 1', text: 'Text 1' },
    { title: 'Item 2', text: 'Text 2' },
    { title: 'Item 3', text: 'Text 3' },
  ]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const { dx } = gestureState;
        if (dx > 0) {
          // Swipe right
          if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
          }
        } else if (dx < 0) {
          // Swipe left
          if (activeIndex < items.length - 1) {
            setActiveIndex(activeIndex + 1);
          }
        }
      },
    })
  ).current;

  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: -activeIndex * width,
      useNativeDriver: true,
    }).start();
  }, [activeIndex]);

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width,
          height: 250,
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          flexDirection: 'row',
          transform: [{ translateX }],
        }}
        {...panResponder.panHandlers}
      >
        {items.map((item, index) => (
          <View key={index}>{renderItem({ item, index })}</View>
        ))}
      </Animated.View>
    </View>
  );
};

export default Slider;