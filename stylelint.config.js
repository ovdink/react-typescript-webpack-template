const { propertyGroups } = require('./src/styles/stylelint-order');

const propertiesOrder = propertyGroups.map((properties) => ({
    emptyLineBefore: 'always',
    properties,
}));

module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
    customSyntax: 'postcss-styled-syntax',
    rules: {
        'order/properties-order': [
            propertiesOrder,
            {
                severity: 'warning',
                unspecified: 'bottomAlphabetical',
                emptyLineBeforeUnspecified: 'always',
                emptyLineMinimumPropertyThreshold: 3,
            },
        ],
        'selector-class-pattern': null,
    },
    ignorePatterns: ['node_modules', 'build', 'public'],
};
