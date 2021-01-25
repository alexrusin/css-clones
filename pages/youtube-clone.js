import styles from "styles/youtube-clone.module.css";

export default function YouTubeClone() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <a href="#">
          <img
            src="/youtube_logo.png"
            alt="YouTube logo"
            className={styles.youtubeLogo}
          />
        </a>
        <form className={styles.searchBar}>
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="submit" className={styles.searchBtn}>
            <img src="/magnify.svg" />
          </button>
        </form>
        <div className={styles.menuIcons}>
            <a href="#">
                <img src="/video-plus.svg" alt="Upload Video" />
            </a>
            <a href="#">
                <img src="/apps.svg" alt="Apps" />
            </a>
            <a href="#">
                <img src="/bell.svg" alt="Notifications" />
            </a>
            <a href="#">
                <img className={styles.menuChannelIcon} src="https://unsplash.it/36/36?gravity=center" alt="Your channel" />
            </a>
        </div>
      </header>
      <div className={styles.categories}>
        <section className={styles.categorySection}>
          <button className={`${styles.category} ${styles.active}`}>All</button>
          <button className={styles.category}>Category 123456</button>
          <button className={styles.category}>Category</button>
          <button className={styles.category}>Category</button>
          <button className={styles.category}>Category</button>
          <button className={styles.category}>Category</button>
          <button className={styles.category}>Category</button>
          <button className={styles.category}>Category</button>
          <button className={styles.category}>Category</button>
          <button className={styles.category}>Category</button>
        </section>
      </div>
      <div className={styles.videos}>
        <section className={styles.videoSection}>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className={styles.videoSection}>
          <h2 className={styles.videoSectionTitle}>
            Special Selection
            <button className={styles.videoSectionTitleClose}>&times;</button>
          </h2>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className={styles.videoSection}>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.videoContainer}>
            <a href="#" className={styles.thumbnail} dataduration="12:24">
              <img
                className={styles.thumbnailImage}
                src="https://unsplash.it/250/150?gravity=center"
              />
            </a>
            <div className={styles.videoBottomSection}>
              <a href="#">
                <img
                  className={styles.channelIcon}
                  src="https://unsplash.it/36/36?gravity=center"
                />
              </a>
              <div className={styles.videoDetails}>
                <a href="#" className={styles.videoTitle}>
                  Video Title
                </a>
                <a href="#" className={styles.videoChannelName}>
                  Video Channel Name
                </a>
                <div className={styles.videoMetadata}>
                  <span>12k views</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
