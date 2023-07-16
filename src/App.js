//import logo from './logo.svg';
import './App.css';
import Question from "./Question"//importing the component

export default function App() {
  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      <div className='questions'>
        {/*mapping the questions array object*/}
        {questions.map((question) => (
          /*sending props to Question component*/
          <Question key={question.id} question={question}/> 
        ))}
      </div>
    </div>
  );
}
//questions array object 
const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 2,
    title: "How much does it cost?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 3,
    title: "When can I get it?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  }
];

