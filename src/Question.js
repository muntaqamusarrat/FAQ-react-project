import React from "react"

//question prop is received from App.js
export default function Question({question}) {
    //useState 
    //isOpen determines if its true or false
    //setOpen is used to change from true to false
    const [isOpen, setOpen] = React.useState(false)

    //button onClick fucntion
    //changes the setOpen from true to false, vice versa
    const handleClick = () => {
        setOpen(!isOpen)
    }

    return (
        //JSX of Question.js
        <section>
            {/*the class name wiil either be open or closed*/}
            {/*based on the ternary condition*/}
            <div className={isOpen ? "open" : "closed"}>
                
                {/*we can see the title from question.title*/}
                {/*question is the prop which contains the array object*/}
                {/*.title is the key of that object*/}
                <h4>{question.title}</h4>
                
                {/*the handleClick function is triggered*/}
                {/*content inside the function will depend on isOpen*/} 
                <button onClick={handleClick}>{isOpen ? "-" : "+"}</button>
            </div>
            
            {/*if isOpen is true, then the answer will get displayed*/}
            {isOpen && <p>{question.info}</p>}
        </section>
    )
}