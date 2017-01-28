import React, {Component} from 'react';
import CalendarRow from './CalendarRow'

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
            <CalendarRow key={dayChunk} days={dayChunk} />
        ));
    }

    render() {
        return (
            <div className="CalendarGrid col-md-12">
                {this.renderWeeks()}
            </div>
        );
    }

}

export default CalendarGrid;