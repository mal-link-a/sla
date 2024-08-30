import { observer } from "mobx-react-lite";
import { baseStore } from "../../stores/Base/base.store";
import { MainWithImage } from "../../components/MainWithImage/MainWithImage";
import { LessonTab } from "../../features/LessonTab";
import { Pages } from "../../stores/Base/model/types";
import { CustomerOrders } from "../../features/CustomerOrders/ui/CustomerOrders";


export const Main = observer(() => {
  const page = baseStore.currentPage;
  const getPage = () => {
    switch (page) {
      case Pages.lesson: {
        return <LessonTab />;
      }
      case Pages.сustomerOrders: {
        return <CustomerOrders />;
      }
    }
  };
  return (
    <>
      <MainWithImage>{getPage()}</MainWithImage>
    </>
  );
});