// define pattern for url protocol
// let urlProtocol = /https/;

// create using constructor
let urlProtocol = new RegExp("https");
let url = "http://www.durhacollege.ca";
let searchResult = url.search(urlProtocol); // returns -1 when pattern is not found
console.log(`url=${url} searchResult=${searchResult}`);

url = "https://www.durhamcollege.ca";
searchResult = url.search(urlProtocol);
console.log(`url=${url} searchResult=${searchResult}`);

/**
 *
 * @param {*} email
 */
function isValidEmail(email) {
  let emailPattern =
    /^[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)*@[a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})$/;
  let validEmail;
  if (emailPattern.test(email)) {
    validEmail = true;
  } else {
    validEmail = false;
  }

  return validEmail;
}

let email = "president@whitehouse.gov";
let validEmail = isValidEmail(email);
console.log(`${email} isValid=${validEmail}`); // true

email = "hello";
validEmail = isValidEmail(email);
console.log(`${email} isValid=${validEmail}`); // false

email = "@example.com";
validEmail = isValidEmail(email);
console.log(`${email} isValid=${validEmail}`); // false

email = "hello@";
validEmail = isValidEmail(email);
console.log(`${email} isValid=${validEmail}`); // false
