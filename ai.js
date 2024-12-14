let btn = document.querySelector(".btn")
let img=document.querySelector(".image")
let speech=document.querySelector(".speech")
let gif=document.querySelector(".gif")
function speakfun(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak);
    console.log(text_speak)
}

img.addEventListener("click",()=>{
    speakfun("Activating jarvis");
    speakfun("Going online");
    wishme();
})


function wishme(event) {
    let day = new Date();
    let hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        speakfun("good morning ")
    }
    else if (hr >= 12 && hr < 16) {
        speakfun("good afternoon ")
    }
    else {
        speakfun("good evening ")
    }
    
}
let voice = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new voice()
recognition.onresult = (event) => {
    let currindex = event.resultIndex
    let transcript = event.results[currindex][0].transcript
    takecommand(transcript.toLowerCase())
   
}
btn.addEventListener("click", (event) => {
    event.preventDefault();
    recognition.start()
    btn.style.display="none"
    gif.style.display="block"

})
function takecommand(message) {
    btn.style.display="block"
    gif.style.display="none"
    
    if (message.includes("hi jarvis") || message.includes("hello jarvis")) {
        speakfun("hello mam how can i help you")
    }
    else if (message.includes("who are you")) {
        speakfun("I am virtual assistant created by miss ayman")
    }
    else if (message.includes("open youtube")) {
        speakfun("opening youtube")
        window.open("https://www.youtube.com/", "_blank")
    }
    else if (message.includes("open google")) {
        speakfun("opening google")
        window.open("https://www.google.co.in/")
    }
    else if(message.includes("new tab")){
        window.open("chrome://newtab","_blank")
    }
    else if (message.includes("open calculator")) {
        window.open("calculator://")
    }
    else if (message.includes("open settings")) {
        window.open(" C:/Program Files/windowsApps/ ")
    }
    else if(message.includes("open naukri website")){
        window.open("https://www.naukri.com/mnjuser/profile","_blank")
    }
    else if(message.includes("open leet code")){
        window.open("https://leetcode.com/","_blank")
    }
    else if(message.includes("open github")){
        window.open("https://github.com/shaikh-ayman","_blank")
    }
    else {
        let finaltext = "this is what i found regarding" + message.replace("jarvis", "")
        speakfun(finaltext)
        window.open(`https://www.google.com/search?q=${message}`, "_blank")
    }
}