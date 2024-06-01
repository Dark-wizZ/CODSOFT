import side from '../images/side.png'

function Intro() {
  return ( <div className="intro">
    <div className="text">
      <p className="greeting">Hello There! </p>
      <p className="name">I'm <span>Mohamed Akram</span></p>
    </div>
    <div className="image">
      <img src={side} alt="" />
    </div>
  </div> );
}

export default Intro;