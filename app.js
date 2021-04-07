fetch('https://api.covid19api.com/summary')
.then(res => res.json())
.then(data => {

    function summary () {
      const  NewConfirmed = document.getElementById("new-confirmed")
      const global = data.Global
      const newC = global.NewConfirmed
      const newD = global.NewDeaths
      const totalD = global.TotalDeaths
      const newR = global.NewRecovered
      const totalR = global.TotalRecovered
      const date = `Date : ${global.Date}`
      
      totalC = global.TotalConfirmed
      NewConfirmed.innerText =  newC
      document.getElementById("date").innerText = date
      document.getElementById("total-confirmed").innerText = totalC
      document.getElementById("new-deaths").innerText =  newD
      document.getElementById("total-deaths").innerText =  totalD
      document.getElementById("new-recovered").innerText = newR
      document.getElementById("total-recovered").innerText = totalR
    }

    
     summary();


     
});