import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight, faFaceSmile, faPersonChalkboard, faPeopleRoof, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { checkmark, closetafter, closetbefore, consultationbkg, hamperafter, hamperbefore, kitchencabinetsafter, kitchencabinetsbefore, kitchendrawerafter, kitchendrawerbefore, testbkg1, testbkg2, testbkg3, testbkg4, testbkg6, wardrobeafter, wardrobebefore } from "./assets/index.assets";


/***
 * 
 * 
 home
Services and pricing
About us
contact

crear data para los 'links'

crear data para 'content' component
 */

export const leftquote = <FontAwesomeIcon icon={faQuoteLeft} />
export const rightquote = <FontAwesomeIcon icon={faQuoteRight} />

/**ourprocess icons */
export const freeconsultation = <FontAwesomeIcon icon={faCalendarDays} />
export const firstvisit = <FontAwesomeIcon icon={faPeopleRoof} />
export const organizationday = <FontAwesomeIcon icon={faPersonChalkboard} />
export const enjoy = <FontAwesomeIcon icon={faFaceSmile} />

export const cloIcons = [
    {
      id:1,
      name:'left quote',
      icon:leftquote    
    },
    {
        id:2,
        name:'right quote',
        icon:rightquote  
    },
    {
        id:3,
        name:'checkmark',
        icon: checkmark  
    }
]

export const mainNavLinks = [
    {
        id:1,
        linkname:'home'
    },
    {
        id:2,
        linkname:'Services and pricing'
    },
    {
        id:3,
        linkname:'About us'
    },
    {
        id:4,
        linkname:'contact'
    }
]

export const MainMessage = 'Clo Solutions LOGO';

export const DailyPhrases = [
    'Planing is an essential tool for organizing your daily tasks and appointments',
    'A professional decluttering service can help you achieve this efficiently.',
    'An organizer is a valuable resource for anyone looking to streamline their belongings and maximize storage space in their home or office.',
    'Labeling your belongings is a simple yet effective way to stay organized and ensure that everything has a designated place',
    'Space-saving solutions that can help you make the most of even the smallest living spaces.',
    'Unpacking after a move can be an overwhelming task, but with the help of a professional unpacking service',
    'Hire us as planner to assist with your event planning can save you time and stress',
]

export const aboutUsData = [
    {
        id:1,
        text:'Welcome to CLO Solutions, your local expert in organizational solutions for both residential and commercial spaces. At CLO Solutions, we believe that an organized space is a key ingredient for a stress-free and productive life. That\'s why we offer a range of custom organization techniques and solutions that are designed to help you make the most of your space, no matter how large or Small. Our team of professionals has experience working hand in hand with our clients to find the solution they are looking for. Understanding their  needs and preferences we can personalize your project to ensure maximum satisfaction.  Whether you\'re looking to optimize your home office,  kitchen space, or create a  more functional business environment, we have the skills and tools needed to Help you achieve your goals. At CLO Solutions, we believe that organizing should NOT only be functional, but also accompanied by Design and Aesthetics. For this reason, our techniques are not only based on practicality but also on the personality and style of each client.  So if you\'re looking to change your environment and beat the stresses of everyday life, look no further.  Here at CLO Solutions, we want to help you and be "Part of the Solution".  Contact us today to schedule a FREE consultation and learn more about how we can help you transform your space.'
    }
]

export const ourProcessIcons = [ 
    {
        id:1,
        name:'Free Consultation',
        icon:freeconsultation
    },
    {
        id:2,
        name:'First Visit',
        icon:firstvisit
    },
    {
        id:3,
        name:'Organization day',
        icon:organizationday
    },
    {
        id:4,
        name:'Enjoy',
        icon:enjoy
    
    }
]
/**test component data ---- start--*/


/**test images backgrounds */
export const backgroundsImages = [
    {
        id:1,
        title:'Free consultation',
        imagesbkg: testbkg1
    },
    {
        id:2,
        title:'First visit',
        imagesbkg: testbkg2
    },
    {
        id:3,
        title:'Organization day',
        imagesbkg: testbkg3
    },
    {
        id:4,
        title:'Enjoy',
        imagesbkg: testbkg4
    },
    {
        id:5,
        title:'Consultation',
        imagesbkg: consultationbkg
    },
    {
        id:6,
        title:'add a background',
        imagesbkg: testbkg6
    }
]

/**organization backgrounds */

export const organizationBkgImages = [
    {
        id:1,
        title:'closet before',
        titleback:'closet after',
        imagesfrontbkg: closetbefore,
        imagesbackbkg: closetafter
    },
    {
        id:2,
        title:'hamper before',
        titleback:'hamper after',
        imagesfrontbkg: hamperbefore,
        imagesbackbkg: hamperafter
    },
    {
        id:3,
        title:'kitchen drawer before',
        titleback:'kitchen drawer after',
        imagesfrontbkg: kitchendrawerbefore,
        imagesbackbkg: kitchendrawerafter
    },
    {
        id:4,
        title:'kitchen cabinets before',
        titleback:'kitchen cabinets after',
        imagesfrontbkg: kitchencabinetsbefore,
        imagesbackbkg: kitchencabinetsafter
    },
    {
        id:5,
        title:'wardrobe before',
        titleback:'',
        imagesfrontbkg: wardrobebefore,
        imagesbackbkg: wardrobeafter
    },
    {
        id:6,
        title:'add a background',
        titleback:'',
        imagesfrontbkg: testbkg6,
        imagesbackbkg:''
    }
]


export const testData = [
    {
        id:1,
        title:'Free Consultation',
        icon:freeconsultation,
        description:'So that we can delve together into the details of your project. We will schedule a phone call of approximately 15 minutes to discuss your needs, priorities, and expectations'
    },
    {
        id:2,
        title:'First Visit',
        icon:firstvisit,
        description:'Here we will meet and discuss which system best suits your needs.We will analyze and take measurements of the spaces to be organized.Together, we will design a plan to carry out your project.'
    },
    {
        id:3,
        title:'Organization day',
        icon:organizationday,
        subtitle:'Let\'s get to work! Together we will:',
        step1:'Prepare the Space',
        step2:'Review the Design Plan',
        step3:'Categorize and Classify Items',
        step4:'Create a System',
        step5:'Put Everything in Its Place',
        step6:'Maintenance Review',
        description:'Let\'s get to work! This is the day when we will execute the previously designed plan, categorize and classify all the items in the selected space, and then put everything in its place. We will also include a maintenance review, where we will explain the flow of the organization system created exclusively for you.'
    },
    {
        id:4,
        title:'Enjoy',
        icon:enjoy,
        description:'Now you can relax and enjoy the tranquility of your space. We want you to remember that we are always just a phone call, text, or email away to answer any questions that may arise after the work is done. We also offer maintenance service to our customers should you request it'
    }
]

/**test component data ---- end--*/

export const ourProcessData = [
    {
        id:1,
        title:'Free Consultation',
        description:'So that we can delve into the details of your project together. We can schedule a phone call of approximately 15 minutes to discuss what your needs, priorities and expectations are.'
    },
    {
        id:2,
        title:'First visit',
        description:'Preparation of the Action Plan, where we will discuss the systems and schemes with which we will work. We will analyze, we will take measurements of the spaces to organize. Together we will design a plan to carry out your project.'
    },
    {
        id:3,
        title:'Organization Day',
        description:'Let\'s do it! This is the day where we will execute the previously designed plan, categorize and classify all the items in the selected space and then put everything in its place.It includes maintenance advice where we will explain and advise you on the system that best suits your needs, so that you can maintain the space.'
    },
    {
        id:4,
        title:'Enjoy',
        description:'Now you can relax and enjoy the tranquility of your space.'
    },
]
