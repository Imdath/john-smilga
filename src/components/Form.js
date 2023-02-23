import { useState } from "react";
import { data } from "../data";
const Form = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const submitForm = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    setUsers([...users, newUser]);
    // console.log("Form submitted");
    setName("");
  };

  const removeUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="name"> Name</label>
        <br />
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
      <ul>
        {users.map((user) => (
          <>
            <li key={user.id}> {user.name}</li>
            <button type="button" onClick={() => removeUser(user.id)}>
              Remove
            </button>
          </>
        ))}
      </ul>
    </form>
  );
};

export default Form;
