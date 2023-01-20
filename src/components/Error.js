import { useRouteError } from "react-router-dom";

const Error = () =>{

    const err = useRouteError();
    const {data, status,statusText} = err; // destructuring
    console.log(err);
    return (
        <>
            <h3>Opps!!</h3>
            <h4>Something Went wrong!!</h4>
            <h4>{err.data}</h4>
            <h5>{err.status + " " + err.statusText}</h5>
        </>
    )
}

export default Error;