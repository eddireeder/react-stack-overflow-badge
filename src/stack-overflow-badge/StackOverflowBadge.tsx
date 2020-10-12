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
  }, [props.id]);

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
    <a
      className="StackOverflowBadge"
      href={`https://stackoverflow.com/users/${props.id}?tab=profile`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="profileImage"
        src={user.profile_image}
        alt="stack overflow profile"
      />
      <div className="reputation">{truncate(user.reputation)}</div>
      {user.badge_counts.gold > 0 && (
        <div className="medalCount gold">
          <div className="medal"></div>
          <div className="count">{user.badge_counts.gold}</div>
        </div>
      )}
      {user.badge_counts.silver > 0 && (
        <div className="medalCount silver">
          <div className="medal"></div>
          <div className="count">{user.badge_counts.silver}</div>
        </div>
      )}
      {user.badge_counts.bronze > 0 && (
        <div className="medalCount bronze">
          <div className="medal"></div>
          <div className="count">{user.badge_counts.bronze}</div>
        </div>
      )}
    </a>
  ) : (
    <div></div>
  );
};

StackOverflowBadge.defaultProps = { id: 9127393 } as StackOverflowBadgeProps;

export default StackOverflowBadge;
