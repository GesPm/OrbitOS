dragElement(document.getElementById("welcome"));



function dragElement(element) {
    var initialX = 0;
    var initialY = 0;
    var currentY = 0;
    var currentX = 0; 

    if (document.getElementById(element.id+ "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
        } else {
            element.onmousedown = startDragging;
            }

            function startDragging(e) {
                e = e || window.event;
                e.preventDefault ();

                initialX = e.clientX;
                initialY = e.clientY;

                document.onmouseup = stopDragging;
                document.onmousemove = dragElement;

                function dragElement(e) {
                     e = e || window.event;

                     currentX = initialX - e.clientX;
                     currentY = initialY - e.clientY;
                     initialX = e.clientX;
                     initialY = e.clientY;

                     element.style.top = (element.offsetTop - currentY) + "px";
                     element.style.left = (element.offsetLeft - currentX) + "px";
                     }

                     function stopDragging() {
                     document.onmouseup = null;
                     document.onmousemove = null;
                     }
 }
}

var welcomeScreen = document.querySelector("#welcome");




 var welcomeScreenClose = document.querySelector ("#welcomeclose")

 var welcomeScreenOpen = document.querySelector ("#welcomeopen")

 welcomeScreenClose.addEventListener ("click", function () {
    closeWindow(welcomeScreen);
 });

 welcomeScreenOpen.addEventListener ("click", function() {
    openWindow (welcomeScreen);
 });


var selectedIcon = undefined

function selectedIcon(element) {
    element.classList.add("selected");
    selectedIcon = element
}

function deselectIcon(element) {
    element.classList.remove("selected");
    selectedIcon = undefined
}

function handleIcon(element) {
    if (element.classList.contains("selected")) {
        deselectIcon (element) }

    else {
        selectIcon (element) }
    }


dragElement(document.querySelector("#funfact"));

dragElement(document.querySelector("#calculator"))

var calculatorScreen = document.querySelector("#calculator")

var calculatorIcon = document.querySelector("#calculatoricon");

var calculatorScreenClose = document.querySelector("#calculatorclose")

calculatorIcon.addEventListener("click", () => {
    openWindow(calculatorScreen);
});

calculatorScreenClose.addEventListener("click", () => 
    closeWindow(calculatorScreen));

function closeWindow(element) {
    element.style.display = "none";
}

var biggestIndex = 1;
var topBar = document.querySelector("#top");

function addWindowTapHandling(element) {
    element.addEventListener("mousedown", () =>
        handleWindowTap(element)
    );
}

function handleWindowTap(element) {
    biggestIndex++;
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
    deselectIcon(selectedIcon);
}

function openWindow(element) {
    element.style.display = "block";

    biggestIndex++;
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
}


function initializeWindow(elementName) {
  var screen = document.querySelector("#" + elementName)
  addWindowTapHandling(screen)
  makeClosable(elementName)
  dragElement(screen)
}
 

var calculatorDisplay = document.querySelector("#calculatordisplay");


function addOperatorToCalculator(operator) {
    calculatorDisplay.value += operator;
} 
function clearCalculator () {
   calculatorDisplay.value = 0;
}

function calculateResults() {
    calculatorDisplay.value = eval (calculatorDisplay.value);
}

function addNumberToCalculator(num) { 
    if (calculatorDisplay.value === "0") {
        calculatorDisplay.value = num;
    } else {
        calculatorDisplay.value += num;
    }
}

var spaceFacts = [
    "The walnut moon: Saturn's moon, Iapetus, looks exactly like a giant walnut due to a mysterious, 12-mile-high mountain range that runs perfectly along its exact equator",
    "A day on Venus is longer than a year on Venus: Venus has an extremely slow rotation, taking 243 Earth days to complete one rotation. However, it only takes 225 Earth days for Venus to complete one orbit around the Sun.",
    "Rings aren't exclusive to gas giants; a 150-mile-wide asteroid named Chariklo was discovered to have two dense, narrow rings orbiting it.",
    "The absolute edge of our solar system is a theoretical bubble of billions of icy comets called the Oort Cloud, located so far out that the Suns gravitational hold on it is incredibly weak.",
    "Pluto has red snow",
    "Uranus smells like rotten eggs due to the presence of hydrogen sulfide in its atmosphere.",
    "Uranus has an axial tilt of nearly 98 degrees, making it spin completely on its side compared to the rest of the planets",
    "Despite being the closest planet to the Sun, Mercury harbors thick sheets of water ice inside deep polar craters that never see a single ray of sunlight"
];

function showRandomFact() {
    var randomIndex = Math.floor(Math.random() * spaceFacts.length);
    var fact = spaceFacts[randomIndex];
    document.querySelector("#funfacttext").innerHTML = fact;
}


var funFactOpen = document.querySelector("#funfactopen");
var funFactScreen = document.querySelector("#funfact");
var funFactClose = document.querySelector ("#funfactclose");

funFactOpen.addEventListener("click", function () {
    openWindow(funFactScreen);
    showRandomFact();
});

funFactClose.addEventListener("click", function() {
    closeWindow(funFactScreen);
});

