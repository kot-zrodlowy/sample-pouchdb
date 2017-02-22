module.exports = (function () {
    //noinspection JSUnresolvedFunction
    let formInstance;

    const getFormDataAsJSON = () => {
        const data = {},
            formData = new FormData(formInstance);
        for (let input of formData.entries()) {
            data[input[0]] = input[1];
        }
        return data;
    };
    return {
        setForm: (query) => {
            formInstance = document.querySelector(query);
        },
        handleSubmitButton: (event) => {
            event.preventDefault();
            return getFormDataAsJSON();
        }


    }

})();

