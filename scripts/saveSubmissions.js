import { saveSurveySubmission } from "./transientState.js"

    const handleSurveySubmissionClick = (clickEvent) => {
       if (clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
       }
   }

export const saveSubmission = () => {

   document.addEventListener("click", handleSurveySubmissionClick)

 return "<div><button id ='saveSubmission'>Save Submission</button></div>"

}

