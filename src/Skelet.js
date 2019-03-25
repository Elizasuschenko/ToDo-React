import React from 'react'

class Skelet extends React.Component {

    render() {
        const length = this.state.items.filter(item => !item.done).length;
        const { mainArr } = this.props;
        const items = this.filter();
        const ToDo = items.map((todo) => (
                <Skelet.Item todo = { todo }
                             key = { todo.id }
                             remove = {() => mainArr.removeDoshki(todo)}
                             checkedDoshki = {() => mainArr.checkedDoshki(todo)}
                />

            )
        );
        return (
            <div className="container">
                <h1>To do list </h1>
                <ul>
                    { ToDo }
                </ul>
                <div>
                    <input type="text"
                           onKeyPress={this.props.AddDoshki}
                           value={ this.props.itemText }
                           onChange={(event) => this.props.changeText(event.target.value)
                           }/>
                </div>
                <div className="bottom">
                    <span>{length} item left </span>
                    <div className="bottom-center">
                        <button onClick={() => {this.props.filter('all')}}>All</button>
                        <button onClick={() => {this.props.filter('done')}}>Completed</button>
                        <button onClick={() => {this.props.filter('active')}}>Active</button>
                    </div>
                    <button >Clear completed</button>
                </div>
            </div>

        )
    }

}
Skelet.Item = ({ children, remove, todo, checkedDoshki, key }) => {

    return (
        <li >
            <input id={`todo-${todo.item}`} type="checkbox" className="todo_input" checked={todo.done} onChange={ () => checkedDoshki() } />
            <label htmlFor={`todo-${todo.item}`}>{todo.value}</label>
            <span onClick={ () => remove( key ) }>   Х</span>
        </li>
    )
};

export default Skelet