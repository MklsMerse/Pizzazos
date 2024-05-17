function sendRequest(url, div) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200)  {
        let adatok = JSON.parse(xhr.responseText);
          console.log(adatok);
        for (let i = 0; i < adatok.data.length; i++) {
          document.getElementById(div).innerHTML += `<div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${adatok.data[i].avatar}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${adatok.data[i].first_name} ${adatok.data[i].last_name}</h5>
            <p class="card-text">${adatok.data[i].email}</p>
          </div>
        </div>`
        }
            }
    };
    // https://nodejs.sulla.hu/data
    xhr.open("GET", url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send();
  }
  
  sendRequest("https://reqres.in/api/users", "elso")
  
  console.log(1 == "1");
  console.log(1 === "1");

  document.getElementById("button2").onclick = function() {
    fetch("https://pizza.kando-dev.eu/Pizza")
    .then(function (res) {
        return res.json();
    })
    .then(function (adatok) {
        console.log(adatok);
        for(const data of adatok) {
            document.getElementById("content").innerHTML += data.name + ""
        }
    })
  }
  document.addEventListener('DOMContentLoaded', function() {
    $('#carouselExampleSlidesOnly').carousel();
});

document.getElementById('pizzaForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const pizzaName = document.getElementById('pizzaName').value;
  const pizzaIngredients = document.getElementById('pizzaIngredients').value;
  const pizzaPrice = document.getElementById('pizzaPrice').value;

  const pizzaSection = document.createElement('div');
  pizzaSection.classList.add('pizza');
  pizzaSection.innerHTML = `
      <h3 class="special">${pizzaName}</h3>
      <p>${pizzaIngredients}</p>
      <span class="ar">${pizzaPrice} Ft</span>
  `;
  
  document.getElementById('specials').appendChild(pizzaSection);

  $('#pizzaModal').modal('hide');
});