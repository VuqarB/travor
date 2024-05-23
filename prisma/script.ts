import { randomUUID } from "crypto";
import prisma from ".";

export const createDestination = async () => {
  try {
    const destination = await prisma.destination.create({
      data: {
        title: "France",
        imgUrl: "/destination-8.jpg",
        location: "Paris, France",
        price: 110,
        averageRate: 4.2,
        DestinationDetails: {
          create: {
            title: "Brazil",
            desc: "Travor is one of the most popular Travel agency for those who want to explore the world and try to make adventure",
            trip: {
              desc: "Travor is one of the most popular Travel agency for those explore the world and try to make adventure as well as we can beautiful destination around the world and make you trip you explore the beautiful Maldives with great facilities Travor is one of the most popular Travel agency for those  explore the world and try to make adventure as we provide beautiful destination around the world and make you trip",
              imgUrl: "/destination-france-top-image.png",
            },
            about: {
              desc: "Travor is one of the most popular Travel agency for those explore the world and try to make adventure as well as we can beautiful destination around the world and make you trip you explore the beautiful Maldives with great facilities Travor is one of the most popular Travel agency for those  explore the world and try to make adventure as we provide beautiful destination around the world and make you trip",
              imgUrl: "/destination-about-image.png",
            },
            basicInfo: [
              {
                title: "Country",
                info: "French Republic",
              },
              {
                title: "Visa Requirements",
                info: "On Arrival Visa",
              },
              {
                title: "Language",
                info: "French",
              },
              {
                title: "Currency used",
                info: "Euro",
              },
              {
                title: "Area(km2)",
                info: "643,801 km2",
              },
            ],
            gallery: [
              "/image 1.jpg",
              "/image 2.jpg",
              "/image 3.jpg",
              "/image 4.jpg",
              "/image 5.jpg",
              "/image 6.jpg",
              "/image 7.jpg",
              "/image 8.jpg",
            ],
          },
        },
      },
      include: {
        DestinationDetails: true,
      },
    });

    return destination;
  } catch (error) {
    console.error("Error creating destination:", error);
    throw error; // Rethrow the error to handle it in the calling code
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after use
  }
};

export const getDestinations = async (limit?: number) => {
  try {
    const destinations = await prisma.destination.findMany({
      take: limit,
    });

    return destinations;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getDestinationDetails = async (id: string) => {
  try {
    const details = await prisma.destinationDetails.findUnique({
      where: {
        destinationId: id,
      },
      select: {
        title: true,
        desc: true,
        trip: true,
        about: true,
        basicInfo: true,
        gallery: true,
      },
    });

    return details;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const createTestimonal = async () => {
  try {
    const testimonal = await prisma.testimonal.create({
      data: {
        travelerText:
          "Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure as well as we can provide",
        travelerName: "Jhon Smith",
        travelerOccupation: "CEO, Singapore",
      },
    });

    return testimonal;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getTestimonals = async () => {
  try {
    const testimonals = await prisma.testimonal.findMany({
      select: {
        travelerName: true,
        travelerOccupation: true,
        travelerText: true,
      },
    });
    return testimonals;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const createTeamMember = async () => {
  try {
    const member = await prisma.team.create({
      data: {
        imgUrl: "/team-4.jpg",
        fullname: "Sara Smith",
        occupation: "Tour Eductor",
      },
    });
    return member;
  } catch (error) {
    console.error("Error fetching team members:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getTeam = async () => {
  try {
    const member = await prisma.team.findMany();
    return member;
  } catch (error) {
    console.error("Error fetching team members:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const createPackage = async () => {
  try {
    const packageItem = await prisma.package.create({
      data: {
        title: "Netherlands tour Package",
        duration: "5 Day 4 Night",
        imgUrl: "/package-7.jpg",
        price: 110,
        averageRate: 4.8,
        PackageDetails: {
          create: {
            desc: "Travor is one of the most popular Travel agency for those who want to explore the world and try to make adventure",
            explore: {
              desc: "Travor is one of the most popular Travel agency for those explore the wold and try to make adventure as well as we canbeautiful destination around the world and make you trip youexplore the beautiful Maldives with great facilities. Travor is one of the most popular Travel agency for those  explore the wold and try to make adventure as we provide beautiful destination around the world and make you trip",
              imgUrl: "/package-image-8-1.jpg",
            },
            packageDetails: {
              desc: "Travor is one of the most popular Travel agency for those explore the wold and try to make adventure as well as we can beautiful destination around the world and make you trip you explore the beautiful Maldives with great facilities",
              imgUrl: "/package-image-8-2.jpg",
              highlights: {
                desc: "Travor is one of the most popular Travel agency for those explore the wold and try to make adventure as well as we can beautiful destination around the world and make",
                list: [
                  "Visit most popular location of Roam city, Italy.",
                  "Buffet Breakfast for all traveler with good quality.",
                  "Expert guide always guide you and give informations.",
                  "Best Hotel for all also great food.",
                  "Helping all traveler for Money Exchange.",
                ],
              },
            },
            basicInfo: [
              {
                title: "Destination",
                info: "Netherland",
              },
              {
                title: "Departure",
                info: "New York Airport, USA",
              },
              {
                title: "Language",
                info: "Dutch",
              },
              {
                title: "Departure date",
                info: "January 3, 2023",
              },
              {
                title: "Return date",
                info: "January 6, 2023",
              },
              {
                title: "No. of Guide",
                info: "2 Persons",
              },
            ],
            services: {
              included: {
                text: "Travor is one of the most popular Travel agency for those explore the wold and try to make adventure as well as webeautiful destination around the world and make Air TicketLunch & DinnerAny kind of product purchesInsuranceAny kind of Ticket",
                list: [
                  "Hotel Fair",
                  "Transportation",
                  "Breakfast",
                  "Sightseeing",
                  "Travel Tax",
                ],
              },
              notIncluded: {
                text: "Travor is one of the most popular Travel agency for those explore the wold and try to make adventure as well as webeautiful destination around the world and make Air TicketLunch & DinnerAny kind of product purchesInsuranceAny kind of Ticket",
                list: ["WiFi", "Swimming", "GYM"],
              },
            },
            tourPlan: [
              {
                id: randomUUID(),
                title: "Day - 1",
                desc: "The Colosseum and the Arch of Constantine",
                imgUrl: "/tour-plan-image.png",
                planList: [
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                ],
              },
              {
                id: randomUUID(),
                title: "Day - 2",
                desc: "The Colosseum and the Arch of Constantine",
                imgUrl: "/tour-plan-image.png",
                planList: [
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                ],
              },
              {
                id: randomUUID(),
                title: "Day - 3",
                desc: "The Colosseum and the Arch of Constantine",
                imgUrl: "/tour-plan-image.png",
                planList: [
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                ],
              },
              {
                id: randomUUID(),
                title: "Day - 4",
                desc: "The Colosseum and the Arch of Constantine",
                imgUrl: "/tour-plan-image.png",
                planList: [
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                ],
              },
              {
                id: randomUUID(),
                title: "Day - 5",
                desc: "The Colosseum and the Arch of Constantine",
                imgUrl: "/tour-plan-image.png",
                planList: [
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                  {
                    id: randomUUID(),
                    item: "As the Eiffel Tower is to Paris, the silhouette of the",
                  },
                ],
              },
            ],
            gallery: [
              "/image 1.jpg",
              "/image 2.jpg",
              "/image 3.jpg",
              "/image 4.jpg",
              "/image 5.jpg",
              "/image 6.jpg",
              "/image 7.jpg",
              "/image 8.jpg",
            ],
          },
        },
      },
      include: {
        PackageDetails: true,
      },
    });

    return packageItem;
  } catch (error) {
    console.error("Error creating package:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getPackages = async (limit?: number, id?: string) => {
  try {
    if (id) {
      const packages = await prisma.package.findUnique({
        where: { id },
        include: { PackageDetails: true },
      });
      return packages;
    }

    const packages = await prisma.package.findMany({ take: limit });    
    return packages;
  } catch (error) {
    console.error("Error fetching packages:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
