import React from "react";

function Home() {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <h1>Welcome</h1>
            </a>
          </div>
        </nav>
      </div>

      <img
        src="/src/components/student/books.jpg"
        alt="..."
        style={{ maxWidth: "100%", height: "75vh" }}
      />
    </div>
  );
}

export default Home;
