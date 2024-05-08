import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createDestination = async () => {
  try {
    const destination = await prisma.destination.create({
      data: {
        title: "Maldives",
        imgUrl: "/destination-1.jpg",
        location: "Nuda Penida, Maldives",
        href: "/",
        price: 110,
        averageRate: 4.8,
        DestinationDetails: {
          create: {
            title: "Beach Resort Details",
            subtitle: "Relax by the sea",
            trip: {
              duration: "3 days",
              activities: ["Swimming", "Sunbathing"],
            },
            about: {
              description: "Beautiful beachfront resort",
              facilities: ["Pool", "Spa"],
            },
            basicInfo: {
              accommodation: "Luxury villas",
              meals: "All-inclusive",
            },
            gallery: [
              "https://example.com/image1.jpg",
              "https://example.com/image2.jpg",
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
