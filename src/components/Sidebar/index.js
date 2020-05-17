import React from 'react';

import { connect } from 'react-redux';

// import { Container } from './styles';

import toggleLesson  from '../../store/actions/course'

const Sidebar = ({modules, toggleLesson}) => {
   return(
   <aside>
       {/* {console.log(modules.modules, dispatch)} */}
    { modules.map(module => (
        <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
                {module.lessons.map(lesson => (
                    <li key={lesson.id}>{lesson.title}
                        <button onClick={() => toggleLesson(module, lesson)}>
                            Selecionar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    ))}
    </aside>
    );
}

const mapStateToProps = state => ({
    modules: state.course.modules
});
const mapDispatchToProps = dispatch => ({
    toggleLesson: (module, lesson) => dispatch(toggleLesson(module, lesson))
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);