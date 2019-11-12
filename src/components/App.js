import React from 'react';
import Post from './Post';
import Drawer from './Drawer';
export default class App extends React.Component {

    render() {
        return (

            <div>
                <Drawer />
                <div style={{
                    marginLeft:'10px'
                }}>
                    <h1> <i> <p> Minha pagina de criações. <br /></p> </i></h1>
                    <Post title="Deixe aqui seus elogios, sugestões e reclamações para o site!!!" />
                </div>
            </div>
        );
    }
}