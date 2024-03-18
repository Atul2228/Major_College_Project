// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { server } from "../server";
// import axios from "axios";

// function Activation() {
//   const { activation_token } = useParams();
//   const { Error, setError } = useState(false);
//   useEffect(() => {
//     if (activation_token) {
//       const activationEmail = async () => {
//         try {
//           const res = await axios.post(`${server}/user/activation`, {
//             activation_token,
//           });

//           console.log(res.data.message);
//         } catch (err) {
//           console.log(err.respose.data.message);
//           setError(true);
//         }
//       };
//       activationEmail();
//     }
//   }, [activation_token, setError]);

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {Error ? (
//         <p>Your Token is expires</p>
//       ) : (
//         <p>Your acccounted has created successfully</p>
//       )}
//     </div>
//   );
// }

// export default Activation;
import axios from "axios";
import  { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
  );
};

export default ActivationPage;
