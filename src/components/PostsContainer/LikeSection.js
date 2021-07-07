// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
// import React from "react";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'



const LikeSection = props => {
  // const like = 0;
  // const [likes, setLikes] = useState(like);
  console.log(props);
  console.log(props.likes);
  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} onClick={() => props.setLikes(props.likes + 1)}/> Likes
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
  <p className="like-number">{props.likes}</p>  


{/* setLikes = props.likes */}

  {/* <button className="likeButton-number"onClick={() => setLikeNumber(likeNumber + 1)}>like-number</button> */}

  {/* maybe more like this
  <button Click={e => setLikeNumber(true)}>Increase by One</button>
  <button Click={e => setLikeNumber(false)}>Stay the Same</button>*/}
    </div>
  )
};

export default LikeSection;
