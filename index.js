let question1 = document.getElementById('question1')
let question2 = document.getElementById('question2')
let question3 = document.getElementById('question3')
let btn = document.getElementById('btn')
let checkbox1 = document.getElementById('checkbox1')
let checkbox2 = document.getElementById('checkbox2')
let checkbox3 = document.getElementById('checkbox3')
let question = document.getElementById('question')
let quizCointeiner = document.getElementById('quiz')
let scored =document.getElementById('scored')
let lastPoint = document.getElementById('lastPoint')
let green = document.getElementById('green')
let red = document.getElementById('red')
let counter = 0
let point = 0
const checkFunction=(id)=>{
   let box =document.getElementById(id)
   box.checked = !box.checked
}
const createNextQuestion = (questionn,answer1,asnwer2,answer3)=>{
                counter++
                question.textContent = questionn
                question1.textContent=answer1
                question2.textContent=asnwer2
                question3.textContent=answer3
                checkbox1.checked =false
                checkbox2.checked =false
                checkbox3.checked =false
}
btn.addEventListener('click',()=>{
    if (checkbox1.checked || checkbox2.checked || checkbox3.checked ){
        if (counter==0){
            if (checkbox1.checked && !checkbox2.checked && !checkbox3.checked) point++
            createNextQuestion('She arrived at 8 p.m., opened the door and shouted “Good ______!',
            'morning',
            'evening',
            'night')
        }else if(counter==1){
            if (!checkbox1.checked && checkbox2.checked && !checkbox3.checked) point++
            createNextQuestion('Where are u from? i am _____ Japan',
            'in',
            'on',
            'from')
        }else if(counter==2){
            if (!checkbox1.checked && !checkbox2.checked && checkbox3.checked)point++
            createNextQuestion('How do you get to work? ----.',
            'by car',
            'on car',
            'with car')
                
        }else if(counter==3){
            if (checkbox1.checked && !checkbox2.checked && !checkbox3.checked) point++
            createNextQuestion('Where is Mary? She ---- over there',
                'is there',
                'are',
                'is standing')
        }else if(counter==4){
            if (!checkbox1.checked && !checkbox2.checked && checkbox3.checked) point++
            createNextQuestion('What are soy beans primarily used for?',
                'feeding animals',
                'replacing dairy',
                'Growing money trees')
        }
        else if(counter==5){
            if (checkbox1.checked && !checkbox2.checked && !checkbox3.checked) point++
            createNextQuestion('What plant isnt used for making vegan burgers?',
                'beans',
                'coconuts',
                'soy')
        }
        else if(counter==6){
            if (!checkbox1.checked && checkbox2.checked && !checkbox3.checked) point++
            createNextQuestion('Whats a 3rd world country?',
                'a seaside country',
                'a poor country',
                'a rich country')
        }
        else if(counter==7){
            if (!checkbox1.checked && checkbox2.checked && !checkbox3.checked) point++
            createNextQuestion('Whats the heart for',
                'To move muscles',
                'Digestion',
                'Pumping blood')
        }
        else if(counter==8){
            if (!checkbox1.checked && !checkbox2.checked && checkbox3.checked) point++
            createNextQuestion('Whats poverty?',
                'being ill',
                'a disease',
                'the state of being extremely poor')
        }
        else if(counter==9){
            if (!checkbox1.checked && !checkbox2.checked && checkbox3.checked) point++
            createNextQuestion('Is not consuming animal products good for the environment?',
                'Yes',
                'No',
                "It doesn't matter")
        }else if(counter==10){
            
           counter=0
            quizCointeiner.style.visibility='hidden'
            lastPoint.style.visibility='visible'
            scored.textContent=''+point+'/10 points'
        }
    }
})
const reset =()=>{
            counter=0
            point=0
            quizCointeiner.style.visibility='visible'
            lastPoint.style.visibility='hidden'
            createNextQuestion('Which sentense is correct?',
            'i am 15 years old',
            'i 15 years old',
            'i am years old of 15')
}