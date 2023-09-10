import Popup from "./Popup";

const Music = () => {
    return (
        <Popup reduxProperty="music" >
            <h1>Music</h1>
            <iframe
                src="https://open.spotify.com/embed/playlist/70NXqRVTTTaKXVKuIKX2OG?utm_source=generator"
                width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </Popup>
    );
};

export default Music;