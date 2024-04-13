import CreateNewCategory from "./components/CreateNewCategory";
import ToDoList from "./components/ToDoList";
import { CategoryProvider } from "./context/ToDoCategoriesContext";

export default function App() {

  return (
    <div className="m-6">
      <h1 className="my-auto text-3xl font-bold underline">
        To Do List
      </h1>
      <CategoryProvider>
        <CreateNewCategory />
        <ToDoList />
      </CategoryProvider>

    </div>
  )
}