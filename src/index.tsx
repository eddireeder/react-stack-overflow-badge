import * as React from "react";
const { useState, useEffect } = React;
import axios from "axios";
import "./styles.scss";

export type StackOverflowBadgeProps = {
  id?: number;
  card?: boolean;
  logo?: boolean;
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
      className={"StackOverflowBadge " + (props.card ? "card" : "")}
      href={`https://stackoverflow.com/users/${props.id}?tab=profile`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.logo && (
        <svg
          className="logo"
          width="26"
          height="30"
          viewBox="0 0 26 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.3233 19.3383H23.9888V30H0V19.3383H2.66542V27.3346H21.3233V19.3383Z"
            fill="#BBBBBB"
          />
          <path
            d="M5.57022 18.546L18.6611 21.2974L19.2113 18.6805L6.12051 15.9278L5.57022 18.546ZM7.3025 12.2776L19.4292 17.9254L20.5588 15.5001L8.43191 9.85235L7.3025 12.2776ZM10.658 6.32819L20.9388 14.8893L22.6509 12.8333L12.3702 4.27242L10.658 6.32819ZM17.2942 0L15.1473 1.59683L23.131 12.3312L25.2778 10.7346L17.2942 0ZM5.33084 24.6692H18.6579V22.0038H5.33084V24.6692Z"
            fill="#F58025"
          />
        </svg>
      )}
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
    <div className={"StackOverflowBadge " + (props.card ? "card" : "")}>
      {props.logo && (
        <svg
          className="logo"
          width="26"
          height="30"
          viewBox="0 0 26 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.3233 19.3383H23.9888V30H0V19.3383H2.66542V27.3346H21.3233V19.3383Z"
            fill="#BBBBBB"
          />
          <path
            d="M5.57022 18.546L18.6611 21.2974L19.2113 18.6805L6.12051 15.9278L5.57022 18.546ZM7.3025 12.2776L19.4292 17.9254L20.5588 15.5001L8.43191 9.85235L7.3025 12.2776ZM10.658 6.32819L20.9388 14.8893L22.6509 12.8333L12.3702 4.27242L10.658 6.32819ZM17.2942 0L15.1473 1.59683L23.131 12.3312L25.2778 10.7346L17.2942 0ZM5.33084 24.6692H18.6579V22.0038H5.33084V24.6692Z"
            fill="#F58025"
          />
        </svg>
      )}
      <div className="profileImage placeholder"></div>
      <div className="medalCount">
        <div className="medal"></div>
      </div>
      <div className="medalCount">
        <div className="medal"></div>
      </div>
      <div className="medalCount">
        <div className="medal"></div>
      </div>
    </div>
  );
};

StackOverflowBadge.defaultProps = {
  id: 9127393,
  card: true,
  logo: true,
} as StackOverflowBadgeProps;

export default StackOverflowBadge;
