import { addCategory } from "./structure.js";
var values;
// Ajax Call
(function ajax() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = readyServe;
    xhr.open('GET', 'https://detail-card-project-default-rtdb.firebaseio.com/card-details.json');
    xhr.send();
    function readyServe() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                values = JSON.parse(xhr.responseText);
                console.log(values);
               console.log( typeof(values));

               //intially print all the cards
                addCategory();
            }
        }
    }
})();

export {values}