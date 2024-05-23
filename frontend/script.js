document.addEventListener('DOMContentLoaded', function() {
  const fetchDataButton = document.getElementById('fetch-data');
  fetchDataButton.addEventListener('click', fetchBoxOfficeData);

  async function fetchBoxOfficeData() {
    const dateInput = document.getElementById('date').value;
    const url = `http://localhost:5000/api/boxoffice?targetDt=${dateInput}`;

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



// document.addEventListener('DOMContentLoaded', function() {
//   const fetchDataButton = document.getElementById('fetch-data');
//   fetchDataButton.addEventListener('click', fetchBoxOfficeData);

//   async function fetchBoxOfficeData() {
//     const dateInput = document.getElementById('date').value;
//     const apiUrl = window.location.hostname === 'localhost'
//       ? `http://localhost:5000/api/boxoffice?targetDt=${dateInput}`
//       : `https://sunbang123.github.io/cinequick/api/boxoffice?targetDt=${dateInput}`;  // 실제 배포된 백엔드 도메인을 여기에 입력합니다.

//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       displayBoxOfficeData(data);
//     } catch (error) {
//       console.error('Error fetching box office data:', error);
//     }
//   }

//   function displayBoxOfficeData(data) {
//     const boxOfficeResults = document.getElementById('boxoffice-results');
//     boxOfficeResults.innerHTML = '';

//     const boxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

//     boxOfficeList.forEach(movie => {
//       const movieItem = document.createElement('div');
//       movieItem.classList.add('movie-item');
//       movieItem.innerHTML = `
//         <h2>${movie.movieNm}</h2>
//         <p>Rank: ${movie.rank}</p>
//         <p>Sales Amount: ${movie.salesAmt}</p>
//         <p>Audience Count: ${movie.audiCnt}</p>
//       `;
//       boxOfficeResults.appendChild(movieItem);
//     });
//   }
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const fetchDataButton = document.getElementById('fetch-data');
//     fetchDataButton.addEventListener('click', fetchBoxOfficeData);
  
//     async function fetchBoxOfficeData() {
//       const dateInput = document.getElementById('date').value;
//       const url = `/api/boxoffice?targetDt=${dateInput}`;
  
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         displayBoxOfficeData(data);
//       } catch (error) {
//         console.error('Error fetching box office data:', error);
//       }
//     }
  
//     function displayBoxOfficeData(data) {
//       const boxOfficeResults = document.getElementById('boxoffice-results');
//       boxOfficeResults.innerHTML = '';
  
//       const boxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
  
//       boxOfficeList.forEach(movie => {
//         const movieItem = document.createElement('div');
//         movieItem.classList.add('movie-item');
//         movieItem.innerHTML = `
//           <h2>${movie.movieNm}</h2>
//           <p>Rank: ${movie.rank}</p>
//           <p>Sales Amount: ${movie.salesAmt}</p>
//           <p>Audience Count: ${movie.audiCnt}</p>
//         `;
//         boxOfficeResults.appendChild(movieItem);
//       });
//     }
//   });
  