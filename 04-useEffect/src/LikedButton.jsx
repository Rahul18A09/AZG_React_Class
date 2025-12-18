import React, { useState } from 'react'

const LikedButton = () => {

    const  [liked, setLiked] = useState(false);

  return (
    <div>
      <button onClick={()=> setLiked(!liked) }>
        {liked ? "💖liked" : "🤍 like"}
      </button>
    </div>
  )
}

export default LikedButton
