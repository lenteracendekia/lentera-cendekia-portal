// app/api/activities/route.ts
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const activitiesDir = path.join(process.cwd(), "public/images/activities");

  try {
    const files = await fs.readdir(activitiesDir);

    const imageFiles = files.filter((file) =>
      [".jpg", ".png", ".jpeg"].includes(path.extname(file).toLowerCase())
    );

    const imagePaths = imageFiles.map((file) => `/images/activities/${file}`);
    return NextResponse.json(imagePaths);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to read activities folder" },
      { status: 500 }
    );
  }
}
