export const ArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item,
        };
    }, initialValue);
};

export const AddClassesToHTMLString = (string = '', options = {}) => {
    if (Object.keys(options).length === 0) return string;
    Object.keys(options).forEach(option => {
        const re = new RegExp(`<${option}>`, 'g');
        string = string.replace(re, `<${option} class="${options[option]}">`);
    });
    return string;

}

export const inputCheck = (value = '', type = 'text') => {
    if (value === '') return false;
    let regexTest = {
        "text": /^[\-/A-Za-z\u00C0-\u017F -,]+$/,
        "email": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "textWithSpace": /^[\-/A-Za-z0-9\u00C0-\u017F -,?.;:^]*$/,
    };
    return regexTest[type].test(value)
}