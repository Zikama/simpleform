// peform the short document.querySelector with this simple function
    function sel(ele){
    return document.querySelector(ele);
    }
      let input = sel("input");
        input.setAttribute("placeholder","Search for color");
         const form = sel("form");
           form.addEventListener("submit", function(e) {
          // Prevent form submition every btn/brn is clicked
          e.preventDefault(); 
      });

//Change background color by random
    const bdy = sel("body"),button = sel("button");
  function loadColor() {
   let col1,col2,col3,code;
    col1 = '123'*4;
    col2 = Math.floor(Math.random()*99+99+99);
    code =  '#'+col1+col2;
    bdy.style.backgroundColor = `${code}`;
    button.style.backgroundColor = `${code}`;
}
//Change background color by search {in future}
function loadBySearch() {
    let val = sel('#search').value;
    bdy.style.backgroundColor = `${val}`;
} 
  
       let from = sel("#from"),
          to   = sel("#to"),
          sign = sel("#sign"); 
           from.setAttribute("title","double click to edit");
           to.setAttribute("title","double click to edit");
           sign.setAttribute("title","Put in your prefered sign e.g * or - ");
        //On btn dblclick edit
    from.addEventListener("dblclick",function() {
        // add attribute contente editable
        from.setAttribute("contenteditable","true");this.classList.add("curcor");
    });
        //On btn blur exit
    from.addEventListener("blur",function() {
        // remove attribute contente editable
        from.setAttribute("contenteditable","false");
        this.classList.toggle("curcor");
    });
     //On btn dblclick edit
    to.addEventListener("dblclick",function(f) {
        // add attribute contente editable
        to.setAttribute("contenteditable","true");
        this.classList.add("curcor");
    });to.addEventListener("blur",function() {
        // remove attribute contente editable
        to.setAttribute("contenteditable","false");
        this.classList.toggle("curcor");
    });

function val(){   
// ALl needed variables
 let dd= document.getElementById("dd"),
          from = sel("#from").innerHTML,
          to   = sel("#to").innerHTML,
          sign = sel("#sign").value,
          ans  = eval(`${from}${sign.toString()}${to}`); 
//to make sure the sign is entered is an oparator
 //_________ this is in case you didn't answer the question and you just pressed the valid brn ___
	 if(dd.value == "" ){
      let prompted = prompt("Please some input/put your anser");  prompted;
     dd.value = prompted;
    }
	 else if(dd.value == ans){
	 alert(`Wow!, thank you for finishing that! \n ${to} ${sign.toString()} ${from} = ${ans} .\n correct `);
	 }
	 else {
	 alert("you failed! \n"+ dd.value + " is not correct, try again")}
    }
	 
	 //Accordions  
//display the first panel by default
let panel = sel("#panel");
        if(panel.style.display === "none") {
           panel.style.display ="block";
        } else {
        panel.style.display = "block";
    }
    //___________ First Accordion ___________________
function drop() {
const pantl = sel("#panel");
        if(panel.style.display === "none") {
           panel.style.display ="block";
        } 
        else {
           panel.style.display ="none";
        }


    }
    //___________ Second Accordion ___________________
function drop1() {
    var panel1 = document.getElementById('panel1');
      if(panel1.style.display == "block") {
        panel1.style.display = "none ";
      }
       else {
        panel1.style.display = "block";
      }
        
        /* same as it is above */
    }
    //___________ Third Accordion ___________________
function drop2() {
    var panel2 =
    document.getElementById('panel2');
    if(panel2.style.display == "block") {
        panel2.style.display = " none";
    }
    else {
        panel2.style.display = "block";
    }
        
        /* same as it is above */
}