import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../app/firebase";
import { callFunction, getAccount } from "../../app/near";

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export async function approveItem(id) {
  const docRef = doc(db, "items", id);
  setDoc(
    docRef,
    {
      isValidated: true,
      updatedTimestamp: Timestamp.now(),
    },
    { merge: true }
  );
}

export async function mintItem(id) {
  await approveItem(id);
  const account = getAccount();
  return new Promise((resolve, reject) => {
    callFunction(
      "nft_mint",
      {
        token_id: `${account.accountId + Date.now()}`,
        metadata: {
          title: "test title",
          description: "test description",
        },
        receiver_id: account.accountId,
      },
      "0.1"
    ).then(resolve());
  });
}
