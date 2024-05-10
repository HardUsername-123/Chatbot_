let song = document.getElementById("song");
let aiVal = document.getElementById("aiVal");
let vision = document.getElementById("vision");
let mission = document.getElementById("mission");
let courses = document.getElementById("courses");
let sad = document.getElementById("sad");
let btn = document.getElementById("sendButton");
let history = document.getElementById("history");
let core = document.getElementById("core");
let box = document.getElementById("box");
let what = document.getElementById("what");
let close = document.getElementById("close-btn");
var hide = document.getElementById("hide-chatbot");
var info = document.getElementById("info");

var chatContainer = document.getElementById("chatContainer");
var audio = document.getElementsByTagName("audio");

let userInput = document.getElementById("userInput").value;

let isPlaying = false;
let isVal = false;
let isVision = false;
let isMission = false;
let isCourses = false;
let isSad = false;
let isHistory = false;
let isCore = false;
let isWhat = false;
let isInfo = false;

let robotImage = document.querySelector(".ai-robot img");

function show() {
    if (hide.style.display === "block") {
        hide.style.display = "none";
    } else {
        hide.style.display = "block";
    }
}

close.addEventListener("click", function () {
    hide.style.display = "none";
    vision.load();
    mission.load();
    song.load();
    what.load();
    core.load();
    courses.load();
    sad.load();
    history.load();
    core.load();
    info.load();
    robotImage.classList.remove("animate-robot");
});

//jokes
// let jokes = [
//     {
//         text: "Why don't scientists trust atoms? Because they make up everything!",
//         audio: "joke1.mp3"
//     },
//     {
//         text: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
//         audio: "joke2.mp3"
//     },
//     {
//         text: "Parallel lines have so much in common. It's a shame they'll never meet.",
//         audio: "joke3.mp3"
//     }
// 
// ];

// Function to get a random joke object from the array
function getRandomJoke() {
    return jokes[Math.floor(Math.random() * jokes.length)];
}

function playJokeAudio(audioPath) {
    let jokeAudio = new Audio(audioPath);
    jokeAudio.play();
}

//main button
function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    //bot validation
    if (
        document.getElementById("userInput").getAttribute("data-clicked") !==
            "true" &&
        userInput.trim() === ""
    ) {
        addMessage(
            "bot",
            '<img class="pro" src="img/chatbot.png">' +
                " Sorry you didn't select the keywords, please select the keywords"
        );

        return;
    }

    if (
        document.getElementById("userInput").getAttribute("data-clicked") ===
            "true" &&
        userInput.trim() === ""
    ) {
        addMessage(
            "bot",
            '<img class="pro" src="img/chatbot.png">' +
                " Sorry you didnt select the keywords, please select the keywords"
        );

        return;
    }

    // Define your keywords
    let keywords = [
        "Hi",
        "Vision",
        "Mission",
        "NCMC Courses",
        "I'm sad",
        "NCMC History",
        "Core values",
        "What's your name?",
        "NCMC Brief info",
        "Tell me joke's"
    ];

    // Check if user input matches any keyword
    if (!keywords.includes(userInput)) {
        // Perform validation here (e.g., display an error message, prevent further action)
        userSide();
        setTimeout(() => {
            addMessage(
                "bot",
                '<img class="pro" src="img/chatbot.png">' +
                    "Invalid input. Please select a valid keywords."
            );
            document.getElementById("userInput").value = "";
            return;
        }, 1000);
    }

    if (userInput === "Tell me joke's") {
        userSide();
        let joke = getRandomJoke();
        setTimeout(() => {
            playJokeAudio(joke.audio);
            addMessage(
                "bot",
                '<img class="pro" src="img/chatbot.png">' + joke.text
            );
            robotImage.classList.add("animate-robot");
        }, 1000);
        return;
    }

    //audio set to play
    if (userInput !== "Hi") {
        song.pause();
        isPlaying = false;
        robotImage.classList.remove("animate-robot");
    } else {
        // Add a delay before playing the audio
        setTimeout(() => {
            song.currentTime = 0;
            song.play();
            isPlaying = true;
            robotImage.classList.add("animate-robot");
        }, 1000); // Adjust the delay time (in milliseconds) as needed

        userSide();
        setTimeout(() => {
            addMessage(
                "bot",
                '<img class="pro" src="img/chatbot.png">' + " Hello i'm a bot!"
            );
        }, 1000); // Adjust the delay time (in milliseconds) as needed
    }

    // Rest of your code...

    if (userInput !== "Vision") {
        vision.pause();
        isVision = false;
        robotImage.classList.remove("animate-robot");
    } else {
        setTimeout(() => {
            vision.currentTime = 0;
            vision.play();
            isVision = true;
            robotImage.classList.add("animate-robot");
        }, 1000); // Adjust the delay time (in milliseconds) as needed
        userSide();

        setTimeout(() => {
            addMessage(
                "bot",
                '<img class="pro" src="img/chatbot.png">' +
                    "A dynamic learning institution, inspired by the devine Providence, aiming for holistic, Productive and globally competitive graduates."
            );
        }, 1000); // Adjust the delay time (in milliseconds) as needed
    }

    if (userInput !== "Mission") {
        mission.pause();
        isMission = false;
        robotImage.classList.remove("animate-robot");
    } else {
        // Add a delay before playing the audio
        setTimeout(() => {
            mission.currentTime = 0;
            mission.play();
            isMission = true;
            robotImage.classList.add("animate-robot");
        }, 1000); // Adjust the delay time (in milliseconds) as needed
        userSide();

        setTimeout(() => {
            addMessage(
                "bot",
                '<img class="pro" src="img/chatbot.png">' +
                    "To provide quality education in a multicultural environment through significant programs in instructions, research productivity, extension and community involvement."
            );
        }, 1000); // Adjust the delay time (in milliseconds) as needed
    }

    if (userInput !== "NCMC Courses") {
        courses.pause();
        isCourses = false;
        robotImage.classList.remove("animate-robot");
    } else {
        // Add a delay before playing the audio
        setTimeout(() => {
            courses.currentTime = 0;
            courses.play();
            isCourses = true;
            robotImage.classList.add("animate-robot");
        }, 1000); // Adjust the delay time (in milliseconds) as needed
        userSide();

        setTimeout(() => {
            addMessage(
                "bot",
                '<img class="pro" src="img/chatbot.png">' +
                    " NCMC course has <br>BS-crimonology, <br>BS-education, <br>BR-computer science, <br>BS-electrical engineering, <br>BS-social work, <br>BS-medtech, <br>BS-business administration <br>BS-accountancy. <br>at ncmc school is free scholarship you dont have to pay anything. and has various benefits."
            );
        }, 1000); // Adjust the delay time (in milliseconds) as needed
    }

    if (userInput !== "I'm sad") {
        sad.pause();
        isSad = false;
        robotImage.classList.remove("animate-robot");
    } else {
        // Add a delay before playing the audio
        setTimeout(() => {
            sad.currentTime = 0;
            sad.play();
            isSad = true;
            robotImage.classList.add("animate-robot");
        }, 1000); // Adjust the delay time (in milliseconds) as needed
        userSide();

        setTimeout(() => {
            addMessage(
                "bot",
                '<img class="pro" src="img/chatbot.png">' +
                    " Its okay to feel sad sometimes. Remember, its just a temporary emotion, and its okay to take some time to feel it fully. If youre comfortable, try engaging in activities that usually bring you joy or reaching out to a friend or loved one for support. Youre not alone, and things will get better."
            );
        }, 1000); // Adjust the delay time (in milliseconds) as needed
    }

    if (userInput !== "NCMC History") {
        history.pause();

        isHistory = false;
        robotImage.classList.remove("animate-robot");
    } else {
        // Add a delay before playing the audio
        setTimeout(() => {
            history.currentTime = 0;
            history.play();
            isHistory = true;
            robotImage.classList.add("animate-robot");
        }, 1000); // Adjust the delay time (in milliseconds) as needed
        userSide();

        setTimeout(() => {
            addMessage(
                "bot",
                '<img class="pro" src="img/chatbot.png">' +
                    " North Central Mindanao College started its humble beginnings in the year 1989 as a Technical Vocational School. It was then named Central Mindanao Technical Institute duly accredited by the Technical Education and Skills Development Authority (TESDA), the Department of Education (Dep.Ed.) and the commission on Higher Education (CHED). At the opening of the school, there was a total population of 70 students enrolled in both High School and Midwifery course. However, in the succeeding school year, population began to increase by 22%. It was in the S.Y. 1995-1996 that the enrollment population increased significantly to about 78% from that of the previous years."
            );
        }, 1000); // Adjust the delay time (in milliseconds) as needed
    }

    if (userInput !== "Core values") {
        core.pause();

        isCore = false;
        robotImage.classList.remove("animate-robot");
    } else {
        // Add a delay before playing the audio
        setTimeout(() => {
            core.currentTime = 0;
            core.play();
            isCore = true;
            robotImage.classList.add("animate-robot");
        }, 1000); // Adjust the delay time (in milliseconds) as needed
        userSide();

        setTimeout(() => {
            addMessage(
                "bot",
                '<img class="pro" src="img/chatbot.png">' +
                    " As NCMCian, he/she must possess these desirable values as presented in the mnemonic term <b>“NCMC GOD BLESS”</b><br><b>N-Novel.</b> He/She engages new or unusual researches in an interesting way to compete globally.<br><b>C-Committed.</b> He/She feels the spirit of dedication and loyalty to a cause to any work or job.<br><b>M-Multicultural.</b> He/She relates or constitutes several cultural or ethnic groups within a society. <br><b>C-Conscientious.</b> He/She wishes to do what is right, especially to do well in one’s work or duty. <br><b>G-God-fearing.</b> He/She believes and practices that everything is nothing without God/Allah. <br><b>O-Organized.</b> He/She arranges every circumstance in a systematic way, especially on a large scale of work assignments.<br><b>D-Dynamic.</b> He/She possesses a positive attitude, new ideas, full of energy, easy to adapt change, and can work collaboratively for the betterment of the majority.<br><b>B-Benevolent.</b> He/She serves charitable societies rather than a profit-making purpose. <br><b>L-Leading.</b> He/She leads or commands a group, organization, and associations. <br><b>E-Effective.</b> He/She produces a desired or intended result and fulfils a specified function. <br><b>S-Supportive.</b> He/She provides encouragement or emotional help for those who are in need. <br><b>S-Systematic.</b> He/She acts accordingly to a fixed plan or system."
            );
        }, 1000); // Adjust the delay time (in milliseconds) as needed
    }

    if (userInput !== "What's your name?") {
        what.pause();
        isWhat = false;
        robotImage.classList.remove("animate-robot");
    } else {
        // Add a delay before playing the audio
        setTimeout(() => {
            what.currentTime = 0;
            what.play();
            isWhat = true;
            robotImage.classList.add("animate-robot");
        }, 1000); // Adjust the delay time (in milliseconds) as needed

        userSide();
        setTimeout(() => {
            addMessage(
                "bot",
                '<img class="pro" src="img/chatbot.png">' +
                    "I am NCMC bot, Im Ai without emotions and feelings. The second year BSCS students made me."
            );
        }, 1000); // Adjust the delay time (in milliseconds) as needed
    }

    if (userInput !== "NCMC Brief info") {
        info.pause();
        isInfo = false;
        robotImage.classList.remove("animate-robot");
    } else {
        // Add a delay before playing the audio
        setTimeout(() => {
            info.currentTime = 0;
            info.play();
            isInfo = true;
            robotImage.classList.add("animate-robot");
        }, 1000); // Adjust the delay time (in milliseconds) as needed

        userSide();
        setTimeout(() => {
            addMessage(
                "bot",
                '<img class="pro" src="img/chatbot.png">' +
                    "• NCMC Brief info <br><br>YEAR ESTABLISHED 1989 <br>STUDENT ENROLLMENT College: 1280<br>High School: 970 <br>Elementary: 160 <br>Early Childhood: 194 <br> <br><b>FACULTY & STAFF</b> <br>Faculty: 219 <br>Staff: 150 <br>Part-timers: 86 <br><br><b>OFFICIALS</b><br>-President<br>Aim Y. Undag, MD<br>-Deputy President<br>Archie Mae U. Armada<br>-School Director<br>Myrna Y. Undag<br>-VP for Finance<br>Shemy Marie U. Salimbangon<br>-VP for Academic Affairs<br>Rubyrosa B. Luna<br>-VP for Administration<br>Lynn S. Sanes<br>-Director for Industry and Community Extension<br>Helen A. Tesoro<br>-Director for Research and Development<br>Rey M. Lagrada."
            );
        }, 1000); // Adjust the delay time (in milliseconds) as needed
    }

    // If user input is not empty, add it to the chat
    function userSide() {
        if (userInput.trim() !== "") {
            addMessage("user", "You: " + userInput);
            document.getElementById("userInput").value = ""; // Clear input field
        }
    }

    // Here you can add logic to process the user input and generate a response from the bot
    // For now, let's just add a simple bot response
}

//get value from the users
function setHi() {
    document.getElementById("userInput").value = "Hi";
    document.getElementById("userInput").setAttribute("data-clicked", "true");
}

function setVision() {
    document.getElementById("userInput").value = "Vision";
    document.getElementById("userInput").setAttribute("data-clicked", "true");
}

function setMission() {
    document.getElementById("userInput").value = "Mission";
    document.getElementById("userInput").setAttribute("data-clicked", "true");
}

function setCourses() {
    document.getElementById("userInput").value = "NCMC Courses";
    document.getElementById("userInput").setAttribute("data-clicked", "true");
}

function setSad() {
    document.getElementById("userInput").value = "I'm sad";
    document.getElementById("userInput").setAttribute("data-clicked", "true");
}
function setHistory() {
    document.getElementById("userInput").value = "NCMC History";
    document.getElementById("userInput").setAttribute("data-clicked", "true");
}

function setCore() {
    document.getElementById("userInput").value = "Core values";
    document.getElementById("userInput").setAttribute("data-clicked", "true");
}

function setWhat() {
    document.getElementById("userInput").value = "What's your name?";
    document.getElementById("userInput").setAttribute("data-clicked", "true");
}

function setInfo() {
    document.getElementById("userInput").value = "NCMC Brief info";
    document.getElementById("userInput").setAttribute("data-clicked", "true");
}
function setJoke() {
    document.getElementById("userInput").value = "Tell me joke's";
    document.getElementById("userInput").setAttribute("data-clicked", "true");
}

// Function to add a message to the chat
function addMessage(sender, message) {
    let chatContainer = document.getElementById("chatContainer");
    let messageElement = document.createElement("div");
    messageElement.className = sender + "-message";
    messageElement.innerHTML = '<p class = "msg">' + message + "</p>";
    chatContainer.appendChild(messageElement);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Event listener to remove animation when audio stops playing
song.addEventListener("ended", function () {
    isPlaying = false;
    robotImage.classList.remove("animate-robot");
});

aiVal.addEventListener("ended", function () {
    isVal = false;
    robotImage.classList.remove("animate-robot");
});

vision.addEventListener("ended", function () {
    isVision = false;
    robotImage.classList.remove("animate-robot");
});

mission.addEventListener("ended", function () {
    isMission = false;
    robotImage.classList.remove("animate-robot");
});

courses.addEventListener("ended", function () {
    isCourses = false;
    robotImage.classList.remove("animate-robot");
});

sad.addEventListener("ended", function () {
    isSad = false;
    robotImage.classList.remove("animate-robot");
});

history.addEventListener("ended", function () {
    isHistory = false;
    robotImage.classList.remove("animate-robot");
});

core.addEventListener("ended", function () {
    isCore = false;
    robotImage.classList.remove("animate-robot");
});

what.addEventListener("ended", function () {
    isWhat = false;
    robotImage.classList.remove("animate-robot");
});

info.addEventListener("ended", function () {
    isInfo = false;
    robotImage.classList.remove("animate-robot");
});
