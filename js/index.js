
//footer section
const container = document.getElementById('myFooter');
const addFooter = document.createElement('footer');
container.appendChild(addFooter);
 
//get current year
const d = new Date();
 let thisYear = d.getFullYear();

 const footer = document.querySelector('footer');

 //copyright
 const copyright = document.createElement('p');
copyright.innerHTML =`Stephanie Cueto ${thisYear}`;

footer.appendChild(copyright);


//skills section
let skills = ["HTML", "CSS", "Javascript", "Github"];
const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

//form section

//callback for submit
function onFormSubmit(event) {
    event.preventDefault(); 

    const data = new FormData(event.target);
    const userName = data.get("usersName");
    const email = data.get("usersEmail");
    const usersMessage = data.get("usersMessage");

    // Displays messages below message section
    const messageSection = document.getElementById('messages'); // Ensure this ID matches your HTML
    const messageList = messageSection.querySelector("ul");

    // Create message content
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${userName}</a>
    <span> ${usersMessage}</span>`;

    // Create the remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";

    // Add event listener to remove button
    removeButton.addEventListener("click", function() {
        messageList.removeChild(newMessage);
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
}


//message form submit

const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", onFormSubmit); 

// show projects from repository
let repositories = [];
fetch('https://api.github.com/users/sxcueto/repos')

.then((response) => {
    if (!response.ok){
        throw new Error ("Request failed.");
    }
    return response.json();
})

.then((data) => {
    console.log("data", data);
    repositories = [...data];
    console.log("respositories array = ", repositories);



const projectSection = document.getElementById("projects-section");
const projectList = projectSection.querySelector('ul');

for (let i = 0; i < repositories.length; i++ ){

    const project = document.createElement('li');
    project.className = "repo-list";
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
}
})
.catch((error) => {
    console.error("Error fetching repositories:", error);
})

