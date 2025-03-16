import React from "react";

interface MovieViewingComponentProps {
  videoId: string;
  title?: string;
}

const MovieViewingComponent: React.FC<MovieViewingComponentProps> = ({ videoId}) => {
  const outerContainer: React.CSSProperties = {
    width: "100%",
    backgroundColor: "var(--tertiary)",
    padding: "50px 0", // Reduced padding for even spacing
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px", // Consistent gap
    marginBottom: "80px"
  };


  const videoWrapperStyle: React.CSSProperties = {
    position: "relative",
    width: "90%",
    maxWidth: "1200px",
    paddingBottom: "50.25%",
    height: 0,
    overflow: "hidden",
    border: "6px solid #000",
    borderRadius: "12px",
    backgroundColor: "#000",
  };

  const iframeStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <section style={outerContainer}>

      <div style={videoWrapperStyle}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={iframeStyle}
        ></iframe>
      </div>
    </section>
  );
};

export default MovieViewingComponent;
