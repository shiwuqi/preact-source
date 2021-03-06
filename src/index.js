import { h, render, Component, Fragment } from './preact';
import { useState, useEffect } from './hooks';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        return null;
    }

    render() {
        let { value } = this.state;
        return (
            <>
                <h1 className='test'>{this.props.title}</h1>
                <p className='test' id='test2'>{this.props.article}</p>
                <button onClick={() => this.setState({value: ++value})}>Home Click</button>
                <span>{value}</span>
            </>
        )
    }
}

const Hook = () => {
    const [count, setCount] = useState(0);

    const handleSetCount = () => {
        setCount(val => val + 1);
    }

    return (
        <div>
            <button onClick={handleSetCount}>点击</button>
            <span>{count}</span>
        </div>
    )
}

const Chat = () => {
    const [data, setData] = useState(0);

    useEffect(() => {
        console.log('mount');
        return () => {
            console.log('unmount');
        }
    }, [])

    return (
        <span>{data}</span>
    )
}

const App = () => {
    return (
        <div>
            <h1>这是标题</h1>
            <p>这是段落</p>
            <Home title={'蓝莲花'} article={'没有什么能够阻挡 你对自由的向往 穿过幽暗的岁月 也曾感到彷徨 当你低头的瞬间 才发觉脚下的路 心中那自由的世界 如此的清澈高远'} />
            <Hook />
            <Chat />
        </div>
    )
}

render(<App />, document.querySelector('#root'));