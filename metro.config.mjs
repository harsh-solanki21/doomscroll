import { getDefaultConfig } from "expo/metro-config";
import { withNativeWind } from "nativewind/dist/metro/index.js";

const config = getDefaultConfig(import.meta.dirname);

export default withNativeWind(config, { input: "./src/global.css" });
