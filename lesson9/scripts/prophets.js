const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];

    prophets.forEach(displayProphets);
  });

// displayProphets function
function displayProphets(prophet) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let birth = document.createElement("p");
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `Portrait of ${prophet.name} ${prophet.lastname} ${prophet.order}th Latter-day President`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute("loading", "lazy");
    
    // birth place and birth date
    birth.textContent = `Born in ${prophet.birthplace} on ${prophet.birthdate}`;
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birth);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }