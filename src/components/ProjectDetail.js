import React from 'react'
import axios from "axios/index";
import { connect } from 'react-redux';
import { Card } from 'antd';
const { Meta } = Card;

export default class ProjectDetail extends React.Component {
        handleClick = () => {

        }

        handleBid = () => {

        }
        render() {
            return (
                <div className={'project-detail-container'}>
                    <Card
                        style={{ width: 240 }}
                        cover={<img alt="pic" src="https://d1pet9gxylz2tx.cloudfront.net/uploads/2017/08/The-Project.png" />}
                    >
                        <Meta
                            title={`Name: ${this.props.data.Name}`}
                        />
                        <p>Description: {this.props.data.Description}</p>
                        <button type="button" class="btn btn-outline-primary btn-sm" onClick={this.handleClick}>
                            File</button>
                        <p>Skills: {this.props.data.SkillsRequired}</p>
                        <p>Budget Range: {this.props.data.BudgetRange}</p>
                        <p>AverageBid: {this.props.data.AverageBid}</p>
                        <button type="button" class="btn btn-outline-primary" onClick={this.handleBid}>
                            Bid</button>
                    </Card>
                </div>
            );
        }
}