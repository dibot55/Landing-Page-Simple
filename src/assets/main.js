// API de mi canal de youtube
const url = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fddcb0efd3msh3016911595ee9c2p1f77b5jsn2a25826d6c8e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
  try {
    const response = await fetch(urlApi, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
// IIFE
(async () => {
  try {
    const videos = await fetchData(url);
    return videos;
  } catch (error) {
    console.log(error);
  }
})();