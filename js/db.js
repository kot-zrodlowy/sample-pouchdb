module.exports = (() => {

    const PouchDB = require("pouchdb");
    const CONFIG = {
        localName: "toeats"
    };
    const toEatBase = new PouchDB(CONFIG.localName);
    return {
        addItem: (item) => {
            toEatBase.put(item, (err, res) => {
                if (err) {
                    console.error("Cannot add item to database.");
                } else {
                    console.log("Item added");
                    console.log(res);
                }
            })
        },
        removeItem: (item) => {
            toEatBase.remove(item, (err, res) => {
                if (err) {
                    console.error("Cannot remove item to database. " + err);
                } else {
                    console.log("Item removed");
                    console.log(res);
                }
            });
        },
        editItem: (item) => {
            toEatBase.get(item._id, (err, res) => {
                if (err) {
                    console.error("Cannot get item or item not exist. " + err);
                } else {
                    toEatBase.put(item, (err, res) => {
                        if (err) {
                            console.error("Cannot update item. " + err);
                        } else {
                            console.log("Item updated " + res);
                        }
                    })
                }
            })
        },
        listItems: (callback) => {
            toEatBase.allDocs({
                include_docs: true,
                descending: true
            }, (err, res) => {
                if(err){
                    console.error("Cannot get all items from DB. " + err);
                } else {
                    callback(res);
                }
            })
        }
    }

})();



