import React, { Component } from 'react';
import PropType from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed
            ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) }/> {' '}
                    { this.props.todo.title }
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propType = {
    todo: PropType.object.isRequired
}

export default TodoItem;
