export const getAge = (dateString) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const getPersonData = () => {
  return fetch(`https://swapi.dev/api/people/${getRandomInt(1, 89)}/`).then(
    (res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  );
};
