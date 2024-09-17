// Option 1.1 : By Adding HTML onclick Attribute Directly on HTML

//<button onclick="document.body.style.backgroundColor = 'yellow'">Directly on HTML Element</button> 

// onclick: This is an "event attribute" that triggers a function when the button is clicked. So, while onclick itself is not a function, it is used to call a function or execute a script when the specified event occurs.

// "document.body.style.backgroundColor = 'yellow'" This is the script that runs when the button is clicked. It changes the background color of the entire webpage to yellow.




// Option 1.2 : By Adding HTML onclick Attribute with Separate Function

function changeBgColor (){
    document.body.style.backgroundColor = 'lime';  // we will use this occasionally
}

// like the previous one we just added a onclick attribute in HTML and called the changeBgColor() function inside the attribute it is same as the previous one diff is the script function is written separately in call.js




// Option 2.1 : By Using JS .onclick Property and Separate Function

const btn1 = document.getElementById('btn-1');

btn1.onclick = makeOrange;

function makeOrange (){
    document.body.style.backgroundColor = 'orange';
}

// document.getElementById('btn-1'): This selects the HTML element with the ID btn-1.

// .onclick: This is a property of the selected element. It is used to set up a function that will be called when the element is clicked.

// makeOrange: This is a function we created to run when the button will be clicked. the function in line the line no 27 - 29 in call.js




// Option 2.2 : By Using JS .onclick Property and Direct Function

const btn2 = document.getElementById('btn-2');

btn2.onclick = function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// Same as 2.1  just the function is called Directly




// Option 3.1 : By Using JS .addEventListener Method and Separate Function

const btn3 = document.getElementById('btn-3');

btn3.addEventListener('click', makeSkyBlue);

function makeSkyBlue(){
    document.body.style.backgroundColor = 'skyblue'
}

// .addEventListener : This is a method in JavaScript that waits for an event to occur. When the event occurs, the event listener calls a specified function to handle the event.

// In my case the event listener is set up to wait for a click event on the button with ID btn-3.

// The event listener takes 2 arguments 1. 'Type of event', 2. 'function name or directly function'. Type of event is 'click' in this case




// Option 3.2 : By Using JS .addEventListener Method and Embedded Function

const btn4 = document.getElementById('btn-4')
btn4.addEventListener('click', function(){
    document.body.style.backgroundColor = 'gold';
})

// Same as 3.1 just the function is defined separately. 




// Option 3.3 : By Using JS .addEventListener Method and Embedded Function (without variable)

document.getElementById('btn-final').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
})

// As we have kept the btn final as in a variable container in our previous options. in this option we did everything directly.

// document.getElementById('btn-final') : I selected the element by id

//.addEventListener() : I called the event listener to wait for the button click.

//function(){document.body.style.backgroundColor = 'green'} : this function will be executed by the event listener after the button click

// We will use this method all the time. this is a single line syntax.