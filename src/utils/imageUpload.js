import { supabase } from "../lib/supabase";

export const uploadImageToSupabase = async (file, imageType) => {
    if (!file) {
        console.error("No file provided for upload.");
        return null;
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    try {
        // Upload the image to Supabase Storage
        const { data, error } = await supabase.storage
            .from("face_uploads")
            .upload(filePath, file, { cacheControl: '3600', upsert: false });

        if (error) {
            console.error("Upload failed:", error);
            throw new Error(error.message);
        }

        // Get Public URL of the Uploaded Image
        const { data: publicUrlData } = supabase.storage
            .from("face_uploads")
            .getPublicUrl(filePath);

        const imageUrl = publicUrlData.publicUrl;

        // Save Metadata to Supabase Database
        const { data: dbData, error: dbError } = await supabase
            .from("face_upload_records")
            .insert([{ 
                image_url: imageUrl, 
                image_type: imageType,
                ai_status: "pending", // AI Processing is Pending
                face_data: null,
                compatibility_result: null,
                detected_faces: null
            }]);

        if (dbError) {
            console.error("Database save failed:", dbError);
            throw new Error(dbError.message);
        }

        return imageUrl;
    } catch (error) {
        console.error("Upload Error:", error);
        return null;
    }
};
