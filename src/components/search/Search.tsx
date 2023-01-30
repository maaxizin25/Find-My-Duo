import SearchIcon from "@mui/icons-material/Search";
import { useContext, useState } from "react";
import { FormSearch, UserChat } from "./styles";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { UserContext } from "../../contexts/UserContext/UserContext";

const Search = () => {
  const [searchName, setSearchName] = useState("");
  const [user, setUser] = useState(null as any);

  const { currentUser } = useContext(AuthContext);
  const { allUsers } = useContext(UserContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", searchName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleKey = (e: { code: string }) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    console.log("teste");
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }

    setUser(null);
    setSearchName("");
  };

  return (
    <>
      <FormSearch>
        <button title="SearchButton">
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder="Pesquisar"
          onKeyDown={handleKey}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
      </FormSearch>
      {user && (
        <UserChat onClick={handleSelect}>
          <div>
            <span>{user.displayName}</span>
          </div>
        </UserChat>
      )}
    </>
  );
};

export default Search;
