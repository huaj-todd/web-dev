const TodoItem = (todo) => {
    return(`
${todo.title}
(${todo.status})
<input type="checkbox"
${todo.done ? 'checked' : ''}/>
`);
}
export default TodoItem;