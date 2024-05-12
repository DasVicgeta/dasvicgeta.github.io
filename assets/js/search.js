let data = [
  { nombre: "Lenguaje", clase: "castellano" },
  { nombre: "lenguaje", clase: "castellano" },
  { nombre: "Castellano", clase: "castellano" },
  { nombre: "castellano", clase: "castellano" },
  { nombre: "Ingles", clase: "ingles" },
  { nombre: "ingles", clase: "ingles" },
  { nombre: "Matematica", clase: "matematica" },
  { nombre: "matematica", clase: "matematica" },
  { nombre: "Fisica", clase: "fisica" },
  { nombre: "fisica", clase: "fisica" }
];

function buscar() {
  let query = document.getElementById("buscar").value.toLowerCase().trim();
  let list = document.getElementById("list");
  let elements = list.getElementsByClassName(query); // Busca elementos por la clase específica

  if (query === "") {
    return;
  }

  // Ocultar todos los elementos primero
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].style.display = "none";
  }

  // Mostrar solo los elementos que tienen la clase especificada
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
}

