import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet, Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        lot of goals{" "}
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
