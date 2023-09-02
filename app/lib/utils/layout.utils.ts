import { Component } from 'react';
import { Dimensions, EventSubscription, PixelRatio } from 'react-native';

let screenWidth = Dimensions.get('window').width;

let screenHeight = Dimensions.get('window').height;

let dimensionSub: EventSubscription | undefined;

const widthPercentageToDP = (widthPercent: number | string): number => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent: number | string): number => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const listenOrientationChange = (that: Component<any, any>): void => {
  dimensionSub = Dimensions.addEventListener('change', newDimensions => {
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;

    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
    });
  });
};

const removeOrientationListener = () => {
  dimensionSub?.remove();
};

export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
  screenWidth,
  screenHeight,
};
