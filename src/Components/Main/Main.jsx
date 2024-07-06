import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSent();
    }
  };

  // const onSent1 = () => {
  //   setInput("Suggest beautiful places to see in Hyderabad");
  //   setRecentPrompt("Suggest beautiful places to see in Hyderabad");
  //   onSent(input);
  //   setInput("");
  // };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini Clone </p>
        <img src={assets.user_icon} alt="userimg" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            {/* <div className="cards">
              <div onClick={() => onSent1()} className="card">
                <p>Suggest beautiful places to see in Hyderabad</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  nam facilis, eum consectetur sapiente ratione?
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                  illo?
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div> */}
          </>
        ) : (
          <>
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />

                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyPress={handleKeyPress}
            />
            <div>
              {/* <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" /> */}
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini clone by Rushikesh D. Made with ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
