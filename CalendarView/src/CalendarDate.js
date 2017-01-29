import React, {Component} from 'react';
import './CalendarDate.css'

class CalendarGrid extends Component {
    render() {
        if (this.props.inMonth) {
            return (
                <div className="CalendarDate">
                    <h4>{this.props.day}</h4>
                </div>
            );
        }

        else {
            return (
                <div className="CalendarDate NotInMonth">
                    <h4>{this.props.day}</h4>
                </div>
            );
        }
    }

}

export default CalendarGrid;