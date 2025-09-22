// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// DOM Elements
const portfolioForm = document.getElementById('portfolioForm');
const fullName = document.getElementById('fullName');
const bio = document.getElementById('bio');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');

const skillsContainer = document.getElementById('skillsContainer');
const projectsContainer = document.getElementById('projectsContainer');

const previewName = document.getElementById('previewName');
const previewBio = document.getElementById('previewBio');
const previewContact = document.getElementById('previewContact');
const previewSkills = document.getElementById('previewSkills');
const previewProjects = document.getElementById('previewProjects');

const downloadPDF = document.getElementById('downloadPDF');

// Functions
function addSkillInput() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Skill';
    input.classList.add('skill-input');
    skillsContainer.appendChild(input);
}

function addProjectInput() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Project';
    input.classList.add('project-input');
    projectsContainer.appendChild(input);
}

document.getElementById('addSkill').addEventListener('click', addSkillInput);
document.getElementById('addProject').addEventListener('click', addProjectInput);

// Update Preview
portfolioForm.addEventListener('submit', (e) => {
    e.preventDefault();

    previewName.textContent = fullName.value || 'Ramesh R';
    previewBio.textContent = bio.value || 'Web Developer | Tech Enthusiast';

    const contacts = [];
    if (email.value) contacts.push(`Email: ${email.value}`);
    if (phone.value) contacts.push(`Phone: ${phone.value}`);
    if (linkedin.value) contacts.push(`LinkedIn: ${linkedin.value}`);
    if (github.value) contacts.push(`GitHub: ${github.value}`);
    previewContact.textContent = contacts.join(' | ');

    // Skills
    previewSkills.innerHTML = '';
    const skills = document.querySelectorAll('.skill-input');
    skills.forEach(s => { if (s.value) previewSkills.innerHTML += `<li>${s.value}</li>`; });

    // Projects
    previewProjects.innerHTML = '';
    const projects = document.querySelectorAll('.project-input');
    projects.forEach(p => { if (p.value) previewProjects.innerHTML += `<li>${p.value}</li>`; });
});

// Download PDF
downloadPDF.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.html(document.getElementById('portfolioPreview'), {
        callback: function (pdf) {
            pdf.save('Ramesh_Portfolio.pdf');
        },
        x: 10,
        y: 10,
        width: 180
    });
});
