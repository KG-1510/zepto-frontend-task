const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full py-4 border-t-2 mt-36 bg-white">
      <p className="text-center">
        Made with ❤️ {' '} and ☕️ {' '} by {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
          href="https://www.linkedin.com/in/kg1510/"
        >
          Kushagra Gupta
        </a>
      </p>
    </div>
  );
}

export default Footer;
