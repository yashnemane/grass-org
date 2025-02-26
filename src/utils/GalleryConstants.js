import agriTech from '../assets/images/agri-tech.jpeg'
import farmerTraining from '../assets/images/farmer-training.jpeg'
import farmingWorkshop from '../assets/images/farming-workshop.jpg'

export const galleryData = [
    {
      id: 1,
      type: "image",
      category: "Events",
      src: agriTech,
      alt: "Event Image 1",
    },
    {
      id: 2,
      type: "image",
      category: "Training",
      src: farmerTraining,
      alt: "Training Image 1",
    },
    {
      id: 3,
      type: "video",
      category: "Workshops",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      alt: "Workshop Video 1",
    },
    {
      id: 4,
      type: "image",
      category: "Events",
      src: farmingWorkshop,
      alt: "Event Image 2",
    },
    {
      id: 5,
      type: "video",
      category: "Training",
      src: "https://www.youtube.com/embed/tgbNymZ7vqY",
      alt: "Training Video 2",
    },
  ];
  
  export const categories = ["All", "Events", "Training", "Workshops"];  