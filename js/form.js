/**
 * A module for form operations
 * @module form
 * @type {{setForm, handleSubmitButton}}
 */
module.exports = (function () {

    let formInstance;
    /**
     * Function to get Data as JS object
     * @private
     * @returns {object} - return values of form
     */
    const getFormDataAsJSON = () => {
        const data = {},
            formData = new FormData(formInstance);
        for (let input of formData.entries()) {
            data[input[0]] = input[1];
        }
        return data;
    };
    return {
        /**
         * Set reference to form in HTML
         * @param query - query to describe form
         */
        setForm: (query) => {
            formInstance = document.querySelector(query);
        },
        /**
         * Check if form has empty fields
         * @param item - object from fields
         * @returns {boolean} - true if at least one of fields are
         */
        hasEmptyFields: (item) => {
           return item.date=="" || item.name == "";
        },
        handleSubmitButton: (event) => {
            event.preventDefault();
            return getFormDataAsJSON();

        }

    }

})();

