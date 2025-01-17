import React from 'react';
import '../Components.css'

const Welcome = () => {
    return (
        <div>
            <section className="hero2 is-medium">
                <div className="hero-body has-text-centered">
                    <h1 className="title is-2">Welcome, Please Signup or Login </h1>
                </div>
            </section>

            <div className="container is-max-desktop">
                <section className="featured">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <h2 className="subtitle">Items you can find:</h2>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://makinglemonadeblog.com/wp-content/uploads/2015/06/popular-yard-sale-garage-sale-outdoor-furniture.jpg" />
                                </figure>
                                <h2 className="subtitle">Outdoor Furniture</h2>
                            </article>
                        </div>
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://makinglemonadeblog.com/wp-content/uploads/2015/06/popular-yard-sale-garage-sale-lawn-equipment.jpg" />
                                </figure>
                                <h2 className="subtitle">Lawn Equipment</h2>
                            </article>
                        </div>
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://makinglemonadeblog.com/wp-content/uploads/2015/06/best-items-to-sell-yard-garage-sales-kids-toys.jpg" />
                                </figure>
                                <h2 className="subtitle">Children's Toys</h2>
                            </article>
                        </div>
                        <div className="column is-3">
                            <article>
                                <figure className="image is-5by3">
                                    <img src="https://makinglemonadeblog.com/wp-content/uploads/2015/06/popular-yard-sale-garage-sale-costume-jewelry.jpg" />
                                </figure>
                                <h2 className="subtitle">Jewelry</h2>
                                <br />
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Welcome;