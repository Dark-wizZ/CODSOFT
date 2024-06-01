import signUp from '../images/signUp.png'
import adminDashboard from '../images/adminDashboard.png'
import ticTacToe from '../images/ticTacToe.png'
import memoryCard from '../images/memoryCard.png'
import crcs from '../images/crcs.png'
import wheresWally from '../images/wheresWally.png'

/* const template = [
  {
    name: '',
    techStack: '',
    desc: '',
    live: '',
    source: '',
    img: ,
  }
]
*/

const projects = [
  {
    name: 'Sign Up Form',
    techStack: 'HTML, CSS, JavaScript',
    desc: 'The webpage includes sections such as a logo section and an image sidebar, along with input fields for creating an account. The design details were carefully replicated, paying attention to factors like readability and styling consistency. The webpage was tested for responsiveness across different browser window sizes. JavaScript was implemented to validate matching password fields. Overall, this project showcases proficiency in HTML, CSS, responsive design, and attention to detail.',
    live: 'https://dark-wizz.github.io/sign-up_form/',
    source: 'https://github.com/Dark-WizZ/sign-up_form',
    img:signUp,
  },
  {
    name: 'Admin Dashboard',
    techStack: 'HTML, CSS',
    desc:' The project involved setting up files, establishing a Git repository, and implementing a grid-based layout with nested elements. Assets such as color palettes, icons, and fonts were utilized to enhance the design. The completed project was published on GitHub. ',
    live: 'https://dark-wizz.github.io/admin-dashboard/',
    source: 'https://github.com/Dark-WizZ/admin-dashboard',
    img: adminDashboard,
  },
  {
    name: 'Tic Tac Toe',
    techStack: 'HTML, CSS, JavaScript',
    desc: 'This project involves creating a Tic Tac Toe game using HTML, CSS, and JavaScript. The game is structured using modules and factories to minimize global code. As an optional challenge, an AI opponent can be created using a random move algorithm and potentially an unbeatable AI using the minimax algorithm. This project showcases skills in JavaScript logic, DOM manipulation, and game development.',
    live: 'https://dark-wizz.github.io/tic-tac-toe/',
    source: 'https://github.com/Dark-WizZ/tic-tac-toe',
    img: ticTacToe,
  },
  {
    name: 'Memory Card',
    techStack: 'HTML, CSS, JavaScript, React',
    desc: 'This project involves creating a React application using create-react-app. When a user clicks on a card, the cards are randomly reordered. The project requires careful consideration of component structure and organization, utilizing functional components and hooks for implementation.This project showcases proficiency in React, component architecture, state management, styling, and version control with Git.',
    live: 'https://dark-wizz.github.io/memory-card/',
    source: 'https://github.com/Dark-WizZ/memory-card',
    img: memoryCard,
  },
  {
    name: 'MSCS Dashboard (CRCS)',
    techStack: 'HTML, CSS, JavaScript, React, Other react libraries',
    desc: 'This project presents the proposed dashboard design for the CRCS portal developed for a hackathon. The dashboard aims to provide an intuitive and informative interface for accessing data related to cooperative societies in India. The design focuses on simplicity, minimalism, and user-friendliness, ensuring easy navigation and data interpretation.',
    live: 'https://dark-wizz.github.io/crcs/',
    source: 'https://github.com/Dark-WizZ/crcs',
    img: crcs,
  },
  {
    name: `Where's Wally?`,
    techStack: 'HTML, CSS, JavaScript, React, FireBase',
    desc: `This project involves setting up a GitHub repository, planning the implementation, and integrating front-end and back-end functionalities. The goal is to create a seamless user experience by allowing users to select and validate characters on a map, track their time, and display their score along with leaderboard usnig firebase`,
    live: 'https://dark-wizz.github.io/wheres-wally/',
    source: 'https://github.com/Dark-WizZ/wheres-wally/',
    img: wheresWally,
  }
]

export default projects;