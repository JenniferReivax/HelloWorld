import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Comment from './Comment';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))
export default class Post extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleSubmit(e) {
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommentText }
            ]
        })

        this.setState({ newCommentText: '' })
        e.preventDefault()
    }
    handleTextChange(e) {
        this.setState({ newCommentText: e.target.value })
    }


    render() {
        return (
            <div>
                {this.props.title}
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.newCommentText}
                        onChange={this.handleTextChange}
                    /> <br/><br/>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={useStyles}
                        //onClick={() => this.setState()}
                    >
                        Comentar</Button>
                </form>
                {this.state.comments.map((comments, index) => {
                    return <Comment key={index} text={comments.text} />
                })}
            </div>
        );
    }
}