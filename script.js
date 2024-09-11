const quizData = [
    {
        question: "What is the capital city of Japan?",
        a: "Beijing",
        b: "Seoul",
        c: "Tokyo",
        d: "Bangkok",
        correct: "c",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Venus",
        correct: "b",
    },
    {
        question: "Which ocean is the largest in the world?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Southern Ocean",
        d: "Pacific Ocean",
        correct: "d",
    },
    {
        question: "What is the tallest mountain in the world?",
        a: "Mount Everest",
        b: "K2",
        c: "Mount Kilimanjaro",
        d: "Denali",
        correct: "a",
    },
    {
        question: "Which desert is the largest in the world?",
        a: "Sahara Desert",
        b: "Arabian Desert",
        c: "Gobi Desert",
        d: "Kalahari Desert",
        correct: "a",
    }
];
// getting id//
const quizquestion = document.getElementById("quizQues")
const options = document.querySelectorAll(".options")
const result = document.getElementById ("result")


let index = 0
var  R=0
 var W=0
 let finish = quizData.length


// function for dataloading
const loadingdata = () => {
if (index === finish) {
    return quizover()
    
}
reset()
let data = quizData[index]
quizquestion.innerText = ` ${index+1}: ${data.question}`
// options
options[0].nextElementSibling.innerHTML = data.a
options[1].nextElementSibling.innerHTML = data.b
options[2].nextElementSibling.innerHTML = data.c
options[3].nextElementSibling.innerHTML = data.d


}

//button click//

 document.getElementById("submit").addEventListener("click", function (){
const ans = getans()
const data = quizData[index]
if (ans=== data.correct) {
    R++
    
}
else{
    W++
}
index++
loadingdata()
 })


 //options selection
const getans = () =>{
    let ans = null
    for (let i = 0; i < options.length; i++) {
if (options[i].checked) {

    ans = options[i].value
    console.log(ans);
    break;
    
}        
    }
    return ans

}
//reset function//
function reset (){
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false
        
    }
}

//quiz over//
function quizover () {
result.innerHTML = `
             <h2>"That's a wrap! You slayed it!"</h2>
           <p>Correct Answers: ${R}</p>
             <p>Wrong Answers: ${W}</p>
             <p>Total Questions: ${finish}</p>
         `;


}

//calling function
loadingdata()


































































