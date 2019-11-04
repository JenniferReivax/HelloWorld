import React from 'react';
import Post from './Post';
import Drawer from './Drawer';
export default class App extends React.Component {

    render() {
        return (
            <div>
            <h1><Drawer/></h1>
            <Post title="Aprendendo ReactJS com a RocketSeat"/>
            <Post title="ReactJS é dms"/>
            <Post title="Em breve mais vídeos"/>
            </div>
        );
    }
}