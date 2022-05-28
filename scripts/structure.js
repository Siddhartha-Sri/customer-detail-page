import {values} from "./setup.js";

//function to add anchor tags in category-div section in main
function addCategory(){
    for(let item in values) {
        document.getElementById("user_div_container").innerHTML += (`
        <div href="#" class="user-div" id="${values[item].username}@user_info" tabindex="0" >
            <div  class="name front-view" id="${values[item].username}@front_view">
                <h2>${values[item].name}</h2>
                <img src="${values[item].image}" alt="user picture" >
                <ul>
                    <li>user name - ${values[item].username}</li>
                    <li>email-id - ${values[item].email}</li>
                    <li>Phone - ${values[item].phone}</li>
                    <li>Website - ${values[item].website}</li>
                </ul>
                <button id="${values[item].username}@front_turn" class="turn-button">See More</button>
            </div>
            <div  class="back-view" id="${values[item].username}@back_view">
                <h2>${values[item].name}</h2>
                <ul>
                    <h3>Address Details</h3>
                    <li>Address - ${values[item].address.street}</li> 
                    <li>Suite -  ${values[item].address.suite}</li> 
                    <li>City -${values[item].address.city}</li> 
                    <li>Zip Code- ${values[item].address.zipcode}</li>
                </ul> 
                <ul>
                    <h3>Company Details</h3>
                    <li>name - ${values[item].company.name}</li>
                    <li>catch phrase - ${values[item].company.catchPhrase}</li>
                    <li>bs- ${values[item].company.bs}</li>
                </ul>
                
                <button id="${values[item].username}@back_turn" class="turn-button">See Less</button>
            </div>
        </div>`);
    }
    let card = document.getElementsByClassName('user-div');
    for(var i=0; i<card.length;i++){
        
        const myArray = card[i].id.split("@");

        let s1 = myArray[0]+"@front_turn";
        document.getElementById(s1).onclick = function() {
            document.getElementById(myArray[0]+'@user_info').classList.toggle('is-flipped');
            document.getElementById(myArray[0]+'@front_view').style = "position:absolute;display:none; transition:transform 0.5s ease-in;";
            document.getElementById(myArray[0]+'@back_view').style = "position:relative;display:block;transform:rotateY(180deg);";
            document.getElementById(myArray[0]+'@back_view').setAttribute('tabindex', `0`);
        };

        let s2 = myArray[0]+"@back_turn";
        document.getElementById(s2).onclick = function() {
            document.getElementById(myArray[0]+'@user_info').classList.toggle('is-flipped');
            document.getElementById(myArray[0]+'@front_view').style = "position:relative;display:block; transition:transform 0.5s ease-in;";
            document.getElementById(myArray[0]+'@back_view').style = "position:absolute;display:none;transform:rotateY(180deg); ";
        };
    }
}

export{addCategory}
   