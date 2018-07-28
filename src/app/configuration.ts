 export const configuration = {
     header: {
    headline: 'A Simple Online Booking Website',
    paratext: '',
    btntext: 'Get Started!',
    btnlink: '/Pricing'
     },
     intro: {
       tagline: 'SUCCESS',
       title: 'How We Help You To Sell Your Product',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
       features : [
         {icon: 'html5', title: 'HTML5 & CSS3', description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico'},
         {icon: 'bolt', title: 'Easy to Use', description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi'},
         {icon: 'tablet', title: 'Fully Responsive', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'},
         {icon: 'rocket', title: 'Parallax Effect', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'}
       ]
      },
     services: {
      tagline: 'BELIEVING',
      title: 'Focusing On What Matters Most',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    },
    reviews: {
      tagline: 'FEEDBACK',
      title: 'What our customers are saying',
      description: '',
      users: [
        {img: 'user-1.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        info: 'John Doe - Happy Customer'},

        {img: 'user-2.jpg',
         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
         info: 'Roslyn Doe - Happy Customer'},
        {img: 'user-3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        info: 'Thomas Doe - Happy Customer'}
      ]
    },
    home : {
      tagline: 'TRUST',
      title: 'Companies who use our services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
      companies: [
        {name: 'Tree' , weblinks: 'company-logo1.png' , logo: 'company-logo1.png'},
        {name: 'Fingerprint' , weblinks: 'company-logo2.png' , logo: 'company-logo2.png'},
        {name: 'The Man' , weblinks: 'company-logo3.png' , logo: 'company-logo3.png'},
        {name: 'Mustache' , weblinks: 'company-logo4.png' , logo: 'company-logo4.png'},
        {name: 'Goat' , weblinks: 'company-logo5.png' , logo: 'company-logo5.png'},
        {name: 'Justice' , weblinks: 'company-logo6.png' , logo: 'company-logo6.png'},
        {name: 'Ball' , weblinks: 'company-logo7.png' , logo: 'company-logo7.png'},
        {name: 'Cold' , weblinks: 'company-logo8.png' , logo: 'company-logo8.png'},
        {name: 'Cold' , weblinks: 'company-logo9.png' , logo: 'company-logo9.png'}
      ]
    },
    pricing : {
      tagline: 'YOUR CHOICE',
      title: 'We have the right package for you',
      description: '',
      plans: [
        {title: 'Personal', subtitle: 'The standard version' ,
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
         currency: '$', price: '19' ,
         downloads: '5 Downloads', extensions: '2 Extensions' ,
         tutorials: 'Tutorials' , support: 'Forum Support' , updates: '1 year free updates',
         btntext: 'Buy Now', btnlink: '#', featured: false
        },
        {title: 'Student', subtitle: 'Most popular choice' ,
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
         currency: '$', price: '29' ,
         downloads: '15 Downloads' , extensions: '5 Extensions' ,
         tutorials: 'Tutorials with Files', support: 'Forum Support', updates: '2 years free updates',
         btntext: 'Buy Now', btnlink: '#', featured: true
        },
        {title: 'Business', subtitle: 'For the whole team' ,
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
         currency: '$', price: '49' ,
         downloads: 'Unlimited Downloads', extensions: 'Unlimited Extensions',
         tutorials: 'HD Video Tutorials', support: 'Chat Support', updates: 'Lifetime free updates',
         btntext: 'Buy Now', btnlink: '#', featured: false
        }
      ]
    },
    gallery: {
      images: [
        'gallery-image-1.jpg',
        'gallery-image-2.jpg',
        'gallery-image-3.jpg',
        'gallery-image-4.jpg',
        'gallery-image-5.jpg',
        'gallery-image-6.jpg',
      ]
    },
    footer: {
     active: true ,
     copyrightText:  ' Made by CDAC-ACTS Students ',
     developer: '  EventAdda Group ',
     developerLink: 'https://cdacacts.in'
    }
  };
