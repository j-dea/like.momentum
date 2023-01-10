import {className, key, selector} from "./common/common.js";

let todoList = localStorage.getItem(key.todo)
	? JSON.parse(localStorage.getItem(key.todo))
	: [
		{ id: new Date().getTime(), title: '안녕하세요1', complete: true },
		{ id: new Date().getTime(), title: '안녕하세요2', complete: false }]
;

const redrawTodo = () => {
	$(selector.todoList).html('');
	todoList.map((todo) => {
		$(selector.todoList).append(`
			<li class="todo-item">
				<input type="checkbox" ${todo.complete ? 'checked' : ''} />
				<span>${todo.title}</span>
				<button>remove</button>
			</li>
		`);
	});
	$(selector.todoItem).each((index, element) => {
		$(element).find('button').click(() => handleRemoveTodo(index));
		$(element).click(() => handleCompleteTodo(index, !todoList[index].complete));
	})
}

export const handleAddTodo = (e) => {
	e.preventDefault();
	const [text] = e.target;
	todoList.push({
		id: new Date().getTime(),
		title: text.value,
		complete: false,
	});
	text.value = '';
	localStorage.setItem(key.todo, JSON.stringify(todoList));
	redrawTodo();
}

const handleRemoveTodo = (index) => {
	console.log('remove');
	todoList = todoList.filter((_, idx) => idx !== index);
	localStorage.setItem(key.todo, JSON.stringify(todoList));
	redrawTodo();
}

const handleCompleteTodo = (index, complete) => {
	console.log('complete');
	todoList = todoList.map((todo, idx) => {
		if(idx === index) {
			todo.complete = complete;
		}
		return todo;
	});
	localStorage.setItem(key.todo, JSON.stringify(todoList));
	redrawTodo();
}

export const handleTodoVisible = () => {
	$(`${selector.todoContainer} .list`).toggleClass(className.hiddenY);
}

redrawTodo();