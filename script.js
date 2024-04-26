const title1 = document.getElementsByClassName("text1");
const title2 = document.getElementsByClassName("text2");
const button1 = document.getElementsByClassName("but1");
const button2 = document.getElementsByClassName("but2");
const para1 = document.getElementsByClassName("content1");
const img1 = document.getElementsByClassName("content2");

button1[0].addEventListener("click", () => {
  para1[0].innerText = "Loading....";
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      const { data } = response;
      console.log(data.value);
      para1[0].innerText = data.value;
    })
    .catch((error) => {
      console.log(error);
    });
});

button2[0].addEventListener("click", () => {
  img1[0].src = "Loading ....";
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      const { data } = response;
      console.log(data.message);
      img1[0].src = data.message;
    })
    .catch((error) => {
      console.log(error);
    });
});
