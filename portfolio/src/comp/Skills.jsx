import webpack from '../icons/webpack.svg'
import css from '../icons/css.svg'
import js from '../icons/js.svg'
import html from '../icons/html.svg'
import git from '../icons/git.svg'
import npm from '../icons/npm.svg'
import react from '../icons/react.svg'
import firebase from '../icons/firebase.svg'

function Skills() {
  return (<div className="skills">
    <header>SKILLS <span>& TOOLS</span></header>
     <div className="items">
      <div className="skill">
        <img src={html} alt="" />
        <div className="title">HTML</div>
      </div>
      <div className="skill">
        <img src={css} alt="" />
        <div className="title">CSS</div>
      </div>
      <div className="skill">
        <img src={js} alt="" />
        <div className="title">JavaScript</div>
      </div>
      <div className="skill">
        <img src={webpack} alt="" />
        <div className="title">WebPack</div>
      </div>
      <div className="skill">
        <img src={git} alt="" />
        <div className="title">GIT</div>
      </div>
      <div className="skill">
        <img src={npm} alt="" />
        <div className="title">NPM</div>
      </div>
      <div className="skill">
        <img src={react} alt="" />
        <div className="title">React</div>
      </div>
      <div className="skill">
        <img src={firebase} alt="" />
        <div className="title">FireBase</div>
      </div>
    </div>
  </div> );
}

export default Skills;