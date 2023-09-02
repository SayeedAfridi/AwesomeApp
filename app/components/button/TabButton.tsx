import { isAndroid } from '@app/constants/platform.constants';
import { useTheme } from '@app/lib/hooks';
import React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { Box, PressBox, TouchBox } from '../box';
import Text from '../text/Text';

const TouchComponent = isAndroid ? PressBox : TouchBox;
const ripple = isAndroid ? { android_ripple: { borderless: true } } : {};
const AnimatedBase: any = Animated.createAnimatedComponent(
  TouchComponent as any,
);

export interface TabButtonProps {
  active?: boolean;
  onPress?: () => void;
  title: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, title, onPress }) => {
  const theme = useTheme();
  const status = useDerivedValue(() => withTiming(active ? 1 : 0));
  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      status.value,
      [0, 1],
      [theme.colors.darkGrey, theme.colors.primary],
    );
    return {
      backgroundColor,
    };
  });
  return (
    <Box borderRadius='s' flex={1} overflow='hidden'>
      <AnimatedBase
        borderRadius='s'
        justifyContent='center'
        alignItems='center'
        minWidth={150}
        style={[{ padding: theme.spacing.s + 4 }, rStyle]}
        onPress={onPress}
        {...ripple}>
        <Text variant='button'>{title}</Text>
      </AnimatedBase>
    </Box>
  );
};

export default TabButton;
