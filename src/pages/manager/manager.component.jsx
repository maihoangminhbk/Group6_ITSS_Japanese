import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase.utils";
import DetailTable from "./detail.component";
import "./styles.scss";

const ManagerPage = () => {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    firestore
      .collection("users")
      .get()
      .then((querySnapshot) => {
        const test = [];
        querySnapshot.forEach((doc) => {
          test.push(doc.data());
        });
        setListUser(test);
      });
  }, []);

  console.log(listUser);

  return (
    <div>
        <h1>USER MANAGER</h1>
      <table id="customers">
        <tr>
          <td>displayName</td>
          <td>Email</td>
          <td>createdAt</td>
        </tr>
        {listUser.map((user, index) => (
          <DetailTable
            key={index}
            createdAt={user.createdAt}
            email={user.email}
            displayName={user.displayName}
          />
        ))}
      </table>
    </div>
  );
};

export default ManagerPage;
