import React from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

const Contacts = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const goCast = () => {
    history.push({
      pathname: props.location.state
        ? props.location.state.from
        : "/profile/cast",
    });
  };
  return (
    <>
      <h2>Contacts</h2>
      <button onClick={goCast}>Go casts</button>
    </>
  );
};

export default Contacts;

// state = {
//   pictures: [],
//   page: 1,
// };
// const getPictures = (query, page = 1) => {
//   return axios.get(`dfghjkl/query=${query}&page=${page}`);
// };

// const getNewPictures = () => {
//   getPictures("cat").then((data) =>
//     this.setState({ pictures: [...data], page: 2 })
//   );
// };

// const loadMore = () => {
//   getPictures("cat", this.state.page).then((data) =>
//     this.setState((prev) => ({
//       pictures: [...prev.pictures, ...data],
//       page: prev.page + 1,
//     }))
//   );
// };
