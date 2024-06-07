import video from '../assets/video.mp4'

const VideoPlayer = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl text-orange-500 mb-5'>Take a Overview of Bangladesh Tourist Spots</h1>
            <video
            controls
            src={video}/>
        </div>
    );
};

export default VideoPlayer;