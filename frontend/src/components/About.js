const About = () => {
  return (
    <div className="about-div">
      <h2>About</h2>
      <p>
        This to-do list app is built using the MERN stack -{" "}
        <span
          style={{
            backgroundColor: "#f44336",
            color: "#fff",
            padding: "0.2rem 0.5rem",
            borderRadius: "0.2rem",
          }}
        >
          MongoDB
        </span>
        {" "},{" "}
        <span
          style={{
            backgroundColor: "#f44336",
            color: "#fff",
            padding: "0.2rem 0.5rem",
            borderRadius: "0.2rem",
          }}
        >
          Express
        </span>
        {" "},{" "}
        <span
          style={{
            backgroundColor: "#f44336",
            color: "#fff",
            padding: "0.2rem 0.5rem",
            borderRadius: "0.2rem",
          }}
        >
          React
        </span>
        {" "}, and{" "}
        <span
          style={{
            backgroundColor: "#f44336",
            color: "#fff",
            padding: "0.2rem 0.5rem",
            borderRadius: "0.2rem",
          }}
        >
          Node.js
        </span>
        {" "}. The app allows users to create, edit, and delete tasks, as well as
        mark tasks as completed.
      </p>
      <h3>Technical Implementation</h3>
      <p>
        The front-end of the app is built using React, a popular JavaScript
        library for building user interfaces. We used the Create React App tool
        to set up the project and CSS for styling the UI.
      </p>
      <p>
        For the back-end, we used Node.js and Express to create a{" "}
        <span
          style={{
            backgroundColor: "#f44336",
            color: "#fff",
            padding: "0.2rem 0.5rem",
            borderRadius: "0.2rem",
          }}
        >
          RESTful API
        </span>
        {" "}that handles{" "}
        <span
          style={{
            backgroundColor: "#4caf50",
            color: "#fff",
            padding: "0.2rem 0.5rem",
            borderRadius: "0.2rem",
          }}
        >
          CRUD
        </span>
        {" "}operations on tasks. We used MongoDB as the database to store tasks and
        Mongoose as an Object Data Modeling (ODM) library to interact with the
        database.
      </p>
      <h3>Packages</h3>
      <p>We used several packages to help with development, including:</p>
      <ul>
        <li>
          <span
            style={{
              backgroundColor: "#2196f3",
              color: "#fff",
              padding: "0.2rem 0.5rem",
              borderRadius: "0.2rem",
            }}
          >
            axios
          </span>
          - for making HTTP requests to the API
        </li>
        <br />
        <li>
          <span
            style={{
              backgroundColor: "#2196f3",
              color: "#fff",
              padding: "0.2rem 0.5rem",
              borderRadius: "0.2rem",
            }}
          >
            react-router-dom
          </span>
          - for client-side routing
        </li>
        <br />

        <li>
          <span
            style={{
              backgroundColor: "#2196f3",
              color: "#fff",
              padding: "0.2rem 0.5rem",
              borderRadius: "0.2rem",
            }}
          >
            nodemon
          </span>
          - for hot-reloading the server during development
        </li>
        <br />

        <li>
          <span
            style={{
              backgroundColor: "#2196f3",
              color: "#fff",
              padding: "0.2rem 0.5rem",
              borderRadius: "0.2rem",
            }}
          >
            dotenv
          </span>
          - for managing environment variables
        </li>
      </ul>
      <h3>Code Quality</h3>
      <p>
        We made sure to write{" "}
        <span
          style={{
            backgroundColor: "#4caf50",
            color: "#fff",
            padding: "0.2rem 0.5rem",
            borderRadius: "0.2rem",
          }}
        >
          clean
        </span>
        {" "}and{" "}
        <span
          style={{
            backgroundColor: "#4caf50",
            color: "#fff",
            padding: "0.2rem 0.5rem",
            borderRadius: "0.2rem",
          }}
        >
          easy-to-read
        </span>
        {" "}code by following best practices and using consistent coding styles. We
        also made use of comments and documentation to make the code more
        understandable to other developers.
      </p>
      <h3>User Interface</h3>
      <p>
        The user interface is designed to be simple and easy to use. Users can
        quickly add tasks, mark tasks as complete, and delete tasks as needed.
        The use of custome CSS also ensures that the UI is responsive and looks
        good on all devices.
      </p>
    </div>
  );
};

export default About;
