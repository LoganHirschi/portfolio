import "./page.css";

interface Props {
  title?: string;
}

const Resume = ({
  title = "Title"
}: Props) => {
  return (
    <div className="main-wrapper">
      <h1 style={{textAlign: "center"}}>{title}</h1>
      <div className="black-line"></div>
      <h3 style={{textAlign: "center"}}>Logan Hirschi</h3>
      <div className="textWrapper" style={{paddingBottom: "40px"}}>
        <iframe width="450" height="600" src="https://heyzine.com/flip-book/5f5a05a800.html"></iframe>
      </div>
    </div>
  );
};

export default Resume;
