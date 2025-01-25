import { getTestimonyByName } from "@/lib/testimony";
import TestimonyDetailClient from "./client";

export default async function TestimonyDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const testimony = getTestimonyByName(id);

  return (
    <TestimonyDetailClient
      testimony={testimony.testimony}
      name={testimony.name}
      accepted_at={testimony.accepted_at}
    />
  );
}
