f //recieve data
const Http = new XMLHttpRequest();
const url='http://localhost:3000/users';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
            }
