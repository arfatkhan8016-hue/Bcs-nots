const loginForm = document.getElementById('login-form');
const loginContainer = document.getElementById('login-container');
const dashboardContainer = document.getElementById('dashboard-container');
const displayUser = document.getElementById('display-user');
const logoutBtn = document.getElementById('logout-btn');

const modal = document.getElementById('notes-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// Login Handling
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    
    if(username !== "") {
        displayUser.textContent = `Welcome, ${username}`;
        loginContainer.classList.add('hidden');
        dashboardContainer.classList.remove('hidden');
    }
});

// Logout Handling
logoutBtn.addEventListener('click', function() {
    dashboardContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
    loginForm.reset();
});

// Subject-wise Notes Database
const notesData = {
    "C Programming": `
        <h4>1. Introduction to C</h4>
        <p>C is a powerful general-purpose programming language developed by Dennis Ritchie at Bell Labs.</p>
        <br>
        <h4>2. Key Concepts</h4>
        <ul>
            <li><strong>Data Types:</strong> int, float, char, double</li>
            <li><strong>Control Statements:</strong> if-else, switch, for, while, do-while</li>
            <li><strong>Functions & Arrays:</strong> Modular programming and collection of similar data items.</li>
            <li><strong>Pointers:</strong> Variables that store the memory address of another variable.</li>
        </ul>
    `,
    "Computer Networks": `
        <h4>1. Basics of Networking</h4>
        <p>A computer network is a set of devices connected through communication links.</p>
        <br>
        <h4>2. Core Topics</h4>
        <ul>
            <li><strong>OSI 7-Layer Model:</strong> Physical, Data Link, Network, Transport, Session, Presentation, Application.</li>
            <li><strong>TCP/IP Model:</strong> Network Interface, Internet, Transport, Application.</li>
            <li><strong>IP Addressing:</strong> IPv4 and IPv6 structure, Subnetting.</li>
            <li><strong>Devices:</strong> Hubs, Switches, Routers, and Gateways.</li>
        </ul>
    `,
    "Web Technology": `
        <h4>1. Introduction to Web</h4>
        <p>Web Technology covers the tools and techniques used for client-side and server-side web development.</p>
        <br>
        <h4>2. Core Components</h4>
        <ul>
            <li><strong>HTML5:</strong> Semantic tags, forms, tables, and page structuring.</li>
            <li><strong>CSS3:</strong> Styling, Flexbox, Grid, Media Queries for responsiveness.</li>
            <li><strong>JavaScript:</strong> Event handling, DOM manipulation, and validation.</li>
        </ul>
    `,
    "Indian Knowledge System": `
        <h4>1. Overview of IKS</h4>
        <p>Focuses on ancient Indian traditional knowledge, scientific achievements, literature, and philosophy.</p>
        <br>
        <h4>2. Key Modules</h4>
        <ul>
            <li><strong>Science & Tech:</strong> Metallurgy, Astronomy, and Mathematics (Vedic Maths).</li>
            <li><strong>Philosophy & Arts:</strong> Upanishads, Ayurveda, Yoga, Architecture, and Fine arts.</li>
        </ul>
    `,
    "General Engineering": `
        <h4>1. Multidisciplinary Engineering</h4>
        <p>Covers fundamental principles across major engineering branches.</p>
        <br>
        <h4>2. Topics Covered</h4>
        <ul>
            <li><strong>Electrical:</strong> Ohm’s Law, KVL, KCL, AC/DC Circuits.</li>
            <li><strong>Mechanical:</strong> Laws of thermodynamics, basic mechanisms, and forces.</li>
            <li><strong>Civil:</strong> Surveying basics, building materials, and structures.</li>
        </ul>
    `,
    "Hindi": `
        <h4>1. पाठ्यक्रम विवरण</h4>
        <p>प्रथम वर्ष सेमेस्टर 1 के लिए हिंदी भाषा और साहित्य का अध्ययन।</p>
        <br>
        <h4>2. मुख्य विषय</h4>
        <ul>
            <li>गद्य और पद्य संकलन (कहानियां, कविताएं)</li>
            <li>व्याकरण: संज्ञा, सर्वनाम, पर्यायवाची, मुहावरे</li>
            <li>रचनात्मक लेखन: पत्र लेखन और निबंध लेखन</li>
        </ul>
    `,
    "English": `
        <h4>1. Professional Communication</h4>
        <p>Enhancing technical and corporate English communication skills.</p>
        <br>
        <h4>2. Major Topics</h4>
        <ul>
            <li><strong>Grammar & Vocabulary:</strong> Tenses, Active-Passive voice, Synonyms.</li>
            <li><strong>Writing Skills:</strong> Formal Letters, E-mails, Technical Reports, and Résumé building.</li>
            <li><strong>Reading Skills:</strong> Comprehension and passage analysis.</li>
        </ul>
    `
};

// Open Modal and Load Notes
function openNotes(subjectName) {
    modalTitle.textContent = subjectName + " - Notes";
    modalBody.innerHTML = notesData[subjectName] || "<p>Notes will be uploaded soon by Pathan Araft.</p>";
    modal.classList.remove('hidden');
}

// Close Modal
function closeModal() {
    modal.classList.add('hidden');
}

// Close modal when clicking outside content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add('hidden');
    }
}
