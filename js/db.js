module.exports = (() => {

    const PouchDB = require("pouchdb");
    const CONFIG = {
        localName: "toeats"
    };
    const toEatBase = new PouchDB(CONFIG.localName);
    return {
        /**
         * @function addItem - adding item to DB
         * @param item {Object} - item to add to DB
         */
        addItem: (item) => {
            toEatBase.put(item).then((res) => {
                console.log("Item added");
                console.log(res);
            }).catch((err) => {
                console.error("Cannot add item" + err);
            })
        },
        /**
         * @function removeItem - remove item gave as param from DB
         * @param item {Object} - Item from remove
         */
        removeItem: (item) => {
            toEatBase.remove(item).then((res) => {
                console.log("Item removed");
                console.log(res);
            }).catch((err) => {
                console.error("Cannot remove this item " + err);
            });
        },
        /**
         * @function editItem - edit item gave in parameter
         * @param item {Object} - item to edit
         */
        editItem: (item) => {
            toEatBase.get(item._id).then((res) => {
                toEatBase.put(item).then((es) => {
                    console.log("Item updated " + res);
                }).catch((err)=>{
                    console.log("Cannot edit item " + err);
                })
            }).catch((err)=>{
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



