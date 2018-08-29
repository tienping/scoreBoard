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
        addScoreGroup: null,
        addScoreValue: 0,
    }

    componentWillMount() {
        const _this = this;
        function updateData(snapshot) {
            _this.setState({ data: snapshot.val() });
        }
        dataRef.on('value', function (snapshot) {
            if (snapshot.exists()) {
                updateData(snapshot);
            }
        });
    }

    addNewEntry = (value) => {
        if (!this.state.addScoreValue || !this.state.addScoreGroup || !this.state.addScoreRemark) {
            return null;
        }

        this.props.dispatch(addEntry({
            groups: this.state.data.groups,
            addScoreRemark: this.state.addScoreRemark,
            addScoreGroup: this.state.addScoreGroup,
            addScoreValue: this.state.addScoreValue,
            index: this.state.data && this.state.data.logs && this.state.data.logs.length || 0
        }));
        this.setState({ addScoreRemark: '' });
        this.setState({ addScoreGroup: null });
        this.setState({ addScoreValue: 0 });

        addScoreGroup.selectedIndex = 0

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
                                                data.groups.map((value, index) => (
                                                    <MyTableCell className="groupScoreItem" key={index}>{value.data[0]}</MyTableCell>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <hr style={{ margin: '2rem 0' }}/>

                                    <div style={{ margin: 'auto', width: '70%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', padding: '3px 10px' }}>
                                            <div style={{ flex: 3 }}>Remark:</div>
                                            <input id="addScoreRemark" onChange={(event) => { this.setState({addScoreRemark: event.target.value}); }}  value={this.state.addScoreRemark} style={{ flex: 7, marginLeft: 10, border: '1px solid lightgray' }} type="text"/>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', padding: '3px 10px' }}>
                                            <div style={{ flex: 3 }}>Group:</div>
                                            {/* <input id="addScoreGroup" onChange={(event) => { this.setState({addScoreGroup: event.target.value}); }}  value={this.state.addScoreGroup} style={{ flex: 7, marginLeft: 10, border: '1px solid lightgray' }} type="text"/> */}
                                            <div style={{ flex: 7, marginLeft: 10, border: '1px solid lightgray' }}>
                                                <select id="addScoreGroup" onChange={(event) => { this.setState({addScoreGroup: event.target.value}); }} value={this.state.addScoreGroup} style={{ width: '100%' }}>
                                                    <option value="">Select</option>
                                                    {
                                                        data.groups.map((value, index) => (
                                                            <option key={index} value={index}>{value.label}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', padding: '3px 10px' }}>
                                            <div style={{ flex: 3 }}>Value:</div>
                                            <input id="addScoreValue" onChange={(event) => { this.setState({addScoreValue: event.target.value}); }}  value={this.state.addScoreValue} style={{ flex: 7, marginLeft: 10, border: '1px solid lightgray' }} type="number"/>
                                        </div>
                                        <button
                                            style={{ marginTop: '1rem', backgroundColor: 'lightgreen', padding: '0.5rem 1rem', borderRadius: 15, border: '3px solid salmon' }}
                                            onClick={this.addNewEntry}
                                        >Submit</button>
                                    </div>

                                    <hr style={{ margin: '2rem 0' }}/>
                                    <div className="logTable">
                                        <h3>Records</h3>
                                        {
                                            data && data.logs ?
                                                data.logs.map((value, index) => (
                                                    <div className="logItem" key={index}>
                                                        <span>{index + 1}</span>
                                                        <span className="message">{value.message}</span>
                                                        <span className="group">{value.group}</span>
                                                        <span className="value">{value.value}</span>
                                                    </div>
                                                ))
                                            :
                                            <div>
                                                No Item Found
                                            </div>
                                        }
                                    </div>
                                </Section>
                                :
                                <div>
                                    <img height="350" src={require('./../../images/downloading.gif')} />
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
