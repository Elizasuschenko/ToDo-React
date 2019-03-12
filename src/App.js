import React from 'react'
import Skelet from "./Skelet"

class App extends React.Component{
    constructor(props){
        super()
        this.state = {
            doshki: [

            ],
            itemText: '',
            length:  0,
            active: [],
            complite: []
        }
        this.AddDoshki = this.AddDoshki.bind(this)
        this.addInfo = this.addInfo.bind(this)
        this.removeDoshki = this.removeDoshki.bind(this)
        this.checkedDoshki = this.checkedDoshki.bind(this)
        this.active = this.active.bind(this)
        this.completed = this.completed.bind(this)
        this.clearComplite = this.clearComplite.bind(this)
    }
    checkedDoshki(item){
        this.setState(({doshki, length})  => {
            const index = doshki.indexOf(item);
            const newItems = [...doshki];
            newItems[index] = {
                ...item,
                done: !item.done
            };
            if(newItems[index].done === true){
                return {
                    length: length - 1,
                    doshki: newItems
                }
            }
            return{
                length: length + 1,
                doshki: newItems
            }
        })
    }
    active(){
        this.setState(({doshki}) => {
            return {
                doshki: doshki.filter(item => !item.done)
            }
        })

    }
    completed(){
        this.setState(({doshki}) => {
            return {
                doshki: doshki.filter(item => item.done)
            }
        })
    }
    clearComplite(){
        this.setState(prevState => {
            return {
                doshki: prevState.doshki.filter(item => item.done === false)
            }
        })
    }
    removeDoshki(todo){
            this.setState(prevState => {
                return {
                    doshki: prevState.doshki.filter(item => item !== todo),
                    length: prevState.length -1
                }
            })

    }
    AddDoshki(event){
        if(event.key !== 'Enter') {
            return
        }
            this.setState(({ doshki, itemText, length }) => {
                let doshkiNew = {
                    item: doshki.length ,
                    value: itemText,
                    done: false
                }
                if(doshkiNew.value === ''){
                    return
                }
                return { doshki: [ ...doshki, doshkiNew ],
                    itemText: '',
                    length: length + 1
                }
            })

    }
    addInfo(value){

        this.setState(() => {
            return { itemText: value }
        })
    }
    render(){
        return (
            <Skelet
                completed = { this.completed }
                active = { this.active }
                complite = { this.clearComplite }
                itemText = { this.state.itemText }
                mainArr = { this.state.doshki}
                length = { this.state.length}
                AddDoshki = {this.AddDoshki}
                addInfo = {this.addInfo}
                removeDoshki = { this.removeDoshki }
                checkedDoshki = { this.checkedDoshki }
            />
        )
    }
}

export default App