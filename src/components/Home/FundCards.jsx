import FundCard from "./FundCard";
import {
  funds_1,
  funds_2,
  funds_3,
  funds_4,
  funds_5,
  funds_6,
  funds_7,
  funds_8,
} from "../../assets/home";

const cards = [
  {
    id: 1,
    price: "₹50,000",
    date: "14.03.2023",
    topic: "Andaman and Nicobar Islands",
    image: funds_1,
    circleText: "Discover your match",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et venenatis pharetra enim est lectus."
  },
  {
    id: 2,
    price: "₹50,000",
    date: "14.03.2023",
    topic:
      "Shimla",
    image: funds_2,
    circleText: "LOGIN TO MATCH",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et venenatis pharetra enim est lectus."
  },
  {
    id: 3,
    price: "₹50,000",
    date: "14.03.2023",
    topic:
      "Meghalaya",
    image: funds_3,
    circleText: "DISCOVER HOW MUCH YOU MATCH",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et venenatis pharetra enim est lectus."
  },
  {
    id: 4,
    price: "₹50,000",
    date: "14.03.2023",
    topic: "Varanasi",
    image: funds_4,
    circleText: "DISCOVER HOW MUCH YOU MATCH",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et venenatis pharetra enim est lectus."
  },
  {
    id: 5,
    price: "₹50,000",
    date: "14.03.2023",
    topic: "New Delhi",
    image: funds_5,
    circleText: "85% match",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et venenatis pharetra enim est lectus."
  },
  {
    id: 6,
    price: "₹50,000",
    date: "14.03.2023",
    topic: "Goa",
    image: funds_6,
    circleText: "95% match",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et venenatis pharetra enim est lectus."
  },
  {
    id: 7,
    price: "₹50,000",
    date: "14.03.2023",
    topic:
      "Jammu & Kashmir",
    image: funds_7,
    circleText: "91% match",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et venenatis pharetra enim est lectus."
  },
  {
    id: 8,
    price: "₹50,000",
    date: "14.03.2023",
    topic: "Mumbai",
    image: funds_8,
    circleText: "90% match",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et venenatis pharetra enim est lectus."
  },
];

export default function FundCards() {
  return (
    <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
      {cards.map((card) => (
        <FundCard key={card.id} card={card} />
      ))}
    </article>
  );
}
