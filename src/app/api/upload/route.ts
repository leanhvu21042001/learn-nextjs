import { getImageUrl, uploadImage } from "@/lib/cloudinary";

export const POST = async (req: Request) => {
  try {
    const { image: base64String } = await req.json();
    const publicId = await uploadImage(base64String);
    const imageUrl = await getImageUrl(publicId);

    return new Response(imageUrl, { status: 200 });
  } catch (error) {
    console.error("Error uploading image:", error);
    return new Response(
      `Error uploading image: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        status: 500,
      }
    );
  }
};
