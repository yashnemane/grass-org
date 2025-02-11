import susFarm from "../assets/images/sus-farming.jpg"
import organicFarming from "../assets/images/organic-farming.jpg"
import farmerEducation from "../assets/images/farmer-training.jpeg"

export const whatWeDoData = [
  {
    id: 1,
    title: "Sustainable Farming",
    description: "Promoting eco-friendly farming techniques for better yield and sustainability.",
    icon: susFarm,
    image: susFarm,
    shortDescription: "Eco-friendly farming techniques.",
    longDescription: "Promoting farming methods that are environmentally friendly, like reducing pesticide use and using organic fertilizers."
  },
  {
    id: 2,
    title: "Organic Crop Cultivation",
    description: "Encouraging the use of organic fertilizers and pesticides to enhance soil fertility.",
    icon: organicFarming,
    image: organicFarming,
    shortDescription: "Organic farming for better soil health.",
    longDescription: "Encouraging the use of organic techniques to promote soil fertility and reduce environmental impact."
  },
  {
    id: 3,
    title: "Farmer Education Programs",
    description: "Conducting workshops and training sessions to educate farmers on modern techniques.",
    icon: farmerEducation,
    image: farmerEducation,
    shortDescription: "Training programs for modern farming techniques.",
    longDescription: "Providing educational resources for farmers to learn new technologies and sustainable farming practices."
  }
];
  
  export const ctaButtons = [
    { id: 1, label: "Donate", action: "donate" },
    { id: 2, label: "Learn More", action: "learnMore" },
    { id: 3, label: "Contact Us", action: "contactUs" }
  ];
  