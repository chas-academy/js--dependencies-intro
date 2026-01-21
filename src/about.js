export default function about() {
  const about = document.createElement("div");

  const imgUrl =
    "https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g";

  for (let index = 0; index < 6; index++) {
    about.innerHTML += `<img src="${imgUrl}"
        alt="folk på en klippa">`;
  }

  return about;
}
