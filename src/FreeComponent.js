import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FreeComponent() {

    const [message, setMessage] = useState("");

    useEffect(() => {
        // set configuration for the API call here
        const configuration = {
            method: "get",
            url: "https://anaauth1-server.mongo.cosmos.azure.com:443/free-endpoint",
            // url: "http://localhost:3000/free",
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                // assign the message in our result to the message we intitalized above
                setMessage(result.data.message);
            })
            .catch((error) => {
                error = new Error();
            });
    }, [])

    return (
        <div>
            <h1 className="text-center">Free Component</h1>

            {/* displaying our message form our API call */}
            <h3 className="text-center text-danger">{message}</h3>
        </div>
    );
}