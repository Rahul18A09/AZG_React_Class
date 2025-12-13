import { useState } from "react";


const LikeButton = () => {
  const [liked, SetLiked] = useState(false);

  return (
    <div>

      <button onClick={() => SetLiked(!liked)}>
        {liked ? "💖 Liked" : "🤍 Like"}
      </button>

    </div>
  );
};

export default LikeButton;
