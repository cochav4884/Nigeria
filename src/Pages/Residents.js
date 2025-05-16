import React, { useState } from "react";
import "../Styles/Residents.css";

const residentsData = [
  {
    name: "Israel Alex Obiorah",
    hangout: "I do love to hangout at the gym where we have outdoor games.",
    favoriteMovie: {
      title: "Think Like a Man",
      link: "https://www.vudu.com/content/movies/details/Think-Like-a-Man/324379",
      imgSrc: "img/Think Like A Man.jpg",
      imgAlt: "Think Like A Man",
    },
    passion: "My biggest passion is to explore the world.",
    favoriteDish: {
      description: "My favorite Nigerian dish is Vegetables and Yam Flour.",
      link: "https://www.radianthealthmag.com/healthy-eating/9-nigerian-swallows-every-palate/",
      imgSrc: "img/veggie & yam flour.jpg",
      imgAlt: "Vegetables and Yam Flour",
    },
    toughestDecision:
      "The toughest decision I had to make was to school within the neighboring country outside of Nigeria, which is Benin Republic. It was tough because schools there are underrated due to their academic standard, but I can boldly say I achieved a lot more in terms of language, exposure, and other experiences. I am proud to be a BSC Holder in International Relations with a second-class upper division.",
    inspiration:
      "People close to me inspire me with revelational knowledge on how to discover my potential and share it with the world, helping others believe in themselves and achieve their goals.",
    cheersUp:
      "The one thing I do that cheers up the people around me is my lifestyle.",
    unusualExperience:
      "One sad experience I encountered was a heartbreaking moment when I watched a woman I knew on fire due to a gas leakage. People around tried to help, but unfortunately, she did not survive.",
    surveyFeeling:
      "I think this platform is very innovative, and I'm grateful to be a part of this journey.",
    hbgChange: "(Answer located on HBG Church Page)",
  },
  {
    name: "Aresal",
    hangout: "I love to hangout at the Rhapsody Club.",
    favoriteMovie: {
      title: "Example Movie",
      link: "#",
      imgSrc: "img/example.jpg",
      imgAlt: "Example Movie",
    },
    passion: "Example passion text.",
    favoriteDish: {
      description: "My favorite Nigerian dish is Pounded Yam and Black Soup.",
      link: "https://goldpeakfoods.com/product/pounded-yam-and-black-soup-with-turkey/",
      imgSrc: "img/pounded yam and black soup.jpg",
      imgAlt: "Pounded Yam and Black Soup",
    },
    toughestDecision: "Example toughest decision.",
    inspiration: "Example inspiration.",
    cheersUp: "Example cheers up.",
    unusualExperience: "Example unusual experience.",
    surveyFeeling: "Example survey feeling.",
    hbgChange: "(Answer located on HBG Church Page)",
  },
  {
    name: "Richie Osborne",
    hangout:
      "I'm more of an indoor guy...love to hangout in my house. If I step out, I love to hangout at FADOL, a chilling spot nice and comfy.",
    favoriteMovie: {
      title: 'My favorite book is "Awaken the Giant Within" by Tony Robbins.',
      link: "https://www.audible.com/ep/title/?asin=B002V1OHGE&source_code=GO1GBSH09091690EI&device=d&cvosrc=ppc.google.awaken%20the%20giant%20within&cvo_campaign=250472289&cvo_crid=260134382328&Matchtype=e&ds_rl=1262685&ds_rl=1263561&ds_rl=1260658&gclid=Cj0KCQjw4PKTBhD8ARIsAHChzRJ0NaO-5rvJVO428L410R0FR-ynum0IcQf5Fmmjn3kpnQ6t4JwzZsYaAgonEALw_wcB&gclsrc=aw.ds",
      imgSrc: "img/Awakening book.jpg",
      imgAlt: "Awaken the Giant Within",
    },
    passion: "My biggest passion is music. I want to make good music heard around the world.",
    favoriteDish: {
      description: "My favorite Nigerian dish is Spaghetti.",
      link: "https://www.pulse.ng/lifestyle/food-travel/nigerian-recipes-how-to-make-nigerian-spaghetti-like-a-pro/1bkhhhr",
      imgSrc: "img/spaghetti.jpg",
      imgAlt: "spaghetti",
    },
    toughestDecision:
      "The toughest decision I had to make was serving God. Serving God in truth and with all my heart was a very big decision for me to make. We all say we serve God, but is it in truth? This big decision had made a huge impact in my life.",
    inspiration:
      "People around me inspire me through their lifestyle and words of encouragement, support, and so much love they show me. I so much appreciate that.",
    cheersUp:
      "The one thing I do that cheers people up around me is to sing and just be myself. I am a fun person to hangout with.",
    unusualExperience:
      "Okay, I was really little, but I could have sworn I saw a ghost. It was late night around 8:00pm, there about, I came out of my house wanting to go get a snack. Because it was dark outside, I was in a hurry to go get what I needed. Immediately, exiting my house I felt a presence and got chilled and goosebumps all over my body. When I looked to the left, it was really dark, but I can swear I saw a human figure. But this one was looking so old and haggard with a long staff. There was no face and I was just dumb-founded. I couldn't move for a few seconds. My heart was racing and I quickly went back inside my house. I could not even talk to anyone or explain what I had just seen. That was the most scary moment of my life.",
    surveyFeeling:
      "This survey is great because a lot of people want to be heard and I think this is a great medium for it.",
    hbgChange: "(Answer located on HBG Church Page)",
  },

  {
    name: "Oriah Salome",
    hangout: "I do love to hangout at Sahara Chicken.",
    favoriteMovie: {
      title: 'My favorite movie is "Queen of the South."',
      link: "https://www.watchnow.com/show/queen-of-the-south?utm_source=Google&utm_medium=Search&t_source=64&utm_campaign=2566&gad_source=5&gclid=EAIaIQobChMIqIWu7tjCiwMVNdfCBB2UbCCDEAAYASAAEgJHx_D_BwE",
      imgSrc: "img/Queen movie.jpg",
      imgAlt: "Queen of the South",
    },
    passion:
      "My biggest passion is to own one of the biggest franchise stores in Nigeria.",
    favoriteDish: {
      description: "My favorite Nigerian dish is Spaghetti Bolognese.",
      link: "https://allure.vanguardngr.com/2021/11/how-to-make-nigerian-spaghetti-bolognese-in-10-easy-steps/",
      imgSrc: "img/oriah.jpg",
      imgAlt: "spaghetti bolognese",
    },
    toughestDecision:
      "The toughest decision I have had to make was to stop relying on whosoever for help and to do things on my own even though I had to struggle for it.",
    inspiration:
      "Well, am being inspired by the way people around me push harder despite the difficulties being faced in Nigeria. For instance, if a bad incident occurs, am being inspired by the way people joke around to eliminate bad feelings of being depressed.",
    cheersUp:
      'The one thing I do that cheers people up around me is I give positive vibes even when it seems everything is crumbling.',
    unusualExperience:
      "Well, I had a shocking experience during the End SARS protest in my neighborhood. Instead of them being in a panic, they were drumming, dancing, eating, and drinking while still blocking the road. I was just so shocked and confused by this behavior.",
    surveyFeeling:
      "Wow, I feel so excited sharing some of my experience here and I wish this survey could go around to every Nigerian.",
    hbgChange: "(Answer located on HBG Church Page)",
  },
];

const Residents = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="residents-container">
      <h1>Residents</h1>
      {residentsData.map((resident, idx) => (
        <div className="accordion-item" key={resident.name}>
          <div
            className={`accordion-header ${
              activeIndex === idx ? "active" : ""
            }`}
            onClick={() => toggleAccordion(idx)}
          >
            {resident.name}
          </div>
          <div
            className={`accordion-body ${activeIndex === idx ? "active" : ""}`}
          >
            <p>
              <strong>Where do you like to hangout in town?</strong>
              <br />
              {resident.hangout}
            </p>

            {resident.favoriteMovie && (
              <p>
                <strong>What is your favorite book or movie?</strong>
                <br />
                {resident.favoriteMovie.title}
                <br />
                <a
                  href={resident.favoriteMovie.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={resident.favoriteMovie.imgSrc}
                    alt={resident.favoriteMovie.imgAlt}
                  />
                </a>
              </p>
            )}

            <p>
              <strong>What is your biggest passion?</strong>
              <br />
              {resident.passion}
            </p>

            <p>
              <strong>What is your favorite Nigerian dish?</strong>
              <br />
              {resident.favoriteDish?.description}
              <br />
              {resident.favoriteDish && (
                <a
                  href={resident.favoriteDish.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={resident.favoriteDish.imgSrc}
                    alt={resident.favoriteDish.imgAlt}
                  />
                </a>
              )}
            </p>

            <p>
              <strong>
                What is the toughest decision you have had to make that made the
                biggest impact in your life?
              </strong>
              <br />
              {resident.toughestDecision}
            </p>

            <p>
              <strong>How do the people around you inspire you?</strong>
              <br />
              {resident.inspiration}
            </p>

            <p>
              <strong>
                What is the one thing you do that cheers up people around you?
              </strong>
              <br />
              {resident.cheersUp}
            </p>

            <p>
              <strong>What is one unusual experience you have had?</strong>
              <br />
              {resident.unusualExperience}
            </p>

            <p>
              <strong>How do you feel about this survey so far?</strong>
              <br />
              {resident.surveyFeeling}
            </p>

            <p>{resident.hbgChange}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Residents;
