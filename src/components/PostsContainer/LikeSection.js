// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";
// import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

// const like = 0;
// const [likeNumber, setLikeNumber] = useState(like);

const LikeSection = props => {
  console.log(props);
  console.log(props.l);
  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} onClick={() => props.l()}/>
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
  <p className="like-number">{likeNumber}</p>
  {/* <button className="likeButton-number"onClick={() => setLikeNumber(likeNumber + 1)}>like-number</button> */}

  {/* maybe more like this
  <botton Click={e => setLikeNumber(true)}>Increase by One</button>
  <botton Click={e => setLikeNumber(false)}>Stay the Same</button>*/}
    </div>
  )
};

export default LikeSection;
