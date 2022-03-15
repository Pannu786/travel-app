import axios from 'axios';

const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

// url = some url
// axios
//   .request(url, options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        currency: 'NZD',
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '17a9cfd4d4msh6afbbc973cf827fp1e074bjsn672254bc7e1d',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
