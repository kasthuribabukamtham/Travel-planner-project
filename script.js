const destinationInput = document.getElementById('destinationInput');
const searchBtn = document.getElementById('searchBtn');
const destinationInfo = document.getElementById('destinationInfo');

searchBtn.addEventListener('click', () => {
  const destination = destinationInput.value.trim();
  if (destination === '') {
    alert('Please enter a destination.');
    return;
  }

  // Simulate fetching destination information from an API
  setTimeout(() => {
    const destinationData = {
      name: destination,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec posuere urna. Integer tempus justo vel congue tempor.',
      weather: 'Sunny with a chance of showers',
      attractions: ['Attraction 1', 'Attraction 2', 'Attraction 3']
    };
    displayDestinationInfo(destinationData);
  }, 1000); // Simulating a delay for fetching data
});

function displayDestinationInfo(destinationData) {
  const { name, description, weather, attractions } = destinationData;
  destinationInfo.innerHTML = `
    <h2>${name}</h2>
    <p>${description}</p>
    <p><strong>Weather:</strong> ${weather}</p>
    <p><strong>Attractions:</strong></p>
    <ul>
      ${attractions.map(attraction => `<li>${attraction}</li>`).join('')}
    </ul>
  `;
}
