## Description:

This website gathers information from an API. The information provided is every character and episode from the TV show ‘Rick & Morty’. This was done using React and CSS. It is my second project for the General Assembly Software Immersive Course and my first time working with someone else on coding.

## Deployment link

https://rick-and-morty-api-bababoi.netlify.app/list

## Getting Started/Code Installation

1. Download the code
2. Navigate to the code in the console
3. Type ‘NPM install’
4. Type ‘NPM start’
5. The website should appear on the browser.

## Timeframe & Working Team (Solo/Pair/Group)

The project was done in a pair. Joel Sahiti and Alex Thomas.
It was done in 2 and a half days.

## Technologies used:

- Visual Studio Code (Code Editor I used)
- HTML
- JavaScript
- CSS
- React JS
- SCSS

## Brief:

- To build an app that must fulfill the below requirement:
- Consume a public API – this could be anything but it must make sense for your project.
- Have several components - At least one classical and one functional.
- The app can have a router - with several "pages", this is up to your discretion and if it makes sense for your project.
- I nclude wireframes - that you designed before building the app.
- Be deployed online and accessible to the public.

## Planning:

We both made rough sketches of what the page would look like and then took the best ideas from each one.

We were able to do some pseudo code on the features that we thought would be the most useful. For example, the ability to click on a card and see the status of specific characters.

The most important thing to us was deciding on who was coding what part. We decided to make a google doc and split it in half, then write what I will be doing on the left and what Alex will be doing on the right. I would be working on the home page, navbar, connecting the page to the API and make it possible to change pages (we did not know the ability to change pages was needed until later in the project)

Every time we would need to merge an update to a project, we would always communicate what we changed and when we changed it before doing so over slack or in a zoom call.

Made a wire frame
Wrote pseudo code
Began coding in the order shown by the wireframe
Bug fixes

![image](https://i.imgur.com/HJ67D88.png)

## Build/Code Process

The first thing Alex did was create the ‘app.js’, ‘main.css’ and ‘index.html’ files.
I wrote code for the navbar by installing react-router-dom and imported the ‘Link’ attribute to take the user to a specific URL when clicked.

```javascript
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/list" className="navbar-item">
            Characters List
          </Link>
          <Link to="/episodes" className="navbar-item">
            Episodes List
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

The next step was the home page. It was made from a few lines of HTML with ‘classnames’ to help with future SCSS stylings.

```javascript
const Home = () => (
  <section className="hero is-fullheight-with-navbar is-success">
    <div className="hero-body">
      <div className="container">
        <p className="title is-1 has-text-centered has-text-black"></p>
      </div>
    </div>
  </section>
);

export default Home;
```

The code snipits shows more code than I had at this stage because the image is of the final code.

When the information from the API was first coded to show on the page, we ran into a problem where only a fraction of the information was showing. We found out that the information from the API came with different pages. We both were looking for solutions and a tutor was able to help us by having a ‘useEffect’ function to display the information depending on what page we are currently in.

```javascript
import { getAllCharacters } from '../lib/api';
import { useEffect, useState } from 'react';
import CharactersCard from './CharactersCard';

const CharactersList = () => {
  const [characters, setCharacters] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllCharacters(page)
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.error(err));
  }, [page]);

  if (characters === null) {
    return <p>Loading...</p>;
  }

  const incrementPage = () => {
    if (page >= 42) {
      return (page = 42);
    }
    setPage(page + 1);
  };
  const decrementPage = () => {
    if (page <= 1) {
      return (page = 1);
    }
    setPage(page - 1);
  };
```

Alex then wrote code for the character bio, character cards, episodes list and episodes card. (In that order). We then made sure it all worked by testing the code on the local hosts pages.

```javascript
import { getAllEpisodes } from '../lib/api';
import { useEffect, useState } from 'react';
import EpisodesCard from './EpisodesCard';

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllEpisodes(page)
      .then((res) => setEpisodes(res.data.results))
      .catch((err) => console.error(err));
  }, [page]);

  if (episodes === null) {
    return <p>Loading...</p>;
  }

  const incrementPage = () => {
    if (page >= 3) {
      return (page = 3);
    }
    setPage(page + 1);
  };
  const decrementPage = () => {
    if (page <= 1) {
      return (page = 1);
    }
    setPage(page - 1);
  };

```

The next step was to add styles.
I focused on the home page and the arrows that allowed the pages to be changed. I decided to create an images folder to help with the styling but found it much easier to use links of existing images when styling the arrow buttons. The portal images behind the arrows are taken from Google images links.

For the navbar there was no image available online that suited the look I was going for so I edited one I found online. I used an image editing software called GIMP and used that to crop the image to fit the navbar. While I styled the navbar and the page changing buttons Alex styled the home page, character bio, character cards, episodes list and episodes.

We then started bug fixing. An example of a bug that was fixed is the page number going beyond the actual number of pages. This was fixed by using an ‘if’ statement.

## Challenges:

A challenge I faced was making the page changing function. During previous practice with APIs there was never a need to change pages but with the Rick and Morty API page changing was needed. I needed help from the internet and tutors to get it working.

When merging work, we experienced many conflicts. Although we did communicate changes, we sometimes accidentally merged code that would conflict. It did take up a lot of time but did not hinder our ability to work as a team.

## Win:

A win was the fact I was able to find a solution to a problem I never encountered before. I am referring to the page changing feature. After I tried different routes without success, I asked for help.

We would constantly help each other with coding problems and show respect when mistakes were made. By doing this both of us were motivated to work together and finish the project to the best of our ability.

## Key learnings:

Do not hesitate to ask for help when an issue you do not know how to overcome presents itself.
The internet is a great resource to help you overcome many problems and learning how to properly search for specific issues can be a big help.

Merge code on your own device before doing it on Github. This way if there are conflicts it can easily be fixed and not complicate things on Github.

I need to be mindful of possible setbacks and give myself more time than I think I need in case of setbacks.

## Bugs:

- When the page number reaches double digits the arrows to switch pages move but not the portal image behind them.

- If I had more time, I would try making the arrow and portal images be one whole image.

- The arrow and portal images will look like they are moving at the same time.

- If I had more time, I would make the arrow positions absolute so it would not move.

## Future improvements:

- Some future improvements I would like to make include adding a feature where you are not sent to page one when you are done looking at a character and go back to the index.

- Another improvement would be the option to choose between the character list and episode list on the home page and not just the navbar. This will help the home page have more of a purpose
