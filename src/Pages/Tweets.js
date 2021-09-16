// // TODO : useState를 react로 부터 import 합니다.
// import React, { useState } from 'react';
// import Footer from '../Footer';
// import Tweet from '../Components/Tweet';
// import './Tweets.css';
// import dummyTweets from '../static/dummyData';

// const Tweets = () => {
//   const [username,setUsername] = useState('parkhacker')
//   const [message,setMessage] = useState('')
//   const [tweet,setTweet] = useState(dummyTweets) //tweet 는 기존 더미 + 새로추가한 트윗들

//   const handleButtonClick = () => {

//     let today = new Date();
//     const tweetel = {id:dummyTweets.length+1 ,username:username,content:message, createdAt:today, picture: "https://randomuser.me/api/portraits/men/98.jpg"};
//     dummyTweets.unshift(tweetel)
//     setTweet(dummyTweets)
//     setUsername('')
//     setMessage('')
//   };

//   const handleChangeUser = (event) => {
//     setUsername(event.target.value)
//     //username에 input 저장
//   };

//   const handleChangeMsg = (event) => {
//     setMessage(event.target.value)
//     //message에 textarea 저장
//   };

//   return (
//     <React.Fragment></React.Fragment>
//       <div className="tweetForm__container">
//         <div className="tweetForm__wrapper">
//           <div className="tweetForm__profile">
//             <img src="https://randomuser.me/api/portraits/men/98.jpg" />
//           </div>
//           <div className="tweetForm__inputContainer">
//             <div className="tweetForm__inputWrapper">
//               <div className="tweetForm__input">
//                 <input
//                   type="text"
                  
//                   placeholder="your username here.."
//                   className="tweetForm__input--username"
//                   onChange={handleChangeUser}
//                 ></input>
                

//                 <textarea type="text"
//                 placeholder="your message here.."
//                 className="tweetForm__input--message"
//                 onChange={handleChangeMsg}
//                 ></textarea>

//               </div>
//               <div className="tweetForm__count" role="status">
//                 <span className="tweetForm__count__text">
//                   {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
//                   {'total: '}{tweet.length}
//                 </span>
//               </div>
//             </div>
//             <div className="tweetForm__submit">
//               <div className="tweetForm__submitIcon"></div>
//               {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
//               <button
//               className="tweetForm__submitButton"
//               onClick={handleButtonClick}
//               >Tweet</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="tweet__selectUser"></div>
//       <ul className="tweets">
//         {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
//         <Tweet tweet={tweet} />
//       </ul>
//       <Footer />
//     </React.Fragment>
//   );
// };

// export default Tweets

// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from "react";
import Footer from "../Footer";
import Tweet from "../Components/Tweet";
import "./Tweets.css";
import dummyTweets from "../static/dummyData";
// import { useState } from "react";

const Tweets = () => {
    // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
    const [username, setUsername] = useState("parkhacker");
    const [msg, setMessage] = useState("");
    const [tweet, setTweet] = useState(dummyTweets);
    var msg1 = new Object()

    const handleButtonClick = (event) => {

    
      if(username!=='' && msg!==''){
        const tweetel = { id: dummyTweets.length + 1, username: username, content: msg, picture: "https://randomuser.me/api/portraits/men/98.jpg" };

        dummyTweets.unshift(tweetel);
        setTweet(dummyTweets);
        setUsername('');
        setMessage('');
       
      }
      return
    };

    const handleChangeUser = (event) => {
        // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
        setUsername(event.target.value);
    };

    const handleChangeMsg = (event) => {
        // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
        setMessage(event.target.value);
    };

    return (
        <React.Fragment>
            <div className="tweetForm__container">
                <div className="tweetForm__wrapper">
                    <div className="tweetForm__profile">
                        <img src="https://randomuser.me/api/portraits/men/98.jpg" />
                    </div>
                    <div className="tweetForm__inputContainer">
                        <div className="tweetForm__inputWrapper">
                            <div className="tweetForm__input">
                                <input
                                    type="text"
                                    // defaultValue="parkhacker"
                                    value={username}
                                    onChange={handleChangeUser}
                                    placeholder="your username here.."
                                    className="tweetForm__input--username"
                                ></input>
                                <textarea name="txt" id="" cols="10" rows="5" value={msg} onChange={handleChangeMsg} className="tweetForm__input--message"></textarea>
                            </div>
                            <div className="tweetForm__count" role="status">
                                <span className="tweetForm__count__text">
                                    {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                                    {"total: " + dummyTweets.length}
                                </span>
                            </div>
                        </div>
                        <div className="tweetForm__submit">
                            <div className="tweetForm__submitIcon"></div>
                            {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
                            <button className="tweetForm__submitButton" onClick={handleButtonClick}>
                                Tweet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tweet__selectUser"></div>
            <ul className="tweets">
                {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
                {dummyTweets.map((tweet) => {
                    return (
                        <li className="tweet" id={tweet.id} key={tweet.id}>
                            <div className="tweet__profile">
                                <img src={tweet.picture} />
                            </div>
                            <div className="tweet__content">
                                <div className="tweet__userInfo">
                                    <span className="tweet__username">{tweet.username}</span>
                                    <span className="tweet__createdAt">{tweet.createdAt}</span>
                                </div>
                                <div className="tweet__message">{tweet.content}</div>
                            </div>
                        </li>
                    );
                })}
                {/* <Tweet tweet={tweet} /> */}
            </ul>
            <Footer />
        </React.Fragment>
    );
};

export default Tweets;


