/**
 *
 * EditPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import CenteredSection from 'components/CenteredSection';
import Section from 'components/Section';
import MyTableCell from 'components/MyTableCell';
import LogTable from 'components/LogTable';

import makeSelectEditPage from './selectors';
import reducer from './reducer';
import { addEntry } from './actions';
import saga from './saga';
import { dataRef } from "./../../utils/firebase";

/* eslint-disable react/prefer-stateless-function */
export class EditPage extends React.PureComponent {
    state = {
        data: {},
        addScoreRemark: '',
        addScoreGroup: '',
        addScoreValue: '',
    }

    componentWillMount() {
        const _this = this;
        function updateData(snapshot) {
            _this.setState({ data: snapshot.val() });
        }
        dataRef.on('value', (snapshot) => {
            if (snapshot.exists()) {
                updateData(snapshot);
            }
        });
    }

    addNewEntry = () => {
        const { data, addScoreRemark, addScoreGroup, addScoreValue } = this.state;
        if (!addScoreValue || !addScoreGroup || !addScoreRemark) {
            alert('资料不全');
            return null;
        }

        const currentTime = new Date();

        this.props.dispatch(addEntry({
            id: currentTime.getTime(),
            groups: data.groups,
            addScoreRemark,
            addScoreGroup,
            addScoreValue,
            index: data && data.groups && data.groups[addScoreGroup] && data.groups[addScoreGroup].log && data.groups[addScoreGroup].log.length || 0,
            date: currentTime.toLocaleString(),
            time: `${currentTime.getHours()} : ${currentTime.getMinutes()}`,
        }));
        this.setState({ addScoreRemark: '' });
        this.setState({ addScoreGroup: '' });
        this.setState({ addScoreValue: '' });

        if (addScoreGroupEl && addScoreGroupEl.selectedIndex) {
            addScoreGroupEl.selectedIndex = 0;
        }

        return true;
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <Helmet />
                <div>
                    <CenteredSection>
                        {
                            data && data.groups ?
                                <Section>
                                    <div className="myTable" style={{ background: 'lightgray', padding: '1rem 0' }}>
                                        <div className="tableRow groupName">
                                            {
                                                data.groups.map((value, index) => (
                                                    <MyTableCell className="groupNameItem" key={index}>{value.label}</MyTableCell>
                                                ))
                                            }
                                        </div>
                                        <div className="tableRow groupScore" style={{ background: 'lightgray' }}>
                                            {
                                                data.groups.map((group, index) => (
                                                    <MyTableCell className="groupScoreItem" key={index}>{group.y}</MyTableCell>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <hr style={{ margin: '2rem 0' }}/>

                                    <div style={{ margin: 'auto', width: '70%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', padding: '3px 10px' }}>
                                            <div style={{ flex: 3 }}>Group:</div>
                                            {/* <input id="addScoreGroup" onChange={(event) => { this.setState({addScoreGroup: event.target.value}); }}  value={this.state.addScoreGroup} style={{ flex: 7, marginLeft: 10, border: '1px solid lightgray' }} type="text"/> */}
                                            <div style={{ flex: 7, marginLeft: 10, border: '1px solid lightgray' }}>
                                                {
                                                    data.groups && data.groups.length ?
                                                        <select
                                                            id="addScoreGroupEl"
                                                            onChange={(event) => { this.setState({addScoreGroup: event.target.value}); }}
                                                            value={this.state.addScoreGroup}
                                                            style={{ width: '100%' }}
                                                        >
                                                            <option value="">Select</option>
                                                            {
                                                                data.groups.map((value, index) => (
                                                                    <option key={index} value={index}>{value.label}</option>
                                                                ))
                                                            }
                                                        </select>
                                                        :
                                                        null
                                                }
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', padding: '3px 10px' }}>
                                            <div style={{ flex: 3 }}>Value:</div>
                                            <input id="addScoreValueEl" onChange={(event) => { this.setState({addScoreValue: event.target.value}); }}  value={this.state.addScoreValue} style={{ flex: 7, marginLeft: 10, border: '1px solid lightgray' }} type="number"/>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', padding: '3px 10px' }}>
                                            <div style={{ flex: 3 }}>Remark:</div>
                                            <input id="addScoreRemarkEl" onChange={(event) => { this.setState({addScoreRemark: event.target.value}); }}  value={this.state.addScoreRemark} style={{ flex: 7, marginLeft: 10, border: '1px solid lightgray' }} type="text"/>
                                        </div>
                                        <button
                                            style={{ marginTop: '1rem', backgroundColor: 'lightgreen', padding: '0.5rem 1rem', borderRadius: 15, border: '3px solid salmon' }}
                                            onClick={this.addNewEntry}
                                        >Submit</button>
                                    </div>

                                    <hr style={{ margin: '2rem 0' }}/>
                                    <a href='/mission'>任务卡</a>
                                    <hr style={{ margin: '2rem 0' }}/>
                                    <LogTable list={data.groups} />
                                </Section>
                                :
                                <div>
                                    <img height="350" src={require('./../../images/downloading.gif')} alt="downloading"/>
                                </div>
                        }
                    </CenteredSection>
                </div>
            </div>
        );
    }
}

EditPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
    editpage: makeSelectEditPage(),
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

const withReducer = injectReducer({ key: 'editPage', reducer });
const withSaga = injectSaga({ key: 'editPage', saga });

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(EditPage);
