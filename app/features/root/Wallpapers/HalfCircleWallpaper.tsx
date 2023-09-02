import {
  Canvas,
  Fill,
  LinearGradient,
  Path,
  Skia,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import { Dimensions } from 'react-native';

export interface HalfCircleWallpaperProps {}

const { height, width } = Dimensions.get('window');
const center = vec(width / 2, height / 2);

const halfCircle = Skia.Path.Make();

halfCircle.addCircle(center.x, center.y, width / 2);
halfCircle.trim(0.5, 1, false);

const background = ['#013158', '#016579', '#016579', '#013158'];
const circle1 = ['#000423', '#0c88b6', '#1df7bc', '#d4fdae'];
const circle2 = ['#043648', '#0c88b6', '#f592c4', '#f592c4'];

const HalfCircleWallpaper: React.FC<HalfCircleWallpaperProps> = ({}) => {
  return (
    <Canvas style={{ flex: 1 }}>
      <Fill>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, height)}
          colors={background}
        />
      </Fill>
      <Path
        path={halfCircle}
        transform={[{ rotate: Math.PI / 6 }, { translateX: -width / 4 }]}
        origin={center}>
        <SweepGradient
          colors={circle1}
          c={center}
          start={0}
          end={180}
          transform={[
            { scaleY: -1 },
            { translateX: width / 4 },
            { rotate: -Math.PI / 6 },
          ]}
          origin={center}
        />
      </Path>
      <Path
        path={halfCircle}
        transform={[
          { scaleY: -1 },
          { rotate: -Math.PI / 6 },
          { translateX: width / 4 },
        ]}
        origin={center}>
        <SweepGradient
          colors={circle2}
          c={center}
          start={180}
          end={360}
          transform={[
            { translateX: -width / 4 },
            { rotate: Math.PI / 6 },
            { scaleY: 1 },
          ]}
          origin={center}
        />
      </Path>
    </Canvas>
  );
};

export default HalfCircleWallpaper;
