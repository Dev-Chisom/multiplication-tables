// // //select element from the DOM

 const multiplier = document.getElementById('value1').value;
 const range = document.getElementById('value2').value;
 const table = document.getElementById('tables')


function timesTable() {
    const range = document.getElementById('value2').value;
    const multiplier = document.getElementById('value1').value;

    let displayTable = '';
    for (let i=1; i<=range; i++) {

      displayTable +=  multiplier + " x " + i +" = "+ multiplier*i + "<br>";
     
    }
    const table = document.getElementById('tables').innerHTML = displayTable;
 }

// // let fruit = ['Banana', 'orange', 'apple', 'mango']
// // // fruit.splice(2,2, 'grapes', 'lemon' )
// // console.log(fruit.length);


// let number = 1;
// console.log(number++);