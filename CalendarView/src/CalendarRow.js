import React, {Component} from 'react';
import CalendarDate from './CalendarDate'
import './CalendarRow.css'

class CalendarRow extends Component {
    renderWeek() {
        var weekElements = [];
        var i;
        for (i = 0; i < 7; i++) {
            var date = this.props.days[i];
            weekElements.push((<CalendarDate key={date} day={date} inMonth={true} month={this.props.month} year={this.props.year} written={true} selDate={this.props.selDate}/>));
        }
        return weekElements;
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