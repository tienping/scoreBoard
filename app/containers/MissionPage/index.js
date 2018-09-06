/**
 *
 * MissionPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CenteredSection from 'components/CenteredSection';
import { Button } from 'antd';
import 'antd/lib/button/style/css';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import './../../utils/animate.css';
import { databaseRef } from "./../../utils/firebase";

import { addEntry } from './actions';
import makeSelectMissionPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class MissionPage extends React.PureComponent {
    state={
        actionLoading: false,
        successLoading: false,
        failLoading: false,
        selectWinner: false,
        database: {},
        selected: null,
        status: 'fadeIn',
        addScoreGroup: '',
    }

    componentWillMount() {
        const _this = this;
        function updateData(snapshot) {
            _this.setState({ database: snapshot.val() });
        }
        databaseRef.on('value', (snapshot) => {
            if (snapshot.exists()) {
                updateData(snapshot);
            }
        });
    }

    addNewEntry = () => {
        const { database, addScoreGroup, selected } = this.state;
        if (!addScoreGroup) {
            alert('资料不全');
            return null;
        }

        const { data, mission } = database;
        const currentTime = new Date();

        this.props.dispatch(addEntry({
            id: currentTime.getTime(),
            groups: data.groups,
            addScoreGroup,
            addScoreValue: mission[selected].value,
            addScoreRemark: mission[selected].description,
            index: data && data.groups && data.groups[addScoreGroup] && data.groups[addScoreGroup].log && data.groups[addScoreGroup].log.length || 0,
            date: currentTime.toLocaleString(),
            time: `${currentTime.getHours()} : ${currentTime.getMinutes()}`,
        }));

        this.setState({ successLoading: true });

        setTimeout(() => {
            this.setState({ addScoreGroup: '' });
            this.setState({ selected: null });
            this.setState({ status: 'flipInX' });
            this.setState({ selectWinner: false });
            this.setState({ successLoading: false });

            if (addScoreGroupEl && addScoreGroupEl.selectedIndex) {
                addScoreGroupEl.selectedIndex = 0;
            }
        }, 2000);

        return true;
    }

    render() {
        const { database, selected, status, selectWinner, actionLoading, successLoading, failLoading, addScoreGroup } = this.state;
        return (
            <CenteredSection style={{ width: '100%' }}>
                <div
                    className={`animated ${status}`}
                    style={{
                        width: '100%',
                        minHeight: '300px',
                        display: 'flex',
                        backgroundColor: selected === null ? 'white' : '#555',
                        border: '1rem solid #DD0000',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ width: '100%' }}>
                        {
                            database && database.mission && selected !== null && database.mission[selected] ?
                                <div className="selected-mission" style={{ padding: '10%' }}>
                                    <div style={{ fontSize: '150%', color: 'white' }}>{database.mission[selected].description}</div>
                                    <div style={{ fontSize: '200%', color: '#0C0' }}>{`+${database.mission[selected].value}`}</div>
                                </div>
                                :
                                <div className={`mission-action animated ${ selected === null ? 'fadeIn' : 'fadeOut' }`} >
                                    <div style={{ fontSize: '300%', fontWeight: 700 }}>任务卡</div>
                                    <Button
                                        onClick={() => {
                                            if (selected === null) {
                                                this.setState({ actionLoading: true });
                                                setTimeout(() => {
                                                    const rand = Math.floor(Math.random() * database.mission.length)
                                                    this.setState({ selected: rand });
                                                    this.setState({ status: 'flipInY' });
                                                    this.setState({ actionLoading: false });
                                                }, 1200)
                                            }
                                        }}
                                        type="primary"
                                        size="large"
                                        loading={actionLoading}
                                        style={{ marginTop: '1rem', fontSize: '150%' }}
                                    >抽卡</Button>
                                </div>
                        }
                    </div>
                </div>
                <div className="action-btns" style={{ backgroundColor: 'darkgray' }}>
                    {
                        selected !== null ?
                            <div>
                                <Button
                                    onClick={() => {
                                        // this.setState({ successLoading: true });
                                        this.setState({ selectWinner: true });
                                    }}
                                    loading={successLoading}
                                    type="success"
                                    size="large"
                                    style={{ margin: '5%', backgroundColor: '#00CC00', color: 'white', fontWeight: 700 }}
                                >成功</Button>
                                <Button
                                    onClick={() => {
                                        if (selected !== null) {
                                            this.setState({ failLoading: true });
                                            this.setState({ status: 'hinge' });
                                            setTimeout(() => {
                                                this.setState({ selected: null });
                                                this.setState({ failLoading: false });
                                                this.setState({ status: 'fadeIn' });
                                                this.setState({ selectWinner: false });
                                                this.setState({ addScoreGroup: '' });

                                                if (addScoreGroupEl && addScoreGroupEl.selectedIndex) {
                                                    addScoreGroupEl.selectedIndex = 0;
                                                }
                                            }, 2000)
                                        }
                                    }}
                                    loading={failLoading}
                                    type="danger"
                                    size="large"
                                    style={{ margin: '5%' }}
                                >失败</Button>
                                {
                                    selectWinner ?
                                        <div>
                                            <div style={{ display: 'flex', flexDirection: 'row', padding: '3px 20px' }}>
                                                <div style={{ flex: 3, color: 'white' }}>Group:</div>
                                                <div style={{ flex: 7, marginLeft: 10 }}>
                                                    {
                                                        database.data.groups && database.data.groups.length ?
                                                            <select
                                                                id="addScoreGroupEl"
                                                                onChange={(event) => { this.setState({addScoreGroup: event.target.value}); }}
                                                                value={addScoreGroup}
                                                                style={{ width: '100%', backgroundColor: 'white' }}
                                                            >
                                                                <option value="">Select</option>
                                                                {
                                                                    database.data.groups.map((value, index) => (
                                                                        <option key={index} value={index}>{value.label}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                            :
                                                            null
                                                    }
                                                </div>
                                            </div>
                                            <button
                                                style={{ margin: '1rem 0', backgroundColor: 'lightgreen', padding: '0.5rem 1rem', borderRadius: 15, border: '3px solid salmon' }}
                                                onClick={this.addNewEntry}
                                            >Submit</button>
                                        </div>
                                        :
                                        null
                                }
                            </div>
                            :
                            <div>
                                <Button
                                    onClick={() => {
                                        this.setState({ failLoading: true });
                                        this.setState({ status: '' });
                                        setTimeout(() => {
                                            this.setState({ selected: null });
                                            this.setState({ failLoading: false });
                                            this.setState({ status: 'flipInX' });
                                        }, 500)
                                    }}
                                    loading={failLoading}
                                    type="default"
                                    size="large"
                                    style={{ margin: '5%' }}
                                >换卡</Button>
                            </div>
                    }

                </div>
            </CenteredSection>
        );
    }
}

MissionPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
    missionpage: makeSelectMissionPage(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'missionPage', reducer });
const withSaga = injectSaga({ key: 'missionPage', saga });

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(MissionPage);
