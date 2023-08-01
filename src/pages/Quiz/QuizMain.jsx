import qm from "./quizMain.module.scss";
import { createContext, useState } from "react";
import { Quiz1 } from "./Quiz1";
import { Quiz2 } from "./Quiz2";

const QuizMain = ({ children }) => {
  const ProgressContext = createContext();
  const [progress, setProgress] = useState(0);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default QuizMain;
