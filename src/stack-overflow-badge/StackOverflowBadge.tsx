import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StackOverflowBadge.scss";

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

  const truncate = (number: number): string => {
    if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "m";
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1) + "k";
    } else {
      return number.toString();
    }
  };

  return user !== null ? (
    <a href="#" className="StackOverflowBadge">
      <img className="profileImage" src={user.profile_image} />
      <div className="reputation">{truncate(user.reputation)}</div>
      <div className="medalCount gold">
        <div className="medal"></div>
        <div className="count">{user.badge_counts.gold}</div>
      </div>
      <div className="medalCount silver">
        <div className="medal"></div>
        <div className="count">{user.badge_counts.silver}</div>
      </div>
      <div className="medalCount bronze">
        <div className="medal"></div>
        <div className="count">{user.badge_counts.bronze}</div>
      </div>
    </a>
  ) : (
    <div></div>
  );
};

StackOverflowBadge.defaultProps = { id: 2 } as StackOverflowBadgeProps;

export default StackOverflowBadge;
