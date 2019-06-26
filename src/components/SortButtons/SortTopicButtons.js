// import React from "react";
// import * as api from "../../Api";

// const SortTopicButtons = ({ setTopics }) => {
//   const { id } = this.props;
//   return (
//     <div>
//       <button
//         onClick={() => {
//           api.handleSortTopics(id, "created_at").then(articles => {
//             setTopics(articles);
//           });
//         }}
//       >
//         Date
//       </button>
//       <button
//         onClick={() => {
//           api.handleSortTopics(id, "comment_count").then(articles => {
//             setTopics(articles);
//           });
//         }}
//       >
//         Comment Count
//       </button>
//       <button
//         onClick={() => {
//           api.handleSortTopics("", "votes").then(articles => {
//             setTopics(articles);
//           });
//         }}
//       >
//         Votes
//       </button>
//     </div>
//   );
// };

// export default SortTopicButtons;
