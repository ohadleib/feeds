interface News {
  // id: string;
  // userId: string;
  username: string;
  avatar: string;
  // shopName: string;
  // shopId: string;
  images: string[];
  comments: number;
  // date: string;
  text: string;
  likes: number;
  // didLike: boolean;
  // premium: boolean;
}

const Card = ({ avatar, images, username, text, likes, comments }: News) => (
  <div className="cd">
    <div className="cd-header p-3 d-flex justify-content-start">
      <div className="cd-avatar">
        <img src={avatar} />
      </div>
      <div className="cd-profile">
        <h6>{username}</h6>
        <a href="/">Wreaths</a> . <span>1h</span>
      </div>
    </div>
    <p className="cd-description">{text}</p>
    <div className="cd-body">
      {images.length > 1 ? (
        <>
          <img className="imulti" src={images[0]} />
          <img className="imulti float-end" src={images[1]} />
        </>
      ) : (
        <img className="isingle" src={images[0]} />
      )}
    </div>
    <div className="cd-footer">
      <span className="likes">
        <img src="/img/like.svg" /> {likes} Likes
      </span>
      <span className="comments float-end">{comments} Comments</span>
    </div>
    <div className="bottom-bar">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <img width="16px" src="/img/like-unfill.svg" />{" "}
          <span className="btn-like">Like</span>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img width="16px" src="/img/comment-unfill.svg" />{" "}
          <span className="btn-comment">Comment</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;