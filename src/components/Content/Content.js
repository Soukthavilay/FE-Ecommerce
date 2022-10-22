import React from 'react'
import "./Content.css"

function Content() {
    return (
        <div className="container">
            <section className="content-con">
                <div className="content-l">
                    <img src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/05/h1_dog-1.jpg" alt=""/>
                </div>
                <div className="content-r">
                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
            </section>
            <section className="content-con">
                <div className="content-r">
                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
                <div className="content-l">
                    <img src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/05/h3_img3.jpg" alt=""/>
                </div>
            </section>
            <section className="content-con">
                <div className="content-l">
                    <img src="https://demothemedh.b-cdn.net/petpuzzy/wp-content/uploads/2022/05/h1_slide-image.png" alt=""/>
                </div>
                <div className="content-r">
                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Content
