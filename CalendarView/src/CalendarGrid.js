import React, {Component} from 'react';
import CalendarRow from './CalendarRow'
import './CalendarGrid.css'

var dayNames = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']

class CalendarGrid extends Component {
    splitArray(size) {
        var a = this.props.days;
        var arrays = [];

        while (a.length > 0)
            arrays.push(a.splice(0, size));

        return arrays
    }

    renderWeeks() {
        return this.splitArray(7).map(dayChunk => (
            <CalendarRow key={dayChunk} days={dayChunk} month={this.props.month} year={this.props.year}/>
        ));
    }

    renderDays() {
        return dayNames.map(day => (
            <div className="dayLabel" key={day}>
                <h4>{day}</h4>
            </div>
        ));
    }

    render() {
        return (
            <div id="CalendarGrid" className="col-md-12">
                <div className="col-md-12">
                    {this.renderDays()}
                </div>
                {this.renderWeeks()}
            </div>
        );
    }
}

export default CalendarGrid;