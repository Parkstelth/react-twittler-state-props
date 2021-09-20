import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';
import dummyTweets from '../static/dummyData';


const MyPage = () => {
  
 
  // TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다.
  const filteredTweets =dummyTweets.filter((filter)=>{
    return filter.username ==='parkhacker'
  })
 
  return (
    
    <section className="myInfo">
    <div className="myInfo__container">
      <div className="myInfo__wrapper">
        <div className="myInfo__profile">
          <img src={filteredTweets[0].picture} />
        </div>
        <div className="myInfo__detail">
          <p className="myInfo__detailName">
            {filteredTweets[0].username} Profile
          </p>
          <p>28 팔로워 100 팔로잉</p>
        </div>
      </div>
    </div>
    <ul className="tweets__mypage">
      {filteredTweets.map(function(tweet){
          return <Tweet tweet={tweet} key={tweet} />
      })}

    </ul>
    <Footer />
  </section>
  );
};

export default MyPage;


// import React from "react";
// import Footer from "../Footer";
// import Tweet from "../Components/Tweet";
// import "./MyPage.css";
// import dummyTweets from "../static/dummyData";

// const MyPage = () => {
//     const filteredTweets = dummyTweets;
//     // TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다.

//     return (
//         <section className="myInfo">
//             <div className="myInfo__container">
//                 <div className="myInfo__wrapper">
//                     <div className="myInfo__profile">
//                         <img src={filteredTweets[1].picture} />
//                     </div>
//                     <div className="myInfo__detail">
//                         <p className="myInfo__detailName">{filteredTweets[1].username} Profile</p>
//                         <p>28 팔로워 100 팔로잉</p>
//                     </div>
//                 </div>
//             </div>
//             <ul className="tweets__mypage">
//                 <Tweet tweet={filteredTweets[1]} />
//                 {/* TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다. */}
//             </ul>
//             <Footer />
//         </section>
//     );
// };

// export default MyPage;