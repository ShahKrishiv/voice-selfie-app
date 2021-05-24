var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("tb").innerHTML = "";
    recognition.start()
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("tb").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        speak();
    }
}

function speak() {
    var synthesis = window.speechSynthesis;
    //var speak = document.getElementById("tb").value;
    var speak = "taking your selfie in two seconds"
    var utter = new SpeechSynthesisUtterance(speak);
    synthesis.speak(utter);
    Webcam.attach('#camera');
    setTimeout(function () {
        take_snapshot;
        save();
    }, 2000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
});

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        console.log(data_uri);
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}

function save() {
    var link = document.getElementById("link");
    var img = document.getElementById("selfie_image").src;
    link.href = img;
    link.click();
}
