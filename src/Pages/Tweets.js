// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  const [username,setUsername] = useState('parkhacker')
  const [message,setMessage] = useState('')
  const [tweets,setTweet] = useState(dummyTweets) //tweet 는 기존 더미 + 새로추가한 트윗들
  const [now,setNow] = useState('default')

  const handleButtonClick = () => {
    let today = new Date();
    const tweetel = {id:tweets.length+1 ,username:username,content:message, createdAt:today, picture: "https://randomuser.me/api/portraits/men/98.jpg"};
    const newel = [tweetel, ...tweets]
    setTweet(newel)
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value)
    //username에 input 저장
  };

  const handleChangeMsg = (event) => {
    setMessage(event.target.value)
    //message에 textarea 저장
  };
  const selectBoxChange = (event) => {
    setNow(event.target.value) //현재 select에서 누른
  };


const filterOption = tweets.map(function(tweet){
  return tweet.username
})
const uniqueOption = [];
for(let i=0 ; i<filterOption.length; i++){
  if(uniqueOption.indexOf(filterOption[i])===-1) uniqueOption.push(filterOption[i])
}

  const filterTweet = tweets.filter(function(tweet){
    return tweet.username===now
  })
  
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
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                ></input>
                <textarea type="text"
                placeholder="your message here.."
                className="tweetForm__input--message"
                onChange={handleChangeMsg}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total: '}{tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button
              className="tweetForm__submitButton"
              onClick={handleButtonClick}
              >Tweet</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <select id="selectID" onChange={selectBoxChange}>
            <option value={'default'}>-- click to filter tweets by username --</option>
            {uniqueOption.map(function(tweet){
              return (
                <option key={tweet}>{tweet}</option>
              )
            })}
        </select>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {
          (now==='default') ? (tweets.map(function(tweet){
            return (<Tweet key={tweet.id} tweet={tweet} tweets={tweets} test={setTweet} />)
        })) : (filterTweet.map(function(tweet){
          return (<Tweet key={tweet.id} tweet={tweet} tweets={tweets} test={setTweet} />)
      }))
        }
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets

