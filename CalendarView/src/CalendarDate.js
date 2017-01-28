import React, {Component} from 'react';
import './CalendarDate.css'

class CalendarGrid extends Component {
    render() {
        return (
            <div className="CalendarDate">
                {this.props.day}
            </div>
        );
    }

}

export default CalendarGrid;