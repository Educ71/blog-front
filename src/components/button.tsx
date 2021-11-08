interface ButtonProps {
  loading: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => (
  <button
    type="submit"
    value="Login"
    className="rounded bg-pink-900 text-white font-bold text-lg p-1 self-start px-10 shadow-lg cursor-pointer flex justify-center"
    disabled={props.loading}
  >
    {props.loading ? <LoadingSpinner /> : props.children}
  </button>
);

const LoadingSpinner = () => (
  <svg
    className="animate-spin mr-3 fill-current"
    x="0px"
    y="0px"
    width="28px"
    height="28px"
    viewBox="0 0 50 50"
  >
    <path
      fill="white"
      d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
    />
  </svg>
);
