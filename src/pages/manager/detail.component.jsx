import React from "react";

const DetailTable = ({ createdAt, displayName, email }) => (
  <tr>
    <td>{displayName}</td>
    <td>{email}</td>
    <td>{ new Date(
        createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000,
      ).toString()}</td>
  </tr>
);

export default DetailTable;
