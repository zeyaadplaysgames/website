const terminalBody = document.getElementById("terminal-body");
const commandInput = document.getElementById("command-input");

function processCommand() {
  const command = commandInput.value.trim();

  // Print command to terminal
  printOutput('<span class="prompt">user@website:~$</span> ' + command);

  // Process command
  if (command === "clear") {
    clearTerminal();
  } else if (command === "help") {
    help();
  } else if (command === "date") {
    displayDate();
  } else if (command == "help") {
    help();
  } else if (command == "pwd") {
    pwd();
  } else if (command == "whoami") {
    whoami();
  } else if (command == "") {
  } else if (command == "exit") {
    window.location.href = "https://www.google.com";
  } else {
    printOutput('Command "' + command + '" not found.');
  }

  // Clear input field
  commandInput.value = "";

  // Scroll to bottom of terminal
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function printOutput(output) {
  const outputElement = document.createElement("p");
  outputElement.innerHTML = output;
  terminalBody.appendChild(outputElement);
}

function clearTerminal() {
  terminalBody.innerHTML = ""; // Clear terminal body
}

function displayDate() {
  const currentDate = new Date().toLocaleString();
  printOutput(currentDate);
}

function pwd() {
  const directory = "/home/user";
  printOutput(directory);
}
function whoami() {
  const id = "user";
  printOutput(id);
}
function help() {
  const helpText = [
    "Available commands:",
    "- help: Display a list of available commands",
    "- whoami: Display information about you (the user)",
    "- (note to self- add more commands)",
  ];
  helpText.forEach(function (line) {
    const output = document.createElement("p");
    output.textContent = line;
    terminalBody.appendChild(output);
  });
}
commandInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    processCommand();
  }
});

commandInput.focus();
