import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log('err=', err);
    console.log('error Info=', err.error);
    console.log('status info:', err.status,':',err.statusText)
    return (
        <div>
            <h1>Oops..!!</h1>
            <h2>Error Page..!!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
};

export default Error;