//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(
//     () => {
//       fetch(`https://api.github.com/users/${userName}`)
//         .then(res => {
//           if (!res.ok) {
//             throw new Error("User not found");
//           }
//           return res.json();
//         })
//         .then(data => setUserData(data))
//         .catch(err => setError(err.message));
//     },
//     [userName]
//   );
import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const userData = useLoaderData();

  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold">GitHub Profile</h2>
      <img
        src={userData.avatar_url}
        alt={userData.login}
        className="w-24 h-24 rounded-full mx-auto mt-4"
      />
      <p className="mt-2 text-lg">
        Username: {userData.login}
      </p>
      <p>
        Name: {userData.name || "N/A"}
      </p>
      <p>
        Followers: {userData.followers}
      </p>
      <p>
        Following: {userData.following}
      </p>
      <p>
        Public Repos: {userData.public_repos}
      </p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async ({ params }) => {
  const { userName } = params;
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  return response.json();
};
