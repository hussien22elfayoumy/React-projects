function Button({ children, handelClicks }) {
  return (
    <button onClick={handelClicks} className='button'>
      {children}
    </button>
  );
}

export default Button;
