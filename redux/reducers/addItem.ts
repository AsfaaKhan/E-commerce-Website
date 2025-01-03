
interface Action {
    type: string;
    payload: any;
}

interface Item {
    id: string;
    [key: string]: any;
}
const addItem: Item[] = []
const addItems = (state= addItem, action:Action) =>{
    switch(action.type){
        case"ADDITEM"
        :return[
            ...state,action.payload
        ]
        break;
        case 'DELITEM':
            return  state.filter((x) =>{
                return x.id !== action.payload.id
            })
            break;
            default : return state;
            break;
    }
}

export default addItems