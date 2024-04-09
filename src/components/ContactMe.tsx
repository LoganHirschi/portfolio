import "./contactMe.css";
import "./page.css";

interface Props {
  title?: string;
}

const ContactMe = ({
  title = "Title"
}: Props) => {
  return (
    <div className="main-wrapper">
      <h1 style={{textAlign: "center"}}></h1>
      <div className="container">
      <h1 style={{textAlign: "center"}}>{title}</h1>

<form name="serviceform" action="./submit_service_request.html" method="post">

  <p className="name">
    <input name="name" type="text" className="feedback-input" placeholder="Name" id="name" />
  </p>

  <p className="email">
    <input name="email" type="text" className="feedback-input" id="email" placeholder="Email" />
  </p>

  <p className="text">
    <textarea name="text" className="feedback-input" id="comment" placeholder="Comment"></textarea>
  </p>


  <div className="submit">
    <input type="submit" value="SEND!" id="button-blue" />
  </div>
</form>
  </div>
    </div>
  );
};

export default ContactMe;
