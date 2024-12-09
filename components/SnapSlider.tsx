import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const { width } = Dimensions.get("window");

interface SliderProps<T> {
  itemsData: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

const Slider = <T,>({ itemsData, renderItem }: SliderProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isInteractingRef = useRef(false);
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        isInteractingRef.current = true;
        const { dx } = gestureState;
        if (dx > 0 && activeIndex > 0) {
          setActiveIndex(activeIndex - 1);
        } else if (dx < 0 && activeIndex < itemsData.length - 1) {
          setActiveIndex(activeIndex + 1);
        }
      },
      onPanResponderRelease: () => {
        isInteractingRef.current = false;
      },
    })
  ).current;

  useEffect(() => {
    if (!isInteractingRef.current) {
      autoScrollRef.current = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === itemsData.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); 
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [activeIndex, itemsData.length]);

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: -activeIndex * width,
      useNativeDriver: true,
    }).start();
  }, [activeIndex]);

  const handleInteractionStart = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      isInteractingRef.current = true;
    }
  };

  const handleInteractionEnd = () => {
    isInteractingRef.current = false;
  };

  const handleDotPress = (index: number) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === itemsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? itemsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handleInteractionStart}
      onPressOut={handleInteractionEnd}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrowButtonLeft} onPress={handlePrevious}>
          <Text style={styles.arrowText}>‹</Text>
        </TouchableOpacity>

        <Animated.View
          style={[
            styles.slider,
            {
              transform: [{ translateX }],
            },
          ]}
          {...panResponder.panHandlers}
        >
          {itemsData.map((item, index) => (
            <View key={index} style={{ width }}>
              {renderItem(item, index)}
            </View>
          ))}
        </Animated.View>

        <TouchableOpacity style={styles.arrowButtonRight} onPress={handleNext}>
          <Text style={styles.arrowText}>›</Text>
        </TouchableOpacity>

        {/* Dot Indicator */}
        <View style={styles.dotsContainer}>
          {itemsData.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dot,
                activeIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
              onPress={() => handleDotPress(index)}
            />
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  slider: {
    flexDirection: "row",
  },
  arrowButtonLeft: {
    position: "absolute",
    left: 0,
    top: "50%",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    zIndex: 1,
  },
  arrowButtonRight: {
    position: "absolute",
    right: 0,
    top: "50%",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    zIndex: 1,
  },
  arrowText: {
    color: "#fff",
    fontSize: 24,
  },
  dotsContainer: {
    position: "absolute",
    bottom: -5,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#333",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});

export default Slider;
