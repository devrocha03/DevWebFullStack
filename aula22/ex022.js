function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault(); // Não deixa a página dar reload

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const altura = form.querySelector(".altura");
    const peso = form.querySelector(".peso");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      altura: altura.value,
      peso: peso.value,
    });

    console.log(pessoas);
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}<br> ${altura.value}m <br>${peso.value}Kg</p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
