// if section contains buttons midway through the content, create a new section to continue the content below the buttons
// but set sectionIsNewDropdown to false to prevent a title and dropdown functionality. Next section will continue under original dropdown
const content = [
    {
        title: 'A Breif History of Cam',
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
        title: 'Contact Cam',
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
        title: 'Experience',
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
        sections: [
            {
                sectionTitle: 'How do they work and how can they help me?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Custom calculators are powerful tools tailored to meet the specific needs of a business, providing quick and accurate solutions for various calculations on the fly. These calculators are designed to streamline complex, time-consuming tasks, making them essential for professionals across different industries. Whether it's a financial firm needing an investment calculator, a real estate agency requiring a mortgage calculator, or an e-commerce platform implementing a shipping cost calculator, custom calculators serve as invaluable assets.",
                    "For instance, a real estate agency can greatly benefit from a mortgage calculator that allows prospective clients to estimate monthly mortgage payments based on property value, interest rates, and loan terms. Such a tool simplifies the decision-making process for potential homebuyers. Similarly, an e-commerce platform can integrate a shipping cost calculator that computes shipping fees based on package dimensions, weight, and destination. This not only provides transparency for customers but also helps the business manage shipping costs effectively. Custom calculators are versatile, adaptable, and can be fine-tuned to address the unique demands of a business, offering both convenience and efficiency in a world where accurate calculations are often critical for success.",
            ],
                sectionButtons: null,
            },
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
                    "Calculators can be designed to fit any or all sizes of screens. However, generally speaking, less emphasis on aesthetics will mean a quicker and cheaper development process will be.",
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
        sections: [
            {
                sectionTitle: 'How does a Quote Generator work?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "A Quote Generator is a highly efficient and user-friendly tool that simplifies the process of providing price estimates to customers. It's essentially a web-based application where clients or employees can input their project details, such as scope, requirements, and any specific parameters relevant to the cost calculation.",
                    "Upon receiving the inputs, the quote generator utilizes a set of predefined algorithms and pricing models to calculate a customized cost estimate for the requested services or products. These algorithms take into account various factors, including labor, materials, additional features, and any other variables that influence the pricing. The result is an accurate, real-time quote that the business can present to the client. This not only streamlines the quoting process but also enhances transparency and customer satisfaction, as clients receive prompt and tailored cost estimates.",
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
        title: 'Automated Evaluations',
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
        title: '3rd Party Data Processing',
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
        title: 'Data Charting',
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
        title: 'Landing Pages',
        sections: [
            {
                sectionTitle: 'What is a Landing Page?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Landing pages are standalone web pages that are designed to capture a visitor's attention and convert them into a lead or customer. They are typically used as part of a marketing campaign and are designed to be highly targeted, relevant and focused on a specific action.",
                ],
                sectionButtons: null
            },
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
        sections: [
            {
                sectionTitle: 'What is Duplication?',
                sectionIsNewDropdown: true,
                sectionContent: ["Duplication refers to the process of creating an exact or nearly exact copy of an existing website or web application using an entirely new code base. The duplication process involves copying all of the website's content, design, and functionality and using it as the design basis for a new website. Duplication is different than cloning, in that it's new code base generally allows for a faster, more responsive user-experience, and allows for the easier integration of other components or upgrades."],
                sectionButtons: null,
            },
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
                    "It's cheaper and faster.",
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
        title: 'Marketplaces',
        sections: [
            {
                sectionTitle: 'What is Duplication?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
            ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'What is Cloning?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'What are the advantages of Duplication?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'Can I use ANY site or app as the look/style to Duplicate?',
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
        title: 'Social Networks',
        sections: [
            {
                sectionTitle: 'What is Duplication?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
            ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'What is Cloning?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'What are the advantages of Duplication?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "",
                ],
                sectionButtons: null
            },
            {
                sectionTitle: 'Can I use ANY site or app as the look/style to Duplicate?',
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
        title: 'Dynamic Forms',
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
        title: 'Paperwork Expediting',
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
        title: 'Quizzes & Analysis',
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
        title: 'Questionnaires',
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
        title: 'Custom Website Add-ons',
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
        title: 'Custom APIs',
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
        title: 'API Integration',
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
        title: 'Plugins',
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
        title: 'Data Management Tools',
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
        title: 'Shopify',
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
        title: 'WordPress',
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
        title: 'Wix',
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
        title: 'Databases',
        sections: [
            {
                sectionTitle: 'What is a Database?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Databases are the heart of data-driven applications, enabling users and systems to store, query, and update information with speed and reliability. They facilitate data analysis, reporting, and data-driven decision-making. Whether you're managing customer records, e-commerce transactions, or scientific research findings, databases provide a secure, scalable, and organized way to handle data.",
                    "In the modern world, where data is a valuable asset, databases are the silent but essential engines that power the applications and systems we depend on daily. They underpin everything from social media platforms and e-commerce sites to financial services and healthcare applications, ensuring that data is organized, accessible, and secure. In essence, databases are the data backbone of the digital age, enabling the management and utilization of information critical to our daily lives and business operations.",
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
        title: 'APIs',
        sections: [
            {
                sectionTitle: 'What is an API?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "API, short for Application Programming Interface, is the digital bridge that allows different software systems to communicate and work together. Think of it as a set of rules and protocols that enable one application to request and share data or functionality with another. APIs are the unsung heroes of the digital age, underpinning almost every online interaction you have, from checking the weather on your smartphone to using social media platforms.",
                    "APIs serve as intermediaries, allowing your web or mobile applications to access data or services from other sources, such as databases, external platforms, or third-party services. They provide a structured and secure way for applications to interact, ensuring seamless integration and data exchange. By utilizing APIs, developers can add powerful features, tap into vast data resources, and create innovative solutions that would be impossible to build from scratch.",
                    "In essence, APIs make the digital world go 'round, enabling the interconnected ecosystem of apps and services we rely on daily. They play a fundamental role in enhancing user experiences, enabling innovation, and expanding the capabilities of software applications. APIs are the key to building efficient, interconnected, and feature-rich software systems in today's digital landscape.",
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
        title: 'Artificial Intelligence',
        sections: [
            {
                sectionTitle: 'What is Artificial Intelligence?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Artificial Intelligence (AI) is a technology that aims to mimic human intelligence in computers and systems. It's like giving your website a digital brain that can analyze data, learn from it, and make intelligent decisions. AI is used for various tasks, including understanding natural language, recognizing patterns in data, and making predictions. In web development, it plays a crucial role in creating smart websites that can chat with users, automate tasks, and offer personalized experiences.",
                    "At its core, AI works by using algorithms and large datasets to recognize patterns and make predictions. It processes information, learns from it, and continually improves its performance. For example, in chatbots, AI can understand user queries and respond appropriately by drawing on its knowledge base. In summary, AI enhances web development by adding a layer of intelligence, enabling websites to understand, interact with, and assist users in a more human-like manner.",
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
        title: 'Serverless Static Sites',
        sections: [
            {
                sectionTitle: 'What is a Serverless Static Site?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Serverless static sites represent a modern approach to web hosting and development that's both cost-effective and highly efficient. In this setup, websites are delivered to users directly from a content distribution network (CDN) without the need for traditional web servers. The term 'serverless' may sound paradoxical, but it simply means that you don't have to worry about managing server infrastructure.",
            ],
                sectionButtons: null,
            },
            {
                sectionTitle: 'How do they work?',
                sectionIsNewDropdown: true,
                sectionContent: [
                    "Your website's content (HTML, CSS, JavaScript, images) is pre-built and stored as static files, which are then distributed globally through a CDN. When a user visits your site, the CDN delivers these files from a location nearest to them, ensuring lightning-fast load times.",
                    "This approach offers several benefits. It reduces the operational overhead of managing servers, scales effortlessly to accommodate traffic fluctuations, and is highly secure. It's a cost-effective solution for websites that don't require server-side processing or dynamic content. Whether you're running a personal blog or a corporate website, serverless static sites offer a streamlined, low-maintenance, and high-performance web hosting solution.",
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
        title: 'Interactive / Animated',
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
]

export default content;