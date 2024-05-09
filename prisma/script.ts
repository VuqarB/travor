import prisma from "./index";

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
    let destinations;

    if (limit) {
      destinations = await prisma.destination.findMany({
        take: limit,
      });
      return destinations;
    }

    destinations = await prisma.destination.findMany();
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
