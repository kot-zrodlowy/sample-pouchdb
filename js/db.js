//noinspection JSUnresolvedVariable
/**
 * A module for manage database query
 * @module db
 * @type {{addItem, removeItem, editItem, listItems}}
 */
module.exports = (() => {

    //noinspection JSUnresolvedFunction
    const PouchDB = require("pouchdb"),
        /**
         * Configuration object for database.
         * @type {{localName: string}} - name of local db
         */
        CONFIG = {localName: "toeats"},
        toEatBase = new PouchDB(CONFIG.localName);

    /**
     * Function to generate readable id with only small letters
     * @param title - name value from form
     * @return {string} - id without digits, whitespace, special characters
     */
    function generateId(title) {
        title = title.toLowerCase();
        return title.replace(/[\s\W\d]/g, "");
    }

    return {
        /**
         * @function addItem - adding item to DB
         * @param item {Object} - item to add to DB
         */
        addItem: (item) => {
            item._id = generateId(item.name);
            //noinspection JSUnresolvedFunction
            toEatBase.put(item).then((res) => {
                console.log("Item added");
                console.log(res);
                //window.location.reload(true);
            }).catch((err) => {
                console.error("Cannot add item" + err);
            })
        },
        /**
         * @function removeItem - remove item gave as param from DB
         * @param item {Object} - Item from remove
         */
        removeItem: (item) => {
            item.id = generateId(item.name);
            toEatBase.get(item.id).then((res) => {
                toEatBase.remove(res).then((res) => {
                    console.log("Item removed "+ JSON.stringify(res));
                }).catch((err) => {
                    console.error("Cannot remove this item " + err);
                });
            }).catch((err) => {
                console.error("Item not found" + err);
            });

        },
        /**
         * @function editItem - edit item gave in parameter
         * @param item {Object} - item to edit
         */
        editItem: (item) => {
            toEatBase.get(item._id).then((res) => {
                toEatBase.put(item).then((es) => {
                    console.log("Item updated " + res + es);
                }).catch((err) => {
                    console.log("Cannot edit item " + err);
                })
            }).catch((err) => {
                console.error("Cannot getting item" + err);
            })
        },
        /**
         * @function list all items from DB
         * @param callback {Function} - action which you want to do with data. It should have res object as a param.
         */
        listItems: (callback) => {
            toEatBase.allDocs({
                include_docs: true,
                descending: true
            }).then((res) => {
                callback(res);
            }).catch((err) => {
                console.error("Cannot list items from DB " + err);
            })
        }
    }

})();



