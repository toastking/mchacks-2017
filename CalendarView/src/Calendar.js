import React, {Component} from 'react';
import CalendarGrid from './CalendarGrid';
import './Calendar.css';
import * as firebase from 'firebase';
import $ from 'jquery';
import jQuery from 'jquery';

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Calendar extends Component {
    constructor(props) {
        super(props);
        var date = this.props.date;
        date.setDate(1);
        this.state = {month: date.getMonth(), year: date.getFullYear(), date: 1, posts:[]}
        this.minusOneMonth = this.minusOneMonth.bind(this);
        this.plusOneMonth = this.plusOneMonth.bind(this);
        this.selectedDate = this.selectedDate.bind(this);
        this.today = this.today.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.setPosts = this.setPosts.bind(this);
        this.database = firebase.database();
    }

    setPosts(data){
      var posts = this.state.posts;
      posts.push(data);
      console.log(posts);
      this.setState({posts:posts});
    }
    componentWillMount(){

      var user = firebase.auth().currentUser;

        if (user) {
            // User is signed in.
            var ref = this.database.ref('/user/'+user.uid+'/posts');
            ref.on('child_added',function(data){
              this.setPosts(data);
            }.bind(this));
            ref.on('child_changed',function(data){
              console.log(data);
            });
        } else {
            console.error('no user signed in ');
        }

    }

    daysBeforeMonth(year, month) {
        var date = new Date(year, month, 1);
        var daysBefore = date.getDay();
        var i = 0;
        var dayList = [];
        for (i = daysBefore; i > 0; i--) {
            dayList.push(-1 * i);
        }
        return dayList;

    }

    selectedDate(selDate) {
        this.setState({date: selDate});
        this.props.selDate(new Date(this.state.year, this.state.month, selDate));
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
        for (i = 1; i < daysAfter + 1; i++) {
            daysList.push(-1 * i)
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

    today() {
        var date = new Date();
        this.setState({month: date.getMonth(), year: date.getFullYear()})
    }

    render() {
        return (
            <div className="Calendar">
                <button type="button" className="btn btn-default pull-right">Logout</button>
                <div id="MonthDisplay" className="col-md-12">
                    <h1>{monthNames[this.state.month]}</h1>
                </div>
                <div id="MonthNav" className="col-md-12">
                    <div className="col-xs-1">
                        <button type="button" className="btn btn-info" onClick={this.minusOneMonth}>
                            Prev
                        </button>
                    </div>
                    <div className="col-xs-10">
                        {this.state.year}
                    </div>
                    <div className="col-xs-1">
                        <button type="button" className="btn btn-info" onClick={this.plusOneMonth}>
                            Next
                        </button>
                    </div>
                    <div className="col-xs-12">
                        <button type="button" className="btn btn-info" onClick={this.today}>
                            Today
                        </button>
                    </div>
                </div>
                <CalendarGrid days={this.daysToDisplay(this.state.year, this.state.month)} month={this.state.month} year={this.state.year} selDate={this.selectedDate}/>
            </div>
        );
    }

}

export default Calendar;
