import React from "react";
import AllVideos from "./AllVideos";
import { ContextFunc } from "../ContextProvider";

const Content = () => {
    const { videos } = ContextFunc();

    return (
        <div className="content-container">
            {videos.map(
                ({
                    id,
                    name,
                    src,
                    imgUrl,
                    discImg,
                    likes,
                    comment,
                    share,
                    description,
                    song,
                }) => (
                    <AllVideos
                        key={id}
                        name={name}
                        src={src}
                        description={description}
                        imgUrl={imgUrl}
                        discImg={discImg}
                        likes={likes}
                        comment={comment}
                        share={share}
                        song={song}
                    />
                )
            )}
        </div>
    );
};

export default Content;
