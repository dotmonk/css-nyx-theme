const themeColors = ["standard", "bright", "success", "error"];

console.log(`
    button,
    input[type='submit'],
    input[type='button'],
    ${themeColors.map(color => `a.nyx-button-${color}`).join(", ")},
    ${themeColors.map(color => `a.nyx-button-active-${color}`).join(", ")},
    ${themeColors.map(color => `a.nyx-button-disabled-${color}`).join(", ")}
    {
        display: block;
        width: 100%;
    }

    input[type='text'], input[type='password'], input:not([type]) {
        display: block;
        width: 100%;
    }

    textarea {
        display: block;
        width: 100%;
    }
`);
