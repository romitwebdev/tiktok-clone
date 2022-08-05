import React, { useEffect, useMemo, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { IoIosMusicalNotes } from "react-icons/io";
import { BsCheck, BsHeartFill } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";

interface Isrc {
    name: string;
    src: string;
    imgUrl: string;
    discImg: string;
    likes: number;
    comment: number;
    share: number;
    description: string;
    song: string;
}

interface Ioptions {
    root: null;
    rootMargin: string;
    threshold: number;
}

interface Ivid {
    current: HTMLVideoElement | null;
}

const AllVideos = ({
    name,
    src,
    imgUrl,
    discImg,
    likes,
    comment,
    share,
    description,
    song,
}: Isrc) => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [liked, setLiked] = useState<boolean>(false);

    const vidRef = useRef<HTMLVideoElement | null>(null);

    // hides and show the addition description
    const handleShowHide = () => {
        setShow(!show);
    };

    // logic to play pause video when it is visible/invisible to view port
    const useElementOnScreen = (options: Ioptions, targetRef: Ivid) => {
        const [visibility, setVisibility] = useState<boolean>();

        // set the visibility
        const callbackFunction = (
            entries: Array<{ isIntersecting: boolean }>
        ) => {
            const [entry] = entries; //destructure and acess isIntersecting

            setVisibility(entry.isIntersecting);
        };
        const optionsMemo = useMemo(() => {
            return options;
        }, [options]);

        useEffect(() => {
            const observer = new IntersectionObserver(
                callbackFunction,
                optionsMemo
            );

            const currentTarget = targetRef.current;

            if (currentTarget) observer.observe(currentTarget);

            return () => {
                if (currentTarget) observer.unobserve(currentTarget);
            };
        }, [targetRef, optionsMemo]);
        return visibility;
    };

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    };
    const isVisibile = useElementOnScreen(options, vidRef);
    const onVideoClick = () => {
        if (playing) {
            vidRef.current!.pause();
            setPlaying(!playing);
        } else {
            vidRef.current!.play();
            setPlaying(!playing);
        }
    };
    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                vidRef.current!.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                vidRef.current!.pause();
                setPlaying(false);
            }
        }
    }, [isVisibile]);

    return (
        <div className="video-container">
            <div className="video-holder">
                <video
                    className="video_player"
                    loop
                    preload="true"
                    ref={vidRef}
                    src={src}
                    onClick={onVideoClick}
                ></video>

                <div className="description-holder">
                    <div className="description-container">
                        <div className="title">
                            @{name}
                            <span>
                                <IconContext.Provider
                                    value={{ className: "verified-icon" }}
                                >
                                    <BsCheck />
                                </IconContext.Provider>
                            </span>
                        </div>
                        <div className="tags-container">
                            {show ? (
                                <>
                                    {description.slice(0)}
                                    <div className="hide-caps">
                                        <p onClick={handleShowHide}>Hide</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {description.slice(0, 76)}{" "}
                                    <strong onClick={handleShowHide}>
                                        ...See more
                                    </strong>
                                </>
                            )}
                        </div>
                        <div className="now-playing">
                            <IconContext.Provider
                                value={{ className: "music-icon" }}
                            >
                                <IoIosMusicalNotes />
                            </IconContext.Provider>
                            <p>original sound - {song}</p>
                        </div>
                    </div>
                </div>
                <div className="side-menu-holder">
                    <div className="menu-container">
                        <div className="image-container">
                            <img src={imgUrl} alt="" />

                            <div className="follow-icon-container">
                                <div className="follow-icon"></div>
                            </div>
                        </div>
                        <div
                            className="icon-container"
                            onClick={() => setLiked(!liked)}
                        >
                            <IconContext.Provider
                                value={{
                                    className: liked
                                        ? "icons like-active"
                                        : "icons",
                                }}
                            >
                                <BsHeartFill />
                            </IconContext.Provider>
                            <span>{likes}M</span>
                        </div>
                        <div className="icon-container">
                            <IconContext.Provider
                                value={{ className: "icons" }}
                            >
                                <FaRegCommentDots />
                            </IconContext.Provider>
                            <span>{comment}K</span>
                        </div>
                        <div className="icon-container">
                            <IconContext.Provider
                                value={{ className: "icons" }}
                            >
                                <RiShareForwardFill />
                            </IconContext.Provider>
                            <span>{share}K</span>
                        </div>

                        <div className="player-container">
                            <div className="player-image-holder">
                                <img src={discImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllVideos;
