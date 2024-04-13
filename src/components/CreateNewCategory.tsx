import React, { useContext, useState } from "react";
import ToDoCategoriesContext from "../context/ToDoCategoriesContext";

const CreateNewCategory: React.FC = () => {
	const [categoryName, setCategoryName] = useState<string>("");
	const toDoCategoryContext = useContext(ToDoCategoriesContext);

	const createNewCategoryHandler = (event: React.FormEvent) => {
		event.preventDefault();
		toDoCategoryContext?.addToDoCategory({
			categoryId: crypto.randomUUID(),
			categoryName: categoryName,
		});
		setCategoryName("");
	};

	return (
		<div className="m-3 p-2 bg-[#F0F3FA] border rounded-md">
			<form onSubmit={createNewCategoryHandler}>
				<label htmlFor="newCategory">Create Category:</label>
				<input
					type="text"
					className="border px-2"
					name="newCategory"
					id="newCategory"
					value={categoryName}
					onChange={(event) => {
						setCategoryName(event.target.value);
					}}
				/>
				<input
					type="submit"
					value="Add To Category"
					className="ml-2 px-2 border cursor-pointer"
				/>
			</form>
		</div>
	);
};

export default CreateNewCategory;
