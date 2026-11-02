import expoConfig from "eslint-config-expo/flat.js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";

export default defineConfig([
	expoConfig,
	eslintPluginPrettierRecommended,
	{
		ignores: ["dist/*", "example/*"],
	},
	{
		files: ["**/*.ts", "**/*.tsx"],
		rules: {
			"@typescript-eslint/no-require-imports": [
				"error",
				{ allow: [String.raw`\.(png|jpe?g|gif|webp)$`] },
			],
		},
	},
	{
		files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
		rules: {
			"import/no-commonjs": "error",
		},
	},
]);
