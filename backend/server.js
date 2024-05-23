const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const key = 'deb2511d2c3626e02e65c9f9f0c32063';  // 여기에 발급받은 API 키를 입력하세요.

app.get('/api/boxoffice', async (req, res) => {
  const { targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd } = req.query;

  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}&itemPerPage=${itemPerPage}&multiMovieYn=${multiMovieYn}&repNationCd=${repNationCd}&wideAreaCd=${wideAreaCd}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch box office data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// const PORT = process.env.PORT || 5000;
// const key = 'deb2511d2c3626e02e65c9f9f0c32063'; // 여기에 발급받은 API 키를 입력하세요.

// app.get('/api/boxoffice', async (req, res) => {
//   const { targetDt, itemPerPage, multiMovieYn, repNationCd, wideAreaCd } = req.query;

//   const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}&itemPerPage=${itemPerPage}&multiMovieYn=${multiMovieYn}&repNationCd=${repNationCd}&wideAreaCd=${wideAreaCd}`;

//   try {
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch box office data' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
