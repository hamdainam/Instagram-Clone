
export default Post;

function Post() {
  return (
    <div className="post">

    
      <div className="post-header">
        <div className="user-info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FINTGOZu7OraLPGJh-nTNVOUswsCv0AE4VS9jO9h6g&s=10"
            alt="profile"
          />

          <h4>alina</h4>
        </div>

        <span>•••</span>
      </div>

      
      <div className="post-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1woCkAMx1pt-Pif3r4tpNOATW0HjkenppkfciMirKQ&s=10"
          alt="post"
        />
      </div>

      
      <div className="post-actions">
        <div>
          <span>♡</span>
          <span>💬</span>
          <span>➤</span>
        </div>

        <span>💬</span>
      </div>

  
      <div className="post-details">
        <h4>1,245 likes</h4>

        <p>
          <b>alina</b> Beautiful moments make beautiful memories 🌸
        </p>

        <p className="comments">View all 24 comments</p>

        <p className="time">2 HOURS AGO</p>
      </div>

    </div>
  );
}


