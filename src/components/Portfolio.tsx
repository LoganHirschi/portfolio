import "./page.css";

interface Props {
  title?: string;
}

const Portfolio = ({
  title = "Title"
}: Props) => {
  return (
    <div className="main-wrapper">
      <h1 style={{textAlign: "center"}}>{title}</h1>
      <div className="black-line"></div>
      <h3 style={{textAlign: "center"}}>Logan Hirschi</h3>
      <div className="textWrapper">
        <div style={{width: "100%", margin: "auto", display: "block", textAlign: "center"}}>
          <h2>Senior Project</h2>
          <iframe width="350" height="200" src="https://www.youtube.com/embed/SkXlktpx2zE?si=PXZjNtD6sFF08mNY" title="YouTube video player"></iframe>
        </div>
      </div>
      <div className="textWrapper">
        <div style={{width: "100%", margin: "auto", display: "block", textAlign: "center"}}>
          <h2>Freshman Project</h2>
          <iframe width="350" height="200" src="https://www.youtube.com/embed/vv6WmWPMN64?si=GDYaKgOaIB9SIMoG" title="YouTube video player"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
