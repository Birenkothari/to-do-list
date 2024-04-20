import React, { useContext, useEffect } from "react";
import ToDoCategoriesContext from "../context/ToDoCategoriesContext";

const ToDoList: React.FC = () => {
	const toDoCategoryContext = useContext(ToDoCategoriesContext!);

	useEffect(() => {
		console.log("Categories: ", toDoCategoryContext?.toDoCategories);
	}, [toDoCategoryContext]);

	return (
		<div className="m-3">
			{toDoCategoryContext && toDoCategoryContext?.toDoCategories.length > 0 ? (
				toDoCategoryContext?.toDoCategories.map((category) => {
					return <h4 key={category.categoryId}>{category.categoryName}</h4>;
				})
			) : (
				<p>Nothing to do</p>
			)}
		</div>
	);
};

export default ToDoList;
