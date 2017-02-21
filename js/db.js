module.exports = (() => {

    const PouchDB = require("pouchdb");
    const CONFIG = {
        localName: "toeats"
    };
    const toEatBase = new PouchDB(CONFIG.localName);
    return {
        addItem: (item) => {
            toEatBase.put(item).then((res) => {
                console.log("Item added");
                console.log(res);
            }).catch((err) => {
                console.error("Cannot add item" + err);
            })
        },
        removeItem: (item) => {
            toEatBase.remove(item).then((res) => {
                console.log("Item removed");
                console.log(res);
            }).catch((err) => {
                console.error("Cannot remove this item " + err);
            });
        },
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



