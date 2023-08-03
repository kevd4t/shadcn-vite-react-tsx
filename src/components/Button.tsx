import '../index.css'

export const Button = ({ children }) => {
  return (
    <button
      className={`bg-[#ff7373] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
    >
      {children}
    </button>
  );
};
