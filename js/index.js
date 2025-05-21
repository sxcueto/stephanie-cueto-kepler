
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
function onFormSubmit(event){
     event.preventDefault(); 

     const data = new FormData(event.target);
     console.log(data);
const userName = data.get("usersName");
const email = data.get("email");
const usersMessage = data.get("usersMessage");
    
console.log(userName);
console.log(email);
console.log(usersMessage);

//displays messages below message section
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.getElementsByTagName("ul");
    const newMessage = document.createElement("li");

    newString = `<a href="mailto:${email}"<${userName}</a>

    <span> ${usersMessage} </span>`;
    
//remove button
const removeButton = document.createElement("button");
removeButton.innerText = "Remove";
removeButton.setAttribute("button");
removeButton.addEventListener("click", removeButton);

let entry = document.getElementById('removeButton').parentNode.nodeName;

// remove(entry);

// reset form 
// document.getElementById("leave_message").reset(); 
document.getElementById("form").reset();
}

//message form submit

const messageForm = document.getElementsByName("leave_message");



messageForm[0].addEventListener("submit", onFormSubmit); 

// show projects from repository

fetch('https://api.github.com/users/sxcueto/repos')

.then((response) => {
    if (!response.ok){
        throw new error ("Request failed.");
    }
    return response.json();
})

.then((data) => {
    console.log("data", data);
    repositories = [...data];
    console.log("respositories array = ", respositories);
})


const projectSection = document.getElementById("projects-section");
const projectList = document.querySelector("ul");

for (let i = 0; i < repositories.length; i++ ){

    const project = document.createElement('li');
    project.className = "repo-list";
    projectList.appendChild(project);
};

