window.onload = function () {
  const body = document.body;

  console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )

  const newDiv = document.createElement("div");
  newDiv.className = "duck"
  body.appendChild(newDiv);


  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp


  setInterval(() => { newDiv.classList.toggle("flap") }, 250);



  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"



  function moveDuck(duck) {
    const randomLeft = Math.random() * window.innerWidth
    const randomTop = Math.random() * window.innerHeight

    duck.style.left = randomLeft + 'px';
    duck.style.top = randomTop + 'px';
  }



  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)


  setInterval(function () { moveDuck(newDiv) }, 1000);


  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  function createDuck() {

    const body = document.body;

    const newDiv = document.createElement("div");
    newDiv.className = "duck"
    body.appendChild(newDiv);

    const randomLeft = Math.random() * window.innerWidth
    const randomTop = Math.random() * window.innerHeight

    newDiv.style.left = randomLeft + 'px';
    newDiv.style.top = randomTop + 'px';


    setInterval(() => { newDiv.classList.toggle("flap") }, 250);

    function moveDuck(duck) {
      const randomLeft = Math.random() * window.innerWidth
      const randomTop = Math.random() * window.innerHeight

      duck.style.left = randomLeft + 'px';
      duck.style.top = randomTop + 'px';
    }

    setInterval(function () { moveDuck(newDiv) }, 10000);

    return newDiv;

  };

  // createDuck();

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
  for (i = 0; i < 4; i++) {
    createDuck();
  };



  // 8. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;



  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!


  const duck = document.querySelectorAll(".duck");
  for (let i = 0; i < duck.length; i++) {
    duck[i].addEventListener("click", function () { duck[i].classList.add("shot") });
  }


  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain

  setTimeout(function () { duck[i].remove(); }, 1000);



  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"



  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?



  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing



  // FIN. You win 1 trillion tokens.  Play the day away!
};
