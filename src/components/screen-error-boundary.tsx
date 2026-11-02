import type { ErrorBoundaryProps } from "expo-router";
import { Pressable, Text, View } from "react-native";

export function ScreenErrorBoundary({
	error,
	retry,
}: Readonly<ErrorBoundaryProps>) {
	return (
		<View className="flex-1 items-center justify-center gap-4 bg-white p-6 dark:bg-black">
			<Text
				accessibilityRole="header"
				className="text-lg font-semibold text-black dark:text-white"
			>
				Something went wrong
			</Text>
			<Text className="text-center text-neutral-500">{error.message}</Text>
			<Pressable
				accessibilityRole="button"
				accessibilityLabel="Try again"
				onPress={retry}
				className="min-h-11 justify-center rounded-full bg-black px-6 dark:bg-white"
			>
				<Text className="font-semibold text-white dark:text-black">
					Try again
				</Text>
			</Pressable>
		</View>
	);
}
