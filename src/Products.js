// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getUsers } from "./Redux/Action/Users";
// import store from "./Redux/Store";

// function Products() {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users.users);

//   //   useEffect(() => {
//   //     dispatch(
//   //       getUsers([
//   //         {
//   //           id: 1,
//   //           name: "Manoj",
//   //           Place: "BBsr",
//   //         },
//   //       ])
//   //     );
//   //   }, []);

//   useEffect(() => {
//     dispatch(
//       getUsers([
//         {
//           id: 1,
//           name: "Leanne Graham",
//           company: {
//             name: "Romaguera-Crona",
//             catchPhrase: "Multi-layered client-server neural-net",
//           },
//         },
//       ])
//     );
//   }, []);

//   return (
//     <div>
//       {/* <>
//         {users.length == 0 && <p>No users found</p>}
//         {users.length > 0 && users.map((user) => <h1>{user.name}</h1>)}

//         {/* {users.map((user) => (
//         <ul key={user.id}>
//           <li>{user.id}</li>
//           <li>{user.name}</li>
//           <li>{user.place}</li>
//         </ul>
//       ))}
//       </> */}
//       <div>{users.name}</div>
//     </div>
//   );
// }

// export default Products;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getUsers from "./Redux/Action/Users";
import "./Product.css";
// import CardComponent from "./CardComponent";

const Products = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(
      getUsers([
        {
          id: 1,
          name: "Manoj",
          age: 24,
          state: "Odisha",
        },
      ])
    );
  }, []);

  return (
    <>
      {users.length > 0 &&
        users.map((user) => (
          <ul className="user">
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.state}</li>
          </ul>
        ))}

      {users.length === 0 && <p>No users available!</p>}
    </>
  );
};

export default Products;
