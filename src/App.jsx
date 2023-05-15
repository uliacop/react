import { Button } from "./components/Button/Button";

export default function App() {
  return (
    <>
      <h1> Grace Patricia Kelly</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Grace_Kelly_1956.jpg/248px-Grace_Kelly_1956.jpg"
        alt="Grace  Kelly"
        className="photo"
      />
      <ul>
        <li>Princess Monaco</li>
        <li>Hollywood Star</li>
        <li>Fashion icon</li>
      </ul>
      <div>
        <h2>Navigation</h2>
        <Button text="Previous card"></Button>
        <Button text="More view"></Button>
        <Button text="Next card"></Button>
      </div>
    </>
  );
}
