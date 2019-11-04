import React from 'react';
import Post from './Post';
import Drawer from './Drawer';
export default class App extends React.Component {

    render() {
        return (
            <div>
            <Drawer/>
            <h1> <i> <p>
            Seja bem-vindo ao nosso site de Noticias!!<br/>
            Monte sua noticia e publique aqui! curiosidades, acontecimentos, piadas, declarações, etc!<br/>
            Seja Criativo!!!
            </p> </i></h1>
            <Post title="Deixe aqui seus comentarios, sugestões e reclamações para o site!!!"/>
            </div>
        );
    }
}