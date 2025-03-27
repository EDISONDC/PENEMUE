// Battle variables
let playerHP = 100;
let eribusHP = 80;

function choose(option) {
    let storyText = document.getElementById("storyText");
    let sceneImage = document.getElementById("sceneImage");
    let buttonContainer = document.getElementById("buttons");

    // Clear previous buttons
    buttonContainer.innerHTML = "";

    if (option === "help") {
        storyText.innerHTML = "You decide to help Chloe. She leads you to her mother, who is gravely ill. Penemue tells her about Eribus, the dragon who controls life and death.";
        sceneImage.src = "10_20250322_005058_0002.jpg";

        setTimeout(() => {
            storyText.innerHTML = "Do you go to Mount Herdia to confront Eribus or search for another way?";
            buttonContainer.innerHTML = `
                <button onclick="choose('mountain')">Go to the Mountain</button>
                <button onclick="choose('stay')">Search for Another Way</button>
            `;
        }, 3000);
    } 

    else if (option === "ignore") {
        storyText.innerHTML = "You walk away from Chloe, ignoring her cries for help. The village of Artika remains in suffering.";
        sceneImage.src = "8_20250322_005058_0000.jpg";
    }

    else if (option === "mountain") {
        storyText.innerHTML = "You and Chloe ride Arden, the great eagle, toward Mount Herdia. You see the massive cave of Eribus ahead.";
        sceneImage.src = "15_20250322_005059_0007.jpg";

        setTimeout(() => {
            storyText.innerHTML = "Do you challenge Eribus or try to negotiate with him?";
            buttonContainer.innerHTML = `
                <button onclick="choose('fight')">Fight Eribus</button>
                <button onclick="choose('talk')">Talk to Eribus</button>
            `;
        }, 3000);
    } 

    else if (option === "stay") {
        storyText.innerHTML = "You decide not to face Eribus. Instead, you search for an ancient healer in the forests of Talasia.";
        sceneImage.src = "13_20250322_005059_0005.jpg";
    }

    else if (option === "fight") {
        storyText.innerHTML = "A fierce battle begins. Flames burst, storms rage, and darkness surrounds you.";
        sceneImage.src = "14_20250322_005059_0006.jpg";
        startBattle(); // Begin battle after the image and initial text are set
    }

    else if (option === "talk") {
        storyText.innerHTML = "You speak with Eribus, who listens to your plea. He offers you a difficult choice...";
        sceneImage.src = "images (63).jpeg";

        setTimeout(() => {
            storyText.innerHTML = "Do you accept his conditions or refuse?";
            buttonContainer.innerHTML = `
                <button onclick="choose('accept')">Accept</button>
                <button onclick="choose('refuse')">Refuse</button>
            `;
        }, 3000);
    }

    else if (option === "revive") {
        storyText.innerHTML = "Eribus keeps his word. Chloe’s mother is revived, but The Order has grown stronger.";
        sceneImage.src = "yo.jpeg";
    }

    else if (option === "power") {
        storyText.innerHTML = "You wish for power. But in doing so, you become the new ruler of life and death.";
        sceneImage.src = "11_20250322_005058_0003.jpg";
    }

    else if (option === "accept") {
        storyText.innerHTML = "Eribus makes you his heir. You are now bound to the laws of The Order.";
        sceneImage.src = "images (62).jpeg";
    }

    else if (option === "refuse") {
        storyText.innerHTML = "You refuse Eribus’s offer. He attacks you, and the world falls into chaos.";
        sceneImage.src = "images (64).jpeg";
    }
}

// Battle system function
function startBattle() {
    let storyText = document.getElementById("storyText");
    let buttonContainer = document.getElementById("buttons");

    storyText.innerHTML = "🔥 Eribus (HP: " + eribusHP + ") appears! Prepare for battle! Your HP: " + playerHP;

    buttonContainer.innerHTML = `
        <button onclick="attackEribus()">Attack</button>
        <button onclick="defend()">Defend</button>
    `;
}

// Player attacks Eribus
function attackEribus() {
    eribusHP -= 10;
    updateBattle();
}

// Player defends (reduces damage)
function defend() {
    playerHP -= 5;
    updateBattle();
}

// Update battle status
function updateBattle() {
    let storyText = document.getElementById("storyText");
    let buttonContainer = document.getElementById("buttons");

    if (eribusHP <= 0) {
        storyText.innerHTML = "You have defeated Eribus! The Order has been weakened.";
        buttonContainer.innerHTML = '<button onclick="choose(\'revive\')">Wish to Revive Chloe\'s Mother</button>';
        return;
    }

    if (playerHP <= 0) {
        storyText.innerHTML = "Eribus has defeated you. The world falls into darkness.";
        buttonContainer.innerHTML = '<button onclick="location.reload()">Restart</button>';
        return;
    }

    // Eribus attacks back
    playerHP -= 10;

    storyText.innerHTML = "🔥 Eribus (HP: " + eribusHP + ") attacks! Your HP: " + playerHP;
    
    buttonContainer.innerHTML = `
        <button onclick="attackEribus()">Attack</button>
        <button onclick="defend()">Defend</button>
    `;
}
