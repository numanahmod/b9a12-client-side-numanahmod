import video from '../assets/video.mp4'

const VideoPlayer = () => {
    return (
        <div>
            <h1>Take a Overview</h1>
            

            <video
            controls
            src={video}
            />
        </div>
    );
};

export default VideoPlayer;