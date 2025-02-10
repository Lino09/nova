
interface CloudinaryImage {
  asset_id: string;
  public_id: string;
  format: string;
  secure_url: string;
}

export async function getCloudinaryImages(folder?: string) {

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const cloudFolder = folder || process.env.CLOUDINARY_FOLDER;


  try {
    if (!cloudName || !apiKey || !apiSecret) {
      throw new Error("Faltan credenciales de Cloudinary en .env.local");
    }

    const url = ` https://api.cloudinary.com/v1_1/${cloudName}/resources/image?prefix=${cloudFolder}&type=upload`;
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

    const response = await fetch(url, {
      headers: { Authorization: `Basic ${auth}` },
    });

    const data = await response.json();


    return data.resources.map((img: CloudinaryImage) => img.secure_url);
  }
  catch {
    return 'Failed to fetch media'
  }
}
