import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

type IconFamily = 'Ionicons' | 'MaterialIcons';

interface CustomIconProps extends IconProps<string> {
  family: IconFamily;
  name: ComponentProps<typeof Ionicons>['name'] | ComponentProps<typeof MaterialIcons>['name'];
}

export function TabBarIcon({ family, name, style, ...rest }: CustomIconProps) {
  switch (family) {
    case 'MaterialIcons':
      return <MaterialIcons name={name as ComponentProps<typeof MaterialIcons>['name']} size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
    case 'Ionicons':
    default:
      return <Ionicons name={name as ComponentProps<typeof Ionicons>['name']} size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
  }
}
