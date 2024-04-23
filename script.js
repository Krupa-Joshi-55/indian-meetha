document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    performSearch();
  });
  
  document.getElementById('search').addEventListener('input', function() {
    performSearch();
  });
  
  function performSearch() {
    let searchQuery = document.getElementById('search').value.trim().toLowerCase();
    let cards = document.querySelectorAll('.content .card');
    
    cards.forEach(function(card) {
        let title = card.querySelector('.card-title').innerText.toLowerCase();
        if (title.includes(searchQuery) || searchQuery === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
  }
  