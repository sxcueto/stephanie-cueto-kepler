
//footer section
const container = document.getElementById('myFooter');
const addFooter = document.createElement('footer');
container.appendChild(addFooter);
 
const d = new Date();
 let thisYear = d.getFullYear();

 const footer = document.querySelector('footer');

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

const messageForm = document.getElementById("leave_message").name;

messageForm.addEventlistener("submit", (event) => {
   
   event.preventDefault(); 
   event.target.usersName;
    event.target.usersEmail;
    event.target.usersMessage;
    console.log(event);
    const messageSection = document.querySelector('messages');
    const messageList = document.querySelector
    document.getElementById("leave_message").reset(); 
 
});