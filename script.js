let btn = document.querySelector("#btn");
let tony = document.querySelector("#tony")

let cont = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  window.speechSynthesis.speak(text_speak);
  text_speak.lang = "hi-GB";
}

function wishme() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning!");
  } else if (hours >= 12 && hours < 16) {
    speak("Good Afternoon!");
  } else {
    speak("Good Evening!");
  }
}
 window.addEventListener("load", () => {  wishme(); });

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  
  let transcript =event.results[currentIndex][0].transcript
   cont.innerHTML = transcript
   takecommand(transcript.toLowerCase())

  
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.Display = "none";
  voice.style.display = "block";
});


function takecommand(message){
  btn.style.Display = "flex";
  voice.style.display = "none";
  if(message.includes("hello")||message.includes("hey")||message.includes("hi")){
    speak("hello sir,What can i help you?")
  }
  
  else if(message.includes("who are you")){
   speak("I'am Sophia,Virtual Assistent, Created by Himanshu ?")
  }

  else if(message.includes("What is your name")){
    speak("My name is, Sophia?")
   }

   else if(message.includes("tell me about yourself")){
    speak("I'am Sophia,Virtual Assistent, Created by Hiimanshuu?")
   }
   else if(message.includes("which day you born")||message.includes("your birth date")||message.includes("your birthday")){
    speak("21 september 2024 ")
   }


 else if(message.includes("what is your name")){
  speak("My name is sophia ?")
 }

 else if(message.includes("open github")){
   speak("opening github....")
 window.open("https://github.com/")
 }


   else if(message.includes("how are you")){
    speak("I'm  well, thank you!")
  }

  else if(message.includes("open youtube")){
    speak("opening youtube....")
    window.open("https://www.youtube.com/")
  }
  else if(message.includes("open facebook")){
    speak("opening facebook....")
    window.open("https://www.facebook.com/")
  }
 

  else if(message.includes("open calculator")){
    speak("opening calculator....")
    window.open("calculator://")
  }

  
  else if(message.includes("open whatsapp")){
    speak("opening work....")
    window.open("whatsapp://")
  }

  else if (message.includes("time")){
    let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
  }
 

  else if (message.includes("date")){
    let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
    speak(date)
  }
  else if(message.includes("open google")){
    speak("opening google....")
    window.open("https://www.google.com/")
  }
  else if(message.includes("open setting")){
    speak("opening setting....")
    window.open("settings://")
  }
  // else {
  //   let finalvoice = "This is what i found on internet reagarding" + message.replace("sofia","") || message.replace("sophia","")
  //   speak(finalvoice)
  //    window.open(`https://www.youtube.com/results?search_query=${message.replace("sofia","")||finalvoice}`)
 
  //  }

    else {
    let finalvoice = "This is what i found on internet reagarding" + message.replace("sofia","")
    speak(finalvoice)
     window.open(`https://www.google.com/search?q=${message.replace("sofia","")||finalvoice}`)
   
   }

}

gsap.from("#tony",{
  y:-500,
  delay:0.4,
  duration:2
})


