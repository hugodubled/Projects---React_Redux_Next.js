import Player from './components/Player.jsx';
import TimerChallengeNew from './components/TimerChallengeNew.jsx';
import './index.css';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallengeNew title="Easy" targetTime={1}/>
        <TimerChallengeNew title="Not Easy" targetTime={5}/>
        <TimerChallengeNew title="Getting tough" targetTime={10}/>
        <TimerChallengeNew title="Pro only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
