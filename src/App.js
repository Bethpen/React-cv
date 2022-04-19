import { Header } from './components/Header';
import Education from './components/Education';
import WorkExperience from './components/Work_Experience';
import TeachingExperience from './components/Teaching_experience'
import Leadership from './components/Leadership'
import Awards from './components/Awards'
import Skills from './components/Skills'


function App() {
  return (
    <div className="App">
      <Header />
      <Education className='section' />
      <WorkExperience />
      <TeachingExperience />
      <Leadership />
      <Awards />
      <Skills />
    </div>
  );
}

export default App;
