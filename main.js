document.addEventListener('DOMContentLoaded', () => {
  const eventsContainer = document.getElementById('events-container');

  // Replace with your actual Tickeri API URL
  const TICKERI_API_URL = 'https://www.tickeri.com/api/events/search?venue=The%20Palace';

  fetch(TICKERI_API_URL)
    .then(response => response.json())
    .then(data => {
      data.events.forEach(event => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
          <div class="card h-100">
            <img src="${event.image || 'https://via.placeholder.com/300x200'}" class="card-img-top" alt="${event.title}">
            <div class="card-body">
              <h5 class="card-title">${event.title}</h5>
              <p class="card-text">${new Date(event.start_time).toLocaleDateString()}</p>
            </div>
          </div>
        `;
        eventsContainer.appendChild(col);
      });
    })
    .catch(err => {
      eventsContainer.innerHTML = '<p class="text-center text-danger">Failed to load events.</p>';
      console.error(err);
    });
});
