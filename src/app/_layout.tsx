import "@/global.css";

import { Stack } from "expo-router";

import { ScreenErrorBoundary } from "@/components/screen-error-boundary";

export const unstable_settings = {
	screenErrorBoundary: ScreenErrorBoundary,
};

export default function RootLayout() {
	return <Stack />;
}
