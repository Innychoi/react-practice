import React, { useState } from 'react';

const fields = [
  {name: 'name',
   label: 'name',
   type: 'text',
   id: 'name'},
   {name: 'email',
   label: 'email',
   type: 'email',
   id: 'email'},
   {name: 'birthdate',
   label: 'birthdate',
   type: 'date',
   id: 'birthdate'},
   {name: 'password',
   label: 'password',
   type: 'password',
   id: 'password'},
]

const FillForms = () => {
  const [input, setInput] = useState({name: '', email: '', birthdate: '', password: ''});
  const [page, setPage] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit (e) {
    e.preventDefault();
    if(page === fields.length - 1){
      console.log(input);
      setSubmitted(true);
    } else {
      console.log(input);
      setPage((prev) => prev + 1);
    }
  }

  function handleChange(e) {
    setInput({
      ...input,
      [fields[page].name]: e.target.value
    })
  }

  return (
    <div>
      {submitted && <h3> submit success! </h3>}
      {!submitted &&
        <form onSubmit={handleSubmit}>
          {fields[page].name}
          <input
            name={fields[page].name}
            id={fields[page].id}
            label={fields[page].label}
            value={input[fields[page].name]}
            type={fields[page].type}
            onChange={handleChange}
          />
          <button type='submit'>{page === fields.length - 1 ? 'submit' : 'next'}</button>
        </form>
      }
    </div>
  );
};

export default FillForms;