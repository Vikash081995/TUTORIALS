import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "l34554",
      label: "Can i use React on a project ?",
      content: "You can use react "
    },
    { id: "M34554", label: "can i use js ", content: "yes you can " },
    {
      id: "N75757",
      label: "can i use nextjs",
      content: "yes "
    }
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
