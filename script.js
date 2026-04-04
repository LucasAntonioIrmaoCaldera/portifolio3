const projects = [
  {
    title: "Projeto 1",
    description: "Primeiro site no Github-pages. O site publicado é um simulador, não foi feito com o intuito de ser usado profissionalmente.",
    link: "https://lucasantonioirmaocaldera.github.io/last-test/"
  },
  {
    title: "Projeto 2",
    description: "Em desenvolvimento",
    link: "#"
  }
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">
      <button>Ver Projeto</button>
    </a>
  `;
  projectList.appendChild(card);
});

function showMessage() {
  alert("Obrigado por visitar meu portfólio!");
}