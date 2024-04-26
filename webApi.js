axios
  .get("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    const { data } = response;
    console.log(data.value);
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then((response) => {
    const { data } = response;
    console.log(data.message);
  })
  .catch((error) => {
    console.log(error);
  });
