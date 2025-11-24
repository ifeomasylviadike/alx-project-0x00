const Button = ({ title, styles = '' }) => {
  return (
    <button className={`font-semibold transition-all duration-200 hover:opacity-80 active:scale-95 ${styles}`}>
      {title}
    </button>
  );
};
