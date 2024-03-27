module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint-config-airbnb-base",
        "airbnb-typescript/base",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: ["prettier", "import", "@typescript-eslint"],
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-console": 0,
        "prettier/prettier": "error",
        "@typescript-eslint/no-use-before-define": "off",
    },
};
