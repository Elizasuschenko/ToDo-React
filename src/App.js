import React from 'react'
import Skelet from "./Skelet"

class App extends React.Component{
    constructor(props){
        super()
        this.state = {
            list: [

            ],
            itemText: '',

        }
        this.AddDoshki = this.AddDoshki.bind(this)
        this.changeText = this.changeText.bind(this)
        this.removeDoshki = this.removeDoshki.bind(this)
        this.checkedDoshki = this.checkedDoshki.bind(this)
        this.filter = this.filter.bind(this)
        this.clearComplite = this.clearComplite.bind(this)
    }
    checkedDoshki(id){
        this.setState(({list})  => {
            this.setState(prevState => ({
                list: prevState.list.map(m => ({
                    ...list,
                    done: !list.done
                }))
            }))})}

    clearComplite(){
        this.setState(prevState => {
            return {
                list: prevState.list.filter(item => item.done === false)
            }
        })
    }
    removeDoshki(todo){
            this.setState(prevState => {
                return {
                    list: prevState.list.filter(item => item !== todo),
                }
            })

    }
    filter(){
        const {filterBy, list} = this.state;
        let filteredItems = list;
        if (filterBy === 'active') {
            filteredItems = list.filter(item => item.done === false );
        }
        if (filterBy === 'done') {
            filteredItems = list.filter(item => item.done);
        }
        return filteredItems;
    }
    AddDoshki(event){
        if(event.key !== 'Enter') {
            return
        }
            this.setState(({ list, itemText, length }) => {
                let doshkiNew = {
                    item: list.length ,
                    value: itemText,
                    done: false
                }
                if(doshkiNew.value === ''){
                    return
                }
                return { list: [ ...list, doshkiNew ],
                    itemText: '',
                    length: length + 1
                }
            })

    }
    changeText(value){

        this.setState(() => {
            return { itemText: value }
        })
    }
    render(){
        return (
            <Skelet
                filter = { this.filter }
                itemText = { this.state.itemText }
                mainArr = { this.state.list}
                AddDoshki = {this.AddDoshki}
                changeText = {this.changeText}
                removeDoshki = { this.removeDoshki }
                checkedDoshki = { this.checkedDoshki }
            />
        )
    }
}

export default App