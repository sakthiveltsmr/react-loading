import "./App.css";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  BarLoader,
  BeatLoader,
  DotLoader,
  BounceLoader,
  ClimbingBoxLoader,
  ClockLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SkewLoader,
  SquareLoader,
  SyncLoader,
} from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="App">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
      />
      <BarLoader color="orange" />

      <BeatLoader />

      <DotLoader />

      <BounceLoader />

      <ClimbingBoxLoader />

      <ClockLoader />

      <FadeLoader />

      <GridLoader />

      <HashLoader />

      <MoonLoader />

      <PacmanLoader />

      <PropagateLoader color="orange" />

      <PuffLoader />

      <PulseLoader color="skyblue" />

      <RiseLoader />

      <RotateLoader />

      <ScaleLoader color="orange" />

      <SkewLoader />

      <SquareLoader />

      <SyncLoader />
    </div>
  );
}

export default App;
