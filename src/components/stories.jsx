export default Stories;


const stories = [
  {
    name: "Your story",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vFA6drg7xuRjgekD22uhHtQVO1HEZEup3bIoIlCZBA&s=10"
  },
  {
    name: "alina",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FINTGOZu7OraLPGJh-nTNVOUswsCv0AE4VS9jO9h6g&s=10"
  },
  {
    name: "sara",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fvDmvJmewtdcK3nNfNGUgeuA1ZrOAtcMeibmHxzThQ&s=10"
  },
  {
    name: "hira",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZaqEMQqPHJnk4n928ejA1g2DKfT240TrTkGd-6hUeqQ&s=10"
  },
  {
    name: "ayesha",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukzcHfJJM0RUIHL7rfCZqS99AFe-SrAIsyHx3BtpT6w&s=10"
  }
];

function Stories() {
  return (
    <div className="stories">

      {stories.map((story, index) => (
        <div className="story" key={index}>

          <div className="story-ring">
            <img src={story.image} alt={story.name} />
          </div>

          <p>{story.name}</p>

        </div>
      ))}

    </div>
  );
}


