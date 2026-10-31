
// 1. Selecting HTML elements

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const professionInput = document.getElementById("profession");
const hobbyInput = document.getElementById("hobby");

const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");

const output = document.getElementById("output");
const errorMessage = document.getElementById("errorMessage");


// 2. Generate Profile Function

function generateProfile() {

    // Collecting input values

    const name = nameInput.value.trim();
    const age = ageInput.value;
    const profession = professionInput.value.trim();
    const hobby = hobbyInput.value.trim();


    // 3. Input Validation

    if (name === "" || age === "" || profession === "" || hobby === "") {

        errorMessage.textContent = "Please fill in all the fields.";

        output.classList.add("hidden");

        return;
    }


    // 4. Random Greetings

    const greetings = [
        "Hello there!",
        "Welcome!",
        "Nice to meet you!",
        "Great to have you here!"
    ];

    const randomGreeting = greetings[
        Math.floor(Math.random() * greetings.length)
    ];


    // 5. Template Literals

    const profile = `
        <h2 class="text-xl font-bold text-slate-800 mb-3">
            ${randomGreeting}
        </h2>

        <h3 class="text-lg font-semibold text-blue-700 mb-2">
            ${name}
        </h3>

        <p class="text-slate-600 mb-2">
            I am ${age} years old.
        </p>

        <p class="text-slate-600 mb-2">
            I work as a ${profession}.
        </p>

        <p class="text-slate-600">
            My favorite hobby is ${hobby}.
        </p>

        <p class="text-xs text-slate-400 mt-4">
            Created in ${new Date().getFullYear()}
        </p>
    `;


    // 6. Display Profile

    output.innerHTML = profile;

    output.classList.remove("hidden");

    errorMessage.textContent = "";
}


// 7. Event Listener

generateBtn.addEventListener("click", generateProfile);


// 8. Reset Function

function resetProfile() {

    nameInput.value = "";
    ageInput.value = "";
    professionInput.value = "";
    hobbyInput.value = "";

    output.innerHTML = "";
    output.classList.add("hidden");

    errorMessage.textContent = "";
}


// 9. Reset Event Listener

resetBtn.addEventListener("click", resetProfile);
