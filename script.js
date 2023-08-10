/* sbse phle hum kya krngye jo hamari center mye value hai use lelengy
 constValue is an element*/
const countValue = document.querySelector('#counter');

const increment = ()=> {
    /* to sbse phle countValue ko lelengye
     parseInt ka yahan use kiya hai string value ko 
     integer mye change krne ke liye*/
    let value = parseInt(countValue.innerText);
     
    //ab increment krengye
    value = value + 1;

    //Value ko waps se UI mye dalna hai
    countValue.innerText = value;
};

const decrement = ()=> {

    //get the value from the UI.
    let value = parseInt(countValue.innerText);

    //ab decrement krengye
    value = value - 1;

    //Update the value
    countValue.innerText = value;

};
