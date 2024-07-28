// if section contains buttons midway through the content, create a new section to continue the content below the buttons
// but set sectionIsNewDropdown to false to prevent a title and dropdown functionality. Next section will continue under original dropdown
const content = [
    {
        title: 'A Brief History of Cam',
        content: [
            "Cam first appeared in the late 20th century in a medium-sized city in Southern Ontario, Canada. The child of two parents, Cam grew to have many varied interests and passions both in school and beyond. Always a scholar and experience-seeker, Cam has worked in and with a variety of industries and hopes to continue building on his diverse experiences. If you'd like to know more about Cam, Cam invites you to continue reading.",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'Cam In His Youth',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "His teenage years were filled with the typical trials and tribulations faced by any eager-eyed adolecent, but also featured many proud accomplishments. Cam's high school years began with a joint-business venture in which he and a friend built a video game review website known as PGN. As luck should have it, one particular review Cam wrote found its way on to the front page of a game's official website, which drove PGN's userbase up by several orders of magnitude. Thereafter, PGN had gained enough legitimacy to entice game publishers to send free physical copies of new games to Cam and other writers on the website for review - a dream for any young gamer.",
                    "In his later high school years, Cam - an avid aviation enthusiest - found himself doing a semester of co-op at a local flight school. Soon after beginning the internship, he began taking flight lessons himself. Showing natural skill and an abundance of passion, Cam was by far the youngest person in his class and would go on to attain his Private Pilot's Permit before his Graduated Driving Permit, meaning Cam was flying planes alone before he was able to drive alone - another childhood dream checked off.",

                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Early Adulthood',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Cam went on to attend a mid-rate university in a terribly unexciting city a few hours away from his hometown. Cam picked this school because his good friends were attending it. That's right, Cam was an idiot. But Cam didn't know what he wanted to do with his life, but he liked clouds and stuff, so he jumped in to a degree in meteorology. These were Cam's confusing years, as everything interested him - but nothing enough so to make a career path out of. He switched his major four times, and eventually graduated with an urban planning degree. After graduation, naturally he went on to work for a major multi-national military contractor where he worked in a department responsible for procuring weapons systems and situational awareness equipment for combat vehicles. Cam hated working 9-5 in an office, and after a corporate contract loss led to a fortuitous layoff, Cam found himself again asking what he really wanted to do for the rest of his life.",
                    "After considerable introspection, Cam would eventually come to the realization that what he loves to do is create things. Reflecting on his years running PGN, Cam decided that a skill he'd always wanted to develop was coding, and so he enrolled in a local college in his hometown and began studying.",

                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'First Steps...',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "By the end of his college program Cam had gained a solid foundational understanding of programming, though the extent of his skills were limited to vanilla JavaScript/HTML/CSS & WordPress development. Cam would take a job with a local firm after graduation, and found himself in the role of 'SEO Specialist' and 'Company Representative', in which he would attend meetings with other businesses in an effort to rout out more sales. While interesting for a time, this was not what Cam had dreamed of doing.",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'Next Steps...',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Cam next turned his attention to freelancing. He knew that if he wanted to create new and interesting products through code he would need to upgrade his skills and venture out on his own. Over several years, Cam built up his coding abilities through online courses and careful study of documentation, and taking freelance jobs wherever he could find them. Finally, after years of skill-building and side-hustles Cam would find himself with a skillset that would enable him to make the products he'd always wanted to - products like this very website, in which customization & fun can really stand out.",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: '...Into The Present.',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "During the COVID years, Cam & his partner did some soul searching and decided that what was really missing from life was travel. They knew they loved road trips, camping and adventure, and came up with a plan to make a life full of that. 'By golly, there's a lot of world out there to see, and we need to see it!', they said (in an olde timey accent, obviously).  So they moved out of their apartment, sold a bunch of their stuff and bought a truck camper, a Starlink internet satellite dish, and built a solar battery setup to power their whole life. Cam & his partner now live on the road for most of the year, visiting as many national parks & major cities as they possibly can, finding interesting and varied work opportunities along the way.",
                    "And so Cam is living off-grid and on-the-road, trying to see and do as much as possible, freelancing all along the way. Right now, Cam is sitting in his camper, probably by a beautiful beach, or aside an epic hiking trail, or adjacent a famous food truck in an exotic locale. He's still trying to live the dream, and he needs gas money to get to his next destination. And for the record, Cam also feels quite strange to have written this in the third person. Cam doesn't normally do this. Cam sorry.",
                    "Anywhoo, what are you waiting for? Why not help Cam keep the adventure rolling by hiring him to create the unique digital product your business or organization needs? Cam thanks you in advance!",
                ],
                sectionButtons: [
                    {
                        buttonText: 'More About Cam',
                        buttonOnClick: () => { alert('Okay, thats enough. Why dont you ask Cam to be your friend already?') },
                        buttonSwitchToContentTitle: null,
                        buttonURL: null,
                        buttonColor: null,
                        buttonBorderColor: null,
                        buttonStyle: 'button',
                        buttonImagePaths: null,
                    }
                ]
            }
        ]
    },
    {
        title: 'Contact Cam',
        content: [
            "",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'What is ?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Question',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Question',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'Question?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: [
                    {
                        buttonText: 'More About Pricing',
                        buttonOnClick: null,
                        buttonSwitchToContentTitle: null,
                        buttonURL: null,
                        buttonColor: null,
                        buttonBorderColor: null,
                        buttonStyle: 'button',
                        buttonImagePaths: null,
                    }
                ]
            }
        ]
    },
    {
        title: 'Interest & Hobbies',
        content: [
            "",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'What is ?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Question',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Question',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'Question?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: [
                    {
                        buttonText: 'More About Pricing',
                        buttonOnClick: null,
                        buttonSwitchToContentTitle: null,
                        buttonURL: null,
                        buttonColor: null,
                        buttonBorderColor: null,
                        buttonStyle: 'button',
                        buttonImagePaths: null,
                    }
                ]
            }
        ]
    },
    {
        title: 'Life/Work Experience',
        content: [
            "",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'What is ?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Question',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Question',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'Question?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: [
                    {
                        buttonText: 'More About Pricing',
                        buttonOnClick: null,
                        buttonSwitchToContentTitle: null,
                        buttonURL: null,
                        buttonColor: null,
                        buttonBorderColor: null,
                        buttonStyle: 'button',
                        buttonImagePaths: null,
                    }
                ]
            }
        ]
    },
    {
        title: 'Calculators',
        content: [
            "Custom calculators are powerful tools tailored to meet the specific needs of a business, providing quick and accurate solutions for various calculations on the fly. These calculators are designed to streamline complex, time-consuming tasks, making them essential for professionals across different industries. Whether it's a financial firm needing an investment calculator, a real estate agency requiring a mortgage calculator, or an e-commerce platform implementing a shipping cost calculator, custom calculators serve as invaluable assets.",
            "For instance, a real estate agency can greatly benefit from a mortgage calculator that allows prospective clients to estimate monthly mortgage payments based on property value, interest rates, and loan terms. Such a tool simplifies the decision-making process for potential homebuyers. Similarly, an e-commerce platform can integrate a shipping cost calculator that computes shipping fees based on package dimensions, weight, and destination. This not only provides transparency for customers but also helps the business manage shipping costs effectively. Custom calculators are versatile, adaptable, and can be fine-tuned to address the unique demands of a business, offering both convenience and efficiency in a world where accurate calculations are often critical for success.",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'How long does it take and how much will it cost?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "The answers to these questions depend entirely on the project. A simple calculator that takes in a few variables and spits them out with no fancy gimics or graphics can be made in an hour.",
                    "On the other end of the scale, calculators that take in many variables, require the integration of external data, or display data in a graphical format may take several days to develop."
                ],
                sectionButtons: [
                    {
                        buttonText: 'More About Pricing',
                        buttonOnClick: null,
                        buttonSwitchToContentTitle: null,
                        buttonURL: null,
                        buttonColor: null,
                        buttonBorderColor: null,
                        buttonStyle: 'button',
                        buttonImagePaths: null,
                    }
                ],
            },
            {
                sectionTitle: 'Will it work on a mobile device?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Calculators can be designed to fit any or all sizes of screens. However, generally speaking, less emphasis on aesthetics will result in a quicker and cheaper development process.",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'Will it work on my website?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Your custom calculator can be integrated into nearly any type of website, so long as the server allows JavaScript.",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'Can we customize the look and feel of the calculator to match our branding?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Of course!",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'How will the data be stored and accessed?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Your custom calculator can be integrated directly on to your website, or served independantly from an external location. There are many options for serving your calculator, and I'll be able to offer different options depending on your requirements.",
                    "The data itself can be stored in a database, sent via email, or kept in temporary files and deleted entirely after use if that's what you need."
                ],
                sectionButtons: null
            }
        ]
    },
    {
        title: 'Quote Generators',
        content: [
            "A Quote Generator is a highly efficient and user-friendly tool that simplifies the process of providing price estimates to customers. It's essentially a web-based application where clients or employees can input their project details, such as scope, requirements, and any specific parameters relevant to the cost calculation.",
            "Upon receiving the inputs, the quote generator utilizes a set of predefined algorithms and pricing models to calculate a customized cost estimate for the requested services or products. These algorithms take into account various factors, including labor, materials, additional features, and any other variables that influence the pricing. The result is an accurate, real-time quote that the business can present to the client. This not only streamlines the quoting process but also enhances transparency and customer satisfaction, as clients receive prompt and tailored cost estimates.",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'Rapid, Accurate Quotations',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Real-Time Precision: Quote Generators deliver swift, error-free quotes, ensuring your clients receive accurate estimates promptly.",
                    "Enhanced Customer Experience: Impress your clients with a seamless, quick response to their inquiries, setting the tone for a positive customer journey.",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Customization for Client-Centric Solutions',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Tailored Offerings: Craft bespoke quotes that cater to the unique needs of each client. Quote Generators empower you to provide personalized solutions that align perfectly with client expectations.",
                    "Flexibility in Pricing Models: Experiment with different pricing models and adjust quotes on-the-fly to accommodate various client requirements.",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'How much does it cost and how long will it take?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "The cost and time for a project like this can be anywhere between a day and a month, depending on the complexity of the generator and aesthetic requirements. In most cases, the majority of the development time goes in to establishing the correct algorithms. If you already have algorithms established for your quotes then the development time can be significantly decreased.",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Can this be placed on my website?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "As long as your website supports JavaScript, yes.",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Can the Quote Generator be styled to match my brand?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Absolutely it can.",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'How is the data collected and stored?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "This depends on the requirements of your project. In most cases, the data will either be stored in a database or sent to the client and business via email.",
                ],
                sectionButtons: null
            }
        ]
    },
    {
        title: 'Surveys & Questionnaires',
        content: [
            "In the dynamic landscape of modern business, staying ahead requires more than just keeping up with the trends—it demands a deep understanding of your team's dynamics, client needs, and market perceptions. Enter the game-changer: Surveys & Questionnaires.",
            "Whether looking inward to optimize operations or outward to meet client expectations, the insights gained from thoughtful feedback collection will set the stage for growth and success. I specialize in developing customized survey solutions tailored to your unique needs. Let's embark on a journey of continuous improvement together.",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'Empower Your Team',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Internal Culture: Unearth the pulse of your organization by gauging employee satisfaction, identifying potential areas of improvement, and fostering a positive workplace culture.",
                    "Productivity Boost: Streamline workflows, identify bottlenecks, and enhance collaboration based on insights gathered from your team.",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Client-Centric Innovation',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Tailored Offerings: Understand your clients' needs, preferences, and pain points, allowing you to tailor products or services that align seamlessly with their expectations.",
                    "Building Trust: Demonstrating a commitment to client feedback builds trust and loyalty, creating long-lasting relationships that are essential for sustainable business growth.",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Strategic Decision-Making',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Data-Driven Insights: Base your decisions on real data rather than assumptions. Surveys & Questionnaires provide the raw material for informed, strategic decision-making at every level of your organization.",
                    "Adaptability: Stay agile by adapting to market trends and client expectations swiftly. Regular feedback allows you to make proactive adjustments to your business strategy.",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'Continuous Improvement',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Iterative Development: Harness the power of continuous improvement cycles. Regularly collected feedback provides a roadmap for incremental enhancements, ensuring your business remains at the forefront of innovation.",
                    "Proactive Problem Solving: Anticipate and address issues before they become major hurdles. Surveys & Questionnaires are your proactive tools for problem identification and resolution.",
                ],
            },
            {
                sectionTitle: 'Employee Engagement and Satisfaction',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Empower Your Workforce: Engage employees in decision-making processes and make them feel heard, resulting in improved morale, motivation, and overall job satisfaction.",
                    "Retention Booster: A satisfied workforce is a loyal one. Increase employee retention rates by actively responding to their concerns and fostering a positive workplace environment.",
                ],
                sectionButtons: [
                    {
                        buttonText: 'More About Pricing',
                        buttonOnClick: null,
                        buttonSwitchToContentTitle: null,
                        buttonURL: null,
                        buttonColor: null,
                        buttonBorderColor: null,
                        buttonStyle: 'button',
                        buttonImagePaths: null,
                    }
                ]
            }
        ]
    },
    {
        title: 'Data Processing & Charting',
        content: [
            "In the era of data-driven decision-making, the ability to process and visualize information is a game-changer. Enter the catalyst for transformation—Data Processing & Charting.",
        ],
        sections: [
            {
                sectionTitle: 'Comprehensive Reporting',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Real-Time Reporting: Generate real-time reports that provide a snapshot of your business performance.",
                    "Customizable Dashboards: Tailor dashboards to display the key metrics and KPIs crucial for your business objectives.",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Strategic Planning and Forecasting',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Predictive Analysis: Leverage historical data to make informed predictions and forecast future trends.",
                    "Scenario Planning: Model different scenarios to anticipate potential challenges and plan for contingencies.",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Streamline Business Operations',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Automated Data Processing: Save time and resources with automated data processing, ensuring accuracy and efficiency.",
                    "Operational Efficiency: Identify bottlenecks, streamline workflows, and optimize processes with insights derived from processed data."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Unveil Actionable Insights',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Data Interpretation: Transform raw data into meaningful insights that drive strategic decision-making.",
                    "Visual Storytelling: Convey complex information effortlessly through visually appealing charts and graphs.",
                ],
                sectionButtons: [
                    {
                        buttonText: 'More About Pricing',
                        buttonOnClick: null,
                        buttonSwitchToContentTitle: null,
                        buttonURL: null,
                        buttonColor: null,
                        buttonBorderColor: null,
                        buttonStyle: 'button',
                        buttonImagePaths: null,
                    }
                ]
            }
        ]
    },
    {
        title: 'Landing Pages',
        content: [
            "Landing pages are standalone web pages that are designed to capture a visitor's attention and convert them into a lead or customer. They are typically used as part of a marketing campaign and are designed to be highly targeted, relevant and focused on a specific action.",
            "In the digital realm, your first impression matters. Offer a digital gateway to your brand, event or product with a landing page today!",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'How Can a Landing Page Help Me?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "One of the key benefits of landing pages is that they can help brands and campaigns attract attention by providing a clear and compelling call-to-action. This can be in the form of a sign-up form, a purchase button, or a contact form. By providing a clear and direct path for the visitor to take, landing pages can increase the likelihood of conversion.",
                    "Being memorable is also an important factor in making a landing page effective. A memorable landing page can stand out from the competition and leave a lasting impression on the visitor. This can be achieved through a unique and compelling design, engaging copy, and a clear and consistent message.",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'Are Landing Pages Expensive?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Landing pages are a relatively inexpensive way for an organization to target their core goals. Due to their simple nature, they do not require complicated server architecture or extensive coding.",
                    "Of course, the cost of a landing page will reflect the complexity involved in creating it. A simple informational page with a link button or a sign-up sheet will be very inexpensive, while features such as animations or a interactive feedback components will make the price higher.",
                ],
                sectionButtons: [
                    {
                        buttonText: 'More About Pricing',
                        buttonOnClick: null,
                        buttonSwitchToContentTitle: null,
                        buttonURL: 'pricing',
                        buttonColor: null,
                        buttonBorderColor: null,
                        buttonStyle: 'button',
                        buttonImagePaths: null,
                    }
                ]
            },
            {
                sectionTitle: 'What Are Some Use Cases?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Some common uses for landing pages are...",
                    "Lead generation: Landing pages are often used to generate leads for businesses by offering incentives in exchange for user information, such as an email address or phone number. For example, a landing page might offer a free trial of a product in exchange for contact information.",
                    "Event promotion: Landing pages can be used to promote events such as webinars, conferences, or product launches. These pages typically contain information about the event and a call-to-action to register or purchase tickets.",
                    "Product launches: Landing pages can be used to introduce new products to the market. They can showcase the product's features, benefits, and pricing information, and include a call-to-action to purchase the product.",
                    "App downloads: Landing pages can be used to promote mobile apps and encourage users to download them. These pages can showcase the app's features, benefits, and user reviews, and include a call-to-action to download the app.",
                    "E-book or white paper downloads: Landing pages can be used to promote e-books or white papers and encourage users to download them. These pages can provide a summary of the content and include a call-to-action to download the e-book or white paper.",
                    "These are only a few examples. There are limitless other uses for landing pages. What can you come up with?"
                ],
                sectionButtons: [
                    {
                        buttonText: 'More About Pricing',
                        buttonOnClick: null,
                        buttonSwitchToContentTitle: null,
                        buttonURL: 'pricing',
                        buttonColor: null,
                        buttonBorderColor: null,
                        buttonStyle: 'button',
                        buttonImagePaths: null,
                    }
                ]
            },
        ]
    },
    {
        title: 'Duplication',
        content: [
            "Duplication refers to the process of creating an exact or nearly exact copy of an existing website or web application using an entirely new code base. The duplication process involves copying all of the website's content, design, and functionality and using it as the design basis for a new website. Duplication is different than cloning, in that it's new code base generally allows for a faster, more responsive user-experience, and allows for the easier integration of other components or upgrades.",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'What is Cloning?',
                sectionIsNewDropdown: true,
                sectionContent: ["Cloning is the process of creating a copy of an existing website or web application. This can be done for various reasons, such as creating a backup of the website, creating a staging environment for testing changes or updates, or creating a similar website with different content."],
                sectionButtons: null,
            },
            {
                sectionTitle: 'What are the advantages of Duplication?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "It's cheaper and faster than creating a website or app from scratch.",
                    "When you provide an example of a website or app for me to base your design on, it saves me a significant amount of time in the development process. Instead of spending hours trying to create a style and vision for your brand, I can simply look at the example you've provided and understand exactly what you want.",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'Can I use ANY site or app as the look/style to Duplicate?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Yes! In fact, you can ask that I duplicate features from a combination of sources. The more examples you can provide me with, the easier and faster it is for me to create your perfect product.",
                ],
                sectionButtons: [
                    {
                        buttonText: 'More About Pricing',
                        buttonOnClick: null,
                        buttonSwitchToContentTitle: null,
                        buttonURL: null,
                        buttonColor: null,
                        buttonBorderColor: null,
                        buttonStyle: 'button',
                        buttonImagePaths: null,
                    }
                ]
            }
        ]
    },
    {
        title: 'Dynamic Forms & Paperwork Expediting',
        content: [
            "In the fast-paced world of business, the ability to streamline processes and reduce paperwork can be a game-changer. Introducing a transformative solution—Dynamic Forms & Paperwork Expediting.",
            "Any repetetive, error-prone paperwork can be done on a cellphone, tablet or computer to ensure information is entered correctly and efficiently.",
            "If your business is still doing ANYTHING with paper, consider moving to the easier, cheaper, better solution - digital!"
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'Adaptive and Intuitive Forms',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Customizable Templates: Design dynamic forms tailored to your unique business needs, adapting to varying requirements effortlessly.",
                    "User-Friendly Interface: Create intuitive forms that simplify data entry, reducing errors and enhancing user experience."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Expedited Data Collection and Processing',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Real-Time Data Capture: Collect and process information in real-time, accelerating the pace of your operations.",
                    "Automation of Repetitive Tasks: Leverage dynamic forms to automate repetitive data entry tasks, saving time and minimizing manual errors."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Enhanced Client Interaction',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Effortless Client Onboarding: Simplify client onboarding processes with dynamic forms that guide clients through required information seamlessly.",
                    "Interactive Engagement: Foster engagement by incorporating interactive elements within forms, turning mundane paperwork into a user-friendly experience."
                ],
                sectionButtons: null,
            },
        ]
    },
    {
        title: 'APIs',
        content: [
            "In a world where connectivity is key, harnessing the potential of Application Programming Interfaces (APIs) can be the driving force behind your business success.",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'Tailored Integration Solutions',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Client-Centric Approach: Design APIs tailored to your clients' specific needs, providing seamless integration with their existing systems.",
                    "Enhanced Functionality: Extend the functionality of your clients' applications by offering purpose-built API solutions that align with their business objectives."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Accelerate Development Cycles for Your Clients',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Ready-to-Use Modules: Empower your clients with pre-built modules through APIs, allowing them to accelerate development cycles and focus on core functionalities.",
                    "Innovative Prototyping: Foster innovation by delivering APIs that enable rapid prototyping, facilitating quick experimentation and refinement."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Elevate User Experience through Customization',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Dynamic User Experiences: Enable your clients to offer dynamic user experiences by integrating APIs that provide real-time data updates and personalized content.",
                    "Flexible Solutions: Deliver customization options, allowing clients to adapt and tailor their applications according to their users' preferences."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Streamline Business Operations with Automated Workflows',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Efficiency Unleashed: Provide your clients with APIs that streamline their business operations, automating repetitive tasks and reducing manual workload.",
                    "Enhanced Accuracy: Ensure accuracy in data exchange and processing, contributing to the overall efficiency of your clients' workflows."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Prioritize Data Security and Compliance',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Secure Communication Channels: Implement robust security measures within your APIs to guarantee secure communication and data integrity.",
                    "Compliance Assurance: Assure your clients of compliance with industry and regulatory standards, offering APIs that prioritize data security and privacy."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Offer Scalability and Adaptability',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Scalable Architecture: Develop APIs that lay the foundation for scalable architectures, enabling your clients' businesses to grow seamlessly.",
                    "Future-Ready Solutions: Facilitate adaptability by offering APIs that can easily integrate new features and services as your clients' needs evolve."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Monetize Your API Offerings',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Revenue Generation Strategies: Explore monetization opportunities by offering your APIs as valuable products or services, creating additional revenue streams.",
                    "Foster Partnerships: Attract partnerships by providing APIs that add substantial value to your clients' businesses and create collaboration opportunities."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Empower Clients with Real-Time Analytics',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Analytical Insights: Embed real-time analytics capabilities into your APIs, empowering your clients with comprehensive and up-to-the-minute insights.",
                    "Informed Decision-Making: Contribute to your clients' decision-making processes by delivering APIs that provide valuable data-driven insights."
                ],
                sectionButtons: null,
            },
        ]
    },
    {
        title: 'Custom Plugins',
        content: [
            "If you need a custom stand-alone feature for your website, be it on WordPress, Wix, Shopify, or any other website that allows JavaScript, a plugin is probably what you're looking for.",
            "A plugin is a chunk of code that can easily be imported into a website or website builder and performs a task independantly or in coordination with other features on the website or using external data.",
            "Empower your website with bespoke functionalities that align precisely with your unique requirements. Welcome to a new era of web enhancement—Custom-Built Plugins tailored just for you."
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'Precision-Crafted Solutions for Your Website',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Affordable Customization: Experience plugins designed to fit seamlessly into your website's structure, catering specifically to your objectives.",
                    "Tailored Functionality: Define the features you need, and I'll craft custom plugins to elevate your website affordably."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Streamlined Integration and User-Friendly Experience',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Effortless Implementation: Enjoy a seamless integration process as I develop plugins tailored to fit seamlessly into your existing website architecture.",
                    "User-Friendly Deployment: With intuitive interfaces, my custom-built plugins are designed for easy deployment, ensuring a hassle-free user experience."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Diverse Features Aligned with Your Vision',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Your Custom Popup Vision: Envision and realize custom popups that perfectly align with your promotional or informational goals, offering a unique and engaging experience.",
                    "Flexible Feature Set: Define the features you desire, from interactive elements to dynamic forms, and I'll tailor plugins to match your vision precisely."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Performance Optimization for a Smooth Experience',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Efficient Performance: My custom-built plugins are optimized for efficient loading, ensuring they seamlessly integrate without compromising your website's speed.",
                    "Resource-Friendly: Minimize resource usage with plugins that enhance performance, providing a smooth and responsive user experience."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Consistent Branding and Styling Choices',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Branded Aesthetics: Maintain a consistent brand identity with plugins that effortlessly blend into your website's aesthetics, enhancing the overall user experience.",
                    "Tailor Styling to Your Preferences: Choose from customizable styling options, allowing you to match the look and feel of your existing website seamlessly."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Ongoing Support and Regular Enhancements',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Responsive Support Channels: Enjoy peace of mind with responsive support channels, providing assistance and guidance throughout the integration and usage of your custom plugins.",
                    "Continuous Improvement: Benefit from regular updates and enhancements, ensuring your custom-built plugins stay current and aligned with the latest web standards."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Industry-Specific Customizations',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Designed for Your Industry: My custom-built plugins are not one-size-fits-all; they are tailored to address the specific needs and challenges of your industry.",
                    "Adaptable Solutions: As your industry evolves, my custom plugins can adapt to new requirements, providing flexible solutions for lasting value."
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Unleash Creativity and Innovation',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Enhance User Engagement Creatively: Foster creativity with custom features that enhance user engagement, creating an immersive and memorable browsing experience.",
                    "Drive Unique Conversions: Leverage tailor-made features to drive unique conversions, capturing your audience's attention and turning visitors into loyal customers."
                ],
                sectionButtons: null,
            },
        ]
    },
    {
        title: 'Artificial Intelligence',
        content: ["Artificial Intelligence (AI) is a technology that aims to mimic human intelligence in computers and systems. It's like giving your website a digital brain that can analyze data, learn from it, and make intelligent decisions. AI is used for various tasks, including understanding natural language, recognizing patterns in data, and making predictions. In web development, it plays a crucial role in creating smart websites that can chat with users, automate tasks, and offer personalized experiences.",
            "At its core, AI works by using algorithms and large datasets to recognize patterns and make predictions. It processes information, learns from it, and continually improves its performance. For example, in chatbots, AI can understand user queries and respond appropriately by drawing on its knowledge base. In summary, AI enhances web development by adding a layer of intelligence, enabling websites to understand, interact with, and assist users in a more human-like manner.",
        ],
        sections: [
            {
                sectionTitle: 'Coming Soon...',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "To be added soon!",
                ],
                sectionButtons: null,
            },
        ]
    },
    {
        title: 'NextJS & Jamstack',
        content: [
            "One of my favourite development approaches is to use a combination of NextJS/JAMstack and Serverless Static architecture.",
            "In short, this is a cheap and very efficient method of launching small-scale websites & apps like this one. Notice the speed? Would you believe this website costs less than 1/10th of a typical website to operate?"
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: "What's a Jamstack?",
                sectionIsNewDropdown: true,
                sectionContent: [
                    "JAMstack is a modern web development architecture that prioritizes decoupling the frontend, backend, and content layers, promoting scalability and flexibility.",
                    "It revolves around three key components: JavaScript, APIs, and Markup, shaping the structure of applications and websites.",
                    "The main principle is to pre-render content at build time and leverage APIs for dynamic functionalities, resulting in enhanced performance and security.",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: "What's a NextJS?",
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Next.js is a React-based web framework that simplifies the development of modern, server-rendered React applications.",
                    "It provides a powerful combination of server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR) to optimize performance and user experience.",
                    "Next.js is designed for building scalable and SEO-friendly web applications with a focus on developer productivity.",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: "What's a Serverless Static Site?",
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Serverless static sites represent a modern approach to web hosting and development that's both cost-effective and highly efficient. In this setup, websites are delivered to users directly from a content distribution network (CDN) without the need for traditional web servers. The term 'serverless' may sound paradoxical, but it simply means that you don't have to worry about managing server infrastructure.",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'Do you use any other languages or stacks?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "I can work in almost any major modern web language/library except Ruby, Go, Swift, Kotlin & Rust. Although if you need something done in these languages that isn't too complicated I can probably figure it out!",
                    "I can also work with more MERN and LAMP/WAMP stacks.",
                ],
                sectionButtons: null,
            },
        ]
    },
    {
        title: 'Animation & Interactivity',
        content: [
            "You may have noticed that my websites tend to have a bit more going on aesthetically than your typical site. This is not a necessity of course, but for those interested in a bit of extra bells and whistles these are skills that can be hard to find.",
            "In the ever-evolving landscape of online engagement, static is simply not enough. Capture your audience's attention, make a lasting impression, and stand out in the digital crowd with some animations or special interactive features on your page!"
        ],
        imagepath: "",
        sections: [
            {
                subSectionTitle: 'Custom Hover Effects',
                subSectionContent: [
                    "Engagement on Hover: Elevate user interaction with bespoke hover effects that not only attract attention but also provide additional information, creating a dynamic and interactive interface.",
                    "Subtle Elegance: Implement subtle hover animations for a touch of elegance, ensuring that every interaction feels intentional and enhances the overall user experience.",
                ],
            },
            {
                subSectionTitle: 'Scroll-triggered Animations',
                subSectionContent: [
                    "Seamless Progression: Add depth and interest to your content with animations triggered by the user's scroll, guiding them through your website's narrative in a visually captivating and cohesive manner.",
                    "Storytelling Unveiled: Unveil your story gradually as users scroll, creating a storytelling experience that keeps them engaged and eager to explore further.",
                ],
            },
            {
                subSectionTitle: 'Animated Calls to Action (CTAs)',
                subSectionContent: [
                    "Eye-Catching CTAs: Transform ordinary CTAs into attention-grabbing elements with animated transitions, encouraging user engagement and driving conversions.",
                    "User Guidance: Guide users seamlessly through the conversion journey with animated CTAs that provide clear direction and emphasize key actions.",
                ],
            },
            {
                subSectionTitle: 'Mobile-Optimized Interactivity',
                subSectionContent: [
                    "Responsive Interaction: Ensure a seamless experience across all devices with mobile-optimized interactive features, keeping your audience engaged and interested.",
                    "Touch-friendly Animations: Implement touch-friendly animations for mobile users, providing a smooth and enjoyable interactive experience on smartphones and tablets.",
                ],
            },
        ],
        sectionButtons: null,
    },
    {
        title: 'Realtime NoSQL Databases',
        content: [
            "In the ever-evolving landscape of data management, traditional databases are giving way to a more dynamic and flexible solution—NoSQL databases. Discover the advantages that propel businesses into the future, revolutionizing the way data is stored, managed, and leveraged.",
        ],
        imagepath: "",
        sections: [
            {
                subSectionTitle: "What is a Realtime Database?",
                subSectionContent: [
                    "A Realtime Database is a type of database system that is designed to provide instantaneous updates and synchronization of data across multiple users or systems in real time. Unlike traditional databases, which often rely on periodic batch updates or polling mechanisms, a realtime database ensures that changes made by one user or application are immediately reflected to others without any delay.",
                ],
            },
            {
                subSectionTitle: "Flexible Schema",
                subSectionContent: [
                    "Adaptability at Its Core: NoSQL databases embrace a schema-less structure, allowing you to store and manage unstructured data effortlessly. Adapt to changing data requirements without the constraints of a predefined schema.",
                ],
            },
            {
                subSectionTitle: "Scalability Beyond Limits",
                subSectionContent: [
                    "Horizontal Scaling: NoSQL databases excel at horizontal scaling. Distribute your data across multiple servers, effortlessly handling growing datasets and ensuring optimal performance as your business expands.",
                ],
            },
            {
                subSectionTitle: "Versatile Data Models",
                subSectionContent: [
                    "Document Stores: Leverage document-oriented NoSQL databases for a natural representation of data in JSON-like documents. Ideal for content management systems, e-commerce catalogs, and dynamic applications.",
                    "Graph Databases: Explore relationships seamlessly with graph databases, perfect for scenarios where understanding connections is paramount, such as social networks and fraud detection.",
                ],
            },
            {
                subSectionTitle: "High Performance",
                subSectionContent: [
                    "Efficient Queries: NoSQL databases are designed to optimize specific queries, delivering lightning-fast response times for read and write operations. Streamline your application's performance with targeted data retrieval.",
                ],
            },
            {
                subSectionTitle: "Flexible Consistency Models",
                subSectionContent: [
                    "Choose Your Consistency: Tailor the consistency model to fit your application's needs. NoSQL databases offer options ranging from strong consistency for critical systems to eventual consistency for highly distributed and scalable architectures.",
                ],
            },
            {
                subSectionTitle: "Global Distribution",
                subSectionContent: [
                    "Distributed Database: NoSQL databases shine in distributed environments. Geographically distribute your data to ensure low-latency access for users around the world, providing a seamless and responsive user experience.",
                ],
            },
        ]
    },
    {
        title: 'ReactJS',
        content: [
            "ReactJS is a JavaScript library developed by Facebook over a decade ago. In the years since it's become one of the most popular web development libraries in the world.",
            "Imagine building your website like putting together LEGO blocks. ReactJS is like having the coolest, most efficient LEGO set for creating a website.",
        ],
        imagepath: "",
        sections: [
            {
                subSectionTitle: "Building Blocks (Components)",
                subSectionContent: [
                    "With ReactJS, we break down your website into tiny building blocks called components. Each component does a specific job, making it easy to create, rearrange, and reuse parts of your site. It's like having a set of super versatile LEGO pieces.",
                ],
            },
            {
                subSectionTitle: "Easy to Change and Upgrade",
                subSectionContent: [
                    "Let's say you want to tweak the design or add something new later on. ReactJS makes it a breeze. We can swap out one LEGO block without affecting the whole structure. It's like redesigning your website without causing a mess.",
                ],
            },
            {
                subSectionTitle: "Fast and Smooth Experience",
                subSectionContent: [
                    "ReactJS is like having a magic wand for speed. It makes your website feel super fast because it only updates the parts that need it, giving users a smooth and enjoyable experience. It's like having a speedy sports car instead of a slow-moving train.",
                ],
            }, {
                subSectionTitle: "User-Friendly and Interactive",
                subSectionContent: [
                    "ReactJS ensures that your website is not just a static page but an interactive and user-friendly space. It's like turning your website into a friendly guide, making visitors feel welcome and engaged.",
                ],
            },
            {
                subSectionTitle: "Future-Ready",
                subSectionContent: [
                    "Your business is always evolving, and ReactJS is like a tech superhero that grows with you. It's future-ready, adapting easily to new features or changes without causing headaches. It's like having a website that's always up-to-date and ready for whatever comes next.",
                ],
            },
            {
                subSectionTitle: "Support from a Big Family",
                subSectionContent: [
                    "ReactJS is backed by a huge community of developers worldwide. It's like having a big family ready to help with anything. If there's ever a question or a new idea, there's a community out there supporting us.",
                ],
            },
        ]
    },
    {
        title: 'Website Upgrades',
        content: [
            "Is your website ready for a makeover? Whether you're running a WordPress blog, a Shopify store, or a traditional HTML/CSS based-site, my innovative website upgrades are here to elevate your online presence to new heights. Don’t settle for a stagnant online presence. Let’s turn your website into a powerhouse of innovation and engagement.",
            "Enhanced Functionality: Add powerful features and seamless integrations to your site. From dynamic forms and interactive maps to real-time analytics and social media feeds, JavaScript plugins bring advanced functionality to your fingertips.",
            "Improved User Experience: Delight your visitors with a smoother, faster, and more engaging experience. Our upgrades optimize your site’s performance, reduce load times, and ensure a mobile-friendly interface that keeps users coming back for more.",
            "Boosted Conversions: Turn browsers into buyers with strategic enhancements. Implementing features like interactive product displays, personalized recommendations, and streamlined checkout processes can significantly increase your conversion rates and boost sales.",
            "Tailored Solutions: No two websites are the same, which is why our upgrades are fully customizable. Whether you need a bespoke JavaScript plugin, a tailored WordPress widget, or a unique Shopify add-on, we’ll create a solution that perfectly fits your needs and goals.",
            "Future-Proof Your Site: Stay ahead of the competition with the latest technologies and trends. Upgrades ensure your website is equipped to handle future growth and evolving industry standards, keeping your business at the forefront of innovation.",
        ],
        imagepath: "",
        sections: [
            
        ]
    },
    {
        title: 'Full Sites & eCommerce',
        content: [
            "While I generally try to focus on smaller, purpose-specific projects, I will occasionally build a full-scale website - particularly if the end product is simple or the organization is providing a public service.",
            "e-Commerce websites are by their nature inherently large, with not only many different pages being required, but also the addition of payment gateways, security/authentication, and a backend for inventory updateds. While I do enjoy building e-Commerce websites (including through Wordpress or Shopify), these are projects that tend to take many months or over a year, and can be very expensive to develop."
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'Will Cam make larger websites or e-Commerce websites from scratch?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Yes, but be aware that depending on the scale and scope of the project I may be required to sub-contract some elements of the project, and regular payments will be required throughout the development process, which may take quite some time." ,
                ],
                sectionButtons: null,
            },
        ]
    },
    {
        title: 'Graphics & Design',
        content: [
            "More coming soon..",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'What is ?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Coming soon to a cartoony space-themed website near you!",
                ],
                sectionButtons: null,
            },
        ]
    },
    {
        title: 'Bigger Websites',
        content: [
            "At the moment I'm sorry to say I'm not offering to build any bigger websites, as I've got too many other projects and aspirations to take on anything that requires more than a couple months of my time at once.",
            "Feel free to send me an email though if you've got an interesting project or proposal you'd like to talk about!"
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'What does big constitute?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Any website that involves more than 3 pages is probably getting into big territory, but talk to be and let's discuss it.",
                ],
                sectionButtons: null,
            },
        ]
    },
    {
        title: 'What does it cost to hire Cam?',
        content: [
            "It completely depends on the scope of your project. Typically I aim for about $50 per hour, or $1 per line of code. This price will fluctuate depending on the complexity or difficulty of the project, and typically I try not to charge for time spent learning a new concept when required.",
            "A simple app that does some basic, on-the-fly calculations or quickly accesses a database and provides some real-time information may only cost $300-500, and a basic landing page providing visitors with some data and some fun graphics or animations could run the same. Adding more advanced features can quickly bring the bill up over $1000 toward $2000. As you approach full website functionality or significant complexities such as a custom eCommerce platform the price can easily reach $5000.",
            "Please contact me any time for more information on pricing, and I'm always happy to break down the costs for your specific project so you can understand where and why the cost is what it is.",
        ],
        imagepath: "",
        sections: [
            
        ]
    },
    {
        title: 'How long do projects take?',
        content: [
            "The timeline for project completion can vary quite a bit depending on the size and complexity of the project. For a small app, it could take as little as a week to get everything up and running. On the other hand, larger, more complex projects can take over six months to complete.",
            "In general, I aim to finish most projects within 1-2 months. This timeline allows for thorough planning, development, testing, and any necessary revisions to ensure the final product meets all your requirements and expectations. Of course, the exact timeline can vary, but I always strive to deliver high-quality work as efficiently as possible. Let's discuss your specific needs and come up with a timeline that works best for your project!"
        ],
        imagepath: "",
        sections: [
        ]
    },
    {
        title: "What is Cam's 'Stack'?",
        content: [
            "My favourite stack to work with is the 'JAM Stack. I primarily work with the JAMstack, which stands for JavaScript, APIs, and Markup. This modern approach focuses on performance, security, and scalability. Using JAMstack with Next.js, a React-based framework, allows me to build lightning-fast websites. Next.js is fantastic because it supports static site generation and server-side rendering, which means your site can load incredibly quickly and handle dynamic content efficiently. Plus, it allows for easy integration with various backend services through APIs.",
            "In addition to JAMstack, I'm also experienced with the classic LAMP stack, which stands for Linux, Apache, MySQL, and PHP. This setup is reliable and time-tested, making it great for traditional web applications. It's known for its stability and security, which are crucial for any business.",
            "I also work with the MERN stack, which includes MongoDB, Express.js, React, and Node.js. This stack is all about full-stack JavaScript development, allowing for highly interactive and dynamic web applications. It's perfect for projects that require real-time data and seamless user experiences - however, in most cases I find a JAM stack is the better approach.",
            "So, whether you're looking for a modern, high-performance solution with JAMstack and Next.js, a stable and secure application with LAMP, or a dynamic and interactive project with MERN, I've got the expertise to bring your vision to life. Let's build something amazing together!",
        ],
        imagepath: "",
        sections: [
        ]
    },
    {
        title: 'Do I need to continue to pay after a project is completed?',
        content: [
            "Only in certain situations, like when I'm providing hosting for a web page or database. In all cases, my prices will be among the most competetive in the industry because I use cloud infrastructure from major operators like Google and Amazon which often offers pennies-to-the-dollar value compared to classic server architecture.",
            "If the project is simply being added to your existing website or will be hosted on your servers then there will be no recurring costs.",
            "In some cases, clients may be interested in having me maintain the website or make regular updates. This can come with a small, quarter-annual fee which will be negotiated based on your needs. In most cases, clients can avoid this recurring expense by paying a bit more up-front to create an administrative backend componenet which will allow the client to make these modifications themselves without using code.",
            "There may also be cases where a project requires accessing 3rd-party data (such as advanced weather data, supplier inventory data, proprietary mapping data, etc.) which requires paying the data supplier a fee. In these cases you will likely be billed directly by the supplier for their data, and I will not be involved at all. If you prefer I be involved, this will likely involved some recurring cost that will include my fees for maintenance."
        ],
        imagepath: "",
        sections: [
            
        ]
    },
    {
        title: 'Bigger Websites',
        content: [
            "At the moment I'm sorry to say I'm not offering to build any bigger websites, as I've got too many other projects and aspirations to take on anything that requires more than a couple months of my time at once.",
            "Feel free to send me an email though if you've got an interesting project or proposal you'd like to talk about!"
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'What does big constitute?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Any website that involves more than 3 pages is probably getting into big territory, but talk to be and let's discuss it.",
                ],
                sectionButtons: null,
            },
        ]
    },
    {
        title: 'Society - the Boardgame',
        content: [
            "More coming soon..",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'What is ?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Coming soon to a cartoony space-themed website near you!",
                ],
                sectionButtons: null,
            },
        ]
    },
    {
        title: 'Trip Blog',
        content: [
            "More coming soon..",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'What is ?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Coming soon to a cartoony space-themed website near you!",
                ],
                sectionButtons: null,
            },
        ]
    },
    {
        title: 'Upcoming Projects',
        content: [
            "More coming soon..",
        ],
        imagepath: "",
        sections: [
            {
                sectionTitle: 'What is ?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Coming soon to a cartoony space-themed website near you!",
                ],
                sectionButtons: null,
            },
        ]
    },
]

export default content;