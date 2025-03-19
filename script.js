// Code Challenge: Object and Property Access

// Challenge:
// Create an object called `person` that represents a person with the following properties:
// - name (string): the person's name.
// - age (number): the person's age.
// - city (string): the person's city of residence.

// Access the properties of the `person` object and return a string that combines the person's name, age, and city in the format:
// "{name} is {age} years old and lives in {city}."

// Example:
// If `person` is { name: "John Doe", age: 25, city: "New York" },
// the output should be "John Doe is 25 years old and lives in New York."
const person = {};
function getPersonInfo(person) {
  // Access the properties of the `person` object and return the desired string
}

// Code Challenge: Object and Property Access

// Challenge:
// Create an object called `car` that represents a car with the following properties:
// - brand (string): the brand of the car.
// - model (string): the model of the car.
// - year (number): the year the car was manufactured.

// Access the properties of the `car` object and return a string that describes the car in the format:
// "This car is a {year} {brand} {model}."

// Example:
// If `car` is { brand: "Toyota", model: "Camry", year: 2021 },
// the output should be "This car is a 2021 Toyota Camry."

const car = {};

function getCarDescription() {
  // Access the properties of the `car` object and return the desired string
}

// Code Challenge: Object and Property Access

// Challenge:
// Create an object called `book` that represents a book with the following properties:
// - title (string): the title of the book.
// - author (string): the author of the book.
// - year (number): the year the book was published.

// Access the properties of the `book` object and return a string that provides information about the book in the format:
// "{title} by {author}, published in {year}."

// Example:
// If `book` is { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
// the output should be "The Great Gatsby by F. Scott Fitzgerald, published in 1925."

const book = {};

function getBookInfo() {
  // Access the properties of the `book` object and return the desired string
}

// Code Challenge: Object and Property Access

// Challenge:
// Create an object called `movie` that represents a movie with the following properties:
// - title (string): the title of the movie.
// - director (string): the director of the movie.
// - year (number): the year the movie was released.

// Access the properties of the `movie` object and return a string that describes the movie in the format:
// "{title} directed by {director}, released in {year}."

// Example:
// If `movie` is { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
// the output should be "The Shawshank Redemption directed by Frank Darabont, released in 1994."

const movie = {};

function getMovieDescription() {
  // Access the properties of the `movie` object and return the desired string
}

// Code Challenge: Object and Property Access

// Challenge:
// Create an object called `product` that represents a product with the following properties:
// - name (string): the name of the product.
// - price (number): the price of the product.
// - category (string): the category of the product.

// Access the properties of the `product` object and return a string that describes the product in the format:
// "The {name} is a {category} and it costs ${price}."

// Example:
// If `product` is { name: "iPhone 12", price: 999, category: "Electronics" },
// the output should be "The iPhone 12 is a Electronics and it costs $999."

const product = {};

function getProductDescription() {
  // Access the properties of the `product` object and return the desired string
}

// *************************************************** //
// *************************************************** //
// ****** DO NOT CHANGE CODE BELOW THIS LINE ********* //
// *************************************************** //
// *************************************************** //

// Tests:
function testGetProductDescription() {
  const result = getProductDescription(product);
  console.log(
    result === "The iPhone 12 is a Electronics and it costs $999."
      ? "Test Passed"
      : "Test Failed"
  );
}

// Run the test
testGetProductDescription();

// Tests:
function testGetMovieDescription() {
  const result = getMovieDescription(movie);
  console.log(
    result ===
      "The Shawshank Redemption directed by Frank Darabont, released in 1994."
      ? "Test Passed"
      : "Test Failed"
  );
}

// Run the test
testGetMovieDescription();

// Tests:
function testGetBookInfo() {
  const result = getBookInfo(book);
  console.log(
    result === "The Great Gatsby by F. Scott Fitzgerald, published in 1925."
      ? "Test Passed"
      : "Test Failed"
  );
}

// Run the test
testGetBookInfo();

// Tests:
function testGetCarDescription() {
  const result = getCarDescription(car);
  console.log(
    result === "This car is a 2021 Toyota Camry."
      ? "Test Passed"
      : "Test Failed"
  );
}

// Run the test
testGetCarDescription();

// Tests:
function testGetPersonInfo() {
  const result = getPersonInfo(person);
  console.log(
    result === "John Doe is 25 years old and lives in New York."
      ? "Test Passed"
      : "Test Failed"
  );
}

// Run the test
testGetPersonInfo();
