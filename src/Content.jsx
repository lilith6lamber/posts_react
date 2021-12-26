import {Component} from "react";
import Post from "./Post";
import loader from './assets/loader.svg';

class Layout extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({posts: data}))
    }

    render () {
        return (
            <div className='container'>
                <ul className='posts'>
                    {this.state.posts.map((item, i) => <Post title={item.title} body={item.body} key={i}/>)}
                </ul>
            </div>
        )
    }
}

class Content extends Component {

    state = {
        loading: true,
    }

    componentDidMount() {
        setTimeout(() => {this.setState({loading: false})}, 2000)
    }

    render() {
        return !this.state.loading ? <Layout/> : <div className='loader'><img src={loader} alt='loader'/></div>
    }
}

export default Content