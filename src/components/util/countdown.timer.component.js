import React from "react";

export default class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: {}, seconds: this.props.seconds };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs) {
        if (secs <= 0) {
            return {
                "h": '00',
                "m": '00',
                "s": '00'
            }
        }
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        return {
            "h": hours > 9 ? hours : '0' + hours,
            "m": minutes > 9 ? minutes : '0' + minutes,
            "s": seconds > 9 ? seconds : '0' + seconds
        };
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds <= 0) {
            clearInterval(this.timer);
        }
    }

    render() {
        this.startTimer();
        return(
            <div>
                {this.state.time.h}:{this.state.time.m}:{this.state.time.s}
            </div>
        );
    }
}