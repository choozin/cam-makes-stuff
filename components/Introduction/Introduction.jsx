import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BottomButtonArea = ({ children, endTour }) => {
  return (
    <motion.div>
      <motion.div
        id="bottom_button_area"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {children}
      </motion.div>
      <motion.div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button onClick={endTour}>End Tour</button>
      </motion.div>
    </motion.div>
  );
};

const Section = ({ children, btns }) => {
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
        height: "100%",
      }}
    >
      <div>{children}</div>
      <div>{btns}</div>
    </motion.div>
  );
};

const Introduction = ({ isIntroductionOpen, setIsIntroductionOpen }) => {
  const [chapter, setChapter] = useState(-1);
  const [section, setSection] = useState(-1);
  const [subSection, setSubSection] = useState(-1);

  const cookiesDetectedAndAccepted = true;

  useEffect(() => {
    isIntroductionOpen && cookiesDetectedAndAccepted && setChapter(0);
    isIntroductionOpen && cookiesDetectedAndAccepted && setSection(0);
    isIntroductionOpen && cookiesDetectedAndAccepted && setSubSection(1);
  }, [isIntroductionOpen]);

  const changeChapter = (newChapter) => {
    newChapter === 0 && setSection(0);
    newChapter === 1 && setSection(1);
    newChapter === 2 && setSection(2);
    newChapter === 5 && setSection(3);
    newChapter === 7 && setSection(4);

    const sectionChapters = [0, 1, 2, 5, 7];

    if (newChapter > chapter) {
      setSubSection(subSection + 1);
      sectionChapters.map((sectionChapter) => {
        newChapter === sectionChapter && setSubSection(1);
        setChapter(newChapter);
      });
    } else if (newChapter < chapter) {
      setSubSection(1);
      sectionChapters.map((sectionChapter, index) => {
        sectionChapter <= newChapter && setSection(index);
        sectionChapter <= newChapter && setChapter(sectionChapter);
      });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: "100",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        visibility: !isIntroductionOpen && "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: "95%",
          maxWidth: "600px",
          minHeight: "32rem", // this number represents the number of lines on the most content-filled section to keep the bottom buttons in a consistent position
          maxHeight: "90%",
          maxHeight: "800px",
          padding: "2rem",
          background: "#EEE",
          color: "#333",
          border: "solid 0.25rem #CCC",
          borderRadius: "0.5rem",
          textAlign: "center",
          fontSize: "1rem",
          fontFamily: "Arial",
        }}
      >
        {section === 0 && (
          <Section
            btns={
              <BottomButtonArea endTour={() => setIsIntroductionOpen(false)}>
                <button onClick={() => changeChapter(chapter + 1)}>
                  Proceed WITH Cookies
                </button>
                <button onClick={() => changeChapter(chapter + 1)}>
                  Proceed WITHOUT Cookies
                </button>
              </BottomButtonArea>
            }
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              I see it's your first time here...
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              To begin, please take this quick tour of my website. You can quit
              at any time, but it's only going to take a minute or two so why
              not stick around?
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 18 }}
            >
              If you click "Proceed with Cookies", your computer will remember
              you've been here before and you won't be prompted to take this
              tour the next time you visit. Cookies may also be saved as you
              interact with some of my work examples, but rest assured that no
              personal information is being saved or shared with anyone.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 18 }}
            >
              You're free to proceed without cookies too, but this tour will be
              recommended to you on arrival every time you visit.
            </motion.p>
          </Section>
        )}
        {section === 1 && (
          <Section
            btns={
              <BottomButtonArea endTour={() => setIsIntroductionOpen(false)}>
                <button onClick={() => changeChapter(chapter + 1)}>Next</button>
              </BottomButtonArea>
            }
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Welcome to Cam's Cosmic Code
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Thank you for visiting!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              I'm Cam, a Web Developer from Canada who specializes in digital
              products for small and medium-sized businesses.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              This website is a showcase of some of my skills and creative
              projects, intended to inspire businesses and organizations who are
              looking to:
            </motion.p>
            <ul style={{ textAlign: "left", margin: "0 auto" }}>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.2 }}
              >
                improve workflow efficiency
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                update existing digital infrastructure, or
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.8 }}
              >
                make a unique and lasting impression on their webpage/app users.
              </motion.li>
            </ul>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.4 }}
            >
              Following this quick tour you'll be ready to{" "}
              <span style={{ fontStyle: "oblique" }}>explore the "cosmos"</span>{" "}
              of this website. Why the space theme, you might ask? Because I
              love astronomy. Stars, planets, Uranus... the whole sha-bang. It's
              important to have fun in your work.
            </motion.p>
          </Section>
        )}
        {section === 2 && (
          <Section
            btns={
              <BottomButtonArea endTour={() => setIsIntroductionOpen(false)}>
                <button onClick={() => changeChapter(chapter - 1)}>
                  Previous
                </button>
                <button onClick={() => changeChapter(chapter + 1)}>Next</button>
              </BottomButtonArea>
            }
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Using the Web Can Be Fun!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Traditional web design often feels robotic and uninspired.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              Whether we're filling in tedious forms or sifting through monotone
              web pages for information, many of us find our online work to be
              needlessly time-consuming and tiresome.
            </motion.p>
            {subSection >= 2 && (
              <>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 0 }}
                  style={{ fontSize: "1.25rem", fontWeight: "bold" }}
                >
                  But it doesn't HAVE to be this way
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    .
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                  >
                    .
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3 }}
                  >
                    .
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 4 }}
                  >
                    .
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 6 }}
                  >
                    .
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 8 }}
                  >
                    .
                  </motion.span>
                </motion.p>
              </>
            )}
            {subSection >= 3 && (
              <>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0 }}
                >
                  By utilizing intuitive, logical, and assistive design
                  strategies it's possible to make regular boring excersises
                  like paperwork or data combing into something more enjoyable
                  and less prone to human error. Imagine calculating a quote for
                  a client on an app that not only expedites the process but
                  also gives you helpful tips on upselling or improving the
                  client's experience. What if you had a website that didn't
                  simply provide your customers with information - but actually
                  made them excited to do business with you?
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 10 }}
                  transition={{ duration: 1, delay: 3 }}
                >
                  Click "Next" if you'd like to learn more.
                </motion.p>
              </>
            )}
          </Section>
        )}
        {section === 3 && (
          <Section
            btns={
              <BottomButtonArea endTour={() => setIsIntroductionOpen(false)}>
                <button onClick={() => changeChapter(chapter - 1)}>
                  Previous
                </button>
                <button onClick={() => changeChapter(chapter + 1)}>Next</button>
              </BottomButtonArea>
            }
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Simple, but Smart.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              In many use-cases it makes sense to keep things as simple as
              possible. A basic form allowing your sales team to quickly jot
              down client contact information doesn't need to look fancy - but
              it should help to ensure the information is correct and complete.
              For example:
              <ul>
                <li>
                  Does the postal/zip code match the address? <span style={{ color: '#888' }}>Let the form
                  automatically verify the data in real-time.</span>
                </li>
              </ul>
              <ul>
                <li>
                  Is the form needlessly long to scroll through due to the
                  presence of fields that only apply to specific client
                  use-cases? <span style={{ color: '#888' }}>Make the form automatically determine which fields
                  should appear based on the data already entered into the form,
                  on the fly.</span>
                </li>
              </ul>
              <ul>
                <li>
                  Has this client's information been entered by a different
                  sales rep before? <span style={{ color: '#888' }}>The form can automatically connect with your
                  existing client database to compare data and make
                  recommendations accordingly.</span>
                </li>
              </ul>
              <ul>
                <li>
                  Are there any additional specific information that might be
                  useful to collect based on the other information entered on
                  the form? <span style={{ color: '#888' }}></span>Why not let the form tell your sales if the client
                  lives in a neighbourhood where a specific upsell has been
                  particularly successful?
                </li>
              </ul>
            </motion.p>
            {subSection >= 2 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
              >
                By utilizing forms that incorporate intelligent feedback and
                form field generation,{" "}
                <span style={{ fontWeight: "bold" }}>
                  information gathering and data entry
                </span>{" "}
                processes can be simplified and made fool-proof. Less stress
                wasted time for clients, for your team, and for management. It's
                a win-win-win!
              </motion.p>
            )}
          </Section>
        )}
        {section === 4 && (
          <Section
            btns={
              <BottomButtonArea endTour={() => setIsIntroductionOpen(false)}>
                <button onClick={() => changeChapter(chapter - 1)}>
                  Previous
                </button>
                <button onClick={() => changeChapter(chapter + 1)}>Next</button>
              </BottomButtonArea>
            }
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Dressed to Impress
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              In the digital age, where online presence is key, first
              impressions can make or break a business. Think about it - when
              was the last time you visited a website that truly stood out from
              the crowd?
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              Most websites tend to blend together, making it hard for visitors
              to differentiate one from another. But imagine if your website
              could be the exception - a site that not only leaves a lasting
              impression but also makes visitors eager to return.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              Transforming a good website into a great one doesn't have to be
              complicated. By incorporating vibrant textures, engaging graphics,
              or interactive elements, you can create an experience that goes
              beyond just information sharing. These simple additions show your
              visitors that you care about their experience, setting you apart
              from the competition.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              Make your website a memorable destination that visitors look
              forward to exploring. Let's turn your vision into a digital
              masterpiece that leaves a lasting impact.
            </motion.p>
          </Section>
        )}
        {section === 5 && (
          <Section
            btns={
              <BottomButtonArea endTour={() => setIsIntroductionOpen(false)}>
                <button onClick={() => changeChapter(chapter - 1)}>
                  Previous
                </button>
                <button onClick={() => changeChapter(chapter + 1)}>Next</button>
              </BottomButtonArea>
            }
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Exploring the Cosmos
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              That's it - my pitch to you. I hope I've helped you see how taking
              the digital side of your business a bit farther can make a big
              difference.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              To navigate THIS website you simply flip to the area that
              interests you the most. Each planet represents a different area of
              the website, and you can flip from one planet to another by
              clicking the big yellow arrow buttons on the bottom of the main
              menu screen, or by swiping left/right if you're using a smart
              phone.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              You'll often find the technical terminology used on this website
              to be 'glowing'. If you click on a glowing word I'll be right here
              to help clarify the term for you or provide further information.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              Of course, if you require further or more detailed information you
              can always contact me directly using the contact options outlined
              in the Contact area of the site. I look forward to hearing from
              you! Thanks again for visiting.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              Sincerely, <br />
              Cam
            </motion.p>
          </Section>
        )}
      </motion.div>
    </div>
  );
};

export default Introduction;
