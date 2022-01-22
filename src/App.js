import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import Footer from "./Footer";
import Header from "./Header";
import Media from "./Media";
import MediaCard from "./MediaCard";
import Slides from "./Slides";

const App = () => {
  const [mediaCard, setMediaCard] = useState([]);
  const [media, setMedia] = useState([]);
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      setMovies(snapshot.docs.map((doc) => doc.data()));
    });
  });

  useEffect(() => {
    db.collection("shows").onSnapshot((snapshot) => {
      setShows(snapshot.docs.map((doc) => doc.data()));
    });
  });

  useEffect(() => {
    db.collection("media-card").onSnapshot((snapshot) => {
      setMedia(snapshot.docs.map((doc) => doc.data()));
    });
  });

  console.log(media);

  useEffect(() => {
    db.collection("media").onSnapshot((snapshot) => {
      setMediaCard(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="app">
      {/* <Header /> */}
      <Slides />
      <section class="card-list">
        <span>Specials & Latest Movies</span>
        <h1>hots</h1>
        <br>
        </br>
        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Never forget</h2>
          </header>

          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="avatar.png" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div class="author-name">
              <div class="author-name-prefix">Author</div>
              Jeff Delaney
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
            <a href="#">web-dev</a>
          </div>
        </article>

        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>

          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://api.adorable.io/avatars/172/a.png" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div class="author-name">
              <div class="author-name-prefix">Pirate</div>
              Zheng Zhilong
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>

        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>

          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://api.adorable.io/avatars/172/b.png" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div class="author-name">
              <div class="author-name-prefix">Pirate</div>
              Francis Drake
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>

        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>

          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://api.adorable.io/avatars/172/c.png" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div class="author-name">
              <div class="author-name-prefix">Pirate</div>
              Edward Teach
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>

        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>

          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://api.adorable.io/avatars/172/d.png" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div class="author-name">
              <div class="author-name-prefix">Pirate</div>
              William Kidd
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>

        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>

          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://api.adorable.io/avatars/172/d.png" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div class="author-name">
              <div class="author-name-prefix">Pirate</div>
              William Kidd
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>

        <article class="card">
          <header class="card-header">
            <p>Sep 11th 2020</p>
            <h2>Card Tricks are fun!</h2>
          </header>

          <div class="card-author">
            <a class="author-avatar" href="#">
              <img src="https://api.adorable.io/avatars/172/d.png" />
            </a>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div class="author-name">
              <div class="author-name-prefix">Pirate</div>
              William Kidd
            </div>
          </div>
          <div class="tags">
            <a href="#">html</a>
            <a href="#">css</a>
          </div>
        </article>

        <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="https://api.adorable.io/avatars/172/a.png" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            Zheng Zhilong
          </div>
        </div>
        <div class="tags">
          <a href="#">html</a>
          <a href="#">css</a>
        </div>
      </article>




      <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="https://api.adorable.io/avatars/172/b.png" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            Francis Drake
          </div>
        </div>
        <div class="tags">
          <a href="#">html</a>
          <a href="#">css</a>
        </div>
      </article>

      <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="https://api.adorable.io/avatars/172/c.png" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            Edward Teach
          </div>
        </div>
        <div class="tags">
          <a href="#">html</a>
          <a href="#">css</a>
        </div>
      </article>


      <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="https://api.adorable.io/avatars/172/d.png" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            William Kidd
          </div>
        </div>
        <div class="tags">
          <a href="#">html</a>
          <a href="#">css</a>
        </div>
      </article>

      <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="https://api.adorable.io/avatars/172/d.png" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            William Kidd
          </div>
        </div>
        <div class="tags">
          <a href="#">html</a>
          <a href="#">css</a>
        </div>
      </article>

      <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="https://api.adorable.io/avatars/172/d.png" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            William Kidd
          </div>
        </div>
        <div class="tags">
          <a href="#">html</a>
          <a href="#">css</a>
        </div>
      </article>
      </section>
      <div className="continuewatch">
        {/* <span>Continue Watching</span> */}
      </div>
      <div className="continuewatch">
        <span>Specials & Latest Movies</span>
        <div className="flex-continue">
          {media.map((media) => (
            <Media img={media.img} />
          ))}
        </div>
      </div>
      <div className="continuewatch">
        <span>Shows Recommended For You</span>
        <div className="flex-continue">
          {shows.map((shows) => (
            <Media img={shows.img} />
          ))}
        </div>
      </div>
      <div className="continuewatch">
        <span>Movies Recommended For You</span>
        <div className="flex-continue">
          {movies.map((movies) => (
            <Media img={movies.img} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
