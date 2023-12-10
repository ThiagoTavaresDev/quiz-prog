import { questions } from "../questions/questions";
import { useState } from "react";
export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const updateQuestion = (e) => {
    const selectedOption = e.target.innerHTML;
    if (selectedOption == questions[currentQuestion - 1].resposta) {

      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  const resetQuiz = () =>{
    setCurrentQuestion(1);
    setScore(0);
  }
  console.log(score);

  return (
    <>
      {currentQuestion <= questions.length ? (
        <>
          <main className="my-12 mx-auto max-w-[600px] min-w-[400px] rounded-sm p-6 shadow-2xl border-[2px] border-blue-300 ">
            <div className="flex justify-evenly text-blue-300 font-bold ">
              <h1 className="text-3xl">
                Questão
                <span className="px-2">{currentQuestion - 1}</span>
              </h1>
              <span className="text-3xl">
                {score}/{questions.length}
              </span>
            </div>
            <div className="flex justify-center">
              <p className="text-lg pt-4 font-bold text-gray-100">
                {questions.map((item) => {
                  if (item.id === currentQuestion) {
                    return item.question;
                  }
                })}
              </p>
            </div>
          </main>
          <div className="my-0 mx-auto max-w-[600px] h-[200px]  flex flex-col justify-center items-center font-bold text-lg text-gray-200 break-words">
            <div className="flex gap-12 py-2">
              {questions.map((item) => {
                if (item.id === currentQuestion) {
                  return (
                    <>
                      <button
                        key={item.options[0]}
                        className="bg-slate-700 min-h-[60px]  min-w-[200px] rounded-sm max-w-[300px] border-blue-300 border-[2px] button"
                        onClick={updateQuestion}
                      >
                        {item.options[0]}
                      </button>
                      <button
                        key={item.options[1]}
                        className="bg-slate-700 min-h-[60px]  min-w-[200px] rounded-sm max-w-[300px] border-blue-300 border-[2px] button"
                        onClick={updateQuestion}
                      >
                        {item.options[1]}
                      </button>
                    </>
                  );
                }
              })}
            </div>
            <div className="flex gap-12 py-2">
              {questions.map((item) => {
                if (item.id === currentQuestion) {
                  return (
                    <>
                      <button
                        key={item.options[2]}
                        className="bg-slate-700 min-h-[60px]  min-w-[200px] rounded-sm max-w-[300px] border-blue-300 border-[2px] button"
                        onClick={updateQuestion}
                      >
                        {item.options[2]}
                      </button>
                      <button
                        key={item.options[3]}
                        className="bg-slate-700 min-h-[60px]  min-w-[200px] rounded-sm max-w-[300px] border-blue-300 border-[2px] button"
                        onClick={updateQuestion}
                      >
                        {item.options[3]}
                      </button>
                    </>
                  );
                }
              })}
            </div>
          </div>
        </>
      ) : (
        
        <main className="my-12 mx-auto w-[600px] h-[400px] rounded-sm p-6 shadow-2xl border-[2px] border-blue-300 flex justify-center items-center flex-col">
          <div className="flex justify-center ">
            <p className="text-3xl pt-4 font-bold text-gray-100 my-12">
              Parabéns, sua pontuação foi de {score}/{questions.length}
            </p>
            </div>
            <button className="bg-slate-700 min-h-[60px] min-w-[200px] rounded-sm border-blue-300 border-[2px] my-8 button text-gray-100" onClick={resetQuiz}>Reiniciar</button>
         </main>
         
      )}
    </>
  )};