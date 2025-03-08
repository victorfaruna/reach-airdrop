// utils/scaling.js
import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

// Base dimensions (e.g., based on a standard iPhone screen)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Scale size based on width
const scale = (size: any) => (width / BASE_WIDTH) * size;

// Scale font size based on width
const fontScale = (size: any) => {
  const scaledSize = (width / BASE_WIDTH) * size;
  return PixelRatio.roundToNearestPixel(scaledSize);
};

export { scale, fontScale };
