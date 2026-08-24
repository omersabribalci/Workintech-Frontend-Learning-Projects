import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  const { authUserInfo } = useContext(AuthContext);

  const token = authUserInfo?.token;

  const getFriends = async () => {
    try {
      const response = await axios.get(
        'https://nextgen-project.onrender.com/api/s11d2/friends',
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setFriends(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      getFriends();
    }
  }, [token]);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
