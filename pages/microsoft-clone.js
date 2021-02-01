import styles from 'styles/microsoft-clone.module.css'

export default function MicrosoftClone() {

    return (
       <div className={styles.container}>
           <nav className={styles.mainNav}>
                <img src="/microsoft/logo.png" alt="Microsoft" className={styles.logo} />
                <ul className={styles.mainMenu}>
                    <li><a href="#">Office</a></li>
                    <li><a href="#">Windows</a></li>
                    <li><a href="#">Surface</a></li>
                    <li><a href="#">Xbox</a></li>
                    <li><a href="#">Deals</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
                <ul className={styles.rightMenu}>
                    <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                        </a>
                    </li>
                </ul>
           </nav>
           {/* Showcase */}
           <header className={styles.showcase}>
               <h2>Surface Deals</h2>
               <p>
                   Select Surfaces are on sale now - save while supplies last
               </p>
               <button type="button" className={styles.btn}>
                   <div>
                        Shop Now 
                   </div>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
               </button>
           </header>
            {/* home cards 1 */}
            <section className={styles.homeCards}>
                <div>
                    <img src="/microsoft/card1.png" alt="" />
                    <h3>New Surface Pro 7</h3>
                    <p>
                    See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7 to put her plans into play.
                    </p>
                    <a href="#">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </a>
                </div>
                <div>
                    <img src="/microsoft/card2.png" alt="" />
                    <h3>New Surface Laptop 3</h3>
                    <p>
                    Express yourself powerfully with a thin, light, and elegant design, faster performance, and up to 11.5 hours battery life.
                    </p>
                    <a href="#">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </a>
                </div>
                <div>
                    <img src="/microsoft/card3.png" alt="" />
                    <h3>Save $150 + free controller</h3>
                    <p>
                    Buy an Xbox One X console and double your fun with a free select extra controller. Starting at $349.
                    </p>
                    <a href="#">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </a>
                </div>
                <div>
                    <img src="/microsoft/card4.png" alt="" />
                    <h3>The new Microsoft Edge</h3>
                    <p>
                    Expect more. World class performance, with more privacy, more productivity, and more value.
                    </p>
                    <a href="#">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </a>
                </div>
            </section>
            {/* xbox */}
            <section className={styles.xbox}>
                <div className={styles.content}>
                    <h2>Xbox Game Pass Ultimate</h2>
                    <p>
                    Xbox Game Pass Ultimate Xbox Live Gold and over 100 high-quality console and PC games. Play together with friends and discover your next favorite game.
                    </p>
                    <a href="#" className={styles.btn}>
                        Join Now
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </a>
                </div>
            </section>
            {/* home cards 2 */}
            <section className={styles.homeCards}>
                <div>
                    <img src="/microsoft/card5.png" alt="" />
                    <h3>Microsoft Teams</h3>
                    <p>
                    Unleash the power of your team.
                    </p>
                    <a href="#">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </a>
                </div>
                <div>
                    <img src="/microsoft/card6.jpg" alt="" />
                    <h3>Unlock the power of learning</h3>
                    <p>
                    Get students future-ready with Windows 10 devices. Starting at $219.
                    </p>
                    <a href="#">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </a>
                </div>
                <div>
                    <img src="/microsoft/card7.png" alt="" />
                    <h3>Windows 10 Enterprise</h3>
                    <p>
                    Download the free 90-day evaluation for IT professionals.
                    </p>
                    <a href="#">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </a>
                </div>
                <div>
                    <img src="/microsoft/card4.png" alt="" />
                    <h3>Explore Kubernetes</h3>
                    <p>
                    Learn how Kubernetes works and get started with cloud native app development today.
                    </p>
                    <a href="#">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </a>
                </div>
            </section>

            {/* carbon */}
            <section className={styles.carbon}>
            <div className={styles.content}>
                    <h2>Commiting To Carbon Negative</h2>
                    <p>
                    Microsoft will be carbon negative by 2030 and by 2050 we will remove all carbon the company has emitted since it was founded in 1975
                    </p>
                    <a href="#" className={`${styles.btn} ${styles.btnLight}`}>
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </a>
                </div>
            </section>
       </div>
    );

}