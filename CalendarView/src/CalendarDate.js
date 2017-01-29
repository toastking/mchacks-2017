import React, {Component} from 'react';
import './CalendarDate.css'

class CalendarGrid extends Component {
    constructor(props) {
        super(props);
        this.updateDate = this.updateDate.bind(this);
    }

    updateDate() {
        this.props.selDate(this.props.day);
    }

    render() {
        if (this.props.day < 0) {
            return (
                <div className="CalendarDate NotInMonth">
                </div>
            );
        }

        else {
            return (
                <div className="CalendarDate" onClick={this.updateDate}>
                    <h4>{this.props.day}</h4>
                </div>
            );
        }
    }

}

export default CalendarGrid;