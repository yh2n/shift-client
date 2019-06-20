import React, { Component } from 'react';

// class Pusher extends Component {
//     render() {
//         this.pusher = new Pusher('dd4cfaae3504bbdaa2b2', {
//             cluster: 'us2',
//             forceTLS: true
//         });
//         this.channel = this.pusher.subscribe('new_schedule');
//         this.channel.bind('schedule_update', () => {
//             this.fetchSchedule()
//             this.props.handleScheduleAlert()
//             console.log('new schedule')
//         return <div></div>
//         }
//     }
// }