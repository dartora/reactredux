import React from 'react';
import { connect } from 'react-redux';

// import { Container } from './styles';

const Video =  ( {activeModule, activeLesson} ) => (
    <div>
        <h1>
            <strong>Módulo {activeModule.title}, </strong>
            <span>Aula {activeLesson.title}.</span>
        </h1>
    </div>
);

export default connect( state => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson, 
}))(Video);