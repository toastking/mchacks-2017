import React, {Component} from 'react';
import CalendarDate from './CalendarDate'
import './CalendarRow.css'

class CalendarRow extends Component {
    constructor(props) {
        super(props);
        var lastDay = new Date(this.props.year, this.props.month + 1, 0)
        var previousLastDay = new Date(this.props.year, this.props.month, 0)
        this.state = {firstWeek: this.props.days[previousLastDay.getDay()] === previousLastDay.getDate(), lastWeek: this.props.days[lastDay.getDay()] === lastDay.getDate(), lastDay: lastDay, previousLastDay: previousLastDay};
    }

    renderWeek() {
        var weekElements = [];
        var i;
        for (i = 0; i < 7; i++) {
            var day = this.props.days[i];
            if ((this.state.firstWeek && day <= this.state.previousLastDay.getDate()) || (this.state.lastWeek && day < this.state.previousLastDay.getDate()))
            {
                weekElements.push((<CalendarDate key={day} day={day} inMonth={false}/>))
            }
            else {
                weekElements.push((<CalendarDate key={day} day={day} inMonth={true}/>));
            }
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