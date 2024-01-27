import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion" id="accordionExample">
      {faqs.map((item) => (
        <AccordianItem item={item} key={item.title}></AccordianItem>
      ))}
    </div>
  );
}

function AccordianItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOnClick() {
    setIsOpen((s) => !s);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleOnClick}>
      <p className="number">01</p>
      <p className="title">{item.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{item.text}</div>}
    </div>
  );
}
