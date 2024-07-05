const plugin = require('tailwindcss/plugin');

module.exports = plugin(
	({ addUtilities}) => {
    const newUtilities = {
        '.underline-strikethrough': {
        'text-decoration': 'underline line-through',
        },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
});