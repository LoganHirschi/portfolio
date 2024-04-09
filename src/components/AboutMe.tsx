import "./page.css";

interface Props {
  title?: string;
}

const AboutMe = ({
  title = "Title"
}: Props) => {
  return (
    <div className="main-wrapper">
      <h1 style={{textAlign: "center"}}>{title}</h1>
      <div className="black-line"></div>
      <h3 style={{textAlign: "center"}}>Logan Hirschi</h3>
      <div className="textWrapper">
        <div className="p-size">
          <img className="img-head" src="./assets/family.jpg" width="200" height="120" style={{margin: "auto"}}></img>
          <p>Hi, my name is Logan Hirschi I'm a 26 year old from St George Utah. I love to run, jump, and sleep. I can play the guitar and solve different types of rubiks cubes. I was a track and cross country runner in school and I still love running.</p>
        </div>
        <div className="p-size">
        <img className="img-head" src="./assets/wedding.jpg" width="200" height="120" style={{margin: "auto"}}></img>
          <p>As a kid I loved playing video games, even more than breathing. And as I grew up I decided I wanted to make my own games which got me intrested in programming with python. That's when I learned about HTML, css, and Javascript and I was hooked.</p>
        </div>
      </div>
      <div className="textWrapper">
        <div className="p-size">
        <p>I studied for 4 years at Utah Tech University and I got a bachelor's degree in Computer Information Technologies (Software Development Emphasis). I got a job as a web developer at Academic Innovations where I currently work today, and I have been practicing coding ever since. </p>
        </div>
        <div className="p-size">
          <p>Today I've learned all sorts of different programming languages C++, C#, React, Node, Rust, Go, etc. I love understanding how computers work.  I'm married and I have a little puppy hoping to start developing my career even more as a software engineer.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
