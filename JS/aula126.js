const grafico1 = document.getElementById('grafico1');

    let labelsX = ['Angola', 'Brasil', 'USA', 'Japão', 'Argentina', 'Portugal', 'México', 'China']
    let dataY = [20, 15, 3, 5, 16, 12, 8, 7]

  new Chart(grafico1, {
    type: 'bar',
    data: {
      labels: labelsX,
      datasets: [{
        label: '# of Votes',
        data: dataY,
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