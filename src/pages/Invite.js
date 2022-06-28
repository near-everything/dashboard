import React, { useState, useEffect } from "react";
import {
  collection,
  doc,
  query,
  where,
  orderBy,
  onSnapshot,
  setDoc,
  Timestamp,
} from "firebase/firestore";

import { selectUser } from "../features/auth/authSlice";
import PageTitle from "../components/Typography/PageTitle";
import { useSelector } from "react-redux";
import { db } from "../app/firebase";
import TableContainer from "../components/TableContainer";
import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import TableCell from "../components/TableCell";
import TableBody from "../components/TableBody";
import TableRow from "../components/TableRow";
import Badge from "../components/Badge";
import Button from "../components/Button";

function Invite() {
  const [invites, setInvites] = useState([]);
  const user = useSelector(selectUser);
  const invitesRef = collection(db, "invites");

  const approveInvite = async (phoneNumber) => {
    try {
      await setDoc(
        doc(invitesRef, phoneNumber),
        {
          isApproved: true,
          approvedTimestamp: Timestamp.now(),
        },
        { merge: true }
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const q = query(
      invitesRef,
      where("isApproved", "==", false),
      orderBy("createdTimestamp", "desc")
    );
    onSnapshot(q, (querySnapshot) => {
      setInvites(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [invitesRef, user]);

  return (
    <>
      <PageTitle>Invites awaiting approval</PageTitle>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Phone Number</TableCell>
              <TableCell>Approve</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {invites?.map((data, index) => (
              <TableRow key={index}>
                <TableCell>
                  <span className="text-sm">{data?.id}</span>
                </TableCell>
                <TableCell>
                  <Badge type="primary">
                    <Button onClick={() => approveInvite(data?.id)} />
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Invite;
