export interface Task {
	taskId: number;
	taskName: string;
	taskListId: number;
}

export interface ToDoCategory {
	categoryId: string;
	categoryName: string;
}

export interface ToDoCategoriesContextProps {
	children: React.ReactNode;
}

export interface ToDoCategoriesContextType {
	toDoCategories: ToDoCategory[];
	addToDoCategory: (category: ToDoCategory) => void;
	deleteToDoCategory: (categoryId: number) => void;
	updateToDoCategory: (category: ToDoCategory) => void;
}
