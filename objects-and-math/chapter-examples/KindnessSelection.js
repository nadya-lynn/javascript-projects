function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
  happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
  words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 
 
 for (i=0; i < 5; i++){
  //console.log(randomSelection(happiness),randomSelection(words));
 }

 
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 
 /*for (i=0; i < 3; i++){
  console.log(randomSelection(happiness),randomSelection(words));
 }*/
 

 //b) Have the code randomly pick one array, and then print 2 random items from it.
 
 randomArr()
 
function randomArr () {

  

  let randomArr = happiness[Math.floor(Math.random() * happiness.length )];

  console.log('What are you?: ', randomArr)
  // randomArr = [];
  // for ( j = 0; j < happiness.length; j += 3) {
  //   console.log(randomSelection(happiness));
  // }

  // for (j = 0; j < words.length; j++)
  // console.log(randomSelection(words));
};




/*index =Math.ceil(Math.random()* happiness.length);
/index =Math.ceil(Math.random()* words.length );

let randHappiness = happiness[index];
let randWords = words[index];
console.log(randHappiness,  randWords);*/

 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.

/*let newArr = [];

newArr.push(happiness),newArr.push(words);


console.log(randomSelection(happiness), randomSelection(words));

//Combined two arrays
console.log(words + happiness);*/