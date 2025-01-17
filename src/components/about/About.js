import React from 'react';
import '../Components.css'

const About = () => {
    return (
        <div>
            <section className="">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title" id="title">What is Mercer?</p>
                        <p id="subtitle">Mercer is a crowdsourced online marketplace powered by everyday entrepreneurs (like you!).
                            From the latest and greatest in high-end electronics, to rare and unexpected collectibles and antiques,
                            you’re only a few clicks away from discovering yet another amazing deal. Mercer was built for our vendors -
                            making it fun, fast, and easy to quickly list and trade whatever they'd like, in bulk.
                            We believe that as we continue to improve our vendor store management system,
                            we’re providing an even more amazing customer experience as a result.
                            <br></br>Have a look around, and see for yourself! <br></br>
                            Est. 2022 </p>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="columns features">
                    <div className="column is-4">
                        <div className="card is-shady">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img
                                        src="https://i.imgur.com/hynSC4T.jpeg"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    <h4>Create your own Sale</h4>
                                    <p>
                                        Let people know about your sale.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="card is-shady">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img
                                        src="https://i.imgur.com/EXYTxtA.jpeg"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    <h4>Find Sales</h4>
                                    <p>
                                        Find sales from Vendors nationwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-4 modal-button" data-target="modal-image">
                        <div className="card is-shady">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img
                                        src="https://i.imgur.com/40qLwOp.png"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    <h4>Buy, Sell, and Trade Items.</h4>
                                    <p>
                                        Thousands of items are availabe near you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* <footer>
                <section className="section">
                    <div className="container">
                        <div className="columns is-multiline">
                            <div className="column is-one-third">
                                <article className="notification media has-background-white">
                                    <figure className="media-left">
                                        <span className="icon">
                                            <i className="has-text-warning fa fa-columns fa-lg"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">Quality</h1>
                                            <p className="is-size-5 subtitle">
                                                All made in <strong>China</strong>, ironically enough
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="column is-one-third">
                                <article className="notification has-background-white media">
                                    <figure className="media-left">
                                        <span className="icon has-text-info">
                                            <i className="fa fa-lg fa-wpforms"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">Beautiful</h1>
                                            <p className="is-size-5 subtitle">
                                                Appealing to your very large <strong>Eyes</strong>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="column is-one-third">
                                <article className="notification has-background-white media">
                                    <figure className="media-left">
                                        <span className="icon has-text-danger">
                                            <i className="fa fa-lg fa-cubes"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">Colorful</h1>
                                            <p className="is-size-5 subtitle">
                                                With every possible color in existence for hair
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="column is-one-third">
                                <article className="notification has-background-white media">
                                    <figure className="media-left">
                                        <span className="icon has-text-grey">
                                            <i className="fa fa-lg fa-cogs"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">Popular</h1>
                                            <p className="is-size-5 subtitle">
                                                Get the most <strong>Popular</strong> designs today
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="column is-one-third">
                                <article className="notification has-background-white media">
                                    <figure className="media-left">
                                        <span className="icon has-text-primary">
                                            <i className="fa fa-lg fa-superpowers"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">Addictive</h1>
                                            <p className="is-size-5 subtitle">
                                                Keep <strong>Buying</strong>, please
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="column is-one-third">
                                <article className="notification has-background-white media">
                                    <figure className="media-left">
                                        <span className="icon has-text-danger">
                                            <i className="fa fa-lg fa-cube"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">More to Come</h1>
                                            <p className="is-size-5 subtitle">
                                                Stay happy little <strong>Consumer</strong>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </footer> */}

        </div>
    );
}

export default About;