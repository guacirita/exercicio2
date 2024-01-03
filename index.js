


const estudantes =[ {
  nome: "Maria",
  notaPrimeiraProva: 10,
  notaSegundaProva: 8
},
{
  nome: "Julia",
  notaPrimeiraProva: 10,
  notaSegundaProva: 10
},
{
  nome: "Silvia",
  notaPrimeiraProva: 6,
  notaSegundaProva: 6
},
{
  nome: "Luana",
  notaPrimeiraProva: 5,
  notaSegundaProva: 8
},
{
  nome: "Neide",
  notaPrimeiraProva:5,
  notaSegundaProva: 6
},
]

function CalculaMediaDasNotasProvas(notaPrimeiraProva, notaSegundaProva) {
   let mediaProvas = (notaPrimeiraProva + notaSegundaProva) / 2;
    return mediaProvas;
}


for (let estudante of estudantes) {
  let mediaIndividual = CalculaMediaDasNotasProvas(estudante.notaPrimeiraProva, estudante.notaSegundaProva);
   let resultado = mediaIndividual > 7 ? "Parabéns vc passou no concurso" : "Não foi desta vez. aguarde o próximo concurso";

  alert(`A média de ${estudante.nome}, é:  ${mediaIndividual} .
    ${resultado}`)
}