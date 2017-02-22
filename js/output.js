//noinspection JSUnresolvedVariable
/**
 * Created by kornelia on 22.02.17.
 */
module.exports = (function () {


    return {
        showToEatItem: (eat, callback) => {
            const li = document.createElement("li"),
                button = document.createElement("button"),
                date = document.createElement("time"),
                eatName = document.createElement("p");

            button.id = "remove-button";
            button.type = "click";
            button.setAttribute("value", "Usuń");

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
        stylingToEatItem: (item) => {
            item.classList.add("task-item");
        },
        removeLiEl: (li) => {
            li.parentNode.removeChild(li);
        },

    }
})();
