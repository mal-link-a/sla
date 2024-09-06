import { Navigate, Route, Routes, } from "react-router-dom";
import "./App.css";

import { LessonTab } from "./features/LessonTab";
import { WorkTab } from "./features/WorkTab/ui/WorkTab";
import { ROUTE } from "./routes";
import { InfluenceTab } from "./features/InfluenceTab/ui/InfluenceTab";
import { MainWithImage } from "./pages/MainWithImage/ui/MainWithImage";
import { About } from "./features/About/ui/About";

const App = () => {
  return (
    <MainWithImage>
      <Routes>
        <Route path={ROUTE.LESSON.PATH} element={<LessonTab />} />
        <Route path={ROUTE.WORK.PATH} element={<WorkTab />} />
        <Route path={ROUTE.INFLUENCE.PATH} element={<InfluenceTab />} />
        <Route path={ROUTE.ABOUT.PATH} element={<About />} />
        <Route path="*" element={<Navigate to={ROUTE.LESSON.PATH} replace={true}/>}  />
      </Routes>
    </MainWithImage>
  );
};

export default App;
