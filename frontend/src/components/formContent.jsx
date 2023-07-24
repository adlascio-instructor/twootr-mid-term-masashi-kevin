import { useState } from "react";
import { InputContents, SubmitButton } from "./BlackStyle";

export default function FormContent({
    newUser,
    newUserTitle,
    passName,
    passNameSlug,
    getIcon,
}) {
    // const [inputAurthorName, setInputAurthorName] = useState("@john-doe");

    //Change a new name when user click the submit button
    const [submitted, setSubmitted] = useState(false);
    const nameSubmit = (event) => {
        setSubmitted(true);
        event.preventDefault();
        const getFirstName = document.getElementById("firstName").value;
        const getLastName = document.getElementById("lastName").value;
        const createAccountName = `@${getFirstName
            .toLowerCase()
            .replace(/[^a-zA-Z0]/g, "")}-${getLastName
            .toLowerCase()
            .replace(/[^a-zA-Z]/g, "")}`;
        const createName =
            getFirstName.replace(/[^a-zA-Z]/g, "") +
            " " +
            getLastName.replace(/[^a-zA-Z]/g, "");
        if (!getFirstName || !getLastName) {
            alert("Please enter a valid name!");
        } else {
            // setInputAurthorName(creatName);
            getIcon(createName);
            newUserTitle(createName);
            newUser(createAccountName);
            passName(createName);
            passNameSlug(createName);
        }
    };

    //Submit button
    // const submittedSuccessfully = submitted ? (
    //     <span style={{ color: "green" }}>&#10003;</span>
    // ) : (
    //     "Submit"
    // );

    return (
        <div>
            <form>
                <InputContents type="text" id="firstName" />
                <InputContents type="text" id="lastName" />
                <SubmitButton onClick={nameSubmit}>Submit</SubmitButton>
            </form>
            {/* <p>{inputAurthorName}</p> */}
        </div>
    );
}
