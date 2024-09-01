import { Route, Routes, } from "react-router-dom";
import "./App.css";

import { LessonTab } from "./features/LessonTab";
import { CustomerOrders } from "./features/CustomerOrders/ui/CustomerOrders";
import { ROUTE } from "./routes";
import { InfluenceTab } from "./features/InfluenceTab/ui/InfluenceTab";
import { MainWithImage } from "./pages/MainWithImage/ui/MainWithImage";

const App = () => {
  return (
    <MainWithImage>
      <Routes>
        <Route path={ROUTE.LESSON.PATH} element={<LessonTab />} />
        <Route path={ROUTE.WORK.PATH} element={<CustomerOrders />} />
        <Route path={ROUTE.INFLUENCE.PATH} element={<InfluenceTab />} />
      </Routes>
    </MainWithImage>
  );
};

export default App;
