const form = require("./form"),
    db = require("./db"),
    out = require("./output"),
    list = document.querySelector("#task-list");
    formSubmitButton = document.querySelector('#add-button');

form.setForm('#toeat-form');

formSubmitButton.addEventListener("click", (e) => {
    const item = form.handleSubmitButton(e);
    console.log(item);
    if(form.hasEmptyFields(item)){
        alert("Wypełnij wszystkie pola");
    } else {
        db.addItem(item);
        const li = out.showToEatItem(item, (e) => {
            db.removeItem(item);
            out.removeLiEl(li);
        });
        out.stylingToEatItem(li);
        list.appendChild(li);
        e.target.parentNode.reset();
    }

}, true);


db.listItems((res) => {
    for (let item of res.rows) {
        const li = out.showToEatItem(item.doc, (e) => {
            db.removeItem(item.doc);
            out.removeLiEl(li);
        });
        list.appendChild(li);
        out.stylingToEatItem(li);
    }


});
