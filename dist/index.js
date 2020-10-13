

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

___$insertStyle(".StackOverflowBadge {\n  display: inline-flex;\n  grid-column-gap: 0.6rem;\n  align-items: center;\n  padding: 0.7rem;\n  border-radius: 0.4rem;\n  font-size: 0.8rem;\n  font-family: Arial, Helvetica, sans-serif;\n  text-decoration: none;\n}\n.StackOverflowBadge.card {\n  background-color: white;\n  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);\n}\n.StackOverflowBadge .logo {\n  width: 1.1rem;\n  margin-right: 0.2rem;\n}\n.StackOverflowBadge .profileImage {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.4rem;\n}\n.StackOverflowBadge .profileImage.placeholder {\n  background-color: lightgrey;\n}\n.StackOverflowBadge .reputation {\n  font-weight: bold;\n  color: #535a60;\n}\n.StackOverflowBadge .medalCount {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  grid-column-gap: 0.2rem;\n  align-items: center;\n}\n.StackOverflowBadge .medalCount .medal {\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: lightgrey;\n}\n.StackOverflowBadge .medalCount.gold .medal {\n  background-color: #ffcc01;\n}\n.StackOverflowBadge .medalCount.gold .count {\n  color: #f1b600;\n}\n.StackOverflowBadge .medalCount.silver .medal {\n  background-color: #b4b8bc;\n}\n.StackOverflowBadge .medalCount.silver .count {\n  color: #9a9c9f;\n}\n.StackOverflowBadge .medalCount.bronze .medal {\n  background-color: #d1a685;\n}\n.StackOverflowBadge .medalCount.bronze .count {\n  color: #ab825f;\n}");

var useState = React.useState, useEffect = React.useEffect;
var StackOverflowBadge = function (props) {
    var _a = useState(null), user = _a[0], setUser = _a[1];
    useEffect(function () {
        axios__default['default']
            .get("https://api.stackexchange.com/2.2/users/" + props.id, {
            params: {
                site: "stackoverflow",
            },
        })
            .then(function (res) {
            setUser(res.data.items[0]);
        });
    }, [props.id]);
    var truncate = function (number) {
        if (number >= 1e6) {
            return (number / 1e6).toFixed(1) + "m";
        }
        else if (number >= 1e3) {
            return (number / 1e3).toFixed(1) + "k";
        }
        else {
            return number.toString();
        }
    };
    return user !== null ? (React.createElement("a", { className: "StackOverflowBadge " + (props.card ? "card" : ""), href: "https://stackoverflow.com/users/" + props.id + "?tab=profile", target: "_blank", rel: "noopener noreferrer" },
        props.logo && (React.createElement("svg", { className: "logo", width: "26", height: "30", viewBox: "0 0 26 30", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M21.3233 19.3383H23.9888V30H0V19.3383H2.66542V27.3346H21.3233V19.3383Z", fill: "#BBBBBB" }),
            React.createElement("path", { d: "M5.57022 18.546L18.6611 21.2974L19.2113 18.6805L6.12051 15.9278L5.57022 18.546ZM7.3025 12.2776L19.4292 17.9254L20.5588 15.5001L8.43191 9.85235L7.3025 12.2776ZM10.658 6.32819L20.9388 14.8893L22.6509 12.8333L12.3702 4.27242L10.658 6.32819ZM17.2942 0L15.1473 1.59683L23.131 12.3312L25.2778 10.7346L17.2942 0ZM5.33084 24.6692H18.6579V22.0038H5.33084V24.6692Z", fill: "#F58025" }))),
        React.createElement("img", { className: "profileImage", src: user.profile_image, alt: "stack overflow profile" }),
        React.createElement("div", { className: "reputation" }, truncate(user.reputation)),
        user.badge_counts.gold > 0 && (React.createElement("div", { className: "medalCount gold" },
            React.createElement("div", { className: "medal" }),
            React.createElement("div", { className: "count" }, user.badge_counts.gold))),
        user.badge_counts.silver > 0 && (React.createElement("div", { className: "medalCount silver" },
            React.createElement("div", { className: "medal" }),
            React.createElement("div", { className: "count" }, user.badge_counts.silver))),
        user.badge_counts.bronze > 0 && (React.createElement("div", { className: "medalCount bronze" },
            React.createElement("div", { className: "medal" }),
            React.createElement("div", { className: "count" }, user.badge_counts.bronze))))) : (React.createElement("div", { className: "StackOverflowBadge " + (props.card ? "card" : "") },
        props.logo && (React.createElement("svg", { className: "logo", width: "26", height: "30", viewBox: "0 0 26 30", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M21.3233 19.3383H23.9888V30H0V19.3383H2.66542V27.3346H21.3233V19.3383Z", fill: "#BBBBBB" }),
            React.createElement("path", { d: "M5.57022 18.546L18.6611 21.2974L19.2113 18.6805L6.12051 15.9278L5.57022 18.546ZM7.3025 12.2776L19.4292 17.9254L20.5588 15.5001L8.43191 9.85235L7.3025 12.2776ZM10.658 6.32819L20.9388 14.8893L22.6509 12.8333L12.3702 4.27242L10.658 6.32819ZM17.2942 0L15.1473 1.59683L23.131 12.3312L25.2778 10.7346L17.2942 0ZM5.33084 24.6692H18.6579V22.0038H5.33084V24.6692Z", fill: "#F58025" }))),
        React.createElement("div", { className: "profileImage placeholder" }),
        React.createElement("div", { className: "medalCount" },
            React.createElement("div", { className: "medal" })),
        React.createElement("div", { className: "medalCount" },
            React.createElement("div", { className: "medal" })),
        React.createElement("div", { className: "medalCount" },
            React.createElement("div", { className: "medal" }))));
};
StackOverflowBadge.defaultProps = {
    id: 9127393,
    card: true,
    logo: true,
};

exports.default = StackOverflowBadge;
//# sourceMappingURL=index.js.map
