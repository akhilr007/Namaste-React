import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <h2>Oops! Something went wrong.</h2>
      <p>
        We apologize for the inconvenience. Please try again later or contact
        support.
        <br />
        {err.status} : {err.statusText}
      </p>
    </div>
  );
};

export default Error;
