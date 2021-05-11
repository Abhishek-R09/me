const sidebar = (props) => (
  <div className={navbarClasses.join(" ")}>
    <nav>
      <img src={myImg} alt="Abhishek Ramasubramanian" />
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        Abhishek Ramasubramanian
      </p>
      <a href="/">
        {" "}
        <LinkedInIcon />{" "}
      </a>
      <a href="/">
        {" "}
        <GitHubIcon />{" "}
      </a>
      <a href="/">
        {" "}
        <TwitterIcon />{" "}
      </a>
    </nav>
  </div>
);

export default sidebar;
