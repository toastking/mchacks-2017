import React, {Component} from 'react';
import CalendarDate from './CalendarDate'
import './CalendarRow.css'

class CalendarRow extends Component {
    renderWeek() {
        return this.props.days.map(day => (
            <CalendarDate key={day} day={day} />
        ));
    }

    render() {
        return (
            <div className="CalendarRow col-md-12">
                {this.renderWeek()}
            </div>
        );
    }

}

export default CalendarRow;