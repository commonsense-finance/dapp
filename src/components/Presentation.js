import React, { Fragment } from "react";
import H1 from "./H1";
import H2 from "./H2";
import P from "./P";
import Section from "./Section";
import Button from "./Button";
import Card from "./Card";
import Footer from "./Footer";
import { useTheme } from "../store/theme";
import presentationCards from "../assets/structure/presentationCards.json";
import indexFunds from "../assets/structure/indexFunds.json";
import roadmap from "../assets/structure/roadmap.json";
import Appear from "./Appear";

const typeformUrl = "https://ilzunxk6buh.typeform.com/to/vsX0wzkJ";

export default () => {
  const [{ mode }] = useTheme();
  const onClick = () => {
    window.open(typeformUrl);
  }
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <Section className="relative w-full mt-4 md:mt-12">
          <div className="flex">
            <Appear>
              <H1 className="text-4xl md:text-6xl text-cadet dark:text-white font-secondary">
                We're building
                <br></br>
                the 1st
                <br></br>
                <span className="text-gold dark:text-orange">
                  decentralized index
                </span>
                <br></br>
                fund manager.
              </H1>
            </Appear>
          </div>
          <Appear delay={300}>
            <div className="flex justify-end mt-6">
              <H2 className="max-w-xl text-xl font-light text-right md:text-3xl font-secondary dark:text-white text-cadet">
                Helping individual investors to access the same returns as
                highly qualified and technical investors with a pinch of{" "}
                <span className="font-bold">common sense.</span>
              </H2>
            </div>
          </Appear>
          <Appear delay={0}>
            <div className="flex justify-center mt-24">
              <Button onClick={onClick} variant="highlight">JOIN THE PRIVATE BETA</Button>
            </div>
          </Appear>
        </Section>
        <Section className="mt-6">
          <div className="flex justify-center">
            <Appear delay={0}>
              <P className="italic text-center text-cadet dark:text-white">
                “Don't look for the needle in the haystack. Just buy the
                haystack!”
                <br />
                <span className="not-italic font-bold">
                  John C. Bogle, The Little Book of Common Sense Investing.
                </span>
              </P>
            </Appear>
          </div>
        </Section>
        <Section className="w-full mt-8 mb-24">
          <div className="flex justify-start mb-4">
            <Appear>
              <H2 className="text-3xl font-bold text-cadet dark:text-white">
                Our value proposition
              </H2>
            </Appear>
          </div>
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-4 md:px-12 md:mt-12">
            {presentationCards
              .filter((_, index) => index < 2)
              .map((item, index) => (
                <div
                  className={`flex self-center h-full justify-self-center col-span-2`}
                  key={item.title}
                >
                  <Appear delay={300 * index}>
                    <Card title={item.title} icon={item.icon}>
                      {item.text}
                    </Card>
                  </Appear>
                </div>
              ))}
          </div>
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-3 md:px-12 md:mt-12">
            {presentationCards
              .filter((_, index, self) => index < self.length - 2 && index > 2)
              .map((item, index) => (
                <div
                  className={`flex self-center h-full justify-self-center`}
                  key={item.title}
                >
                  <Appear delay={300 * index}>
                    <Card title={item.title} icon={item.icon}>
                      {item.text}
                    </Card>
                  </Appear>
                </div>
              ))}
          </div>
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-4 md:px-12 md:mt-12">
            {presentationCards
              .filter((_, index, self) => index > self.length - 3)
              .map((item, index) => (
                <div
                  className={`flex self-center h-full justify-self-center col-span-2`}
                  key={item.title}
                >
                  <Appear delay={300 * index}>
                    <Card title={item.title} icon={item.icon}>
                      {item.text}
                    </Card>
                  </Appear>
                </div>
              ))}
          </div>
          <Appear>
            <div className="flex justify-center mt-24" delay={300}>
              <Button onClick={onClick} variant="outline">JOIN THE PRIVATE BETA</Button>
            </div>
          </Appear>
        </Section>
        <Section className="grid w-full md:mb-24 md:grid-cols-2 md:gap-12">
          <Appear>
            <Card title="Our index founds">
              {indexFunds.map((item) => (
                <Fragment key={"funds" + item}>
                  <H2 className="p-1 text-center text-cadet dark:text-white tracking-brand font-secondary">
                    {item}
                  </H2>
                  <hr className="text-cadet"></hr>
                </Fragment>
              ))}
            </Card>
          </Appear>
          <Appear delay={300}>
            <Card title="Roadmap">
              <div className="grid md:grid-cols-2">
                {roadmap.map((item, index) => (
                  <div
                    className={`${index % 2 ? "" : "font-bold"}`}
                    key={"roadmap" + item}
                  >
                    <Fragment>
                      <H2 className="p-1 text-center text-cadet dark:text-white tracking-brand font-secondary">
                        {item}
                      </H2>
                    </Fragment>
                    <hr className="text-lightgray dark:text-cadet"></hr>
                  </div>
                ))}
              </div>
            </Card>
          </Appear>
          <div className="flex justify-center col-span-2 md:mt-16">
            <Appear delay={300}>
              <Button onClick={onClick} variant="highlight">JOIN THE PRIVATE BETA</Button>
            </Appear>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};
