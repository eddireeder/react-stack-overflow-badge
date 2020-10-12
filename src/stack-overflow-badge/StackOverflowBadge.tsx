import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StackOverflowBadge.css";

type StackOverflowBadgeProps = {
  id?: number;
};

const StackOverflowBadge: React.FC<StackOverflowBadgeProps> = (props) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`https://api.stackexchange.com/2.2/users/${props.id}`, {
        params: {
          site: "stackoverflow",
        },
      })
      .then((res) => {
        setUser(res.data.items[0]);
        console.log(res.data.items[0]);
      });
  }, []);

  return user !== null ? (
    <div className="StackOverflowBadge">
      <div className="profileImage">
        <img src={user.profile_image} />
      </div>
      <div className="reputation">{user.reputation}</div>
      <div className="badgeCounts">
        <div className="gold">
          <div className="medal"></div>
          <div className="count">{user.badge_counts.gold}</div>
        </div>
        <div className="silver">
          <div className="medal"></div>
          <div className="count">{user.badge_counts.silver}</div>
        </div>
        <div className="bronze">
          <div className="medal"></div>
          <div className="count">{user.badge_counts.bronze}</div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

StackOverflowBadge.defaultProps = { id: 1 } as StackOverflowBadgeProps;

export default StackOverflowBadge;
