import {
  Canvas,
  Fill,
  Group,
  LinearGradient,
  Mask,
  Rect,
  Shadow,
  Turbulence,
  interpolate,
  rect,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import { useWindowDimensions } from 'react-native';

const length = 9;
const stripes = new Array(length).fill(0);

const StripeWallpaper: React.FC = () => {
  const { height, width: wWidth } = useWindowDimensions();
  const width = wWidth / length;
  const origin = vec(width / 2, height / 2);
  return (
    <Canvas style={{ flex: 1 }}>
      <Fill>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(0, height)}
          colors={['#1a0049', '#2f0604']}
        />
      </Fill>
      <Group>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(0, height)}
          colors={['#5a3ec3', '#eba5c5', '#e1d4b7', '#e9b74c', '#cf1403']}
        />
        <Shadow dy={0} dx={0} blur={20} color='balck' />
        {stripes.map((_, i) => {
          return (
            <Group
              key={i}
              origin={origin}
              transform={[
                {
                  scaleY: interpolate(
                    i,
                    [0, (length - 1) / 2, length - 1],
                    [1, 0.6, 1],
                  ),
                },
              ]}>
              <Mask
                mask={
                  <Rect rect={rect(i * width, 0, width, height)}>
                    <LinearGradient
                      start={vec(0, 0)}
                      end={vec(0, height)}
                      colors={['transparent', 'black', 'black', 'transparent ']}
                    />
                  </Rect>
                }>
                <Rect rect={rect(i * width, 0, width, height)} />
              </Mask>
            </Group>
          );
        })}
      </Group>
      <Fill blendMode='softLight'>
        <Turbulence freqX={1} freqY={1} octaves={3} />
      </Fill>
    </Canvas>
  );
};

export default StripeWallpaper;
