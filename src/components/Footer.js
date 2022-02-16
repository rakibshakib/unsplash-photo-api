import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2>Unsplash Photo Album</h2>
                            
                            <p>+8801234567890</p>
                            <div className="footer-menu">
                                <ul>
                                    <li>
                                        <a href="">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="">Instagram</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright-text">
                                All Right Reserved 2022 &copy; Its.Rakib
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
