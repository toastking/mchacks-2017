import React, {Component} from 'react';
import './CalendarDate.css'

class CalendarDate extends Component {
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
                <div className="CalendarDate">
                </div>
            );
        }

        else if (this.props.written) {
            return (
                <div className="CalendarDate InMonth" onClick={this.updateDate}>
                    <h4>{this.props.day}</h4>
                    <div className="glyphicon glyphicon-align-justify pull-right"></div>
                </div>
            );
        }

        else {
            return (
                <div className="CalendarDate InMonth" onClick={this.updateDate}>
                    <h4>{this.props.day}</h4>
                </div>
            );
        }
    }

}

export default CalendarDate;