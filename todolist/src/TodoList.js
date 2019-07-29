import React, { Component } from 'react';
import store from "./store";
import {connect} from 'react-redux'
import { Layout, Card,Row, Col, Icon, Badge } from 'antd';
import 'antd/dist/antd.css';
const {Header, Footer, Sider, Content,} = Layout;
const { Meta } = Card;


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    render(){
        return (
            <div>
                <Layout>
                    <Header style={{backgroundColor: '#5C8BF4'}}>Header</Header>
                    <Content style={{padding: '20px'}}>
                        <Row type="flex" justify="space-between">
                            <Col span={7}>
                                <Card
                                    bodyStyle={{backgroundColor: '#F5F5F7'}}
                                    hoverable
                                    style={{}}
                                    cover={<img alt="example" src="http://img.zcool.cn/community/0181845834f4eda8012060c8c95113.JPG@1280w_1l_2o_100sh.png" />}
                                >
                                    <Meta
                                        title="Europe Street beat"
                                        description="Urillzing comprehensive Urillzing comprehensive Urillzing comprehensive Urillzing comprehensive "
                                    />
                                </Card>
                                <p style={{padding: '10px 0 0 22px',fontSize: 17, fontWeight: 'bold'}}>zdgfcjjxadfgfhgj</p>
                                <ul>
                                    <li>sadfghasdfg</li>
                                    <li>sadfghasdfg</li>
                                    <li>sadfghasdfg</li>
                                    <li>sadfghasdfg</li>
                                </ul>
                            </Col>
                            <Col span={7} >
                                <Card
                                    bodyStyle={{backgroundColor: '#F5F5F7'}}
                                    hoverable
                                    style={{}}
                                    cover={<img alt="example" src="http://img.zcool.cn/community/0181845834f4eda8012060c8c95113.JPG@1280w_1l_2o_100sh.png" />}
                                >
                                    <Meta
                                        title="ET City Brain"
                                        description="Urillzing comprehensive Urillzing comprehensive Urillzing comprehensive Urillzing comprehensive"
                                    />
                                </Card>
                                <p style={{padding: '10px 0 0 22px',fontSize: 17, fontWeight: 'bold'}}>zdgfcjjxadfgfhgj</p>
                                <ul>
                                    <li>sadfghasdfg</li>
                                    <li>sadfghasdfg</li>
                                    <li>sadfghasdfg</li>
                                    <li>sadfghasdfg</li>
                                </ul>
                            </Col>

                            <Col span={9}>
                                <Card
                                    bodyStyle={{backgroundColor: '#F5F5F7'}}
                                    hoverable
                                    style={{}}
                                    cover={<img alt="example" src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg" />}
                                >
                                    <Meta
                                        title="ET Environment Brain"
                                        description="Alibaba"
                                    />
                                </Card>
                                <p style={{fontSize: 20, fontWeight: 'bold',textAlign: 'center'}}>zdgfcjjxadfgfhgj</p>
                                <Row type="flex" justify="space-around" gutter={16}>
                                    <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
                                        <Col>
                                            <Icon type="database" style={{fontSize: '30px',color: '#20C1DD'}}/>
                                        </Col>
                                    </Badge>

                                    <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
                                        <Col>
                                            <Icon type="radar-chart" style={{fontSize: '30px',color: '#20C1DD'}}/>
                                        </Col>
                                    </Badge>
                                    <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
                                        <Col>
                                            <Icon type="deployment-unit" style={{fontSize: '30px',color: '#20C1DD'}}/>
                                        </Col>
                                    </Badge>
                                    <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
                                        <Col>
                                            <Icon type="alibaba" style={{fontSize: '30px',color: '#20C1DD'}}/>
                                        </Col>
                                    </Badge>
                                </Row>

                                {/*<Icon type="radar-chart" style={{fontSize: '30px',color: '#20C1DD'}}/>*/}
                                {/*<Icon type="deployment-unit" style={{fontSize: '30px',color: '#20C1DD'}}/>*/}
                                {/*<Icon type="alibaba" style={{fontSize: '30px',color: '#20C1DD'}}/>*/}
                            </Col>
                        </Row>
                    </Content>
                    <Footer>
                        <Row type="flex" >
                            <Col>
                                <div style={{backgroundColor: '#36AEE3',borderRadius: 3,padding: 3}}>
                                    <Icon type="alipay" style={{fontSize: '30px',color: '#fff'}}/>
                                </div>
                            </Col>
                            <Col>
                                <p style={{fontSize: 20, fontWeight: 'bold',padding: 0,margin: '-8px 0px 0px 0px'}}>支付宝</p>
                                <p style={{fontSize: 16,padding: 0,margin: 0,}}>ALIPAY</p>
                            </Col>
                            <Col>
                                <span style={{marginLeft: 20}}>
                                    Alipay ,Urillzing comprehensive Urillzing comprehensive Urillzing comprehensive Urillzing comprehensive,Urillzing comprehensive Urillzing comprehensive Urillzing comprehensive Urillzing comprehensive,Urillzing
                                </span>
                            </Col>


                        </Row>
                    </Footer>
                </Layout>

                {/*<div>*/}
                    {/*<input value={this.props.inputValue} onChange={this.props.changeInputValue}/>*/}
                    {/*<button onClick={this.props.onSubmit}>提交</button>*/}
                {/*</div>*/}

                {/*<ul>*/}
                    {/*{this.props.list.map((item,index) => {*/}
                        {/*return <li key={index} onClick={() => {this.props.deleteItem(index)}}>{item}</li>*/}
                    {/*})}*/}
                {/*</ul>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'chang_input_value',
                value: e.target.value
            };
            dispatch(action)
        },
        onSubmit() {
            const action = {
                type: 'on_submit',
            };
            dispatch(action)
        },
        deleteItem(index) {
            const action = {
                type: 'delete_item',
                index: index
            }
            dispatch(action)
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
// export default TodoList;