var speechRecognition = window.webkitSpeechRecognition
var recoginion = new speechRecognition()
var textbox = $("#textbox")
var  instructions = $("#instructions")
var content = ''

recoginion.continuous = true 

// recoginion i9s started

recoginion.onstart = function(){
    instructions.text("Voice Recognition is on ")

}

recoginion.onspeechend = function(){
    instructions.text("No activity")

}

recoginion.onerror = function(){
    instructions.text("Try again ")

}

recoginion.onresult = function(event){
      var current = event.resultIndex;
      var transcript = event.results[current][0].transcript
      content += transcript
      textbox.val(content)

}

$("#start-btn").click(function(event){
    if(content.length)
    {   content += ' '      }
    recoginion.start()
})

textbox.on('input',function(){

    content = $(this).val()
})