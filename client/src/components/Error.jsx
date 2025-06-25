import { useRouteError } from "react-router-dom";
const Error = () => {
    const err=useRouteError();
  return (

    <>
      <h1>Error Component</h1>
      <h1>{err.status}-{err.error.message}</h1>
    </>
  );
};

export default Error;
