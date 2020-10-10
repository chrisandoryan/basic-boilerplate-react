import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Card } from 'react-bootstrap'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie, Line, Doughnut } from 'react-chartjs-2';
import { withFirebase } from "../../contexts";
import { withRouter } from "react-router-dom";
import './style.css'

function Vendor(props) {
    const pie = {
        labels: [
            'Male',
            'Female',
            'Secret'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    const line = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Number of Attendee',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    const doughnat = {
        labels: [
            'Dislike',
            'Like'
        ],
        datasets: [{
            data: [50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };

    return (
        <React.Fragment>
            <div className={"my-container"}>
                <ProSidebar>
                    <SidebarHeader>
                        <h3 id={"sidebar-title"}>Vendor</h3>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem icon={<FaHome />}>Dashboard</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        Copyright Senja
                    </SidebarFooter>
                </ProSidebar>
                <div className={"card-contents"}>
                    <div className={"cards-container"}>
                        <Card className={"mycard shadow rounded"}>
                            <Card.Title className={"card-title"}>Gender of Attendee</Card.Title>
                            <Pie data={pie} />
                        </Card>
                        <Card className={"mycard shadow rounded"}>
                            <Card.Title className={"card-title"}>Number of Attendee</Card.Title>
                            <Line data={line} />
                        </Card>
                        <Card className={"mycard shadow rounded"}>
                            <Card.Title className={"card-title"}>Like and Dislike</Card.Title>
                            <Doughnut data={doughnat} />
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(withFirebase(Vendor))