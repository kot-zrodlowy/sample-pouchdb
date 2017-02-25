//noinspection JSUnresolvedVariable
/**
 * Module to manage output and show it on the screen
 * @module output
 * @type {{showToEatItem, stylingToEatItem, removeLiEl}}
 */
module.exports = (function () {
    return {
        /**
         * Format data in properly format
         * @param eat - an object from database document
         * @param callback - callback function for button for every list item
         * @returns {Element} - HTML element to show an output
         */
        showToEatItem: (eat, callback) => {
            const li = document.createElement("li"),
                button = document.createElement("button"),
                date = document.createElement("time"),
                eatName = document.createElement("p");

            button.id = "remove-button";
            button.type = "click";
            button.setAttribute("value", "Usuń");

            date.datetime = eat.date;
            li.appendChild(date);
            li.appendChild(eatName);
            li.appendChild(button);

            eatName.textContent = eat.name;
            date.textContent = eat.date;
            button.textContent = "Usuń";

            button.addEventListener("click", (e) => {
                event.preventDefault();
                callback(e);
            });
            return li;
        },
        /**
         * Add custom css style to the list item
         * @param li - list item element
         * @see showToEat()
         */
        stylingToEatItem: (li) => {
            li.classList.add("task-item");
        },
        /**
         * Remove list item from view.
         * @param li - list item element
         * @see showToEat()
         */
        removeLiEl: (li) => {
            li.parentNode.removeChild(li);
        },
    }
})();
