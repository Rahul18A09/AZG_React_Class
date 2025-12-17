import React from "react";

const Registration = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Registration;
