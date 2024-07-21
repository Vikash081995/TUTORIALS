import { includeUpdatableResource } from "./include-updatable-user";

export const UserInfoForm = includeUpdatableResource(
  ({ user, onChangeUser, onPostUser, onResetUser }) => {
    const { name, age } = user || {};

    return user ? (
      <>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />

        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
        />
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onPostUser}>Save</button>
      </>
    ) : (
      <h3>Loading.........</h3>
    );
  },
  "/users/3",
  "user"
);
