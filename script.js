document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Perform search functionality here
  let searchQuery = document.getElementById('search').value.toLowerCase();
  let cards = document.querySelectorAll('.content .card');
  
  cards.forEach(function(card) {
      let title = card.querySelector('.card-title').innerText.toLowerCase();
      if (title.includes(searchQuery)) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
});

//  chikki, imarti, modak, kalakand, kaju katli, kheer, phirni, kulfi, mysore pak, petha, rabri, rasmalia, rajbhog, rasgulla, sandes, sheer khurma, shrikhand, suji halwa, til ladoo, malpua, anarsa, achappam, 
