import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div className="contacts">
      <ContactCard
        img="./mr-whiskerson.png"
        alt="Photo of Mr. Whiskerson"
        name="Mr. Whiskerson"
        numIcon="./phone-icon.png"
        numalt="phone icon"
        num="(212) 555-1234"
        mailIcon="./mail-icon.png"
        mailalt="mail icon"
        mail="mr.whiskaz@catnap.meow"
      />
      <ContactCard
        img="./fluffykins.png"
        alt="Photo of Fluffykins"
        name="Fluffykins"
        numIcon="./phone-icon.png"
        numalt="phone icon"
        num="(212) 555-2345"
        mailIcon="./mail-icon.png"
        mailalt="mail icon"
        mail="fluff@me.com"
      />
      <ContactCard
        img="./felix.png"
        alt="Photo of Felix"
        name=" Alhaji Felix"
        numIcon="./phone-icon.png"
        numalt="phone icon"
        num="(212) 555-4567"
        mailIcon="./mail-icon.png"
        mailalt="mail icon"
        mail="thecat@hotmail.com"
      />
      <ContactCard
        img="./pumpkin.png"
        alt="Photo of Pumpkin"
        name="Chief Pumpkin"
        numIcon="./phone-icon.png"
        numalt="phone icon"
        num="(0800) CAT KING"
        mailIcon="./mail-icon.png"
        mailalt="mail icon"
        mail="pumpkin@hotmeow.com"
      />
    </div>
  );
};

export default Contact;
