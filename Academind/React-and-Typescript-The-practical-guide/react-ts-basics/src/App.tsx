import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header image={{ src: "", alt: "A list of goals" }}>
        <h1>Your Course Goals </h1>
      </Header>
      <CourseGoal title="learn React with ts ">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}

export default App;
