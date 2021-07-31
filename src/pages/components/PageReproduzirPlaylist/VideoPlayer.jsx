const VideoPlayer = (props) => {
  const [videoUrl, setVideoUrl] = React.useState("");

  React.useEffect(() => {
    setVideoUrl(props.videoUrl);
  }, [props.videoUrl]);

  return (
    <div className="col-lg-6 m-0 p-0" style={{width: '100%', height: '100%', position: "relative"}}>
      <div className="">
        <iframe
          style={{width: '100%', minHeight: '60vh'}}
          src={videoUrl}
          frameBorder="false"
          scrolling
          seamless=""
          allowFullScreen="true"
        ></iframe>
        <div style={{width: '80px', height: '80px', opacity: '0', position: 'absolute', right: '0px', top: '0px',}}>
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
