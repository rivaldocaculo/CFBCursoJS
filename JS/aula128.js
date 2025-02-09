const grafico1 = document.getElementById('grafico1');

    let labelsX = ['Disponibilidade', 'Qualidade', 'Performance']
    let valores = [0, 0, 0]

  let ctx = new Chart(grafico1, {
    type: 'bar',
    data: {
      labels: labelsX,
      datasets: [{
        label: '# of Votes',
        data: valores,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const obterDados=()=>{
    const endpoint = "https://d1172feb-3702-4e98-8dab-aca0f17c1b8a-00-3mk34cyqhn7bm.janeway.replit.dev/"
    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
            valores[0] = res.disponibilidade
            valores[1] = res.qualidade
            valores[2] = res.performance    
            ctx.update()
    })
    .catch(erro => {
            console.log("ERRO: " + erro)
    })
  }

  let intervalo = setInterval(obterDados,3000)
  