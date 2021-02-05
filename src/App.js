import React, {Component} from 'react';
import './App.css';
import User from './components/User';
import Pagination from './components/UI/Pagination';

class App extends Component {
    state = {
        data: [],
        currentPage: 0
    };

    componentDidMount() {
        fetch(`http://society/users?page=${this.state.page}`)
            .then(response => response.json().then(data => this.setState({data, page: data['_meta']['currentPage']})))
            .catch(err => console.log(err));
    }

    handleChangePage = ({selected}) => {
        fetch(`http://society/users?page=${selected+1}`)
            .then(response => response.json().then(data => this.setState({data})))
            .catch(err => console.log(err));
        this.setState({currentPage: selected})
    };

    render() {
        if (this.state.data.length !== 0) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <User
                                data={this.state.data['users']}
                            />
                            {this.state.data['_meta']['totalCount'] > 4
                                ? <Pagination
                                    pageCount='2'
                                    handleChangePage={this.handleChangePage}
                                />
                                : null
                            }
                        </div>
                        <div className='col-lg-3'>

                        </div>
                    </div>
                </div>
            )
        } else return null

    }
}

export default App;