import React, {Component} from 'react';
import CalendarGrid from './CalendarGrid';

class Calendar extends Component {
    constructor(props) {
        super(props);
        var date = new Date();
        date.setDate(1);
        this.state = {month: date.getMonth(), year: date.getFullYear()}
        this.minusOneMonth = this.minusOneMonth.bind(this);
        this.plusOneMonth = this.plusOneMonth.bind(this);
    }

    daysBeforeMonth(year, month) {
        var date = new Date(year, month, 1);
        var daysBefore = date.getDay();
        var i = 0;
        var dayList = [];
        for (i = daysBefore; i > 0; i--) {
            date.setDate(date.getDate() - 1);
            dayList.unshift(date.getDate());
        }
        return dayList;
        
    }

    daysInMonth(year, month) {
        var lastDayInMonth = new Date(year, month+1, 0);
        var days = lastDayInMonth.getDate()
        var daysList = [];
        var i = 0;
        for (i = 0; i < days; i++) {
            daysList.push(i+1)
        }
        return daysList;
    }

    daysAfterMonth(year, month) {
        var date = new Date(year, month+1, 0);
        var daysAfter = 6 - date.getDay();
        var i = 0;
        var daysList = [];
        for (i = 0; i < daysAfter; i++) {
            daysList.push(i+1)
        }
        return daysList
    }

    daysToDisplay(year, month) {
        var partialCalendar = this.daysBeforeMonth(year, month).concat(this.daysInMonth(year, month));
        return partialCalendar.concat(this.daysAfterMonth(year, month));
    }



    minusOneMonth() {
        var currentMonth = this.state.month
        var currentYear = this.state.year
        currentMonth -= 1
        if (currentMonth / 12 < 0) {
            currentMonth += 12
            currentYear -= 1
        }
        this.setState({month: currentMonth, year: currentYear})
    }

    plusOneMonth() {
        var currentMonth = this.state.month
        var currentYear = this.state.year
        currentMonth += 1
        if (currentMonth / 12 >= 1) {
            currentMonth %= 12
            currentYear += 1
        }
        this.setState({month: currentMonth, year: currentYear})
    }

    render() {
        return (
            <div className="Calendar">
                {this.state.month}
                <br />
                <input type="button" onClick={this.minusOneMonth}/>
                {this.state.year}
                <input type="button" onClick={this.plusOneMonth}/>
                <br />
                <CalendarGrid days={this.daysToDisplay(this.state.year, this.state.month)} />
            </div>
        );
    }

}

export default Calendar;