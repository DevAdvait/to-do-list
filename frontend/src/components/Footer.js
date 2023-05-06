const Footer = () => {
  return (
    <footer>
      <div
        className="text-center p-3 footer-div"
      >
        © 2023 Copyright :
        <a
          className="text-white"
          href="https://www.advaittumbre.xyz"
          target={"_blank"}
          rel="noreferrer"
          style={{
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Advait Tumbre 
        </a>
      </div>
    </footer>
  );
};

export default Footer;
