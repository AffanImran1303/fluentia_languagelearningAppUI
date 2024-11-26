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

  export type Plan = {
    name: string;
    planFor:string;
    price: string;
    features: string[];
    description: string;
  };
  
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
  