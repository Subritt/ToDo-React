import React, { Component } from 'react';
import PropType from 'prop-types';

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <h3>{ this.props.todo.title }</h3>
            </div>
        )
    }
}

// PropTypes
TodoItem.propType = {
    todo: PropType.object.isRequired
}

export default TodoItem;
