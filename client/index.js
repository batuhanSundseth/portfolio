const views = {
  "about": `
    <section id="about" class="section">
      <h2>About</h2>
      <p>I am a novice software engineer and full-stack developer with a keen interest in machine learning and VR technology.
      My journey into the tech world began in high school, where I built robots for our school's team. Things really took off when I eventually graduated and joined the DevMountain program!
      I am now studying Java Software Engineering in hopes of landing a job where there is much opportunity for improvement and advancement.
    </section>
    `,
  "skills": `
    <section id="skills" class="section">
      <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>SQL</li>
          <li>Node</li>
          <li>Git</li>
          <p></p>
          <li>Building Computers</li>
        </ul>
    </section>
  `,
  "projects": `
    <section id="projects" class="section">
      <h2>Projects</h2>
        <ul>
          <li>GitHub: https://github.com/batuhanSundseth</li>
          <li>Password Manager: https://3.145.106.2/</li>
        </ul>
    </section>
  `,
  "contact": `
    <section id="contact" class="section">
      <h2>Contact</h2>
        <ul>
          <li>Phone: (202) 929-9051</li>
          <li>Email: batuhansundseth@pm.me</li>
        </ul>
    </section>
  `
}
const navLinks = document.querySelectorAll('a')
const main = document.querySelector('#main')
console.log(navLinks)

const changeView = evt => {
  let view = evt.target.id
  main.innerHTML = views[view]
}

for(let i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener('click', changeView)
}