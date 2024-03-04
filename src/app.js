/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#touch").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = function() {
  let pronoun = ["A", "The", "My"];
  let subject = ["Pig", "Hen", "Cow", "Ganso", "Frog", "Ferret"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let posetion = ["banana", "notebook", "homework", "shoe", "pencil"];
  let where = ["on the street", "in my house", "in my driveway"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let posetionIndex = Math.floor(Math.random() * posetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    "" +
    subject[subjectIndex] +
    "" +
    action[actionIndex] +
    "" +
    posetion[posetionIndex] +
    "" +
    where[whereIndex]
  );
};
