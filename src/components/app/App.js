import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage } from '../pages';

const App = () => {
    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;

// import React, { Component } from 'react';
// import styled from 'styled-components';
// import BootstrapTest from '../bootstrapTest/BootstrapTest';
// // import MarvelService from '../../services/MarvelService';

// const EmpItem = styled.div`
//     padding: 20px;
//     margin-bottom: 15px;
//     border-radius: 5px;
//     box-shadow: 5px 5px 10px rgba(0,0,0, .2);
//     a {
//         display: block;
//         margin: 10px 0 10px 0;
//         color: ${props => props.active ? 'orange' : 'black'};
//     }
//     input {
//         display: block;
//         margin-top: 10px;
//     }
// `;

// const Header = styled.h2`
//     font-size: 22px;
// `;

// export const Button = styled.button`
//     display: block;
//     padding: 5px 15px;
//     background-color: gold;
//     border: 1px solid rgba(0,0,0, .2);
//     box-shadow: 5px 5px 10px rgba(0,0,0, .2);
// `;

// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 27,
//             position: ''
//         }
//     }
//     // state = {
//     //     charList: [],
//     //     loading: true,
//     //     error: false,
//     //     newItemLoading: false,
//     //     offset: 210,
//     //     charEnded: false
//     // }
//     // marvelService = new MarvelService();
//     // componentDidMount() {
//     //     this.onRequest();
//     // }

//     // onRequest = (offset) => {
//     //     this.onCharListLoading();
//     //     this.marvelService.getAllCharacters(offset)
//     //         .then(this.onCharListLoaded)
//     //         .catch(this.onError)
//     // }

//     // onCharListLoading = () => {
//     //     this.setState({
//     //         newItemLoading: true
//     //     })
//     // }

//     // onCharListLoaded = (newCharList) => {
//     //     console.log("newCharList", newCharList)
//     //     let ended = false;
//     //     if (newCharList.length < 9) {
//     //         ended = true;
//     //     }

//     //     this.setState(({ offset, charList }) => ({
//     //         charList: [...charList, ...newCharList],
//     //         loading: false,
//     //         newItemLoading: false,
//     //         offset: offset + 9,
//     //         charEnded: ended
//     //     }))
//     // }

//     // onError = () => {
//     //     this.setState({
//     //         error: true,
//     //         loading: false
//     //     })
//     // }
//     nextYear = () => {
//         this.setState(state => ({
//             years: state.years + 1
//         }))
//     }

//     commitInputChanges = (e, color) => {
//         console.log(color);
//         this.setState({
//             position: e.target.value
//         })
//     }

//     render() {
//         const { name, surname, link } = this.props;
//         const { position, years } = this.state;

//         return (
//             <EmpItem active>
//                 <Button onClick={this.nextYear}>+++</Button>
//                 <Header>My name is {name}, surname - {surname},
//                     age - {years},
//                     position - {position}</Header>
//                 <a href={link}>My profile</a>
//                 <form>
//                     <span>Введите должность</span>
//                     <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
//                 </form>
//             </EmpItem>
//         )
//     }
// }

// const Wrapper = styled.div`
//     width: 600px;
//     margin: 80px auto 0 auto;
// `;

// const DynamicGreating = ({ children, ...props }) => {
//     return (
//         <div className={'mb-3 p-3 border border-' + props.color}>
//             {
//                 React.Children.map(children, child => {
//                     return React.cloneElement(child, { className: 'shadow p-3 m-3 border rounded' })
//                 })
//             }
//         </div>
//     )
// }

// const FuncWrapper = ({ children }) => {
//     return (<>
//         {React.Children.map(children, child => {
//             return React.cloneElement(child, { className: 'shadow p-3 m-3 border rouned' })
//         })}
//     </>)
// }
// function App() {
//     // const { charList } = this.state
//     // console.log(charList)
//     return (
//         <Wrapper>
//             <BootstrapTest
//                 left={
//                     <DynamicGreating color={'primary'}>
//                         <h2>This weel was hard</h2>
//                         <h2>Hello world!</h2>
//                     </DynamicGreating>
//                 }
//                 right={
//                     <DynamicGreating color={'primary'}>
//                         <h2>RIGHT!</h2>
//                     </DynamicGreating>
//                 }
//             />
//             <FuncWrapper>

//                 <h1>Privet</h1>
//                 <h2>im child</h2>

//             </FuncWrapper>
//             {/* <div>
//                 {charList.map(item => <h2 key={item.id}>item.name</h2>)}
//                 <button>click</button>
//             </div> */}

//             <WhoAmI name='John' surname="Smith" link="facebook.com" />
//             <WhoAmI name='Alex' surname="Shepard" link="vk.com" />
//         </Wrapper>
//     );
// }

// export default App;
