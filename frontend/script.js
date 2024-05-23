document.addEventListener('DOMContentLoaded', function() {
    const fetchDataButton = document.getElementById('fetch-data');
    fetchDataButton.addEventListener('click', fetchBoxOfficeData);
  
    async function fetchBoxOfficeData() {
      const dateInput = document.getElementById('date').value;
      const url = `/api/boxoffice?targetDt=${dateInput}`;
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayBoxOfficeData(data);
      } catch (error) {
        console.error('Error fetching box office data:', error);
      }
    }
  
    function displayBoxOfficeData(data) {
      const boxOfficeResults = document.getElementById('boxoffice-results');
      boxOfficeResults.innerHTML = '';
  
      const boxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
  
      boxOfficeList.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
          <h2>${movie.movieNm}</h2>
          <p>Rank: ${movie.rank}</p>
          <p>Sales Amount: ${movie.salesAmt}</p>
          <p>Audience Count: ${movie.audiCnt}</p>
        `;
        boxOfficeResults.appendChild(movieItem);
      });
    }
  });
  