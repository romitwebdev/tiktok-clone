import React, { createContext, ReactNode, useContext, useState } from "react";
interface dataTypes {
    videos: {
        id: number;
        name: string;
        src: string;
        imgUrl: string;
        discImg: string;
        likes: number;
        comment: number;
        share: number;
        description: string;
        song: string;
    }[];
    setVideos: React.Dispatch<React.SetStateAction<dataTypes["videos"]>>;
}
let initalState: dataTypes["videos"] = [
    {
        id: 0,
        name: "fcbarcelona",
        src: "../videos/video1.mp4",
        imgUrl: "https://i.pinimg.com/originals/8f/6d/73/8f6d733872856c6f1fd9452d6ee6e896.jpg",
        discImg:
            "https://i.pinimg.com/originals/8f/6d/73/8f6d733872856c6f1fd9452d6ee6e896.jpg",
        likes: 2.2,
        comment: 15.5,
        share: 26.9,
        description: `A new era begins. Pedri 8️⃣ #fcbarcelona #barça #barçaontiktok
        #deportesentiktok #football #pedri`,
        song: "fc barcelona",
    },
    {
        id: 1,
        name: "fcbarcelona",
        src: "../videos/video2.mp4",
        imgUrl: "https://i.pinimg.com/originals/8f/6d/73/8f6d733872856c6f1fd9452d6ee6e896.jpg",
        discImg:
            "https://i.pinimg.com/originals/8f/6d/73/8f6d733872856c6f1fd9452d6ee6e896.jpg",
        likes: 3.2,
        comment: 20.5,
        share: 30.5,
        description: `Control y pase ⚽️ #fcbarcelona #barcelona #barçaontiltok #barça #DeportesEnTikTok #usa #LasVegas`,
        song: "fc barcelona",
    },
    {
        id: 2,
        name: "strangerthings",
        src: "../videos/video3.mp4",
        imgUrl: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/86007.jpg",
        discImg: "https://d1rgjmn2wmqeif.cloudfront.net/r/g/86007.jpg",
        likes: 4.3,
        comment: 45.5,
        share: 35.9,
        description: `#StrangerThingsStore #StrangerThings #Netflix #StrangerThingsStore #StrangerThings #Netflix`,
        song: "stranger things",
    },
    {
        id: 3,
        name: "therock",
        src: "../videos/video4.mp4",
        imgUrl: "https://external-preview.redd.it/iSpSIg6Vu4paQxA77pKwfwMcOx9iRkVr8tIUVvsjsBs.png?format=pjpg&auto=webp&s=7e23a2aacc1f3e583c42080b0daa03438290eeae",
        discImg:
            "https://external-preview.redd.it/iSpSIg6Vu4paQxA77pKwfwMcOx9iRkVr8tIUVvsjsBs.png?format=pjpg&auto=webp&s=7e23a2aacc1f3e583c42080b0daa03438290eeae",
        likes: 1.2,
        comment: 25.3,
        share: 15.6,
        description: `Imagine @therock as a CB 😳😤 #fcb #fcbarcelona #barcelona #therock #DeportesEnTikTok #barçaontiktok`,
        song: "the rock",
    },
];

let data: dataTypes = {
    videos: initalState,
    setVideos: () => {},
};

const Context = createContext(data);

export const ContextFunc = () => {
    return useContext(Context);
};

interface Ichlid {
    children: ReactNode;
}

const App = ({ children }: Ichlid) => {
    let [videos, setVideos] = useState<dataTypes["videos"]>(data.videos);

    return (
        <Context.Provider value={{ videos, setVideos }}>
            {children}
        </Context.Provider>
    );
};

export default App;
