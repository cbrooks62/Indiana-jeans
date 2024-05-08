import { ownJeanChoices } from "./ownsJeans.js"
import { saveSubmission } from "./saveSubmissions.js"
import { submissionList } from "./submissions.js"
import { locationTypeChoice } from "./urbanDweller.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = ownJeanChoices()
    const locationsHTML = await locationTypeChoice()
    const buttonHTML = await saveSubmission()
    const submissionListHTML = await submissionList()

    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    ${buttonHTML}
    ${submissionListHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()