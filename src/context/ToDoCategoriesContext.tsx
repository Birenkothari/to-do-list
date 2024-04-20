import React, { createContext, useState } from "react";
import {
	ToDoCategory,
	ToDoCategoriesContextProps,
	ToDoCategoriesContextType,
} from "../common/types";

const ToDoCategoriesContext = createContext<
	ToDoCategoriesContextType | undefined
>(undefined);

export const CategoryProvider: React.FC<ToDoCategoriesContextProps> = ({
	children,
}) => {
	const [toDoCategories, setToDoCategories] = useState<ToDoCategory[]>([]);

	const addToDoCategory = (category: ToDoCategory) => {
		setToDoCategories((prev) => [...prev, category]);
	};

	const deleteToDoCategory = (categoryId: number) => {};

	const updateToDoCategory = (category: ToDoCategory) => {};

	return (
		<ToDoCategoriesContext.Provider
			value={{
				toDoCategories,
				addToDoCategory,
				deleteToDoCategory,
				updateToDoCategory,
			}}>
			{children}
		</ToDoCategoriesContext.Provider>
	);
};

export default ToDoCategoriesContext;
