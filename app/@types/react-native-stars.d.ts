declare module 'react-native-stars' {
    import { Component } from 'react';
    import { ViewStyle, ImageSourcePropType } from 'react-native';
  
    interface StarsProps {
      count?: number;
      default?: number;
      update?: (value: number) => void;
      half?: boolean;
      starSize?: number;
      fullStar?: React.ReactNode;
      emptyStar?: React.ReactNode;
      halfStar?: React.ReactNode;
      disabled?: boolean;
      spacing?: number;
      backingColor?: string;
      backingOpacity?: number;
      fullStarColor?: string;
      emptyStarColor?: string;
      halfStarColor?: string;
    }
  
    export default class Stars extends Component<StarsProps> {}
  }
  