import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Tim");
  const [lastName, setLastName] = useState("Kiyeng");
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    if (firstName.length > 0) {
    const formData = {
      firstName: firstName,
      lastName : lastName
    }
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setErrors([])
  } else {
    setErrors(["Please input your first name!"])
  }}

  const listofSubmissions =
    submittedData.map((data, index) => {
      return (
        <div key={index}>
             {data.firstName} {data.lastName}
        </div>
      )
    }
  )

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0
    ? errors.map((error, index) => (
      <p key={index} style={{color: "red"}}>
        {error}
      </p>
    )) : null}
    <h3>Submissions List</h3>
    {listofSubmissions}
    </div>
  );
}

export default Form;
