import axios from 'axios'
import React, { Component } from 'react'

export default class LatestPhotos extends Component {
    state = {
        photos: [],
        page: 1,
        loading: true,
    }
    componentDidMount() {
        axios.get(`https://api.unsplash.com/photos/?client_id=yT9pUL8u8blNNC46oc9mGqkgvrlIFJHq4n8IIHdU92M&per_page=16&page=${this.state.page}`).then(
            res => this.setState(prevState => ({
                photos: res.data,
                loading: false,
                page: prevState.page + 1
            }))
        )

    }
    loadNextPageHandeler = () => {

        axios.get(`https://api.unsplash.com/photos/?client_id=yT9pUL8u8blNNC46oc9mGqkgvrlIFJHq4n8IIHdU92M&per_page=16&page=${this.state.page}`).then(
            res => this.setState(prevState => ({
                photos: res.data,
                loading: false,
                page: prevState.page + 1
            }))
        )
    }
    render() {
        console.log(this.state.photos);
        if (this.state?.loading === true) {
            return <h3 className='text-cenere my-5'>Photo Loading...</h3>
        }
        return <>
            {
                this.state?.photos?.map(photo => <div className='col-lg-3' key={photo?.id}>
                    <a href="" className="d-block">
                        <div className="photo-wrapper">

                            <img src={photo?.urls?.small} alt="" />
                        </div>
                        <h5>{photo?.description || 'Photos'}</h5>
                        <p className="cat-name">By: {`${photo?.user?.first_name} ${photo?.user?.last_name || ''}`}</p>
                    </a>
                </div>)
            }
            <div className="col-lg-12">
                <div className="load-more-btn text-center">
                    <button onClick={this.loadNextPageHandeler} className='btn btn-small btn-primary my-4'>Load Page {this.state?.page}</button>
                </div>
            </div>

        </>

    }
}
