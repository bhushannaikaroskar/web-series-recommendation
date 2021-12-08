import { useState } from "react";
import "./styles.css";

var webSeriesDictionary = {
  anime: [
    {
      name: "Demon Slayer: Kimetsu no Yaiba",
      starRatings: "4.5/5",
      imageURL:
        "https://i1.wp.com/mangasfy.com/wp-content/uploads/2020/08/img2020060415473794432300.jpg",
      description:
        "Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister. "
    },
    {
      name: "Death Note",
      starRatings: "3.5/5",
      imageURL:
        "https://resizing.flixster.com/tPJrjv5bDIX_qZiUGV5u3hWkTPI=/300x300/v2/https://flxt.tmsimg.com/assets/p225665_b_v9_ab.jpg",
      description:
        "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it."
    },
    {
      name: "Psycho-Pass",
      starRatings: "4/5",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c9ceb5d0106942d18cd07f1efc91a1da33c076fa9855e0ba6af3b0ab946df19f._RI_V_TTW_.jpg",
      description:
        "Believing in humanity and order, policewoman Akane Tsunemori obeys the ruling, computerized, precognitive Sibyl System. But when she faces a criminal mastermind who can elude this 'perfect' system, she questions both Sibyl and herself."
    }
  ],
  drama: [
    {
      name: "Kota Factory",
      starRatings: "4.5/5",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO2FYfWx39SrV1VSecyJdLVC4Q-KkIBkPVQ&usqp=CAU",
      description:
        "Dedicated to Shrimati SL Loney ji, Shri Irodov ji and Maanniya HC Verma ji, 'Kota Factory' is TVF's latest original. India's first 'Black and White' show highlights the problems present day IIT-JEE aspirants face in their day-to-day lives."
    },
    {
      name: "Sacred Games",
      starRatings: "4/5",
      imageURL:
        "https://static.wikia.nocookie.net/netflix/images/6/6a/Sacred_Games.jpg",
      description:
        "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm."
    }
  ],
  thriller: [
    {
      name: "Ghoul",
      starRatings: "4/5",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy22ly8x3lTVF4fR_lBDBMovNXDgiUoQ1x0pvw7r2CS04mibBuQ9vpcg_vFrjPj4SmioU&usqp=CAU",
      description:
        "In a totalitarian near-future India, a mysterious prisoner is sent to a remote military interrogation center where he turns the tables on his captors by exposing their most shameful secrets and unleashing a demon from Arabic folklore."
    },
    {
      name: "Money Heist",
      starRatings: "4.5/5",
      imageURL:
        "https://i0.wp.com/khromo.com/wp-content/uploads/2020/04/money-heist.jpg?fit=648%2C567&ssl=1",
      description:
        "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain."
    }
  ]
};

var webSeriesList = Object.keys(webSeriesDictionary);

export default function App() {
  const [genreList, setGenreList] = useState(webSeriesDictionary["anime"]);

  function buttonClickhandler(genre) {
    const list = webSeriesDictionary[genre];
    setGenreList(list);
    // console.log(list);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="movie-icon">
          🎬
        </span>
        Web Series
      </h1>
      <small> Checkout my favourite web series list that i have watched</small>
      <div>
        {webSeriesList.map((item) => {
          return (
            <button key={item} onClick={() => buttonClickhandler(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        <ul>
          {genreList.map((itemObject) => {
            return (
              <li key={itemObject.name}>
                <div className="block-inline-image">
                  <img src={itemObject.imageURL} alt="not found"></img>
                </div>
                <div className="block-inline-content">
                  <h2>{itemObject.name}</h2>

                  <small className="color-grey">
                    Star ratings: {itemObject.starRatings}
                  </small>
                </div>
                <p>{itemObject.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
