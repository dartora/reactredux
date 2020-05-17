import {createStore} from 'redux';
const INITIAL_STATE = {
       activeLesson: {},
       activeModule: {},
       modules: [
            {
                id: 1, 
                title: 'Iniciando com React', 
                lessons: [
                    {id: 1, title: 'Primeira aula'},
                    {id: 2, title: 'Segunda aula'},
                ] 
            },
            {
                id: 2, 
                title: 'Desenrolando com React', 
                lessons: [
                    {id: 3, title: 'Terceira aula'},
                    {id: 4, title: 'Quarta aula'},
                ],
            } 
        ] 
       
}
export default function course( state = INITIAL_STATE, action) {
    if (action.type === 'TOOGLE_LESSON') {
        
        return { ...state, activeLesson: action.lesson, activeModule: action.module }
    }
    console.log(state);
   return state;
}