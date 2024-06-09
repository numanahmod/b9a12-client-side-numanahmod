import {
    FacebookIcon,
    FacebookShareButton,
  
   
  } from "react-share";

const StoriesShare = () => {
    const shareUrl = 'https://www.pakkamarwadi.tk/'
    return (
        <div style={{
            background: '#0000',
            height: '100vh',
            width: '100%',
        }}>
           <h1>Share your story</h1>

            <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40}/>
 
</FacebookShareButton>
            
        </div>
    );
};

export default StoriesShare;