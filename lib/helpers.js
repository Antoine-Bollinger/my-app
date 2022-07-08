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