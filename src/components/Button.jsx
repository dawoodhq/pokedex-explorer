const Button = (props) => {
  return (
    <button {...props} className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
 bg-gray-800 text-gray-100 hover:bg-gray-800/80 py-2 px-4 ${props.className || ''} cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition-transform ease-out duration-200`}>
        {props.children}
    </button>
  );
};

export default Button;