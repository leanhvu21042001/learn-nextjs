import {
  AdminAndResourceOptions,
  v2 as cloudinary,
  UploadApiOptions,
} from "cloudinary";

cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (
  imagePath: string,
  folder?: string
): Promise<string> => {
  try {
    const options: UploadApiOptions = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      folder: `lavdev/${folder || ""}`,
    };
    const result = await cloudinary.uploader.upload(imagePath, options);
    return result.public_id;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Error uploading image");
  }
};

export const getImageUrl = (publicId: string) => {
  try {
    return cloudinary.url(publicId, {
      secure: true,
    });
  } catch (error) {
    console.error("Error generating image URL:", error);
    throw new Error("Error generating image URL");
  }
};

export const getAssetInfo = async (publicId: string) => {
  try {
    const options: AdminAndResourceOptions = {
      colors: true,
    };
    const result = await cloudinary.api.resource(publicId, options);
    return result.colors;
  } catch (error) {
    console.error("Error fetching asset info:", error);
    throw new Error("Error fetching asset info");
  }
};

export const createImageTag = (publicId: string, ...colors: string[]) => {
  try {
    const [effectColor, backgroundColor] = colors;
    const imageTag = cloudinary.image(publicId, {
      transformation: [
        { width: 250, height: 250, gravity: "faces", crop: "thumb" },
        { radius: "max" },
        { effect: "outline:10", color: effectColor },
        { background: backgroundColor },
      ],
    });

    return imageTag;
  } catch (error) {
    console.error("Error creating image tag:", error);
    throw new Error("Error creating image tag");
  }
};
