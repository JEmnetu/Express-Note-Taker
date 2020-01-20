# Express-Note-Taker
An Express Js based CRUD application that allows the user to write, save, and delete notes.



## About

* The purpose of this assignment was to use Express JS in order to create and Deploy an application that allows the user to write and display notes, as well as save and delete notes.

## Installation
* * The application is deployed on Heroku and can be found at this accessed via [this link](https://arcane-sands-29933.herokuapp.com/).

## Usage

* The user will be presented with the homepage where they can click the "Get Started" button which will take them to the '/notes' page. 

* In order to save a note the user must enter a value into the Title field and the Text field, at which point the save icon will appear in the navbar. Clicking the save icon will alert the user that the note has been saved save. The note will be displayed once the user refreshes the page. 

* In order to display the text of a given note the user must click on the note they would like to view. The note's title and text will appear in the center of the page. In order to create a new note, the user must click on the pencil icon and enter new data.

* In order to delete a given note, the user must click on the delete icon next to the note. The user will then be alerted that the note has been deleted, and will notice the deletion after refreshing the page.

* The notes are saved to and rendered from a JSON file via the backend code. If the user would like to view the JSON data they can do so by navigating to '/api/notes'. It is recommended that the user installs a JSON parser for their browser in order to more easily view the data.

## The following technologies were used to create this application:

* [CSS Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)

* [jQuery](https://code.jquery.com/)

* [Font Awesome](https://fontawesome.com/)

* [Node JS](https://nodejs.org/en/)

* [Express Node Module](https://expressjs.com/)

* [Path Node Module](https://nodejs.org/api/path.html)

* [Fs Node Module](https://nodejs.org/api/fs.html)

## License

* This application is licensed under the MIT License. The license can be found in the root directory of this project. 


