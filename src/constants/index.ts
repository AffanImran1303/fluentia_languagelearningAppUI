import { Plan } from "./types";

export const navItems = [
    { key:"home",href: "/", label: "Home" },
    { key:"courses",href: "/courses", label: "Courses" },
    { key:"pricing",href: "/pricing", label: "Pricing" },
    { key:"aboutus",href: "/about", label: "About Us" },
    { key:"faq",href: "/faq", label: "FAQ" },
  ];

  export const HeroButton=[
    {title:"Explore Courses",icon:""}
  ]

  export const PricingPlans: Plan[] = [
    {
      name: "Free Plan",
      planFor:"(For Beginners)",
      price: "$0/month",
      description: "Perfect for starting your language learning journey.",
      features: [
        "Access to 1 language",
        "10 lessons per month",
        "Basic quizzes for vocabulary and grammar",
        "Community forum participation",
        "Limited progress tracking",
      ],
    },
    {
      name: "Standard Plan",
      planFor:"(For Enthusiasts)",
      price: "$9.99/month",
      description: "Ideal for casual learners who want structured content and practice.",
      features: [
        "Access to 5 languages",
        "Unlimited lessons and quizzes",
        "Interactive progress tracker",
        "Weekly live practice sessions with instructors",
        "Downloadable resources (PDFs, audio files)",
        "Gamified learning with achievements and rewards",
      ],
    },
    {
      name: "Premium Plan",
      planFor:"(For Experts)",
      price: "$19.99/month",
      description: "For serious learners aiming for fluency with personalized features.",
      features: [
        "Access to all languages",
        "One-on-one live coaching sessions (3 sessions/month)",
        "Advanced assessments and certifications",
        "Priority support and mentorship",
        "Personalized study plans based on your goals",
        "Offline access to lessons",
      ],
    },
    {
      name: "Team/Family Plan",
      planFor:"(For Groups)",
      price: "$49.99/month",
      description: "Best for families or teams looking for collaborative learning.",
      features: [
        "All Premium features for each user",
        "Group learning tools and progress sharing",
        "Dedicated support for family or teams",
        "Collaborative quizzes and challenges",
      ],
    },
  ];
  
  export const Testimonials=[
    {id:"1",name:"John D.",review:"Fluentia has completely transformed the way I learn languages. I was able to confidently hold conversations in Spanish within just three months!"},
    {id:"2",name:"Emily R.",review:"The interactive lessons and live practice sessions with Fluentia are fantastic. They make learning French fun and engaging!"},
    {id:"3",name:"Ahmed S.",review:"As someone juggling work and studies, the flexibility Fluentia offers is amazing. The progress tracker keeps me motivated every day!"},
    {id:"4",name:"Sophia K.",review:"I’ve tried many apps before, but Fluentia stands out with its personalized study plans and in-depth assessments. Highly recommended for serious learners."},
    {id:"5",name:"Carlos M.",review:"Thanks to Fluentia, I was able to pass my Italian proficiency exam! The one-on-one coaching sessions were a game-changer for me."},
    {id:"6",name:"Lila T.",review:"Fluentia’s gamified learning approach keeps me hooked. It doesn’t feel like studying; it feels like an adventure into new cultures!"},
  ]

