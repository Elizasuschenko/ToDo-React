import React from 'react'

class Skelet extends React.Component {
    constructor(){
        super()
        this.classLi = React.createRef();
        this.addClass = this.addClass.bind(this)
    }

    addClass(){
        this.setState(() => {
            return
        })
    }

    render() {
        const { mainArr } = this.props;
        return (
            <div className="container">
                <h1>To do list </h1>
                <ul>
                    { mainArr.map((todo) => (
                          <Skelet.Item key = { todo.item }
                                       todo ={todo}
                                       remove = {() => this.props.removeDoshki(todo)}
                                       checkedDoshki = {() => this.props.checkedDoshki(todo)}
                          />

                        )
                    )}
                </ul>
                <div>
                    <input type="text"
                           onKeyPress={this.props.AddDoshki}
                           value={ this.props.itemText }
                           onChange={(event) => this.props.addInfo(event.target.value)
                           }/>
                </div>
                <div className="bottom">
                    <span>{this.props.length} item left </span>
                    <div className="bottom-center">
                        <button>All</button>
                        <button onClick={ this.props.active }>Active</button>
                        <button onClick={ this.props.completed }>Completed</button>
                    </div>
                    <button onClick={ this.props.complite }>Clear completed</button>
                </div>
            </div>
        )
    }

}
Skelet.Item = ({ children, remove, todo, checkedDoshki }) => {

    return (
        <li >
            <input id={`todo-${todo.item}`} type="checkbox" className="todo_input" checked={todo.done} onChange={ () => checkedDoshki() } />
            <label htmlFor={`todo-${todo.item}`}>{todo.value}</label>
            <span onClick={ () => remove() }>   Х</span>
        </li>
    )
};

export default Skelet